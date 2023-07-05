import React from 'react'
import Header from '../Components/Header'
import ModelPage from '../Components/ModelPage'

const Model3 = () => {
  return (
    <div>
      <Header/>
      <ModelPage class="model3" name="Model 3" description="Demo Drive" button1="Explore Inventory" button2="Custom Order" range="333mi" time="3.1s" price="$32,740†"/>
    </div>
  )
}

export default Model3