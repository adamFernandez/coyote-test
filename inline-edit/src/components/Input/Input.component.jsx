import React from 'react'
// import { useState } from "react"
const Input = ({  placeHolder, onChange, onSubmit }) => {
  
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" id="fishyInput" placeholder={placeHolder}  onChange={onChange} autoFocus />
      </form>
    </div>
  )
}

export default Input