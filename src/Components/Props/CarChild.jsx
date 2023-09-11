import React from 'react'

const CarChild = (props) => {
    console.log(props);
  return (
    <>
        <h1>My car brand is {props.brand} </h1>
        <h1>My car color is {props.color} </h1>
    </>
  )
}

export default CarChild