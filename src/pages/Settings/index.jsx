import { useForm } from "react-hook-form";
import DivUpdate from "../../organisms/DivUpdate";
export default function Settings({ }) {

    const { register } = useForm();

    return (
        <div>
            <div className="flex flex-col justify-center">
                <div className="flex justify-center py-10">
                    <img src="icon_aluno.svg" className=" w-[400px]" alt="" />
                </div>
                <div className="flex justify-center">
                    <DivUpdate />
                </div>
            </div>
        </div>
    )
}