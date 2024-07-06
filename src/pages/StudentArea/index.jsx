import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TextTitle from "../../atoms/TextTitle";
import axios from 'axios';
import ProvasCard from "../../organisms/ProvasCard";
import { useUserContext } from '../../Context/ContextUser';
import Loading from "../../atoms/Loading";

export default function StudentArea() {
  const { user } = useUserContext();
  const [room, setRoom] = useState(null);
  const [exams, setExams] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [viewingRooms, setViewingRooms] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const BASE_URL = "http://localhost:3000"; 

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BASE_URL}/users/${user.id}/get_room`);
        setRoom(response.data);
        console.log(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRoom();
  }, [user.id, BASE_URL]);

  useEffect(() => {
    if (room) {
      const fetchExams = async () => {
        try {
          setLoading(true);
          const examsResponse = await axios.get(`${BASE_URL}/exams/room_exams/${room.id}`);
          console.log(examsResponse.data)
          setExams(examsResponse.data);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };

      fetchExams();
    }
  }, [room, BASE_URL]);

  const handleJoinRoom = async () => {
    try {
      const roomsResponse = await axios.get(`${BASE_URL}/rooms`);
      setRooms(roomsResponse.data);
      setViewingRooms(true);
    } catch (err) {
      setError(err);
    }
  };

  const joinRoom = async (roomId) => {
    try {
      await axios.post(`${BASE_URL}/rooms/${roomId}/users/${user.id}`);
      setViewingRooms(false);
      window.location.reload();
    } catch (err) {
      setError(err);
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="flex w-full">
      <div className="basis-1/2 pt-20">
        {room ? (
          <div>
            <div>
              <TextTitle title={`${room.serie}ª série - ${room.curso}`} />
            </div>
            <div>
              <TextTitle title="Provas atribuídas" />
              <div className="flex justify-center overflow-y-auto pt-2">
                {exams && exams.map((exam, index) => (
                  <Link to={`/take-exam/${exam.id}`} state={{ id:exam.id, category: exam.category }} key={index}>
                    <ProvasCard prova={exam} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center h-[600px]">
            
            {viewingRooms ? (
              <div >
                <TextTitle title="Salas Disponíveis" />
                <div className="flex justify-center flex-wrap">
                  {rooms.map((room) => (
                    <div key={room.id} className="m-4 p-4 border rounded shadow">
                      <h2>{room.serie} série - {room.curso}</h2>
                      <button className="flex justify-center rounded-md hover:bg-purple transition delay-150 hover:text-white w-full" onClick={() => joinRoom(room.id)}>
                        Entrar nesta sala
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                 <TextTitle title={"Você não está em nenhuma sala"} />
                 <div className="flex justify-center">
                  <button className="mx-3 py-2 mt-4 px-2 border-2 border-purple rounded-md text-purple hover:bg-purple transition delay-150 hover:text-white" onClick={handleJoinRoom}>Entrar em uma Sala</button>
                 </div>
              </div>
             )}
          </div>
        )}
      </div> 
      <div className="flex basis-1/2 justify-center w-full">
        <img src="area_aluno_manage.svg" className="w-[550px]" alt="" />
      </div>
    </div>
  );
}
