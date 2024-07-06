import React, { useState } from 'react';
import axios from 'axios';
import TextTitle from "../../atoms/TextTitle"
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
    const room = { serie, curso, created_by_id: user.id };
    try {
      await axios.post(`${BASE_URL}/rooms`, { room });
      navigate('/teacher-area')
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='flex justify-center flex-row py-8'>
      <div className='flex justify-center flex-col basis-1/3'>
        <form onSubmit={handleSubmit}>
          <TextTitle title={"Criar Sala"} />
          <div className='flex flex-col'>
            <label className='flex justify-center items-center pt-5'>
              <h1 className="text-2xl text-purple font-semibold text-center">
                Série da Sala
                <span className="text-orange">:</span>
              </h1>
              <div className=' pl-2'>
                <input 
                    type="text" 
                    className='w-full border-2 border-gray rounded-xl focus:ring-2 focus:ring-purple'
                    value={serie} onChange={(e) => setSerie(e.target.value)} required
                />
              </div>
            </label>
            

            <label className='flex justify-center items-center py-5'>
              <h1 className="text-2xl text-purple font-semibold text-center">
                Curso da Sala
                <span className="text-orange">:</span>
              </h1>
              <div className=' pl-2'>
                <input 
                    type="text" 
                    className='w-full border-2 border-gray rounded-xl focus:ring-2 focus:ring-purple'
                    value={curso} onChange={(e) => setCurso(e.target.value)} required
                />
              </div>
            </label>
            <div className='flex justify-center'>
            <div>
              <button onClick={() => {navigate("/teacher-area")}} className='mx-3 w-40 py-1 px-2 border-2  rounded-md bg-purple hover:bg-darkPurple transition delay-150 text-white'>Voltar</button>
            </div>
              <button type="submit" className='mx-3 w-40 py-1 px-2 border-2  rounded-md text-black hover:bg-purple transition delay-150 hover:text-white'>Criar</button>
            </div>
          </div>
        </form>
      </div>
      
      <div className='basis-1/3 flex items-center justify-center' >
        <img src="manage_room.svg" className='w-[500px]' alt="placeholder" />
      </div>
    </div>
  );
};

export default CreateRoom;
