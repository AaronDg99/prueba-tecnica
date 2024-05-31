import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EditarCultivoModal = ({ cultivo, show, onHide, onSave }) => {
  const [localCultivo, setLocalCultivo] = useState(cultivo || {});
  const formRef = useRef(null);

  useEffect(() => {
    setLocalCultivo(cultivo || {});
  }, [cultivo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalCultivo({ ...localCultivo, [name]: value });
  };

  const handleFileChange = (e) => {
    setLocalCultivo({ ...localCultivo, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(localCultivo);
  };

  if (!show) {
    return null;
  }

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Cultivo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Form.Group controlId="formTitle">
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={localCultivo.title || ''}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={localCultivo.description || ''}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formWeather">
            <Form.Label>Clima</Form.Label>
            <Form.Control
              as="select"
              name="weather"
              value={localCultivo.weather || ''}
              onChange={handleChange}
            >
              <option value="Tropical">Tropical</option>
              <option value="Seco">Seco</option>
              <option value="Templado">Templado</option>
              <option value="Continental">Continental</option>
              <option value="Fríos">Fríos</option>
              <option value="Cualquiera">Cualquiera</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formImage">
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              type="file"
              name="image"
              onChange={handleFileChange}
            />
          </Form.Group>
          <Form.Group controlId="formQuantity">
            <Form.Label>Cantidad</Form.Label>
            <Form.Control
              type="number"
              name="quantity"
              value={localCultivo.quantity || ''}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formDifficulty">
            <Form.Label>Dificultad</Form.Label>
            <Form.Control
              as="select"
              name="difficulty"
              value={localCultivo.difficulty || ''}
              onChange={handleChange}
            >
              <option value="Principiante">Principiante</option>
              <option value="Medio">Medio</option>
              <option value="Difícil">Difícil</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formSeason">
            <Form.Label>Temporada</Form.Label>
            <Form.Control
              as="select"
              name="season"
              value={localCultivo.season || ''}
              onChange={handleChange}
            >
              <option value="Primavera">Primavera</option>
              <option value="Verano">Verano</option>
              <option value="Otoño">Otoño</option>
              <option value="Invierno">Invierno</option>
              <option value="Cualquiera">Cualquiera</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formIllumination">
            <Form.Label>Iluminación</Form.Label>
            <Form.Control
              as="select"
              name="illumination"
              value={localCultivo.illumination || ''}
              onChange={handleChange}
            >
              <option value="Sol">Sol</option>
              <option value="Media sombra">Media sombra</option>
              <option value="Sombra">Sombra</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formType">
            <Form.Label>Tipo</Form.Label>
            <Form.Control
              as="select"
              name="type"
              value={localCultivo.type || ''}
              onChange={handleChange}
            >
              <option value="Hortalizas">Hortalizas</option>
              <option value="Flores">Flores</option>
              <option value="Aromáticas">Aromáticas</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Guardar Cambios
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditarCultivoModal;
