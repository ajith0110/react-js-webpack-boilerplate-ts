import React, { useState } from 'react'

export enum hairStyle {
  Blonde = 'good',
  Black = 'nice',
}
type color = 'Red' | 'Green' | 'orange'
export interface IPersonsProps {
  name: string
  age: number
  email: string
  hairColor: hairStyle
  favColor: color
}

const Persons: React.FC<IPersonsProps> = ({
  age,
  email,
  name,
  hairColor,
  favColor,
}) => {
  const [text, setText] = useState<string>()
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }
  return (
    <div>
      <div>Name : {name}</div>
      <div>Age : {age}</div>
      <div>Email : {email}</div>
      <input
        type="text"
        value={text}
        placeholder="Type here"
        onChange={(event) => onChange(event)}
      />
      {hairColor}
      {favColor}
    </div>
  )
}

export default Persons
