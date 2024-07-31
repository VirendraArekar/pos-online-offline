import React from 'react'

export default function index(props) {
  const {name, onClick, className} = props;
  return (
    <button className={`btn ${className}`} onClick={onClick} style={{borderRadius : 10}}>{props?.children} {name}</button>
  )
}
