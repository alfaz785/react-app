import React, { useContext, useEffect } from 'react'
import noteContext from '../Context/note/noteContext'

export default function About() {
    const a = useContext(noteContext);

 useEffect(() => {
   a.update();
   // eslint-disable-next-line
 },[])
 

    return (
        <div>
            <h1>About is {a.state.name} class in {a.state.class}</h1>
        </div>
    )
}
