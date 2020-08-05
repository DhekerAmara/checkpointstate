import React, { Component } from "react";

export default class Person extends Component {
  constructor() {
    super();
    this.state = {
      fullname: "Dheker AMARA",
      bio: "Mechatronics Engineer",
      profession: "PROJECT MANAGER",
      show: true,
      count:0
    };
  }
  changeVisibility() {
    this.setState({
      show: !this.state.show,
    });
  }
  componentDidMount(){ 
      setInterval(() => {
        this.setState ({
            count : this.state.count+1
        })
      }, 1000);
  }
  render() {
    return (
      <div>
    <p>  {this.state.count} </p>
        <button onClick={() => this.changeVisibility()}>show/hide</button>
      { this.state.show ? <div>
        <h1> {this.state.fullname} </h1>
        <h2> {this.state.bio} </h2>
        <h2> {this.state.profession} </h2>
        <p> {this.state.show} </p>
        <img
          style={{ height: "318px", width: "318px" }}
          src="/imgSrc.jpg"
          alt="appareil"
        />
        </div> : null}
      </div>
    );
  }
}
