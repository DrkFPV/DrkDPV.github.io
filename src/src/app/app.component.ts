import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  private title = 'MemoryGame';
  private loopCountMin=1;
  private loopCountMax=100000;
  private iterations:number=1;
  private strategies = ['Match In Order', 'Random', 'Smart Matching'];
  private boardSizes=['2x2','2x3','3x4','4x4',];
  private numCards:number;
  private bSize:string;
  private strategy:string;
  private gridData:GridData;
  private values:[number];
  private avg:number;
  private max:number;
  private min:number;
  private guessOrder; 
  @ViewChild('grid') grid;
  private chartData: any;
  private animationSpeed:number;

  
  ngOnInit(): void {
    this.animationSpeed = 200;
    this.bSize = this.boardSizes[0];
    this.strategy = this.strategies[0];
    this.gridData = this.GenerateGrid(parseInt(this.bSize.substring(0,1)),parseInt(this.bSize.substring(2,3)));
    this.BuildGridVisual(this.gridData)
    
  }

  constructor(){
    
  }

  GenerateGrid(sizeX:number,sizeY:number){ 
    this.numCards = sizeX*sizeY
    let values = Array.from(Array(this.numCards/2).keys());
    this.gridData = {size:this.numCards ,values:this.ShuffleArray(values.concat(values)),width:sizeX,height:sizeY,widthPx:400,heightPx:900}
    return this.gridData
  }
  
  BuildGridVisual(gridData:GridData){
  let cells:GridCell[] = []
  let index = 0
  for (let i=0; i<this.gridData.width; i++){
    for (let j=0; j<this.gridData.height; j++){
      cells.push({posX:j, posY:i, index:index})
      index++
    }
  }
    this.gridData.gridCells = cells;
    this.gridData.pickOrder = this.guessOrder;
    this.gridData.animationSpeed = this.animationSpeed;
    this.chartData = this.gridData;
  }
  
  ShuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
  }

Execute(e){
    this.gridData = this.GenerateGrid(parseInt(this.bSize.substring(0,1)),parseInt(this.bSize.substring(2,3)));
    this.BatchExecuteStrategy(this.iterations,this.strategy)
  }
  
  //MatchInOrder in pairs starting 0,1 0,2 0,3 ect
  MatchInOrder(){
    let orderOfGuesses = [];
    let guessLocations = this.gridData.values;
    for (let i=0; i<= guessLocations.length-1 ; i++){
        for (let j=0; j<= guessLocations.length-1 ; j++){
            let sorted_I_J = [i,j].sort((a,b)=>a-b)
            if (i!==j && !this.TestPairInArray(orderOfGuesses,sorted_I_J)){
                orderOfGuesses.push(sorted_I_J)
            }
        }
    }
    return orderOfGuesses
  }
  
  //match with least tested matches, 0,1 2,3 4,5 ect
  SmartMatch(){
    let orderOfGuesses = []
  
    //build object to store number of guesses per slot
    let cardDeck = []
    for (let i=0; i<this.numCards ; i++){
        cardDeck.push({number:i,guessedNum:0})
    }
  
    //pick 2 numbers with lowest number of guesses
    let fullySorted=false;
    let totalGuesses = (Math.pow(this.numCards-1,2)+this.numCards-1)/2
    while (!fullySorted){
        if (cardDeck[0].guessedNum>=15){
            cardDeck.shift();
            continue;
        }
        let selectionOne=cardDeck.shift()
        let selectionTwoIndex=cardDeck.findIndex(e=>{
            return !this.TestPairInArray(orderOfGuesses,[selectionOne.number,e.number].sort((a,b)=>a-b))
        })
        let selectionTwo=cardDeck.splice(selectionTwoIndex,1)[0]
        selectionOne.guessedNum++
        selectionTwo.guessedNum++
        orderOfGuesses.push([selectionOne.number,selectionTwo.number].sort((a,b)=>a-b))
        cardDeck.push(selectionOne)
        cardDeck.push(selectionTwo)
  
        //console.log(orderOfGuesses)
        if (orderOfGuesses.length >= totalGuesses){
            fullySorted=true
        } 
    }
    return orderOfGuesses
  }
  
  ExecuteStrategy(guessOrder,grid){
    let guessCount = 0
    let pairsMatched =0
    let shuffledValues = grid.values
    for (let guess of guessOrder){
        guessCount++
        if (shuffledValues[guess[0]] == shuffledValues[guess[1]]){
            //console.log('Match found at ' + guess[0].toString() + ' ' +  guess[1].toString())
            pairsMatched++
        }
        if(pairsMatched>=grid.size/2){
            //console.log('All pairs found after ' + guessCount + ' guesses')
            return guessCount
        }
    }
    console.log('um. somting wong')
  }
  
  BatchExecuteStrategy(numberOfRouds,strategy){ 
    let orderOfGuesses;
    if (strategy=='Match In Order'){
        orderOfGuesses = this.MatchInOrder()
    } else if(strategy == 'Random'){
        orderOfGuesses = this.ShuffleArray(this.MatchInOrder())
    } else if(strategy == 'Smart Matching'){
        orderOfGuesses = this.SmartMatch()
    }
  
    let numberOfguesses=[]
    for(let i=0; i<numberOfRouds; i++){
        let grid = this.GenerateGrid(parseInt(this.bSize.substring(0,1)),parseInt(this.bSize.substring(2,3)))
        this.guessOrder=orderOfGuesses;
        let countGuesses = this.ExecuteStrategy(orderOfGuesses,grid)
        numberOfguesses.push(countGuesses)
        if(strategy == "Random"){
          orderOfGuesses = this.ShuffleArray(orderOfGuesses)
        }
    }

    this.BuildGridVisual(this.gridData);
    this.avg = numberOfguesses.reduce((a,b) => a + b, 0) / numberOfguesses.length
    this.max = Math.max(...numberOfguesses)
    this.min = Math.min(...numberOfguesses)
  }
  
  //test if a pair is already in the array
  TestPairInArray(array,pair){
    return array.some(e=>e[0]==pair[0] && e[1]==pair[1])
  }


}

export interface GridData{
  size:number,
  values:any,
  width:number,
  height:number
  widthPx?:number,
  heightPx?:number,
  gridCells?:GridCell[]
  pickOrder?:[number,number][],
  animationSpeed?:number
}

//grid starting from 0,0 top left to x/x bottom right
export interface GridCell{
  value?:number,
  index?:number,
  posX?:number,
  posY?:number
}