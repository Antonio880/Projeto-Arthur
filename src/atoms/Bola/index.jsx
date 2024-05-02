export default function Bola({ number, estilo }) {
    return (
        <div className={"w-9 h-9 bg-orange rounded-3xl text-white flex justify-center items-center " + estilo}>

            {number}

        </div>
    )
}