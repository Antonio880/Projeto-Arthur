import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Input from "../../atoms/Input";
import axios from "axios";
import { useUserContext } from "../../Context/ContextUser";

export default function FormLogin() {
    const navigate = useNavigate();
    const { register, handleSubmit, setError, formState: { errors } } = useForm();
    const { setUser } = useUserContext();
    const BASE_URL = "https://2e29-2804-14c-de89-8477-8a2a-7a54-296a-26c0.ngrok-free.app";

    const onSubmit = async data => {
        try {
            const response = await axios.post(`${BASE_URL}/users/login`, data);
            if (response.status === 200) {
                setUser(response.data);
                navigate("/");
            }
        } catch (error) {
            console.log(error);
            if (error.response && error.response.status === 404) {
                setError("label", { type: "manual", message: "Email e/ou Senha incorretos." });
            }
        }
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
                        {
                            errors.label && <p className="flex justify-center py-2 text-sm text-red-500">
                                {errors.label?.message}
                            </p>
                        }
                        <div className='flex justify-between pt-2'>
                            <button type="submit" className='py-1 px-10 border-2 border-purple bg-purple rounded-lg transition delay-200 hover:bg-darkPurple hover:border-darkPurple text-white'>Entrar</button>
                            <button type="button" className='mx-3 py-1 px-6 border-2 border-purple rounded-md text-purple' onClick={() => navigate('/sign')}>Cadastre-se</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}