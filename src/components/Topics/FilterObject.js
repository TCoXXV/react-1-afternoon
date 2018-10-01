import React, { Component } from 'react';

export default class FilterObjects extends Component {
    constructor(){
        super();
        this.state = {
            unFilteredArray: [
                {
                  name: 'Jimmy Joe',
                  title: 'Hack0r',
                  age: 12,
                },
                {
                  name: 'Jeremy Schrader',
                  age: 24,
                  hairColor: 'brown'
                },
                {
                  name: 'Carly Armstrong',
                  title: 'CEO',
                }
              ],
              
            userInput: '',
            filteredArray: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.filterArray = this.filterArray.bind(this);

    }

    handleChange(val){
        this.setState({ userInput: val });
    }
    filterArray(prop){
        var employees = this.state.unFilteredArray;
        var filteredArray = [];
        for(let i = 0;i<employees.length;i++){
            if(employees[i].hasOwnProperty(prop)){
                filteredArray.push(employees[i]);
            }
        }
        this.setState({filteredArray});
    }

    render() {
        const {userInput, unFilteredArray, filteredArray} = this.state;

        return (
            <div className='puzzleBox filterObjectPB'>
            <h4>Filter Object</h4>
            <span className="puzzleText">Original:
            { JSON.stringify(this.state.unFilteredArray) }
            </span>
            <input 
                onChange={ (e)=>this.handleChange(e.target.value)}
                className="inputLine" 
                type="text"/>
            <button onClick={()=> this.filterArray(this.state.userInput)}
                className="confirmationButton">Filter
            </button>
            <span className="resultsBox filterObjectRB">Filtered:
            { JSON.stringify(this.state.filteredArray) }
            </span>
            </div>
        )
    }
}
