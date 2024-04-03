import React, { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import backgroundVideo from '../assets/video.mp4'
import ReactPlayer from 'react-player';

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
            name: 'Basic Tee',
            href: '#',
            imageSrc: './src/assets/dep1.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },
        {
            id: 2,
            name: 'Basic Tee',
            href: '#',
            imageSrc: './src/assets/dep2.jpeg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },
        {
            id: 3,
            name: 'Basic Tee',
            href: '#',
            imageSrc: './src/assets/fotoFam.jpeg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },
    ]

    return (

        <main>
            <div className="relative">
                {/* Establece la posición relativa para que los elementos internos se puedan posicionar absolutamente */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    autoPlay
                    loop
                    muted
                >
                    <source src="./src/assets/video.mp4" type="video/mp4" />
                    {/* Asegúrate de tener los formatos de video correctos para la compatibilidad del navegador */}
                </video>

                <br /><br />
                <div className="relative z-10 items-center justify-center">
                    {/* Contenido de tu página aquí */}
                    <h3 className="text-4xl text-white text-center">Nadie en el mundo vende mas bienes raices que RE/MAX</h3>
                    <br />
                    <br />
                    <div className=" inset-0 flex items-center justify-center text-white">
                        <form action="" className="flex">
                            <div className="  flex items-center justify-center">
                                <button className=" hover:bg-blue-700 text-white font-bold py-2 px-4 border border-white rounded-l">
                                    Venta
                                </button>
                                <button className=" hover:bg-blue-700 text-white font-bold border border-white py-2 px-4">
                                    Alquiler
                                </button>
                                <button className=" hover:bg-blue-700 text-white font-bold py-2 px-4 border-spacing-1 border border-white rounded-r">
                                    Anticresis
                                </button>
                            </div>
                        </form>
                    </div>
                    <br />
                    <div className=" flex items-center justify-center">
                        <div>
                            <button
                                type="button"
                                className="inline-flex justify-center w-full rounded-md border-none border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
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
                                type="text" placeholder="En donde buscar?" className="inline-flex justify-center w-full rounded-md border-none border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" />
                        </div>
                        <div>
                            <input aria-haspopup="true"
                                aria-expanded="true"
                                type="text" placeholder="Mínimo" className="inline-flex justify-center w-full rounded-md border-none border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" />
                        </div>
                        <div>
                            <input aria-haspopup="true"
                                aria-expanded="true"
                                type="text" placeholder="Máximo" className="inline-flex justify-center w-full rounded-md border-none border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" />
                        </div>
                    </div>
                    <div className="  items-center justify-center p-4 border-none mr-4">
                        <div className="flex justify-center items-center space-x-4">
                            <button
                                type="button"
                                className="px-4 py-2 bg-red-700 text-white hover:bg-blue-900 focus:outline-none rounded ml-4"
                            >
                                Buscar alrededor mio
                            </button>
                            <button
                                type="button"
                                className="px-4 py-2 bg-red-700 text-white hover:bg-blue-900 focus:outline-none rounded ml-4"
                            >
                                Buscar
                            </button>
                        </div>
                    </div>
                    <div>
                        <h6 className="text-2xl text-white text-center">Más filtros</h6>
                    </div>
                    <br />
                    <br />
                </div>
            </div>

            <div className="justify-center">
                <h3 className="text-gray text-center">ÚLTIMAS PROPIEDADES</h3>
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

            <div>
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {products.map((product) => (
                                <div key={product.id} className="group relative">
                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                        />
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="text-sm text-gray-700">
                                                <a href={product.href}>
                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    {product.name}
                                                </a>
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                        </div>
                                        <p className="text-sm font-medium text-gray-900">{product.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
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