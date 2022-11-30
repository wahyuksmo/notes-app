import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import FormModal from "./FormModal";
import { useState } from "react";

export default function Notes() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [notes, setNote] = useState([]);

  async function addNotes(note) {
    if (!note.text) {
      return;
    }

    const newNotes = [note, ...notes];
    setNote(newNotes)

  }

  return (
    <>
      <section className="mt-4">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
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

      <section className="modal-form">
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormModal onSubmit={addNotes} />
          </Modal.Body>
        </Modal>
      </section>
    </>
  );
}
