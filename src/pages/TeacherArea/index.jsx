import { useEffect, useState } from "react";
import TextTitle from "../../atoms/TextTitle";
import SeriesCard from "../../organisms/SeriesCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../Context/ContextUser";
import ProvasCard from "../../organisms/ProvasCard";

function TeacherArea() {
  const [turmas, setTurmas] = useState([]);
  const [ provas, setProvas ] = useState([]);
  const { user } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        await axios.get("http://localhost:8090/rooms")
          .then((response) => setTurmas(response.data))
          .catch(e => console.error(e))

      } catch (e) {
        console.error(e)
      }
    };

    const fetchProvas = async () => {
      try {
        await axios.get(`http://localhost:8090/exams/createdBy/${user.id}`)
          .then((response) => setProvas(response.data))
          .catch(e => console.error(e))

      } catch (e) {
        console.error(e)
      }
    }
    fetchRooms();
    fetchProvas();
  }, [])

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
      {
        turmas[0] !== undefined ? 
          turmas.map((turma, index) => (
            <SeriesCard turma={turma} key={index} />
          ))
         : <div>
          <h1 className="text-center text-2xl text-gray-500">Nenhuma sala cadastrada</h1>
        </div>
      }
      </div>

      <div className="w-[1120px]">
        <div className="py-6">
          <TextTitle title="Provas" />
        </div>        
        <div className="flex flex-row flex-wrap w-full">
          {
            provas[0] !== undefined ? 
              provas.map((prova, index) => (
                <ProvasCard prova={prova} key={index} />
              ))
            : <div>
              <h1 className="text-center text-2xl text-gray-500">Nenhuma Prova cadastrada</h1>
            </div>
          }
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
