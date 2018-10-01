import React, { Component } from 'react';

export default class Palindrome extends Component {
    constructor(){
        super();
        this.state = {
            userInput: "",
            palindrome: ""
        }
        this.updateInput = this.updateInput.bind(this);
        this.checkIfPalindrome = this.checkIfPalindrome.bind(this);
    }

    updateInput(e){
        this.setState({userInput: e.target.value})
    }

    checkIfPalindrome(userInput){
        let forward = userInput;
        let backward = userInput;

        backward = backward.split('');
        backward = backward.reverse();
        backward = backward.join('');

        if(forward===backward){
            this.setState({palindrome: 'True'});
        } else {this.setState({palindrome: 'False'});};
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input onChange={this.updateInput}
                    className="inputLine" type="text"/>
                <button onClick={()=>this.checkIfPalindrome(this.state.userInput)}
                    className="confirmationButton">Check</button>
                <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}