import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import Input from "../../atoms/Input";
import axios from "axios";
import { useUserContext } from "../../Context/ContextUser";
export default function FormLogin() {

    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { setUser } = useUserContext();
    const BASE_URL = "http://localhost:8080";
    const onSubmit = async data => {
        await axios.post(`${BASE_URL}/users/login`, data)
            .then(response => {
                setUser(response.data);
                console.log(response);
                navigate('/');
            })
            .catch(error => console.log(error));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex px-40">
                <div className='basis-1/2 pb-20'>
                    <img src="login_img.svg" alt="" />
                </div>
                <div className='flex justify-center basis-1/2'>
                    <div className="pt-20">
                        <Input
                            name="email"
                            image={"icone_email.svg"}
                            placeholder={"Email"}
                            register={register}
                            rules={{ required: "Email is required" }}
                            error={errors.email?.message} 
                        />
                        <Input
                            name="password"
                            image={"icone_senha.svg"}
                            placeholder={"Senha"}
                            register={register}
                            rules={{ required: "Password is required" }}
                            error={errors.password?.message}
                        />
                        <div className='flex justify-between'>
                            <button type="submit" className='py-1 px-10 border-2 border-purple bg-purple rounded-lg transition delay-200 hover:bg-darkPurple hover:border-darkPurple text-white'>Entrar</button>
                            <button type="button" className='mx-3 py-1 px-6 border-2 border-purple rounded-md text-purple' onClick={() => navigate('/sign')}>Cadastre-se</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}