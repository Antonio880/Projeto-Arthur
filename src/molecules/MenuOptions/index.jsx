import { Fragment, useEffect } from 'react'
import { Menu, Transition } from '@headlessui/react'
import MenuItem from '../../atoms/MenuItem'
import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../../Context/ContextUser';
import axios from 'axios'
import Cookies from 'js-cookie'

export default function MenuOptions({ text }) {

    const navigate = useNavigate();
    const { user, setUser } = useUserContext();
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const dropAccount = async () => {
        axios.delete(`http://localhost:8090/users/${user.id}`);
        navigate("/"); 
        setUser(null);
        Cookies.remove('token'); 
    };

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition hover:text-white hover:bg-purple">
                    {text}
                    <img src='chevron_down.svg' className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <MenuItem text={"Settings"} onClick={() => { navigate("/settings") }} classNames={classNames} />
                    </div>
                    <div className="py-1">
                        <MenuItem text={"Sign Out"} onClick={() => { navigate("/"); setUser(null) }} classNames={classNames} />
                    </div>
                    <div className="py-1">
                        <MenuItem text={"Drop Account"} onClick={() => dropAccount()} classNames={classNames} />
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
