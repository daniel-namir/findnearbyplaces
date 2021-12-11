import { Container, Form } from "react-bootstrap";
import { useState } from "react";

const Places = ({ edit }) => {
    const [name, setName] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [description, setDescription] = useState("");

    let onNameChanged = (e) => {
        setName(e.target.value);
    }

    let onLatitudeChanged = (e) => {
        setLatitude(e.target.value);
    }

    let onLongitudeChanged = (e) => {
        setLongitude(e.target.value);
    }

    let onDescriptionChanged = (e) => {
        setDescription(e.target.value);
    }

    return (
        <Container>
        {edit ? <h1>Edit Place</h1> : <h1>Add Place</h1>}
        <Form>
            <Form.Group controlId="PlaceName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" onChange={onNameChanged}/>
            </Form.Group>
            <Form.Group controlId="PlaceLatitude">
                <Form.Label>Latitude</Form.Label>
                <Form.Control type="text" placeholder="Latitude" onChange={onLatitudeChanged}/>
            </Form.Group>
            <Form.Group controlId="PlaceLongitude">
                <Form.Label>Longitude</Form.Label>
                <Form.Control type="text" placeholder="Longitude" onChange={onLongitudeChanged}/>
            </Form.Group>
            <Form.Group controlId="PlaceDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Description" onChange={onDescriptionChanged}/>
            </Form.Group>
            <Form.Group>
                <Form.Control type="submit"/>
            </Form.Group>
        </Form>
        </Container>
  );
};

export default Places;