import React from 'react'
import CarChild from './CarChildVariable'

const GarageParentVariable = () => {
  return (
    <>
        <h1> This is the Garage Parent Variable File</h1>
        <CarChild brand="Ford" color="green"/>
        <CarChild brand="Tata" color="Blue"/>
    </>
  )
}

export default GarageParentVariable