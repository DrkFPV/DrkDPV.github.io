import { Component, OnInit, ViewEncapsulation, Input, ViewChild, ElementRef, OnChanges } from '@angular/core';
import * as d3 from 'd3';
import { GridData, GridCell } from '../app.component';
import { on } from 'process';

@Component({
  selector: 'app-grid',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, OnChanges{
  @ViewChild('chart') private chartContainer: ElementRef;
  @Input() private data: GridData;
  private margin: any = { top: 20, bottom: 20, left: 20, right: 20};
  private chart: any;
  private width: number;
  private height: number;
  private gridCells:any;
  private textForCells:any;
  private svg;
  private animationSpeed:number;
  private animating:boolean;
  private partyModeToggle:Boolean = false;
  private superPartyModeToggle:boolean = false;

  constructor() { 
    this.animationSpeed = 100
  }

  ngOnInit() {
    this.createGrid();
    if (this.data) {
      this.updateChart();
    }
  }

  ngOnChanges() {
    if (this.chart) {
      this.updateChart();
    }
  }

  createGrid() {
    
    const element = this.chartContainer.nativeElement;
    this.width = element.offsetWidth - this.margin.left - this.margin.right;
    this.height = element.offsetHeight - this.margin.top - this.margin.bottom;
    this.svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);

    // chart plot area
    this.chart = this.svg.append('g')
      .attr('class','grid')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`)

    
    this.gridCells = this.svg.selectAll('rect')
      .data(this.data.gridCells)
      .enter()
      .append('rect')
      .attr('x',x=>x.posX*40)
      .attr('y',y=>y.posY*40)
      .attr('width',40)
      .attr('height',40)
      .attr('fill','white')
      .attr('stroke','black')
      .attr('stroke-width',2)
      .attr('index',i=>i.index);

    this.textForCells = this.svg.selectAll('text')
    .data(this.data.gridCells)
    .enter()
    .append('text')
    .attr('x',x=>x.posX*40+3)
    .attr('y',y=>y.posY*40+10)
    .text(i=>i.index)
    .attr("font-family", "sans-serif")
    .attr("font-size", "10px")
    .attr("fill", "black");
  }

  updateChart() {
    this.gridCells =  this.svg.selectAll('rect')
      .data([]).exit().remove()

    this.textForCells = this.svg.selectAll('text')
    .data([]).exit().remove()

    this.gridCells =  this.svg.selectAll('rect')
    .data(this.data.gridCells)

    this.gridCells = this.gridCells
      .enter()
      .append('rect')
      .attr('x',x=>x.posX*40)
      .attr('y',y=>y.posY*40)
      .attr('width',40)
      .attr('height',40)
      .attr('fill','white')
      .attr('stroke','black')
      .attr('stroke-width',2)
      .attr('index',i=>i.index)

    this.textForCells = this.svg.selectAll('text')
    .data(this.data.gridCells)
    .enter()
    .append('text')
    .attr('x',x=>x.posX*40+3)
    .attr('y',y=>y.posY*40+10)
    .text(i=>i.index)
    .attr("font-family", "sans-serif")
    .attr("font-size", "10px")
    .attr("fill", "black");

    
    
    if(this.data.pickOrder){
      this.animationSpeed = this.data.animationSpeed;
      this.animateGuesses()
    }
  }

  lightUpCell(cells:number[],animationIndex:number){
    let t = d3.transition().duration(this.animationSpeed).delay(animationIndex*this.animationSpeed).ease(d3.easeLinear);
    d3.selectAll('rect')
      .filter((d,i)=>cells[0]==i || i==cells[1])
      .transition(t)
      .attr('fill','red')
      .transition()
      .attr('fill','white');

    console.log(animationIndex,this.data.pickOrder.length)
    if (animationIndex==this.data.pickOrder.length-1 && this.animating==false){
      
      for (let i=0; i<this.data.pickOrder.length; i++){
        this.lightUpCell(this.data.pickOrder[i],i)
      }
    }
  }

  animateGuesses(){
    if (this.data.pickOrder){
      for (let j=0; j<this.data.pickOrder.length; j++){        
        let t = d3.transition().duration(this.animationSpeed).delay(j*this.animationSpeed*2).ease(d3.easeLinear);
        d3.selectAll('rect')
          .filter((d,i)=>this.data.pickOrder[j][0]==i || i==this.data.pickOrder[j][1])
          .transition(t)
          .attr('fill',(d,i)=>'purple')
          //.attr('fill',(d,i)=>{return j % 2==0 ? 'red': 'blue'})
          .transition()
          .attr('fill','white')

        
      }
    }
  }

  PartyMode(){
    if (!this.partyModeToggle){
      this.partyModeToggle = true;
      this.PartyModeOn()
    } else {
      this.partyModeToggle=false;
      d3.selectAll('rect')
        .attr('fill','white')
        .interrupt();
    }

  }
  PartyModeOn(){
    let t = d3.transition().duration(this.animationSpeed).ease(d3.easeLinear);
    d3.selectAll('rect')
      .filter((d,i)=> Math.random()>=0.2)
      .transition(t)
      .attr('fill',(d,i)=>"hsl(" + Math.random() * 360 + ",100%,50%)")
      .on("end",()=>this.PartyModeOn())
  }

  SuperPartyMode(){
    if (!this.superPartyModeToggle){
      this.superPartyModeToggle = true;
      this.SuperPartyModeOn()
    } else {
      this.superPartyModeToggle=false;

    }    
  }

  SuperPartyModeOn(){
    let t = d3.transition().duration(this.animationSpeed).ease(d3.easeLinear);
    d3.selectAll('rect')
      .transition(t)
      .attr('fill',(d,i)=>"hsl(" + Math.random() * 360 + ",100%,50%)")
      .attr("transform",()=>"translate("+Math.floor(Math.random()*10)+","+Math.floor(Math.random()*10)+")")
      //.attr('x',(d,i)=>Math.floor(Math.random()*this.data.width*40))
      //.attr('y',(d,i)=>Math.floor(Math.random()*this.data.height*40))
      .on("end",()=>this.SuperPartyModeOn())
    d3.selectAll('text')
    .transition(t)
    .attr("font-size", ()=>Math.floor(Math.random()*40)+"px")
  }
}

