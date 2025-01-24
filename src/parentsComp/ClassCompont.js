import React, { Component } from 'react'

export default class ClassCompont extends Component {
  render() {
    return (
      <div>
        <h4>Class Component...</h4>
        <p>{this.props.name}</p>
      </div>
    )
  }
}
