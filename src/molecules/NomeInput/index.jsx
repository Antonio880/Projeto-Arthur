import TextTitle from '../../atoms/TextTitle';

export default function NomeInput({ register, errors }) {
    return (
        <div className='flex justify-center w-full py-7'>
            <TextTitle title={"Nome"} />
            <div className='w-full pl-2'>
                <input 
                    type="text" 
                    className='w-full border-2 border-gray rounded-xl focus:ring-2 focus:ring-purple'
                    {...register('name', { required: 'Campo obrigatório' })}
                />
                {errors?.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>
        </div>
    )
}