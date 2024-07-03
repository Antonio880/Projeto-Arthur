import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../Context/ContextUser';

const CreateRoom = () => {
  const [ serie, setSerie ] = useState(0);
  const [ curso, setCurso ] = useState('');
  const { user } = useUserContext();
  const navigate = useNavigate();
  const BASE_URL = "http://localhost:3000"; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE_URL}/rooms?creatorId=${user.id}`, { serie, curso });
      navigate('/teacher-area')
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Criar Sala</h1>
      <label>
        Serie da Sala:
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
