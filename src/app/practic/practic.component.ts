import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartsModule } from 'ng2-charts';


@Component({
  selector: 'app-practic',
  templateUrl: './practic.component.html',
  styleUrls: ['./practic.component.css']
})
export class PracticComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;


  points:[{x:number,y:number}] = [{x:1,y:1}];
  X:number;
  fX:number;
  isSolve:boolean = false;

  mode:string = 'Лагранжа';

  public lineChartData: Array<number> = [ ];


  public labelMFL: Array<any> = [
      { 
        data: this.lineChartData,
        label: 'Функция',
      }
  ];

  

   public lineChartLabels: Array<any> = [ ];




  constructor() { }

  public lineChartOptions: any = {
    responsive: true,
     annotations: [{
            type: 'line',
            mode: 'vertical',
            scaleID: 'x-axis-0',
            value: 3, // <---
            borderColor: 'green',
            borderWidth: 10
        }],
  };

  // array colori grafico
  public lineChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  public lineChartType = 'line';

  public chartClicked(e: any): void {
    console.log(e);
  }
  public chartHovered(e: any): void {
    console.log(e);
  }


  ngOnInit() {
  }
  addPoint(){
    this.points.push({x:1,y:1});
    console.log(this.points);
  }
  deletePoint(){
    this.points.pop();
    console.log(this.points);
  }
  
  getSolve(){
    this.fX = null;
    console.log(this.mode);
    for(let i=0;i<this.points.length-1;i++){
      let min = this.points[i], ind = i;
      for(let j=i+1;j<this.points.length;j++)
      {
        if(this.points[j].x<min.x){
          min = this.points[j];
          ind = j;
        }
      }
      this.points[ind] = this.points[i];
      this.points[i] = min;
  }

    switch(this.mode){
      case "Лагранжа": this.Lagrange(); break;
      case "Ньютона": this.Newtoon(); break;
      case "Кубических сплайнов": this.CubSpline(); break;
      case "Рациональная": this.Razional(); break;
    }
      
    this.buildChart();
  }

  Lagrange(){
    this.fX = 0;
    for(let i=0; i<this.points.length;i++){
      var mult = 1;
      for(let j=0; j<this.points.length;j++)
        if(j!=i) mult*=(this.X - this.points[j].x)/(this.points[i].x-this.points[j].x);
      this.fX+=this.points[i].y*mult;
    }   
  }

  Newtoon(){
    this.fX = 0;
    var mult = 1;
    for(let i=0; i<this.points.length;i++){
      this.fX += mult*this.razdRazn(this.points.slice(0,i+1));
      mult*=this.X-this.points[i].x;
    }
  }

  razdRazn(mas:{x:number,y:number}[]){
    console.log(mas);
    if(mas.length>=2){
    var last = mas.length-1, first = 0;
    if(mas.length==2) return (mas[last].y-mas[first].y)/(mas[last].x-mas[first].x);
    
    var v1 = [], v2 = [];
    for(let i=0;i<mas.length;i++){
      if(i==0) v2.push(mas[i]);
      else if(i==last) v1.push(mas[i]);
      else{
        v1.push(mas[i]);
        v2.push(mas[i]);
      }
    }
    return (this.razdRazn(v1)-this.razdRazn(v2))/(mas[last].x-mas[first].x);
    }
    else return this.points[0].y;
  }

  CubSpline(){
    this.fX = 0;
    let n = this.points.length;
    let splines:{a:number,b:number,c:number,d:number,x:number}[] = [];
    for (let i = 0; i < n; ++i) splines.push({a:0,b:0,c:0,d:0,x:0});

    for (let i = 0; i < n; ++i)
        {
            splines[i].x = this.points[i].x;
            splines[i].a = this.points[i].y;
        }
    splines[0].c = splines[n - 1].c = 0.0;

    let alpha:number[] = [], beta:number[] = [];
    alpha[0] = beta[0] = 0.0;

    for (let i = 1; i < n - 1; ++i)
    {
        let hi  = this.points[i].x - this.points[i-1].x;
        let hi1 = this.points[i+1].x- this.points[i].x;
        let A = hi;
        let C = 2.0 * (hi + hi1);
        let B = hi1;
        let F = 6.0 * ((this.points[i+1].y - this.points[i].y) / hi1 - (this.points[i].y - this.points[i-1].y) / hi);
        let z = (A * alpha[i - 1] + C);
        alpha[i] = -B / z;
        beta[i] = (F - A * beta[i - 1]) / z;
    }

    for (let i = n - 2; i > 0; --i)
        {
            splines[i].c = alpha[i] * splines[i + 1].c + beta[i];
        }
    
        for (let i = n - 1; i > 0; --i)
        {
            let hi = this.points[i].x - this.points[i-1].x;
            splines[i].d = (splines[i].c - splines[i - 1].c) / hi;
            splines[i].b = hi * (2.0 * splines[i].c + splines[i - 1].c) / 6.0 + ( this.points[i].y -  this.points[i-1].y) / hi;
        }

        let s:{a:number,b:number,c:number,d:number,x:number};

        if (this.X <= splines[0].x) // Если x меньше точки сетки x[0] - пользуемся первым эл-тов массива
        {
            s = splines[0];
        }
        else if (this.X >= splines[n - 1].x) // Если x больше точки сетки x[n - 1] - пользуемся последним эл-том массива
        {
            s = splines[n - 1];
        }
        else{
          let i = 0;
          let j = n - 1;
          while (i + 1 < j)
          {
              let k = i + (j - i) / 2;
              if (this.X<= splines[k].x)
              {
                  j = k;
              }
              else
              {
                  i = k;
              }
          }
          s = splines[j];
        }
        let dx = this.X - s.x;
        this.fX = s.a + (s.b + (s.c / 2.0 + s.d * dx / 6.0) * dx) * dx;

  }



  


  Razional(){
    this.fX = 0;
    var mult = 1;
    for(let i=0; i<this.points.length;i++){
      this.fX += mult/this.obrRazdRazn(this.points.slice(0,i+1));
      mult*=this.X-this.points[i].x;
    }
  }

  obrRazdRazn(mas:{x:number,y:number}[]){
    console.log(mas);
    if(mas.length>=2){
    var last = mas.length-1, first = 0;
    if(mas.length==2) return (mas[last].x-mas[first].x)/(mas[last].y-mas[first].y);
    
    var v1 = [], v2 = [];
    for(let i=0;i<mas.length;i++){
      if(i==0) v2.push(mas[i]);
      else if(i==last) v1.push(mas[i]);
      else{
        v1.push(mas[i]);
        v2.push(mas[i]);
      }
    }
    return (mas[last].x-mas[first].x)/(this.razdRazn(v1)-this.razdRazn(v2));
    }
    else return this.points[0].y;
  }




 buildChart(){
  this.lineChartData = [];
  this.lineChartLabels = [];



  this.isSolve = true;
  for(let p of this.points){
    this.lineChartLabels.push(p.x);
    this.lineChartData.push(p.y);
  }


  setTimeout(()=>{
       this.labelMFL = [
         {data: this.lineChartData,
        label:'Функция'}
       ];
  },100);
   

 }

}
