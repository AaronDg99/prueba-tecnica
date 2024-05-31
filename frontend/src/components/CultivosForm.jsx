import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import EditarCultivoModal from './EditarCultivoModal';
import axiosInstance from '../api/axiosInstance';

const CultivosForm = () => {
  const [cultivos, setCultivos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editedCultivo, setEditedCultivo] = useState(null);

  useEffect(() => {
    const fetchCultivos = async () => {
      try {
        const response = await axiosInstance.get('/cultivos/api/data/cultivos/');
        setCultivos(response.data);
      } catch (error) {
        console.error('Error fetching cultivos:', error);
      }
    };

    fetchCultivos();
  }, []);

  const handleDeleteCultivo = async (id) => {
    try {
      await axiosInstance.delete(`/cultivos/api/data/cultivos/${id}/`);
      setCultivos(cultivos.filter(cultivo => cultivo.id !== id));
    } catch (error) {
      console.error('Error deleting cultivo:', error);
    }
  };

  const handleEditCultivo = (cultivo) => {
    setEditedCultivo(cultivo);
    setShowModal(true);
  };

  const handleSaveCultivo = async (updatedCultivo) => {
    console.log('Updated Cultivo:', updatedCultivo); 

    const formData = new FormData();
    formData.append('title', updatedCultivo.title);
    formData.append('description', updatedCultivo.description);
    formData.append('weather', updatedCultivo.weather);
    formData.append('quantity', updatedCultivo.quantity);
    formData.append('difficulty', updatedCultivo.difficulty);
    formData.append('season', updatedCultivo.season);
    formData.append('illumination', updatedCultivo.illumination);
    formData.append('type', updatedCultivo.type);

    if (updatedCultivo.image instanceof File) {
      formData.append('image', updatedCultivo.image);
    }

    try {
      const response = await axiosInstance.patch(`/cultivos/api/data/cultivos/${updatedCultivo.id}/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const updatedCultivos = cultivos.map(c => (c.id === updatedCultivo.id ? response.data : c));
      setCultivos(updatedCultivos);
    } catch (error) {
      console.error('Error updating cultivo:', error);
      if (error.response) {
        console.error('Error data:', error.response.data);
        console.error('Error status:', error.response.status);
        console.error('Error headers:', error.response.headers);
      }
    }
    setShowModal(false);
  };

  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {cultivos.map(cultivo => (
          <div key={cultivo.id} className="col">
            <Card style={{ border: '1px solid rgba(0, 0, 0, 0.125)', borderRadius: '8px', height: '100%' }}>
              <Card.Img variant="top" src={cultivo.image} />
              <Card.Body>
                <Card.Title>{cultivo.title}</Card.Title>
                <Card.Text>{cultivo.description}</Card.Text>
                <Button variant="success" onClick={() => handleEditCultivo(cultivo)}>Editar</Button>
                <Button variant="danger" onClick={() => handleDeleteCultivo(cultivo.id)}>Eliminar</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <EditarCultivoModal
        cultivo={editedCultivo}
        show={showModal}
        onHide={() => setShowModal(false)}
        onSave={handleSaveCultivo}
      />
    </div>
  );
};

export default CultivosForm;
