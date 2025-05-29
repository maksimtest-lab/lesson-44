// import { useState } from 'react';
import Counter from "./Counter";
import Greeting from "./Greeting";
import { Tasks } from "./tasks/Tasks";

function App() {

  return (
    <>
      <Tasks />
      <Counter />
      <Greeting name="Maks" age={32} email="test@test.com" onClick={() => console.log("Hello")}>
        <p>Children</p>
        <p>Some children</p>
      </Greeting>
      <Greeting name="Maks" age={310} email="test@test.com" />
    </>
  )
}

export default App
