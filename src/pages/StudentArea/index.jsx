import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextTitle from "../../atoms/TextTitle";
import axios from 'axios';
import ProvasCard from "../../organisms/ProvasCard";
import { useUserContext } from '../../Context/ContextUser';

export default function StudentArea() {
  const { user } = useUserContext();
  const [room, setRoom] = useState(null);
  const [exams, setExams] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [viewingRooms, setViewingRooms] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const response = await axios.get(`http://localhost:8090/users/${user.id}/room`);
        setRoom(response.data);

        if (response.data) {
          const examsResponse = await axios.get(`http://localhost:8090/exams/${response.data.id}`);
          setExams(examsResponse.data);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchRoom();
  }, [user.id]);



  const handleJoinRoom = async () => {
    try {
      const roomsResponse = await axios.get('http://localhost:8090/rooms');
      setRooms(roomsResponse.data);
      setViewingRooms(true);
    } catch (err) {
      console.error(err);
    }
  };

  const joinRoom = async (roomId) => {
    try {
      await axios.post(`http://localhost:8090/rooms/${roomId}/users/${user.id}`);
      setViewingRooms(false);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex w-full">
      {room ? (
        <div>
          <div>
            <TextTitle title={`${room.serie}ª série - ${room.curso}`} />
          </div>
          <div>
            <TextTitle title="Provas atribuídas" />
            <div>
              {exams.map((exam, index) => (
                <ProvasCard key={index} prova={exam} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Você não está em nenhuma sala.</h1>
          {viewingRooms ? (
            <div>
              <TextTitle title="Salas Disponíveis" />
              <div className="flex flex-wrap">
                {rooms.map((room) => (
                  <div key={room.id} className="m-4 p-4 border rounded shadow">
                    <h2>{room.serie} série - {room.curso}</h2>
                    <button onClick={() => joinRoom(room.id)}>
                      Entrar nesta sala
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <button onClick={handleJoinRoom}>Entrar em uma Sala</button>
          )}
        </div>
      )}
      <div className="flex justify-end w-full">
        <img src="area_aluno_manage.svg" className="w-[550px]" alt="" />
      </div>
    </div>
  );
}
