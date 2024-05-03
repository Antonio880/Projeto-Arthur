import "./index.css"

export default function Footer() {
    return (
        <footer >
            <div className="bg-purple pt-12 flex justify-around text-white flex-row h-[270px] ">
                <div className="">
                    <div className="flex">
                        <h1 className="text-6xl font-extrabold ">EXAME</h1>
                        <img className="flex items-center pl-3 pt-4" src="ponto-branco.svg" alt="" />
                    </div>
                    <div className="text-xl">
                        <p>Ensinando com</p>
                        <p>desenvolvimento.</p>
                    </div>
                </div>
                <div className=" text-2xl">
                    <p>Projeto educacional</p>
                    <p>sem fins lucrativos.</p>
                </div>
            </div>
        </footer>
    )
}