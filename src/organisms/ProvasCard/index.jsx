import moment from 'moment';
import { useEffect } from 'react';

export default function ProvasCard({ prova }){

    

    return(
        <div>
            <div className="relative w-64 mx-3 bg-[#d9d9d9] p-3 my-3 rounded-b-3xl rounded-3xl flex flex-col items-center justify-start">
            
                <h3 className="font-semibold text-purple text-3xl">
                    {prova?.category}
                </h3>
                <p className="text-purple pl-4">{prova?.createdAt !== undefined && moment(prova?.createdAt).format('DD/MM/YYYY')}</p>
                <p className="text-purple pl-4">{prova?.questionCount} questões</p>
                <div className='absolute right-4 cursor-pointer'>
                    <img src="config.svg" alt="" />
                </div>
            </div>
        </div>
    )
}