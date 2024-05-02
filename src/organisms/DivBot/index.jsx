
import Passos from "../../molecules/Passos"
import { useState } from "react"
export default function DivBot() {
    const [ passos ] = useState([
        { text: "Seu professor faz o upload das questões", number: "01" },
        { text: "A prova é gerada pelo sistema", number: "02" },
        { text: "Você realiza a prova pela plataforma", number: "03" },
    ])
    
    return (
        <div className="flex flex-col">
            <div className="text-purple font-sans font-semibold text-4xl">
                <span className="text-purple">Como Funciona</span><span className="text-orange">?</span>
            </div>
            <div className="flex flex-row justify-center">
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