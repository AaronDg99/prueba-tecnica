import React, { useState, useRef } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axiosInstance from '../api/axiosInstance';

const CrearCultivoForm = ({ onCultivoCreated }) => {
  const initialState = {
    title: '',
    description: '',
    weather: 'Tropical',
    image: null,
    quantity: '',
    difficulty: 'Principiante',
    season: 'Primavera',
    illumination: 'Sol',
    type: 'Hortalizas'
  };

  const [newCultivo, setNewCultivo] = useState(initialState);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCultivo({ ...newCultivo, [name]: value });
  };

  const handleFileChange = (e) => {
    setNewCultivo({ ...newCultivo, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', newCultivo.title);
    formData.append('description', newCultivo.description);
    formData.append('weather', newCultivo.weather);
    formData.append('quantity', newCultivo.quantity);
    formData.append('difficulty', newCultivo.difficulty);
    formData.append('season', newCultivo.season);
    formData.append('illumination', newCultivo.illumination);
    formData.append('type', newCultivo.type);
    formData.append('image', newCultivo.image);

    try {
      const response = await axiosInstance.post('/cultivos/api/data/cultivos/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      onCultivoCreated(response.data);
      setNewCultivo(initialState); // Limpiar los parámetros del formulario
      fileInputRef.current.value = '';
    } catch (error) {
      console.error('Error creating cultivo:', error);
      if (error.response) {
        console.error('Error data:', error.response.data);
        console.error('Error status:', error.response.status);
        console.error('Error headers:', error.response.headers);
      }
    }
  };

  return (
    <Container className="mt-5">
      <h2>Crear Nuevo Cultivo</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} controlId="formTitle">
          <Form.Label column sm="2">Título</Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              name="title"
              value={newCultivo.title}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formDescription">
          <Form.Label column sm="2">Descripción</Form.Label>
          <Col sm="10">
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={newCultivo.description}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formWeather">
          <Form.Label column sm="2">Clima</Form.Label>
          <Col sm="10">
            <Form.Control
              as="select"
              name="weather"
              value={newCultivo.weather}
              onChange={handleChange}
            >
              <option value="Tropical">Tropical</option>
              <option value="Seco">Seco</option>
              <option value="Templado">Templado</option>
              <option value="Continental">Continental</option>
              <option value="Fríos">Fríos</option>
              <option value="Cualquiera">Cualquiera</option>
            </Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formImage">
          <Form.Label column sm="2">Imagen</Form.Label>
          <Col sm="10">
            <Form.Control
              type="file"
              name="image"
              onChange={handleFileChange}
              ref={fileInputRef}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formQuantity">
          <Form.Label column sm="2">Cantidad</Form.Label>
          <Col sm="10">
            <Form.Control
              type="number"
              name="quantity"
              value={newCultivo.quantity}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formDifficulty">
          <Form.Label column sm="2">Dificultad</Form.Label>
          <Col sm="10">
            <Form.Control
              as="select"
              name="difficulty"
              value={newCultivo.difficulty}
              onChange={handleChange}
            >
              <option value="Principiante">Principiante</option>
              <option value="Medio">Medio</option>
              <option value="Difícil">Difícil</option>
            </Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formSeason">
          <Form.Label column sm="2">Temporada</Form.Label>
          <Col sm="10">
            <Form.Control
              as="select"
              name="season"
              value={newCultivo.season}
              onChange={handleChange}
            >
              <option value="Primavera">Primavera</option>
              <option value="Verano">Verano</option>
              <option value="Otoño">Otoño</option>
              <option value="Invierno">Invierno</option>
              <option value="Cualquiera">Cualquiera</option>
            </Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formIllumination">
          <Form.Label column sm="2">Iluminación</Form.Label>
          <Col sm="10">
            <Form.Control
              as="select"
              name="illumination"
              value={newCultivo.illumination}
              onChange={handleChange}
            >
              <option value="Sol">Sol</option>
              <option value="Media sombra">Media sombra</option>
              <option value="Sombra">Sombra</option>
            </Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formType">
          <Form.Label column sm="2">Tipo</Form.Label>
          <Col sm="10">
            <Form.Control
              as="select"
              name="type"
              value={newCultivo.type}
              onChange={handleChange}
              required
            >
              <option value="Hortalizas">Hortalizas</option>
              <option value="Flores">Flores</option>
              <option value="Aromáticas">Aromáticas</option>
            </Form.Control>
          </Col>
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Crear Cultivo
        </Button>
      </Form>
    </Container>
  );
};

export default CrearCultivoForm;
