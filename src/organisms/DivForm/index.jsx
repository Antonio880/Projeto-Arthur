import { useEffect } from 'react';
import Input from '../../atoms/Input';
import { useForm } from 'react-hook-form';

export default function DivForm({ typeUser, setTypeUser }) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row w-full">
            <div className='flex justify-center basis-1/2'>
                <div className="pt-20">
                <Input
                        name="nome"
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
                    <div className='flex justify-between'>
                        <button type="submit" className='py-1 px-3 border-2 border-purple bg-purple rounded-md transition delay-200 hover:bg-darkPurple hover:border-darkPurple text-white'>Cadastre-se</button>
                        <button type="button" className='mx-3 py-1 px-2 border-2 border-purple rounded-md text-purple' onClick={() => setTypeUser(!typeUser)}>{ typeUser === true ? "Sou Estudante" : "Sou Professor" }</button>
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