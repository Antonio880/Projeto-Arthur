import { useEffect, useState } from "react";
import TextTitle from "../../atoms/TextTitle";
import SeriesCard from "../../organisms/SeriesCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../Context/ContextUser";
import ProvasCard from "../../organisms/ProvasCard";

function TeacherArea() {
  const [turmas, setTurmas] = useState([]);
  const [provas, setProvas] = useState([]);
  const { user } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        
        if (user && user.id) {
          console.log(user)
          const response = await axios.get(`http://localhost:8090/rooms/createdBy/${user.id}`);
          setTurmas(response.data || []);
        } else {
          console.error("User ID not available.");
        }
      } catch (e) {
        console.error("Error fetching rooms:", e);
      }
    };

    const fetchProvas = async () => {
      try {
        if (user && user.id) {
          const response = await axios.get(`http://localhost:8090/exams/createdBy/${user.id}`);
          setProvas(response.data || []);
        } else {
          console.error("User ID not available.");
        }
      } catch (e) {
        console.error("Error fetching exams:", e);
      }
    };

    fetchRooms();
    fetchProvas();
  }, [user]); // Dependência adicionada para reexecutar o efeito quando o usuário muda

  useEffect(() => {
    console.log(turmas)
  }, [turmas])

  return (
    <div className="w-8/12 flex flex-col m-auto">
      <div className="flex justify-between mr-auto m-4 w-full">
        <TextTitle title="Salas" />
        <button
          onClick={() => navigate("/create-room")}
          className='mx-3 py-1 px-2 border-2 border-purple rounded-md text-purple hover:bg-purple transition delay-150 hover:text-white'
        >
          Adicionar Sala
        </button>
      </div>
      <div className="flex flex-row">
        {Array.isArray(turmas) && turmas.length > 0 ? (
          turmas.map((turma, index) => (
            <SeriesCard turma={turma} key={index} />
          ))
        ) : (
          <div>
            <h1 className="text-center text-2xl text-gray-500">Nenhuma sala cadastrada</h1>
          </div>
        )}
      </div>

      <div className="w-[1120px]">
        <div className="py-6">
          <TextTitle title="Provas" />
        </div>        
        <div className="flex flex-row flex-wrap w-full">
          {Array.isArray(provas) && provas.length > 0 ? (
            provas.map((prova, index) => (
              <ProvasCard prova={prova} key={index} />
            ))
          ) : (
            <div>
              <h1 className="text-center text-2xl text-gray-500">Nenhuma Prova cadastrada</h1>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-row items-center justify-center mt-16">
        <div>
          <img src="imagem.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default TeacherArea;
