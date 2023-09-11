import React from 'react'

const CarChildVariable = (values) => {
    console.log(values);
  return (
    <>
        <h1>My car brand is {values.brand} </h1>
        <h1>My car color is {values.color} </h1>
    </>
  )
}

export default CarChildVariable