import { Link } from "react-router-dom";

function SeriesCard({ turma }) {
  const { id, serie, curso } = turma;
  
  return (
    <Link to={`/manage-room/${id}`} state={turma}>
      <div className="w-64 mx-12 cursor-pointer min-w-64 max-w-64 rounded-3xl flex flex-col items-center justify-center">
        <img
          src="exame_bg.svg"
          alt=""
          className="rounded-t-3xl bg-cover w-full"
        />
        <div className="bg-[#d9d9d9] w-full p-3 rounded-b-3xl">
          <h3 className="pl-4 font-semibold text-orange text-3xl">
            {serie}º Série
          </h3>
          <p className="text-purple pl-4">{curso}</p>
        </div>
      </div>  
    </Link>
  );
}

export default SeriesCard;
