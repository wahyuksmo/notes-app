import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import FormModal from "./FormModal";
import EditModal from "./EditModal";
import { useEffect, useState } from "react";

export default function Notes() {
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const handleClose = () => setShowAdd(false);
  const handleShow = () => setShowAdd(true);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const [notes, setNote] = useState([]);

  const [edit, setEdit] = useState("");

  const [isNotEmpty, setIsNotEmpty] = useState(true);

  async function addNotes(note) {
    const newNotes = [note, ...notes];
    setNote(newNotes);
    handleClose();
    setIsNotEmpty(false);
  }

  async function deleteNotes(id) {
    const notesYangKeFilter = notes.filter((note) => {
      return note.id !== id;
    });
    setNote(notesYangKeFilter);

    if (notesYangKeFilter.length === 0) {
      setIsNotEmpty(true);
    }
  }

  async function editNotes(id) {
    setShowEdit(true);
  }

  return (
    <>
      <section className="mt-4">
        <div className="container">
          <div className="row">
            {isNotEmpty && <p className="mt-4 text-center">Tidak ada notes</p>}

            {!isNotEmpty && (
              <>
                {notes.map((item) => (
                  <section key={item.id}>
                    <div className="col-md-6 mb-4">
                      <div className="card">
                        <div className="card-body">
                          <p className="card-text">{item.text}</p>
                          <span className="text-muted">{item.date}</span>
                          <i
                            className="bi bi-trash3 ms-5"
                            onClick={deleteNotes.bind(this, item.id)}
                            style={{ cursor: "pointer" }}
                          ></i>

                          <i
                            className="bi bi-pencil-square ms-2"
                            onClick={editNotes.bind(this, item.id)}
                            style={{ cursor: "pointer" }}
                          ></i>
                        </div>
                      </div>
                    </div>
                  </section>
                ))}
              </>
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <Button onClick={handleShow} className="btn btn-sm btn-primary" id="add-note">
            <i className="bi bi-clipboard-plus"></i>
          </Button>
        </div>
      </section>
      {/* add modal */}
      <section className="modal-form">
        <Modal show={showAdd} onHide={handleClose} backdrop="static" keyboard={false} centered>
          <Modal.Header closeButton>
            <Modal.Title>Add Notes</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormModal onSubmit={addNotes} />
          </Modal.Body>
        </Modal>
      </section>

      {/* Edit Notes */}
      <section className="modal-form">
        <Modal show={showEdit} onHide={handleCloseEdit} backdrop="static" keyboard={false} centered>
          <Modal.Header closeButton>
            <Modal.Title>Edit Notes</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditModal onSubmit={addNotes} />
          </Modal.Body>
        </Modal>
      </section>
    </>
  );
}
