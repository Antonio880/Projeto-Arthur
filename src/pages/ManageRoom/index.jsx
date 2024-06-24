import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import TextTitle from '../../atoms/TextTitle';
import { useUserContext } from '../../Context/ContextUser';
import { useForm } from 'react-hook-form';
import ProvasCard from '../../organisms/ProvasCard';

const ManageRoom = () => {
  let location = useLocation();
  const { state } = location;
  const { id, curso, serie } = state || {}; // Adicione um fallback aqui
  const { user } = useUserContext();
  const [students, setStudents] = useState([]);
  const [exams, setExams] = useState([]);
  const navigate = useNavigate();

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
          const studentsResponse = await axios.get(`http://localhost:8090/rooms/${id}/students`);
          setStudents(studentsResponse.data);

          const examsResponse = await axios.get(`http://localhost:8090/exams/${id}`);
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
      const responseExam = await axios.post(`http://localhost:8090/exams/create?category=${data.category}&questionCount=${data.questionCount}&roomId=${id}&createdById=${user.id}`);
      
    } catch (err) {
      console.error(err);
    }
  };

  if (!id) {
    return <div>Erro: Detalhes da sala não disponíveis</div>;
  }

  return (
    <div>
      <h1>Gerenciar Sala: {serie}° {curso}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextTitle title="Gerar Prova" />
        <div>
          <label htmlFor="discipline">Disciplina</label>
          <select id="discipline" {...register("discipline")}>
            <option value="math">Matemática</option>
            <option value="port">Português</option>
            <option value="hist">História</option>
            <option value="ti">TI</option>
          </select>
          
          <label htmlFor="category">Conteúdo</label>
          <select id="category" {...register("category", { required: true })}>
            <option value="Linux">Linux</option>
            <option value="Programming">Programming</option>
            <option value="DevOps">DevOps</option>
            <option value="Networking">Networking</option>
          </select>
          {errors.category && <span>Este campo é obrigatório</span>}
        </div>
        <div>
          <label htmlFor="questionCount">Quantidade de Questões</label>
          <select id="questionCount" {...register("questionCount", { required: true })}>
            {[...Array(10).keys()].map(i => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>
          {errors.questionCount && <span>Este campo é obrigatório</span>}
        </div>
        <button type="submit">Criar Prova</button>
      </form>
      <h2>Exames Criados</h2>
      <div>
        {exams.map(exam => (
          <ProvasCard key={exam.id} prova={exam} />
        ))}
      </div>
      <h2>Alunos</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>{student.email}</li>
        ))}
      </ul>
      <img src="manage_room.svg" alt="" />
      <button 
            onClick={() => navigate("/teacher-area") } 
            className='py-1 px-10 border-2 border-purple bg-purple rounded-lg transition delay-200 hover:bg-darkPurple hover:border-darkPurple text-white disabled:bg-gray-300'
          >
            Voltar
          </button>
    </div>
  );
};

export default ManageRoom;
