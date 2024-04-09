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
            price: '$200,000.00',
            ruc: 'Ruc 206042345433',
            society: 'Rg SAC',
            type: 'HOTEL EN VENTA',
            area: '5,642.00 m²',
        },

    ]

    return (

        <main>
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
                                className="origin-top-right relative right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="options-menu"
                            >
                                <div className="py-1" role="none">
                                    {options.map((option) => (
                                        <a
                                            href="#"
                                            className={`${option.value === selectedOption.value
                                                ? 'bg-gray-100 text-gray-900'
                                                : 'text-gray-700'
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
                        <div>
                            <input aria-haspopup="true"
                                aria-expanded="true"
                                type="text" placeholder="En donde buscar?" className="inline-flex justify-center w-full  border-gray-300 shadow-sm px-2 py-3 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-100" />
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
                                className="px-2 py-3 bg-red-700 text-white hover:bg-blue-900 focus:outline-none rounded ml-4 flex items-center"
                            >
                                <FaLocationDot className="flex" /> BUSCAR ALREDEDOR MIO
                            </button>
                            <button
                                type="button"
                                className="px-14 py-3 bg-red-700 text-white hover:bg-blue-900 focus:outline-none rounded ml-4 items-center flex"
                            >
                                <FaSearch className='flex' /> BUSCAR
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
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-700 text-center p-4">ÚLTIMAS PROPIEDADES</h2>

                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {products.map((product) => (
                                <div key={product.id} className="group relative">
                                    <div className=''>
                                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                            <img
                                                src={product.imageSrc}
                                                alt={product.imageAlt}
                                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                            />
                                            <span className="bg-[#DC3545] absolute top-5 right-2 py-1 px-3 rounded-md text-white text-xs" >ID: {product.id}</span>
                                            <span className="bg-blue-800 text-end  bottom-16 right-2 py-1 px-3 rounded-md text-white text-xs" >{product.type}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="mt-4 flex justify-between">
                                            <div>
                                                <h3 className="text-sm text-gray-700">
                                                    <a href={product.href}>
                                                        <span aria-hidden="true" className="absolute inset-0 flex-initial" />
                                                        <FaLocationDot className="flex" />{product.locate}
                                                    </a>
                                                </h3>
                                                <p className="mt-1 text-sm text-gray-500">{product.ruc}</p>
                                                <p className="mt-1 text-sm text-gray-500">{product.society}</p>
                                            </div>
                                            <p className="text-sm font-medium text-gray-900">{product.price}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className=" container mx-auto p-2 bg-cover">
                <section>
                    <h2>Contenido principal</h2>
                    <p>Nuestras tendencias</p>
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