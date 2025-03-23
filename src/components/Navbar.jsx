import React from 'react'
import SlackLogo from '../assets/SlackLogo.svg'
import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-between p-4'>
            {/* left side */}
            <div className="flex items-center justify-between w-full md:w-auto gap-4 md:gap-8">
                <Link to="/" className="flex items-center">
                    <img src={SlackLogo} alt="Slack" width={120} height={30} />
                </Link>
                <nav className="hidden md:flex">
                    <ul className="flex space-x-6">
                        <li>
                            <Link to="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                                Product <span className="text-xs">▼</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                                Enterprise
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                                Resources
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                                Pricing
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-auto gap-2 md:gap-4">
                <button className="hidden md:flex">
                    <FiSearch className="h-5 w-5 text-gray-500" />
                </button>
                <Link to="#" className="hidden text-sm font-medium text-gray-700 hover:text-gray-900 md:block">
                    Sign in
                </Link>
                <Link
                    to="#"
                    className="hidden rounded border border-[#611F69] px-4 py-2.5 text-xs font-medium uppercase text-gray-700 hover:bg-gray-50 md:block"
                >
                    Talk to sales
                </Link>
                <Link
                    to="#"
                    className="hidden rounded-sm bg-[#4A154B] px-4 py-2.5 text-xs font-medium uppercase text-white hover:bg-purple-800 md:block"
                >
                    Talk to sales
                </Link>
            </div>
        </div>
    )
}

export default Navbar