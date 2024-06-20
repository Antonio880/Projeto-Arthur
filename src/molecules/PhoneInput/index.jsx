import TextTitle from '../../atoms/TextTitle/index.jsx';

export default function PhoneInput({ setPhoneNumber, phoneNumber }) {
    const formatPhoneNumber = (input) => {
        // Limpe qualquer caractere que não seja número
        const cleaned = ('' + input).replace(/\D/g, '');

        // Aplique a formatação (XX) XXXX-XXXX
        const match = cleaned.match(/^(\d{0,2})(\d{0,4})(\d{0,4})$/);
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
        <div className='flex justify-center w-full'>
            <TextTitle title={"Telefone"} />
            <div className='w-full'>
                <input
                    type="text"
                    value={phoneNumber}
                    onChange={handleInputChange}
                    placeholder="(XX) XXXX-XXXX"
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 pl-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6'
                />
            </div>
        </div>
    )
}