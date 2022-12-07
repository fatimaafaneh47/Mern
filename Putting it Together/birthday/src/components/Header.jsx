
import React, { Component } from 'react'

export class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            counter:this.props.age
        }
    }
  render() {
    return (
      <div>
        <h1>{this.props.fname},{this.props.lname}</h1>
        <p>Age: {this.state.counter}</p>
        <p>hair color: {this.props.haircolor}</p>
        <button onClick={()=>{this.setState({counter:this.state.counter+1})}}>Birthday Button for{this.props.lname} {this.props.fname}</button>
      </div>
    )
  }
}

export default Header
