import { useState } from 'react'
import './App.css'
import Header from './Header'
import Counter from './Counter'

// Code by Nick Sandberg 06/25/24
// function Header() {
//   return(
//   <h1>Simple React Application That Is Totally Crazy</h1>
//   )
// }

function Content(props) {
  return (<p style={{color: props.color}}>{props.text}</p>)
}

function Footer() {
  return (<h1>Created by me, of course.</h1>)
}

function App() {
  const [count, setCount] = useState(1)

  return (
    <>
      <Header />
      <Content color="blue" text="This is my first React Application!" />
      <Content color="orange" text="Wish me luck..." />
      <Content color="green" text="I think I've got it!" />
      <Counter />
      <Footer />
    </>
  )
}

export default App
