import * as React from 'react'

interface Props {
  label: string
}

export const Box = (props: Props) => {
  return (
    <div>
      {props.label} HOLA FABIAN
    </div>
  )
}
