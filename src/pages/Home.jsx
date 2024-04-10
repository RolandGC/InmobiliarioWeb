import React, { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import ReactPlayer from 'react-player';
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";


const options = [
    { value: 'all', label: 'Todos los inmuebles' },
    { value: 'house', label: 'Casas' },
    { value: 'department', label: 'Departamentos' },
    { value: 'office', label: 'Oficinas' },
    { value: 'lot', label: 'Terrenos' },
    { value: 'rental', label: 'Locales' },
    { value: 'rental', label: 'Condominio' },
    { value: 'rental', label: 'Hotel' },
    { value: 'rental', label: 'Oportunidades' },
    { value: 'rental', label: 'Proyectos' },
    { value: 'rental', label: 'Aires' },
    { value: 'rental', label: 'Edificios' }
];
const Home = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const selectOption = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };
    const [inputValue, setInputValue] = useState('');
    const [inputValue1] = useState('');
    const [inputValue2] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const products = [
        {
            id: 1,
            locate: 'Lima, Lima, Miraflores',
            href: '#',
            imageSrc: './src/assets/dep1.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: 'S/. 360,000.00  -  USD 100,000.00',
            ruc: 'Ruc 206042345433',
            society: 'Rg SAC',
            type: 'HOTEL EN VENTA',
            area: '5,642.00 m²',
        },
        {
            id: 2,
            locate: 'Lima, Lima, Miraflores',
            href: '#',
            imageSrc: './src/assets/dep1.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: 'S/. 360,000.00  -  USD 100,000.00',
            ruc: 'Ruc 206042345433',
            society: 'Rg SAC',
            type: 'HOTEL EN VENTA',
            area: '5,642.00 m²',
        },
        {
            id: 3,
            locate: 'Lima, Lima, Miraflores',
            href: '#',
            imageSrc: './src/assets/dep1.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: 'S/. 360,000.00  -  USD 100,000.00',
            ruc: 'Ruc 206042345433',
            society: 'Rg SAC',
            type: 'HOTEL EN VENTA',
            area: '5,642.00 m²',
        },

    ]

    return (

        <main className='bg-gray-200'>
            <div className="relative">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    autoPlay loop muted
                >
                    <source src="./src/assets/video.mp4" type="video/mp4" />
                </video>

                <div className="relative z-10 items-center justify-center p-8">
                    <h3 className="text-2xl font-bold  text-white  text-center p-8 pb-3">Nadie en el mundo vende más bienes raíces que RE/MAX</h3>
                    <div className=" inset-0 flex items-center justify-center text-white p-6">
                        <form action="" className="flex">
                            <div className="font-normal flex items-center justify-center">
                                <button className=" hover:bg-blue-700 text-white py-2 px-4 border border-white rounded-l">
                                    Venta
                                </button>
                                <button className=" hover:bg-blue-700 text-white border border-white py-2 px-4">
                                    Alquiler
                                </button>
                                <button className=" hover:bg-blue-700 text-white py-2 px-4 border-spacing-1 border border-white rounded-r">
                                    Anticresis
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className=" flex justify-center">
                        <div>
                            <button
                                type="button"
                                className="inline-flex justify-center w-full border-gray-300 shadow-sm px-4 py-3 bg-white text-sm font-medium text-gray-700 rounded-l"
                                id="options-menu"
                                aria-haspopup="true"
                                aria-expanded="true"
                                onClick={toggleDropdown}
                            >
                                {selectedOption.label}
                                <svg
                                    className="-mr-1 ml-2 h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                        {isOpen && (
                            <div
                                className=" absolute left-48  mt-2 w-46 shadow-lg bg-white ring-1 ring-black ring-opacity-10"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="options-menu"
                            >
                                <div className="py-1" role="none">
                                    {options.map((option) => (
                                        <a
                                            className={`${option.value === selectedOption.value
                                                ? 'bg-red-700 text-white'
                                                : 'text-gray-700 hover:bg-red-700 hover:text-white'
                                                } block px-4 py-2 text-sm`}
                                            role="menuitem"
                                            key={option.value}
                                            onClick={() => selectOption(option)}
                                        >
                                            {option.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                        <div className=''>
                            <input aria-haspopup="true"
                                aria-expanded="true"
                                type="text" placeholder="En donde buscar?" className="inline-flex justify-center w-full   shadow-sm px-2 py-3 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-100" />
                        </div>
                        <div>
                            <input aria-haspopup="true"
                                aria-expanded="true"
                                type="number" placeholder="Mínimo" className="inline-flex justify-center w-full border-none border-gray-300 shadow-sm px-2 py-3 bg-white text-sm font-normal text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-100" />
                        </div>
                        <div>
                            <input aria-haspopup="true"
                                aria-expanded="true"
                                type="number" placeholder="Máximo" className="inline-flex justify-center w-full border-none border-gray-300 shadow-sm px-4 py-3 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-100" />
                        </div>
                        <div>
                            <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className="inline-flex justify-center w-full rounded-r border-none border-gray-300 shadow-sm px-4 py-3 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-100"
                            >
                                <option>Soles</option>
                                <option>Dólares</option>
                            </select>
                        </div>
                    </div>
                    <div className="  items-center justify-center p-4 border-none mr-4">
                        <div className="flex justify-center items-center space-x-4">
                            <button
                                type="button"
                                className="px-2 py-3 bg-red-700 text-white hover:bg-blue-900 focus:outline-none rounded ml-4 flex items-center text-sm"
                            >
                                <FaLocationDot className="flex mr-1" /> BUSCAR ALREDEDOR MIO
                            </button>
                            <button
                                type="button"
                                className="px-16 py-3 bg-red-700 text-white hover:bg-blue-900 focus:outline-none rounded ml-4 items-center flex text-sm"
                            >
                                <FaSearch className='flex mr-1' /> BUSCAR
                            </button>
                        </div>
                    </div>
                    <div>
                        <h6 className="text-xs text-white text-center">MÁS FILTROS</h6>
                    </div>
                    <br />
                    <br />
                </div>
            </div>

            <div>
                <div className="">
                    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-700 text-center p-4">ÚLTIMAS PROPIEDADES</h2>

                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {products.map((product) => (
                                <div key={product.id} className="group relative">
                                    <div className=''>
                                        <div className="w-full overflow-hidden rounded-t-lg bg-gray-200 lg:h-80">
                                            <img
                                                src={product.imageSrc}
                                                alt={product.imageAlt}
                                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                            />
                                            <span className="bg-[#DC3545] absolute top-5 right-2 py-1 px-3 rounded-full text-white text-[10px]" >ID: {product.id}</span>
                                            <span className="bg-blue-800 absolute text-end bottom-36 right-2 py-1 px-3 rounded-full text-white text-[10px]" >{product.type}</span>
                                        </div>
                                    </div>
                                    <div className='bg-white p-2'>
                                        <div className="mt-4 flex justify-between">
                                            <div className='ml-3'>
                                                <p className="text-xs font-medium text-blue-700 mb-4">{product.price}</p>
                                                <h3 className="text-xs text-gray-600 mb-5 flex">
                                                    <span aria-hidden="true" className="absolute inset-0 flex-initial" />
                                                    <FaLocationDot className="mr-1 mt-1" />{product.locate}
                                                </h3>
                                                <p className="text-[10px] text-gray-400">{product.ruc}</p>
                                                <p className="text-[11px] text-gray-400">{product.society}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center p-4'>
                <h5 className='mr-1 text-xl text-gray-600'>Busca entre más de 17,976 Propiedades</h5>
                <button className='bg-red-600 p-3 text-white text-sm'>
                    VER MÁS
                </button>
            </div>

            <div className="justify-center items-center container mx-auto p-2 bg-cover">
                <section className='justify-center'>
                    <h2>ENCUENTRA TU LUGAR IDEAL</h2>
                    <p>Más de 2,729 Asesores calificados para tu búsqueda.</p>
                    <button className='bg-red-600 p-3 text-white text-sm'>
                        CONTACTANOS
                    </button>
                </section>
                <div>
                    <article>
                        <figure>
                            <img src="./src/assets/dep1.jpg" alt="" />
                        </figure>
                    </article>
                </div>
                <div>
                    <article>
                        <figure>
                            <img src="./src/assets/dep2.jpeg" alt="" />
                        </figure>
                    </article>
                </div>
            </div>

            <div className="">
                <div className="" >
                </div>
            </div>
        </main>
    )
}

export default Home