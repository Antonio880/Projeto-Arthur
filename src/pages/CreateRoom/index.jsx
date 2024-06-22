import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateRoom = () => {
  const [serie, setSerie] = useState(0);
  const [ curso, setCurso ] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http:localhost:8090/room', { serie, curso });
      navigate('/teacher-area')
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Criar Sala</h1>
      <label>
        Nome da Sala:
        <input type="text" value={serie} onChange={(e) => setSerie(e.target.value)} required />
      </label>

      <label>
        Curso da Sala:
        <input type="text" value={curso} onChange={(e) => setCurso(e.target.value)} required />
      </label>
      <button type="submit">Criar</button>
    </form>
  );
};

export default CreateRoom;
