import React, { Component } from 'react'

export default class StateMangWithCC extends Component {
    constructor(){
        super()
        this.state={
            message: "Welcome Visitor"
        }
    }
    changeMessage(){
        this.setState( {message:"Thanks for Subscribing..."})
    }
  render() {
    return (
      <div>
         <h4>Subscribe CC: {this.state.message}</h4>

<button onClick={()=> this.changeMessage()}>Click to Subscribe</button>
{/* <button onClick={this.changeMessage.bind(this)}>Click now to Subscribe</button> */}
      </div>
    )
  }
}
