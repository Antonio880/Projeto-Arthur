import { useNavigate } from "react-router-dom"
import Input from "../../atoms/Input";
export default function FormLogin() {
    
    const navigate = useNavigate();
    
    return (
        <div className="flex px-40">
            <div className='basis-1/2 pb-20'>
                <img src="login_img.svg" alt="" />
            </div>
            <div className='flex justify-center basis-1/2'>
                <div className="pt-20">
                    <Input image={"icone_email.svg"} placeholder={"Email"} />
                    <Input image={"icone_senha.svg"} placeholder={"Senha"} />
                    <div className='flex justify-between'>
                        <button className='py-1 px-10 border-2 border-purple bg-purple rounded-lg transition delay-200 hover:bg-darkPurple hover:border-darkPurple text-white'>Entrar</button>
                        <button className='mx-3 py-1 px-6 border-2 border-purple rounded-md text-purple' onClick={() => navigate('/sign')}>Cadastre-se</button>
                    </div>
                </div>
            </div>
        </div>
    )
}