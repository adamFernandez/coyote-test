import React from 'react'
import { useState } from "react"
import { FaTimesCircle, FaCheck }  from 'react-icons/fa'
import { CircleLoader } from 'react-spinners'

import Input from '../Input/Input.component'

const HelloTag = ( { text, showInput, setShowInput } ) => { 
  const [inputValue, setInputValue] = useState('')
  const [showMessage, setShowMessage] = useState(false)
  const [message, setMessage] = useState('')
  const [showIcon, setShowIcon] = useState(false)
  const [tagText, setTagText] = useState(text)
  const [showCorrectIcon, setShowCorrectIcon] = useState(false)
  
  
  const onSubmit = (e) =>{

      e.preventDefault()
       
      if(inputValue !== 'Thanks for all the fish' || !inputValue){
        setShowInput(showInput = false)
        setMessage('Oops! Something has gone terribly wrong!  ')
        setShowMessage(true)
        setShowIcon(true)
      } else {
        setShowInput(showInput = false) 
        setTagText('Thanks for all the fish  ')
        setShowCorrectIcon(true)
        
        setTimeout(() => {
          setShowCorrectIcon(false)
        }, 3000)
        
      }    
  }

  const showHello = () => {
    setShowInput(showInput = false)
    setShowMessage(false)
    setShowIcon(false)
    setTagText('Hello World')
    
  }
  return (
    <div>
      <h3 onClick={() => setShowInput(showInput = true)}>{showInput ? 
                  <Input placeHolder='Write Something' 
                          onSubmit={onSubmit} 
                          onChange={(e) => setInputValue(e.target.value)} /> 
                    : tagText } 
                      {showCorrectIcon && <FaCheck className="faIcon" color="green" />} 
      </h3>
      <p>{showMessage && message } 
        {showIcon && <FaTimesCircle className="faIcon" size="20" onClick={showHello} />}
      </p>
    </div>
  )
}

export default HelloTag
