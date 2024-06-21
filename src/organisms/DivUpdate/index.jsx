import NomeInput from "../../molecules/NomeInput"
import BioInput from "../../molecules/BioInput"
import PhoneInput from "../../molecules/PhoneInput";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useUserContext } from "../../Context/ContextUser";
import axios from "axios";

export default function DivUpdate({  }){
    const [phoneNumber, setPhoneNumber] = useState('');
    const { user, setUser } = useUserContext();
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();

    const onSubmit = (data) => {
        data.phoneNumber = phoneNumber.replace(/\D/g, '');
        axios.put(`http://localhost:8090/users/${user.id}`, data)
        .then(res => {
            console.log(res);
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
                    <BioInput register={register} />
                    <div className="h-full">
                        <PhoneInput phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
                        <button type="submit" className='ml-7 mt-6 py-1 px-3 border-2 border-purple bg-purple rounded-md transition delay-200 hover:bg-darkPurple hover:border-darkPurple text-white'>Salvar Alterações</button>
                    </div>
                </div>
            </form>
        </div>
    )
}