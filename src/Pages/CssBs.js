import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div class="alert alert-primary alert-dismissible fade show" role="alert">
      <strong>Oh snap! You got an error!</strong>
      <p>Change this and that and try again.</p>
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <Button variant="primary" onClick={handleShow}>
        Primary
      </Button>{" "}
      <Button variant="secondary">Secondary</Button>{" "}
      <Button variant="success">Success</Button>{" "}
      <Button variant="warning">Warning</Button>{" "}
      <Button variant="danger">Danger</Button>{" "}
      <Button variant="info">Info</Button>{" "}
      <Button variant="light">Light</Button>{" "}
      <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>
      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1 style={{ textAlign: "center", marginBottom: 50 }}>Login</h1>

          <input
            style={{ marginBottom: "10px", width: "70%" }}
            type="text"
            placeholder="Email"
          />
          <br></br>
          <input
            style={{ marginBottom: "10px", width: "70%" }}
            type="text"
            placeholder="Password"
          />
          <br></br>
          <p>
            Jika belum memiliki akun silakan klik link <a href="#">ini</a>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cance
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default Example;
