import { useState } from "react";
import NoteContext from "./noteContext";

export default function NoteState(props) {

    const s1 = {
        "name": "Alfaz",
        "class": "9a"
    }

    const [state, setState] = useState(s1);

     const update = ()=>{
        setTimeout(() => {
            setState({
                "name": "Memon",
                "class": "5a"
            })
        }, 3000);
     }

    return (
        <div>

            <NoteContext.Provider value={{state, update}}>
             {props.children}
            </NoteContext.Provider>

        </div>
    )
}
