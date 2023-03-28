import * as React from 'react'

interface Props {
  label?: string;
  styles?: Record<string, string>;
}

export const Paragraph = (props: Props) => {
  return (
    <p style={props.styles}>
      {props?.label || 'Hello paragraph'}
    </p>
  )
}
