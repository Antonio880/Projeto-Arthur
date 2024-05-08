import { useNavigate } from "react-router-dom"

export default function DivMid() {

    const navigate = useNavigate();

    return(
        <div className="flex flex-row justify-center">
            <div>
                <img src="exame.svg" alt="" />
            </div>
            <div>
                <img src="poligono.svg" alt="" />
            </div>
            <div className="cursor-pointer pl-5 pr-3" onClick={() => navigate("/login")}>
                <img src="area_do_professor.svg" alt="" />
            </div>
            <div className="cursor-pointer pr-5" onClick={() => navigate("/login")}>
                <img src="area_do_aluno.svg" alt="" />
            </div>
            <div>
                <img src="papoco.svg" alt="" />
            </div>
        </div>
    )
}