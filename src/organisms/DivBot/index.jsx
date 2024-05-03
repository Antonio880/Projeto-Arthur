
import Passos from "../../molecules/Passos"
import { useState } from "react"
export default function DivBot() {
    const [ passos ] = useState([
        { text: "Seu professor faz o upload das questões", number: "01" },
        { text: "A prova é gerada pelo sistema", number: "02" },
        { text: "Você realiza a prova pela plataforma", number: "03" },
    ])
    
    return (
        <div className="flex justify-center flex-col mb-20">
            <div className="text-purple font-sans font-semibold pl-[400px] text-5xl">
                <span className="text-purple">Como Funciona</span><span className="text-orange">?</span>
            </div>
            <div className="flex flex-row justify-center py-5">
                {
                    passos.map((passo, index) => {
                        return (
                            <Passos key={index} text={passo.text} number={passo.number} />
                        )
                    })
                }
            </div>
        </div>
    )
}