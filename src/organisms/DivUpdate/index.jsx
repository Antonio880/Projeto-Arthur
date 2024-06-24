import NomeInput from "../../molecules/NomeInput"
import BioInput from "../../molecules/BioInput"
import PasswordInput from "../../molecules/PasswordInput"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../Context/ContextUser";
import axios from "axios";

export default function DivUpdate({  }){
    const navigate = useNavigate();
    const { user, setUser } = useUserContext();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        axios.put(`https://2e29-2804-14c-de89-8477-8a2a-7a54-296a-26c0.ngrok-free.app/users/${user.id}`, {
            email: data.email,
            username: data.name,
            password: data.password
        })
        .then(res => {
            console.log(res.data);
            setUser(res.data);
            navigate('/home');
        })
        .catch(err => {
            console.log(err);
            alert('Erro ao atualizar dados');
        })
    };
    return (
        <div className="flex w-[800px] justify-center flex-col pb-10">
            <form onSubmit={handleSubmit(onSubmit)}>
                <NomeInput register={register} errors={errors} />
                <div className="flex">
                    <PasswordInput register={register} erros={errors} watch={watch}/>
                    
                    <div className="h-full  items-center">
                    <BioInput register={register} />    
                        <button type="submit" className='mt-16 py-1 px-3 border-2 border-purple bg-purple rounded-md transition delay-200 hover:bg-darkPurple hover:border-darkPurple text-white'>Salvar Alterações</button>
                    </div>
                </div>
            </form>
        </div>
    )
}