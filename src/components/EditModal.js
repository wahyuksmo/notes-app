import { useState } from "react";

export default function EditModal (props) {
  const [input, setInput] = useState("");

  async function handleChange(e) {
    setInput(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const tanggal = new Date();

    if (input.trim().length > 0) {
      props.onSubmit({
        id: Math.floor(Math.random() * 1000),
        text: input,
        date: tanggal.toLocaleDateString(),
      });

      setInput("");
    }else {
      alert('Harus diisi')
      return
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Notes App</label>
        <textarea
          className="form-control"
          rows="3"
          value={input}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="mb-3">
        <button className="btn btn-sm btn-primary mt-4">Edit Note</button>
      </div>
    </form>
  );
}
