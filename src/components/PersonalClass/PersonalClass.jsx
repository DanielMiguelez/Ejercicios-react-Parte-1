import React, { Component } from "react";

export class PersonalClass extends Component {
    render() {
      const person= this.props.persons
      return (
        <div>
          <h1>
            Welcome {person.name} {person.Surname} {person.Age}
          </h1>
        </div>
      );
    }
  }



export default PersonalClass