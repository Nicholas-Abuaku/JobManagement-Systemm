import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Badge from "react-bootstrap/esm/Badge";
export const JobListManagebtn = (props) => {
  const [jobStatus, setJobStatus] = useState("Pending...");
  function deleteJob() {
    axios
      .delete("http://localhost:8083/jobs/delete/" + props.jobId)
      .then(() => {
        window.location.reload();
      });
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const updateJobStatus = () => {
    props.updateJobStatus(props.jobId);
  };

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="warning">Actions</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={handleShow}> Details</Dropdown.Item>
          <Dropdown.Item onClick={updateJobStatus}>Mark Complete</Dropdown.Item>
          <Dropdown.Item>Edit</Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              deleteJob();
            }}
          >
            Delete
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {/* Modal for details */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Client: {props.client} <br />
            Address: {props.address} <br />
            Date Due: {props.date} <br />
            Time: {props.time} <br />
            Services:{" "}
            {props.service.map((service) => (
              <Badge key={service.id} style={{ marginRight: "5px" }}>
                {service.serviceType}
              </Badge>
            ))}{" "}
            <br />
            Notes: {props.notes}
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};
