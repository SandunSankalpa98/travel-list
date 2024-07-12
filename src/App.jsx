import React from 'react'
import Form from './assets/Components/Form'
import Logo from './assets/Components/Logo'
import PackingList from './assets/Components/PackingList'
import Stats from './assets/Components/Stats'

// const initialItems = [
//   {id:1, description: "Passports", quantity: 2, packed: false},
//   {id:2, description: "Socks", quantity: 12, packed: false},
// ];

function App() {
  return (
    <div className='app'>
      <Logo/>
      <Form/>
      <PackingList/>
      <Stats/>
    </div>
  )
}

export default App
