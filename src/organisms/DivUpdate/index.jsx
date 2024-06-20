import NomeInput from "../../molecules/NomeInput"
import BioInput from "../../molecules/BioInput"
import PhoneInput from "../../molecules/PhoneInput";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function DivUpdate({  }){
    const [phoneNumber, setPhoneNumber] = useState('');
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();

    return (
        <div className="flex w-[800px] justify-center flex-col pb-10">
            <NomeInput register={register} />
            <div className="flex">
                <BioInput register={register} />
                <div className="h-full">
                    <PhoneInput phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
                    <button type="submit" className='ml-7 mt-6 py-1 px-3 border-2 border-purple bg-purple rounded-md transition delay-200 hover:bg-darkPurple hover:border-darkPurple text-white'>Salvar Alterações</button>
                </div>
            </div>
        </div>
    )
}