import { useNavigate } from "react-router-dom";
import { usePageContext } from "../../Context/PageContext";
import { useUserContext } from "../../Context/ContextUser";
import { useEffect } from "react";
import MenuOptions from "../../molecules/MenuOptions";
export default function Header() {
    const navigate = useNavigate();
    const { page, setPage } = usePageContext();
    const { user } = useUserContext();

    return (
        <div>
            <header className="bg-indigo-200 h-20 flex justify-between px-20">
                <div className="flex justify-center cursor-pointer">
                    <h1 className="flex items-center text-purple text-4xl font-extrabold" onClick={() => {navigate("/"); setPage("/")}}>EXAME</h1>
                    <div className="flex items-center pl-3 pt-4">
                        <img src="ponto.svg" className="" alt="" />
                    </div>
                </div>
                {
                    user === null ? (
                        page === "login" ? (
                            <div className="flex justify-around items-center">
                                <p className="text-gray text-lg flex items-center justify-center pr-3">Não tem uma Conta?</p>
                                <button className="py-1 px-3 border-2 border-purple bg-purple rounded-md transition delay-200 hover:bg-darkPurple hover:border-darkPurple text-white" onClick={() => { navigate("/sign"); setPage("sign") }}>Cadastre-se</button>
                            </div>
                        ) : page === "sign" ? (
                            <div className="flex justify-around items-center">
                                <p className="text-gray text-lg flex items-center justify-center pr-3">Já tem uma conta?</p>
                                <button className="py-1 px-3 border-2 border-purple bg-purple rounded-md transition delay-200 hover:bg-darkPurple hover:border-darkPurple text-white" onClick={() => { navigate("/login"); setPage("login") }}>Login</button>
                            </div>
                        ) : (
                            <div className="flex justify-around items-center">
                                <button className="mx-3 py-1 px-2 border-2 border-purple rounded-md text-purple hover:bg-purple transition delay-150 hover:text-white " onClick={() => { navigate("/sign"); setPage("sign") }}>Cadastre-se</button>
                                <button className="py-1 px-3 border-2 border-purple bg-purple rounded-md transition delay-200 hover:bg-darkPurple hover:border-darkPurple text-white" onClick={() => { navigate("/login"); setPage("login") }}>Login</button>
                            </div>
                        )
                    ) : (
                        <div className="flex justify-center items-center">
                            <MenuOptions text={user.username} />
                        </div>
                    )
                }
            </header>
        </div>
    );
}