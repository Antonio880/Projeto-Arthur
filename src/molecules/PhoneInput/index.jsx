import TextTitle from '../../atoms/TextTitle/index.jsx';

export default function PhoneInput({ setPhoneNumber, phoneNumber }) {
    const formatPhoneNumber = (input) => {
        // Limpe qualquer caractere que não seja número
        const cleaned = ('' + input).replace(/\D/g, '');

        // Aplique a formatação (XX) XXXX-XXXX
        const match = cleaned.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);
        if (match) {
            return !match[2] ? `(${match[1]}` : `(${match[1]}) ${match[2]}` + (match[3] ? `-${match[3]}` : '');
        }
        return '';
    };

    // Manipulador de evento para alterações no input
    const handleInputChange = (event) => {
        const input = event.target.value;
        const formattedInput = formatPhoneNumber(input);
        setPhoneNumber(formattedInput);
    };

    return (
        <div className='flex w-full ml-7 flex-col'>
            <div className='flex justify-start pb-2'>
                <TextTitle title={"Telefone"} />
            </div>
            <div className='flex justify-start' >
                <input
                    type="text"
                    value={phoneNumber}
                    onChange={handleInputChange}
                    placeholder="(XX) XXXX-XXXX"
                    className='block w-full py-1.5 text-gray-900 border-2 border-gray rounded-xl focus:ring-2 focus:ring-purple'
                />
            </div>
        </div>
    )
}