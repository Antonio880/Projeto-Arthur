export default function DivSup() {
    return (
        <div className=" h-48 flex flex-row ">
            <div className="flex flex-col justify-center basis-1/2 text-purple font-sans font-semibold text-4xl">
                <div className="flex flex-col justify-center">
                    <div className="flex justify-center">Sua jornada de </div>
                    <div className="text-orange flex justify-center">conhecimento</div>
                </div>
                <div className="flex justify-center">
                    começa &nbsp;<span className="text-orange">agora</span>!
                </div>
            </div>
            <div className="basis-1/2 text-gray text-xl flex justify-center">
                Realize suas avaliações de maneira &nbsp;<span className="underline">digital</span>&nbsp; e &nbsp;<span className="underline">intuitiva</span>. Com o <span className="font-bold">EXAME</span>, você terá acesso a uma plataforma prática para estudar.
            </div>
        </div>
    )
}