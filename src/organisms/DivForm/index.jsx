import { useEffect } from 'react';
import Input from '../../atoms/Input';

export default function DivForm({ typeUser, setTypeUser }) {

    return (
        <div className="flex flex-row w-full">
            <div className='flex justify-center basis-1/2'>
                <div className="pt-20">
                    <Input image={"icone_nome.svg"} placeholder={"Nome"} />
                    <Input image={"icone_email.svg"} placeholder={"Email"} />
                    <Input image={"icone_senha.svg"} placeholder={"Senha"} />
                    <Input image={"icone_senha.svg"} placeholder={"Confirme a Senha"} />
                    <div className='flex justify-between'>
                        <button className='py-1 px-3 border-2 border-purple bg-purple rounded-md transition delay-200 hover:bg-darkPurple hover:border-darkPurple text-white'>Cadastre-se</button>
                        <button className='mx-3 py-1 px-2 border-2 border-purple rounded-md text-purple' onClick={() => setTypeUser(!typeUser)}>{ typeUser === true ? "Sou Estudante" : "Sou Professor" }</button>
                    </div>
                </div>
            </div>
            <div className='basis-1/2 pb-20'>
                {
                    typeUser ?
                        (
                            <img src="prof_img.svg" alt="" />    
                        ) :
                        (
                            <img src="aluno_img.svg" alt="" />
                        )
                }
            </div>
        </div>
    )
}