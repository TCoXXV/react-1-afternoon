import React, { Component } from 'react';

export default class EvenAndOdd extends Component{
 constructor(){
     super();
     this.state ={
         evenArray: [],
         oddArray: [],
         userInput: '',
     }
     this.addUserInput = this.addUserInput.bind(this);
     this.updateEvenOdd = this.updateEvenOdd.bind(this);
     this.enterPress = this.enterPress.bind(this);
    }

    
    addUserInput(event){
        this.setState({ userInput: event.target.value })
    }


    enterPress(event){
        var code = (event.keyCode ? event.keyCode : event.which);
        console.log(code);
        if (code == 13) { 
            this.updateEvenOdd();
        }
    }
    

    updateEvenOdd(){
        let evenArray =[];
        let oddArray = [];
        for (let i = 0; i < this.state.userInput.length;i++){
           let number = parseInt(this.state.userInput.charAt(i))
            if(number%2===0){
                evenArray.push(number);
            }
            else {
                oddArray.push(number);
            }
        }
        this.setState({ evenArray, oddArray})
    }
    

    render(){
       const {evenArray, oddArray, userInput} = this.state;
       
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input value={userInput} onChange={this.addUserInput} onKeyPress={this.enterPress} className="inputLine" type="text"></input>
                <button onClick={this.updateEvenOdd} className="confirmationButton">Split</button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>               
            </div>
        )
    }}
