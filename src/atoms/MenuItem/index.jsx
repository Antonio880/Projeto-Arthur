import { Menu } from '@headlessui/react'

export default function MenuItem({ text, onClick, classNames }) {
    return (
        <Menu.Item>
            {({ active }) => (
                <a
                    href="#"
                    className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                        `${text === "Drop Account" ? 'hover:bg-[#ff7863]' : ''}` 
                    )}
                    onClick={() => onClick()}
                >
                    {text}
                </a>
            )}
        </Menu.Item>
    )
}

//