import React from 'react'
import Header from '../Components/Header'
import ModelPage from '../Components/ModelPage'

const ModelS = () => {
  return (
    <div>
      <Header/>
      <ModelPage class="modelS" name="Model S" description="Explore Inventory" button1="Order Now" button2="Demo Drive" range="396mi" time="1.99s" speed="200mph" power="1020hp" disclaimer="Specs displayed are Model S Plaid values."/>
    </div>
  )
}

export default ModelS