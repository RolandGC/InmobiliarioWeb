import React, { useEffect, useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { ImMail } from "react-icons/im";
import { BiSolidPhoneCall } from "react-icons/bi";


const links = [              //avace 27-03
    {
        link: "/",
        text: "INICIO",
        id: 1,
    },
    {
        link: "/buscar",
        text: "BUSCAR PROPIEDADES",
        id: 2,
    },
    {
        link: "/oficinas",
        text: "OFICINAS",
        id: 3,
    },
    {
        link: "/asesores",
        text: "ASESORES",
        id: 4,
    },
    {
        link: "/contacto",
        text: "CONTACTOS",
        id: 5,
    },
];

const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [windowDimension, setWindowDimension] = useState({
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
    });

    const detectZise = () => {
        setWindowDimension({
            innerHeight: window.innerHeight,
            innerWidth: window.innerWidth,
        });
    };

    useEffect(() => {
        window.addEventListener("resize", detectZise);
        return () => {
            window.addEventListener("resize", detectZise);
        };
    }, [windowDimension.innerWidth]);

    return (
        <div>
            <div className="bg-blue-900 p-2">
                <div className="flex items-center justify-end text-white ml-4 text-sm">
                    <div className="ml-4 text-xs">
                        <span>
                            Sé un asesor
                        </span>
                    </div>
                    <div className="ml-4 text-xs">
                        <span>
                            Franquicias
                        </span>
                    </div>
                    <FaFacebookF className="ml-4 " />
                    <FaTiktok className="ml-4" />
                    <FaYoutube className="ml-4" />
                    <FaInstagram className="ml-4" />
                    <IoMdLogIn className='ml-4 mr-1' />
                    <div className="ml-1 mr-8 text-xs">
                        <span>
                            Mi RE/MAX
                        </span>
                    </div>

                </div>
            </div>
            <div className="flex p-2">
                <div className=" ml-4 items-center p-2">
                    <Link to={"/"} className="text-white justify-start font-semibold text-xl " >
                        <img src="./src/assets/logo.svg" alt="" width="150" height="150" />
                    </Link>
                </div>
                <div className={
                    !isMenuOpen
                        ? "flex  items-center w-full px-4 justify-end bg-white"
                        : "flex flex-col w-full px-4 justify-around bg-blue-800"
                } >
                    {
                        windowDimension.innerWidth > 768 ?
                            links.map((l) => (
                                <Link className="text-sm font-normal justify-end text-gray-500 hover:underline ml-2 mr-2 pl-2 pr-2" to={l.link} key={l.id}>{l.text}</Link>
                            )) :
                            isMenuOpen &&
                            links.map((l) => (
                                <Link className="text-m text-gray-400 font-semibold" to={l.link} key={l.id}>{l.text}</Link>
                            ))
                    }
                    {!isMenuOpen && windowDimension.innerWidth < 768 ? (
                        <AiOutlineMenu cursor={"pointer"} size={24} color="blue-900" onClick={() => setIsMenuOpen(true)} />
                    ) : (
                        windowDimension.innerWidth < 768 && (
                            <AiOutlineClose cursor={"pointer"} size={24} color="blue-900" onClick={() => setIsMenuOpen(false)} />))}
                </div>
            </div>

            {/* avance 27-03 */}

            <main className='bg-gray-300'>
                <Outlet />
            </main>
            <footer class="bg-blue-800 relative">
                <div className='text-center inset-x-0 mx-auto bg-white p-4  '>
                    <ul className='justify-center flex text-blue-800 text-3xl bg-white p-4 shadow-md absolute top-[-40px] right-[35%] pl-10 pr-10 rounded-lg'>
                        <li>
                            <FaFacebookF className="ml-1 " />
                        </li>
                        <li>
                            <FaYoutube className="ml-8" />
                        </li>
                        <li>
                            <FaTiktok className="ml-8" />
                        </li>
                        <li>
                            <FaInstagram className="ml-8" />
                        </li>
                    </ul>
                </div>
                <div className=' bg-white'>
                    <div className='absolute bottom-14 right-2' width="77" height="96">
                        <img src="./src/assets/globo.svg" alt="Animated Image" width="116" height="145" className='animate-float' />
                    </div>
                    <div className='flex bg-white'>
                        <div className='bg-white p-14 text-gray-400 text-sm flex-1'>
                            <nav>
                                <p className='p-2 hover:text-blue-700'>ADQUIERE UNA FRANQUICIA</p>
                                <p className='p-2 hover:text-blue-700 '>NOSOTROS</p>
                                <p className='p-2 hover:text-blue-700'>NOTICIAS</p>
                                <p className='p-2 hover:text-blue-700'>OFICINAS</p>
                                <p className='p-2 hover:text-blue-700'>CONTACTANOS</p>
                                <p className='p-2 hover:text-blue-700'>SÉ UN ASESOR</p>
                                <p className='p-2 hover:text-blue-700'>BUSCA UN ASESOR</p>
                                <p className='p-2 hover:text-blue-700'>POLITICA DE PRIVACIDAD</p>
                            </nav>
                        </div>
                        <div className='p-14 flex-1'>
                            <p className='text-red-700'>INFORMES</p>
                            <ul>
                                <li className='flex items-center mb-2'>
                                    <div className='m-3'>
                                        <BiSolidPhoneCall className='text-red-500 text-2xl' />
                                    </div>
                                    <div className='text-gray-500 text-sm'>
                                        <h5>TELEFONO</h5>
                                        (511) 4444 555
                                    </div>
                                </li>
                                <li className='flex items-center'>
                                    <div className='bg-white m-3'>
                                        <ImMail className='text-white bg-red-500 text-2xl' />
                                    </div>
                                    <div className='flex flex-col text-xs'>
                                        <h5 className='text-gray-500 whitespace-normal'>EMAILS</h5>
                                        <a className='text-blue-500' href="info@remax.net.pe">info@remax.net.pe</a>
                                        <a className='text-blue-500' href="">ventas@remax.net.pe</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container text-xs mx-auto flex justify-center text-white bg-blue-800 p-5">
                    <nav>
                        <span>2024 Columba Technology ® Todos los derechos reservados, Cada Oficina es de propiedad y operación Independientes.</span>
                    </nav>
                </div>
            </footer>
        </div>
    )
}
export default Layout



// const navigation = [
//     { name: 'Dashboard', href: '#', current: true },
//     { name: 'Team', href: '#', current: false },
//     { name: 'Projects', href: '#', current: false },
//     { name: 'Calendar', href: '#', current: false },
// ]

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }

// export default function Layout() {
//     return (
//         <Disclosure as="nav" className="bg-gray-800">
//             {({ open }) => (
//                 <>
//                     <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//                         <div className="relative flex h-16 items-center justify-between">
//                             <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                                 {/* Mobile menu button*/}
//                                 <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                                     <span className="absolute -inset-0.5" />
//                                     <span className="sr-only">Open main menu</span>
//                                     {open ? (
//                                         <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                                     ) : (
//                                         <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                                     )}
//                                 </Disclosure.Button>
//                             </div>
//                             <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//                                 <div className="flex flex-shrink-0 items-center">
//                                     <img
//                                         className="h-8 w-auto"
//                                         src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
//                                         alt="Your Company"
//                                     />
//                                 </div>
//                                 <div className="hidden sm:ml-6 sm:block">
//                                     <div className="flex space-x-4">
//                                         {navigation.map((item) => (
//                                             <a
//                                                 key={item.name}
//                                                 href={item.href}
//                                                 className={classNames(
//                                                     item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                                                     'rounded-md px-3 py-2 text-sm font-medium'
//                                                 )}
//                                                 aria-current={item.current ? 'page' : undefined}
//                                             >
//                                                 {item.name}
//                                             </a>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//                                 <button
//                                     type="button"
//                                     className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                                 >
//                                     <span className="absolute -inset-1.5" />
//                                     <span className="sr-only">View notifications</span>
//                                     <BellIcon className="h-6 w-6" aria-hidden="true" />
//                                 </button>

//                                 {/* Profile dropdown */}
//                                 <Menu as="div" className="relative ml-3">
//                                     <div>
//                                         <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                                             <span className="absolute -inset-1.5" />
//                                             <span className="sr-only">Open user menu</span>
//                                             <img
//                                                 className="h-8 w-8 rounded-full"
//                                                 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                                                 alt=""
//                                             />
//                                         </Menu.Button>
//                                     </div>
//                                     <Transition
//                                         as={Fragment}
//                                         enter="transition ease-out duration-100"
//                                         enterFrom="transform opacity-0 scale-95"
//                                         enterTo="transform opacity-100 scale-100"
//                                         leave="transition ease-in duration-75"
//                                         leaveFrom="transform opacity-100 scale-100"
//                                         leaveTo="transform opacity-0 scale-95"
//                                     >
//                                         <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                                             <Menu.Item>
//                                                 {({ active }) => (
//                                                     <a
//                                                         href="#"
//                                                         className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
//                                                     >
//                                                         Your Profile
//                                                     </a>
//                                                 )}
//                                             </Menu.Item>
//                                             <Menu.Item>
//                                                 {({ active }) => (
//                                                     <a
//                                                         href="#"
//                                                         className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
//                                                     >
//                                                         Settings
//                                                     </a>
//                                                 )}
//                                             </Menu.Item>
//                                             <Menu.Item>
//                                                 {({ active }) => (
//                                                     <a
//                                                         href="#"
//                                                         className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
//                                                     >
//                                                         Sign out
//                                                     </a>
//                                                 )}
//                                             </Menu.Item>
//                                         </Menu.Items>
//                                     </Transition>
//                                 </Menu>
//                             </div>
//                         </div>
//                     </div>

//                     <Disclosure.Panel className="sm:hidden">
//                         <div className="space-y-1 px-2 pb-3 pt-2">
//                             {navigation.map((item) => (
//                                 <Disclosure.Button
//                                     key={item.name}
//                                     as="a"
//                                     href={item.href}
//                                     className={classNames(
//                                         item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                                         'block rounded-md px-3 py-2 text-base font-medium'
//                                     )}
//                                     aria-current={item.current ? 'page' : undefined}
//                                 >
//                                     {item.name}
//                                 </Disclosure.Button>
//                             ))}
//                         </div>
//                     </Disclosure.Panel>
//                 </>
//             )}
//         </Disclosure>
//     )
// }


