import React from 'react'

export default function Content1({con,onDelete}) {
  let content1style = {
    margin:"20px",
  }
  return (
    <div>
      <h3>{con.sno}</h3>
      <h4>{con.title}</h4>
        <p style={content1style}>{con.desc}</p>
      <button className='btn btn-sm btn-danger' onClick={()=>onDelete(con)}>Delete </button>
    </div>
  )
} 
