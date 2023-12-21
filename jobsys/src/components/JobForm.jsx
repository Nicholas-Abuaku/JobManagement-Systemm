import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
export const JobForm = () => {
  return (
    <Form className="mb-3">
      <Form.Group className="mb-3">
        <Form.Label>Client</Form.Label>
        <Form.Control type="text" placeholder="Client Name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Client Name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Due Date</Form.Label>
        <Form.Control type="date" placeholder="Client Name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Time</Form.Label>
        <Form.Control type="time" placeholder="Client Name" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Service</Form.Label>
        <Form.Check label={<Badge>Exteriror Window Clean</Badge>} />
        <Form.Check label={<Badge>Interior Window Clean</Badge>} />
        <Form.Check label={<Badge bg="info">Gutter Clean</Badge>} />
        <Form.Check label={<Badge bg="info">Gutter Repair</Badge>} />
      </Form.Group>
      <Button type="submit" style={{ marginTop: "10px" }}>
        Submit
      </Button>
    </Form>
  );
};
