import React, { Component } from 'react';

export default class Sum extends Component {
    constructor(){
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
        this.updateNum1=this.updateNum1.bind(this);
        this.updateNum2=this.updateNum2.bind(this);
        this.adding=this.adding.bind(this);
    }

    updateNum1(e){ this.setState({number1: parseInt(e.target.value)})}

    updateNum2(e){ this.setState({number2: parseInt( e.target.value)})}

    adding(num1,num2){
        this.setState({ sum: num1 + num2 });
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input onChange={this.updateNum1}className="inputLine" type="number"/>
                <input onChange={this.updateNum2}className="inputLine" type="number"/>
                <button onClick={()=>this.adding(this.state.number1,this.state.number2)}
                className="confirmationButton">Add</button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )
    }
}