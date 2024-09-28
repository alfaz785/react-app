import React, { useState } from 'react'

export default function AddForm({addForm}) {

  const [title, setTitle] = useState("");  
  const [desc, setDesc] = useState("");
  

    let Submit = (e) =>{
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else{
            addForm(title,desc);
            setTitle('');
            setDesc ('');
        }
      
    }
    return (
        <div className='container my-3'>
            <form onSubmit={Submit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Title</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="exampleInputEmail1"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Description</label>
                    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="exampleInputPassword1"/>
                </div>
                
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}
