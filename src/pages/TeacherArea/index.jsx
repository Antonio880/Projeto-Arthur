import { useEffect, useState } from "react";
import TextTitle from "../../atoms/TextTitle";
import SeriesCard from "../../organisms/SeriesCard";
import { useNavigate } from "react-router-dom";

function TeacherArea() {
  const [ turmas, setTurmas ] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRooms = async () => {
      try{
        await axios.get("http://localhost:8090/rooms")
          .then((response) => setTurmas(response.data))
          .catch(e => console.error(e))

      }catch(e){
        console.error(e)
      }
    };
    fetchRooms();
  },[]) 

  return (
    <div className="w-8/12 flex flex-col m-auto">
      <div className="mr-auto m-4">
        <TextTitle title="Salas" />
        <button 
            onClick={() => navigate("/create-room")} 
            className='py-1 px-10 border-2 border-purple bg-purple rounded-lg transition delay-200 hover:bg-darkPurple hover:border-darkPurple text-white'
          >
            Adicionar Sala
          </button>
      </div>
      <div className="flex flex-row gap-32 items-center justify-center">
        {turmas.map((turma, index) => (
          <SeriesCard serie={turma.serie} curso={turma.curso} key={index} />
        ))}
      </div>

      <div className="flex flex-row items-center justify-center -mt-16"> 
        <div>
          <img src="imagem.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default TeacherArea;
