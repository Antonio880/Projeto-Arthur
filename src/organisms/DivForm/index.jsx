import Input from '../../atoms/Input';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useUserContext } from '../../Context/ContextUser';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function DivForm({ typeUser, setTypeUser }) {
    const { register, handleSubmit, watch, setError, formState: { errors } } = useForm();
    const { user, setUser } = useUserContext();
    const navigate = useNavigate();
    const BASE_URL = "http://localhost:8080";
    const onSubmit = async data => {
        console.log(data)
        data.role = typeUser ? "professor" : "student";
        await axios.post(`${BASE_URL}/users`, data)
            .then(response => {
                setUser(response.data);
                console.log(response);
                navigate('/');
            })
            .catch(error => {
                console.log(error);
                if (error.response && error.response.status === 500) {
                    setError("label", { type: "manual", message: "Email já Cadastrado" });
                }
            });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row w-full">
            <div className='flex justify-center basis-1/2'>
                <div className="pt-20">
                    <Input
                        name="username"
                        image={"icone_nome.svg"}
                        placeholder={"Nome"}
                        register={register}
                        rules={{ required: "Nome é um campo obrigatório" }}
                        error={errors.nome?.message}
                    />
                    <Input
                        name="email"
                        image={"icone_email.svg"}
                        placeholder={"Email"}
                        register={register}
                        rules={{ required: "Email is required" }}
                        error={errors.email?.message} // Passando a mensagem de erro para o componente
                    />
                    <Input
                        name="password"
                        image={"icone_senha.svg"}
                        placeholder={"Senha"}
                        register={register}
                        rules={{ required: "Password is required" }}
                        error={errors.password?.message}
                    />
                    <Input
                        name="confirmPassword"
                        image={"icone_senha.svg"}
                        placeholder={"Confirme a Senha"}
                        register={register}
                        rules={{
                            required: "Confirm Password is required",
                            validate: value => value === watch('password') || "The passwords do not match"
                        }}
                        error={errors.confirmPassword?.message}
                    />
                    {
                        errors.label && <p className="flex justify-center py-2 text-sm text-red-500">
                            {errors.label?.message}
                        </p>
                    }
                    <div className='flex justify-between pt-5'>
                        <button type="submit" className='py-1 px-3 border-2 border-purple bg-purple rounded-md transition delay-200 hover:bg-darkPurple hover:border-darkPurple text-white'>Cadastre-se</button>
                        <button type="button" className='mx-3 py-1 px-2 border-2 border-purple rounded-md text-purple' onClick={() => setTypeUser(!typeUser)}>{typeUser === true ? "Sou Estudante" : "Sou Professor"}</button>
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
        </form>
    );
}