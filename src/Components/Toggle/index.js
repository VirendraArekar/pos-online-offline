import React from 'react'
import './style.css'

export default function index(props) {
    const {name, onChange, value} = props
  return (
    <label className="switch">
        <input type="checkbox" onChange={onChange} name={name} value={value}/>
        <span className="slider round"></span>
    </label>
  )
}
