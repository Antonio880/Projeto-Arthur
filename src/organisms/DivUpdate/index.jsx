import NomeInput from "../../molecules/NomeInput"
import BioInput from "../../molecules/BioInput"
import PhoneInput from "../../molecules/PhoneInput";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function DivUpdate({}){
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
                <PhoneInput phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
            </div>
        </div>
    )
}