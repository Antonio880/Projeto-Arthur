import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    
    return (
        <div>
            <header className="bg-indigo-200 h-20 flex justify-between px-20">
                <div className="flex justify-center cursor-pointer">
                    <h1 className="flex items-center text-purple text-4xl font-extrabold" onClick={() => navigate("/")}>EXAME</h1>
                    <div className="flex items-center pl-3 pt-4">
                        <img src="ponto.svg" className="" alt="" />
                    </div>
                </div>
                <div className="flex justify-around items-center">
                    <button className="mx-3 py-1 px-2 border-2 border-purple rounded-md text-purple hover:bg-purple transition delay-150 hover:text-white " onClick={() => navigate("sign")}>Cadastre-se</button>
                    <button className="py-1 px-3 border-2 border-purple bg-purple rounded-md transition delay-200 hover:bg-darkPurple hover:border-darkPurple text-white">Login</button>
                </div>
            </header>
        </div>
    )
}