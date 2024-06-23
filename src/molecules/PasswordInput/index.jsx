import TextTitle from '../../atoms/TextTitle'

export default function PasswordInput({ register, erros, watch }) {
    return (
        <div className='flex justify-center flex-col pr-5'>
            <div className='flex justify-start pb-2'>
                <TextTitle title={"Password"} />
            </div>
            <div className='flex flex-col justify-start' >
                <input 
                    type="password"
                    {...register('password')}
                    className='w-[400px] h-[40px] border-2 border-gray rounded-xl focus:ring-2 focus:ring-purple' />
                
            </div>
            <div className='flex pt-4 justify-start pb-2'>
                <TextTitle title={"Confirm Password"} />
            </div>
            <div>
            <input
                    className="w-[400px] h-[40px] border-2 border-gray rounded-xl focus:ring-2 focus:ring-purple"
                    type={"password"} 
                    {...register("confirmPassword", {
                        required: "Confirm Password is required",
                        validate: value => value === watch('password') || "The passwords do not match"
                    })}
                />
                {erros.confirmPassword?.message}
            </div>

        </div>
    )
}