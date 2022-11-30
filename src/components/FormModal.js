import { useState } from "react";

export default function FormModal(props) {


  const [input, setInput] = useState('')


  async function handleChange(e) {
       setInput(e.target.value)
  }


  async function handleSubmit(e) {
    e.preventDefault()
    props.onSubmit({
      id: Math.floor(Math.random() * 1000), 
      text: input
    })

    setInput('')
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Notes App</label>
        <textarea className="form-control" rows="3" value={input} onChange={handleChange} ></textarea>
      </div>
      <div className="mb-3">
        <button className="btn btn-sm btn-primary mt-4">Add Note</button>
      </div>
    </form>
  );
}
