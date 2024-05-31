import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 

const Sidebar = ({ showCrearCultivoForm, toggleForm }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="sidebar position-fixed left-0 top-0 bottom-0 bg-success overflow-auto">
      <Container className="p-2 d-flex flex-column h-100">
        <h2 className="text-white">Panel de Cultivos</h2>
        <div className="d-flex flex-column flex-grow-1">
          <Button variant="transparent" className="mb-2 text-white" onClick={() => toggleForm('crear')}>Crear Cultivo</Button>
          <Button variant="transparent" className="mb-2 text-white" onClick={() => toggleForm('editar')}>Editar o Borrar</Button>
        </div>
        <Button variant="danger" className="mt-auto w-100" style={{ color: 'white' }} onClick={handleLogout}>Logout</Button>
      </Container>
    </div>
  );
}

export default Sidebar;
