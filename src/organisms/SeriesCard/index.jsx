function SeriesCard({ serie_number }) {
  return (
    <div className="w-64 min-w-64 max-w-64 rounded-3xl flex flex-col items-center justify-center">
      <img
        src="exame_bg.svg"
        alt=""
        className="rounded-t-3xl bg-cover w-full"
      />
      <div className="bg-[#d9d9d9] w-full p-3 rounded-b-3xl">
        <h3 className="pl-4 font-semibold text-orange text-3xl">
          {serie_number}º Série
        </h3>
        <p className="text-purple pl-4">Informática</p>
      </div>
    </div>
  );
}

export default SeriesCard;
