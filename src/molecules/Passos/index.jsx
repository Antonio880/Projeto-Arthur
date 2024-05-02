import Bola from "../../atoms/Bola"
import Retangulo from "../../atoms/Retangulo"

export default function Passos({ text, number }) {
    return (
        <div className="relative w-96 h-28">
                <Bola estilo={"absolute top-1 left-5"} number={number} />
                <div className="flex justify-center items-center pt-3">
                    <Retangulo text={text} estilo={""} />
                </div>
        </div>
    )
}