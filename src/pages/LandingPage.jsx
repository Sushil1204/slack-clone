import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import HeaderImage from '../assets/HeaderImage.png'
import SlackLogo from '../assets/SlackLogo.svg'
import CookieConsent from '../components/CookieConsent'

const LandingPage = () => {
    return (
        <>
            <section className="py-12 md:py-4 px-4">
                <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-between gap-8 lg:gap-12">
                    {/* Image Section */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src={HeaderImage}
                            alt="Slack interface"
                            className="rounded-lg max-w-full h-auto"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900">
                            Slack is where the future works
                        </h1>
                        <p className="mt-4 text-xl md:text-2xl text-gray-600">
                            Transform the way you work with one place for everyone and everything you need to get stuff done.
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <button className="w-full sm:w-auto bg-[#4A154B] px-6 py-3 font-medium uppercase text-white hover:bg-purple-800 rounded-md text-sm">
                                TRY FOR FREE
                            </button>
                            <button className="w-full sm:w-auto flex items-center gap-2 bg-[#1164A3] text-white pl-1 pr-4 py-1 text-sm font-medium uppercase rounded-md">
                                <span className="bg-white p-2 rounded-md">
                                    <FcGoogle className="w-6 h-6" />
                                </span>
                                SIGN UP WITH GOOGLE
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                        <img src={SlackLogo} alt="FOX" width={120} height={30} />
                        <img src={SlackLogo} alt="Lonely Planet" width={120} height={30} />
                        <img src={SlackLogo} alt="Intuit" width={120} height={30} />
                        <img src={SlackLogo} alt="Carvana" width={120} height={30} />
                        <img src={SlackLogo} alt="Kiva" width={120} height={30} />
                        <img src={SlackLogo} alt="Target" width={120} height={30} />
                        <img src={SlackLogo} alt="DevaCurl" width={120} height={30} />
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16 px-4">
                <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 lg:gap-12">

                    <div className="w-full md:w-1/2 relative aspect-video rounded-lg bg-gray-200 flex items-center justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>

                    </div>

                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                            Now is your moment to build a better tomorrow
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            We've seen what the future can be. Now it's time to decide what it will be.
                        </p>

                        <div className="mt-6">
                            <button className="w-full sm:w-auto rounded border border-[#611F69] px-6 py-3 font-medium uppercase hover:bg-purple-800 text-sm text-gray-700 hover:text-white">
                                Watch Video
                            </button>
                        </div>
                    </div>

                </div>
            </section>
            <CookieConsent />
        </>
    )
}

export default LandingPage
