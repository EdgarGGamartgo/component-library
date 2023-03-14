import * as React from 'react'

interface Props {
  handleClick: () => {}
  label: ''
}

const buttonStyle = {
  padding: '10px 20px'
}

export const Button = (props: Props) => {
  return (
    <button
      className='btn btn-default'
      style={buttonStyle}
      onClick={props.handleClick}
    >
      {props.label} TEST 2
    </button>
  )
}
