export default function Retangulo({ text, estilo }) {
    return (
        <div className={"w-80 p-3 h-24 text-xl text-purple font-semibold border-4 border-purple rounded-3xl " + estilo}>
            <div className="pl-3 flex justify-center items-center">
                {text}
            </div>
        </div>
    )
}