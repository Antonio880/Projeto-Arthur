export default function DivSup() {
  return (
    <div className=" h-48 my-7 flex mx-28 flex-row ">
      <div className="flex flex-col justify-center basis-1/2 text-purple font-sans font-semibold text-5xl">
        <div className="flex flex-col justify-center">
          <div className="flex justify-center">Sua jornada de</div>
          <div className="text-orange flex justify-center">conhecimento</div>
        </div>
        <div className="flex justify-center">
          começa &nbsp;<span className="text-orange">agora</span>!
        </div>
      </div>
      <div className="text-gray pt-5 basis-8/12 text-xl text-right px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 max-w-full">
        Realize suas avaliações de maneira <u>digital</u> e <u>intuitiva</u>.
        Com o <b>EXAME</b>, você terá acesso a uma plataforma <u>prática</u>{" "}
        para estudar.
      </div>
    </div>
  );
}
