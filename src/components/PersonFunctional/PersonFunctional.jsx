import React from 'react'

const PersonFunctional = (props) => {
    console.log(props)
  return (
    <span>Welcome {props.persons.name} {props.persons.Surname} {props.persons.Age}</span>
  )
}

export default PersonFunctional