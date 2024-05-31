import React, { useState } from 'react';
import Sidebar from './Sidebar';
import CrearCultivoForm from './CrearCultivoForm';
import CultivosForm from './CultivosForm';

const Cultivos = () => {
  const [showCrearCultivoForm, setShowCrearCultivoForm] = useState(false);
  const [showEditarCultivoForm, setShowEditarCultivoForm] = useState(false);

  const toggleForm = (form) => {
    if (form === 'crear') {
      setShowCrearCultivoForm(true);
      setShowEditarCultivoForm(false);
    } else if (form === 'editar') {
      setShowCrearCultivoForm(false);
      setShowEditarCultivoForm(true);
    }
  };

  return (
    <div className="d-flex">
      <Sidebar showCrearCultivoForm={showCrearCultivoForm} toggleForm={toggleForm} />
      <div className="flex-grow-1">
        {showCrearCultivoForm && <CrearCultivoForm />}
        {showEditarCultivoForm && <CultivosForm />}
      </div>
    </div>
  );
}

export default Cultivos;
