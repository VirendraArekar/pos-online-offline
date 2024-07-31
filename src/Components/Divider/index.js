import React from 'react'

export default function index(props) {
  const {className} = props;
  return (
    <hr style={{width : '100%', color : '#DADADA', height : '2px', backgroundColor : '#DADADA'}}  className={`${className ? className : 'p-0 m-0'}`}/>
  )
}
