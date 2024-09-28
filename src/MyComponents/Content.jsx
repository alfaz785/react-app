import React from 'react'
import Content1 from './Content1'



export function Content(props) {

  let ContentStyle = {
    background: 'cadetblue',
  }

  return (
    <>
 
    <section style={{ ContentStyle, fontSize: 25 }}>
      <div className='container'>
        <h3 className='text-center' style={{ fontSize: "40px" }}>Content App</h3>
        {props.content.length === 0? "No Content on display": 
        props.content.map((con1) => {
          return <Content1 con={con1} key={con1.sno} onDelete={props.onDelete} />
          //  return <>
          //     <h4>this</h4>
          //     <Content1 con={con} />

          //   </>

        })
      }
 
        {/* <Content1 con = {props.content[2]} /> */}
      </div>
    </section>
    </>
  )
}
