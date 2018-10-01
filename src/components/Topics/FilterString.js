import React, { Component } from 'react';

export default class FilterString extends Component {
    constructor(){
        super();
        this.state = {
            unfilteredArray: [
                'James ', 'Jessica ','Micky ','Tom ','Blake '
            ],
            userInput: '',
            filteredArray: []
        }
            this.updateUserInput = this.updateUserInput.bind(this);
            this.filteredArr = this.filteredArr.bind(this);
    }

    updateUserInput(event){
        // console.log(event);
        this.setState({ userInput: event.target.value})
    }

    filteredArr(userInput){
        let names = this.state.unfilteredArray;
        let filteredArray = [];
        for(let i = 0; i<names.length;i++){
            if(names[i].includes(userInput)){
                filteredArray.push(names[i]);
            }
        }
        this.setState({filteredArray});
    }



    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Names: {this.state.unfilteredArray}</span>
                <input onChange={this.updateUserInput} className="inputLine"
                    type="text"/>
                <button 
                onClick={()=> this.filteredArr(this.state.userInput)}className="confirmationButton">Filter</button>
                <span className="resultsBox filterStringRB">Filtered Names: {this.state.filteredArray}</span>

            </div>
        )
    }
}