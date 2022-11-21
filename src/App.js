import React from "react";
import './App.css';
import PersonFunctional from "./components/PersonFunctional/PersonFunctional"
import PersonalClass from "./components/PersonalClass/PersonalClass"

const persons = [
  {
    name: "Messi",
    Surname: "Messito",
    Age: 2
  },
  {
    name: "cr7",
    Surname: "SIIIIU",
    Age: 2
  },
  {
    name: "haaland",
    Surname: "Haalandsen",
    Age: 2
  },
];

  function App() {
    return (
      <div className="App">
      {/* SIN REUTILIZAR COMPONENTES: */}

      {/*}<h1>Welcome {persons[0].name} {persons[0].Surname} {persons[0].Age}</h1>
      <h1>Welcome {persons[1].name} {persons[1].Surname} {persons[1].Age}</h1>
    <h1>Welcome {persons[2].name} {persons[2].Surname} {persons[2].Age}</h1>{*/}

    {/* REUTILIZANDO COMPONENTES: */}

      <PersonFunctional persons = {persons[0]}/>
      <PersonFunctional persons = {persons[1]}/>
      <PersonFunctional persons = {persons[2]}/>
      <PersonalClass persons = {persons[0]}/>
      <PersonalClass persons = {persons[1]}/>
      <PersonalClass persons = {persons[2]}/>
      </div>
    );

  }
 


export default App;
