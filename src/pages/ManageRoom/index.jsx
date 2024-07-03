import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import TextTitle from '../../atoms/TextTitle';
import { useUserContext } from '../../Context/ContextUser';
import { useForm } from 'react-hook-form';
import ProvasCard from '../../organisms/ProvasCard';
import { MailIcon } from '@heroicons/react/solid';
import { FiChevronsLeft } from "react-icons/fi";

const ManageRoom = () => {
  let location = useLocation();
  const { state } = location;
  const { id, curso, serie } = state || {}; 
  const { user } = useUserContext();
  const [students, setStudents] = useState([]);
  const [exams, setExams] = useState([]);
  const navigate = useNavigate();
  const BASE_URL = "http://localhost:3000"; 
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      category: 'code',
      questionCount: 10,
    }
  });

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        if (id) {
          const studentsResponse = await axios.get(`${BASE_URL}/rooms/${id}/students`);
          setStudents(studentsResponse.data);

          const examsResponse = await axios.get(`${BASE_URL}/exams/${id}`);
          setExams(examsResponse.data);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchRoomDetails();
  }, [id]);

  const onSubmit = async (data) => {
    try {
      const responseExam = await axios.post(`${BASE_URL}/exams/create?category=${data.category}&questionCount=${data.questionCount}&roomId=${id}&createdById=${user.id}`);
      
    } catch (err) {
      console.error(err);
    }
  };

  if (!id) {
    return <div>Erro: Detalhes da sala não disponíveis</div>;
  }

  return (
    <div className='relative py-10'>
      <button 
        onClick={() => navigate("/teacher-area") } 
        className='absolute top-3 left-10 py-1 p-3 border-2 border-purple bg-purple rounded-lg transition delay-200 hover:bg-darkPurple hover:border-darkPurple text-white disabled:bg-gray-300'
      >
        
        <FiChevronsLeft />
      </button>
      <h1 className="text-4xl text-purple font-semibold text-center">
        Gerenciar Sala:
        <span className="text-orange">{" "} {serie}° {curso}</span>
      </h1>
      <div className='flex flex-row'>
        <div className='flex flex-col basis-3/4'>
          <div className='flex basis-2/3 justify-around'>
            <div>
              <TextTitle title={"Exames"} />
              <div className='flex flex-col h-36 overflow-y-auto'>
                {exams.map(exam => (
                  <ProvasCard key={exam.id} prova={exam} />
                ))}
              </div>
            </div>
            <div>
              <TextTitle title={"Alunos"} />
              <ul className='flex flex-col overflow-y-auto gap-4'>
                {students.map(student => (
                  <li key={student.id} className="bg-white shadow-md p-4 rounded-lg flex items-center gap-4 border-l-4 border-orange">
                    <MailIcon className="h-6 w-6 text-purple" />
                    <span className="text-gray-800">{student.email}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='basis-1/3'>
            <form onSubmit={handleSubmit(onSubmit)} >
              <TextTitle title="Gerar Prova" />
              <div className='flex justify-center'>
                <div className="relative grid pl-10 p-5 grid-cols-2 gap-4 bg-[#E2E2FF] w-[400px] rounded-3xl">
                  <div className="absolute left-0 top-0 bottom-0 w-6 bg-orange rounded-l-3xl"></div>
                  <div className="col-span-1 flex flex-col">
                    <label htmlFor="discipline" className='flex justify-center text-xl'>Disciplina</label>
                    <select id="discipline" className='rounded-md' {...register("discipline")}>
                      <option value="math">Matemática</option>
                      <option value="port">Português</option>
                      <option value="hist">História</option>
                      <option value="ti">TI</option>
                    </select>
                  </div>
                  
                  <div className="col-span-1 flex flex-col">
                    <label htmlFor="category" className='flex justify-center text-xl'>Conteúdo</label>
                    <select id="category" className='rounded-md' {...register("category", { required: true })}>
                      <option value="Linux">Linux</option>
                      <option value="Programming">Programming</option>
                      <option value="DevOps">DevOps</option>
                      <option value="Networking">Networking</option>
                    </select>
                    {errors.category && <span>Este campo é obrigatório</span>}
                  </div>
                  
                  <div className="col-span-1 flex flex-col">    n
                    <label htmlFor="questionCount" className='flex justify-center text-xl'>Quantidade de Questões</label>
                    <select id="questionCount" className='w-[100px] rounded-md' {...register("questionCount", { required: true })}>
                      {[...Array(10).keys()].map(i => (
                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                      ))}
                    </select>
                    {errors.questionCount && <span>Este campo é obrigatório</span>}
                  </div>
                  
                  <div className="col-span-1 flex items-end">
                    <button type="submit" className="py-2 px-4 bg-purple text-white rounded transition hover:bg-darkPurple">
                      Criar Prova
                    </button>
                  </div>
                </div>
              </div>
            </form>  
          </div>  
        </div>
        <div className='basis-1/4'>
          <img src={"manage_room.svg"} alt="Manage Room" className="w-full h-auto mt-4" />
        </div>
      </div>
    </div>
  );
};

export default ManageRoom;

