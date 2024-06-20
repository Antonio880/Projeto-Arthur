import TextTitle from '../../atoms/TextTitle'

export default function BioInput({ }) {
    return (
        <div className='flex justify-center flex-col'>
            <div className='flex justify-start pb-2'>
                <TextTitle title={"Biografia"} />
            </div>
            <div className='flex justify-start' >
                <textarea 
                    type="text" 
                    className='w-[400px] h-[150px] border-2 border-gray rounded-xl focus:ring-2 focus:ring-purple' />
            </div>
        </div>
    )
}