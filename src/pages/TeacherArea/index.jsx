import TextTitle from "../../atoms/TextTitle";
import SeriesCard from "../../organisms/SeriesCard";
import DisciplinaCard from "../../organisms/DiscCard";

function TeacherArea() {
  const serie_numbers = [1, 2, 3];
  const disciplinas = [
    "LÍNGUA PORTUGUESA",
    "MATEMÁTICA",
    "HISTÓRIA",
    "LABORATÓRIO DE SOFTWARE",
  ];

  return (
    <div className="w-8/12 flex flex-col m-auto">
      <div className="mr-auto m-4">
        <TextTitle title="Salas" />
      </div>
      <div className="flex flex-row gap-32 items-center justify-center">
        {serie_numbers.map((serie) => (
          <SeriesCard serie_number={serie} key={serie} />
        ))}
      </div>

      <div className="mr-auto m-4">
        <TextTitle title="Provas" />
      </div>

      <div className="flex flex-row items-center justify-center -mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-7/12">
          {disciplinas.map((disciplina) => (
            <DisciplinaCard disciplina_text={disciplina} key={disciplina} />
          ))}
        </div>

        <button className="w-16 h-24 bg-[#d9d9d9] rounded-2xl ml-2 mt-28 flex items-center justify-center font-bold text-5xl text-purple">
          +
        </button>

        <div>
          <img src="imagem.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default TeacherArea;
