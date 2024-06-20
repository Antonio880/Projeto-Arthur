import TextTitle from '../../atoms/TextTitle';

export default function NomeInput({ register }) {
    return (
        <div className='flex justify-center w-full py-7'>
            <TextTitle title={"Nome"} />
            <div className='w-full'>
                <input 
                    type="text" 
                    className='w-full border-2 border-gray rounded-xl focus:ring-2 focus:ring-purple'
                    {...register('name', { required: 'Campo obrigatório' })}
                />
            </div>
        </div>
    )
}