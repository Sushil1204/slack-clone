import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const NotificationBanner = () => {
    return (
        <div className="bg-[#1164A3] px-4 py-5 text-white rounded-full my-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2 ml-4">
                    <span className="font-medium">
                        Slack is your digital HQ. Meet the new features keeping teams connected in a work-from-anywhere world.
                    </span>
                    <Link to="#" className="flex items-center font-medium hover:underline">
                        Let&apos;s go <span className="ml-1">→</span>
                    </Link>
                </div>
                <button className="text-white mr-4">
                    <IoCloseOutline className="h-7 w-7" />
                </button>
            </div>
        </div>
    )
}

export default NotificationBanner