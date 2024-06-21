function DisciplinaCard({ disciplina_text }) {
  return (
    <div className="relative flex items-center justify-start bg-[#d9d9d9] w-64 h-24 rounded-3xl">
      <button>
        <img src="vector.svg" alt="" className="absolute top-2 right-2 w-5" />
      </button>

      <h3 className="text-purple font-semibold text-2xl text-start m-4">
        {disciplina_text}
      </h3>
    </div>
  );
}

export default DisciplinaCard;
