import TextTitle from '../../atoms/TextTitle'

export default function BioInput({ register }) {
    return (
        <div className='flex justify-center flex-col'>
            <div className='flex justify-start pb-2'>
                <TextTitle title={"Email"} />
            </div>
            <div className='flex justify-start' >
                <input 
                    type="text"
                    {...register('email')}
                    className='w-[400px] h-[40px] border-2 border-gray rounded-xl focus:ring-2 focus:ring-purple' />
            </div>
        </div>
    )
}