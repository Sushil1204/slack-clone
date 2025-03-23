
import { useState } from "react"
import { IoCloseOutline } from "react-icons/io5"

export default function CookieConsent() {
    const [isOpen, setIsOpen] = useState(true)
    const [isMinimized, setIsMinimized] = useState(false)

    if (!isOpen) return

    return (
        <div className="fixed bottom-4 right-4 z-50 max-w-sm">
            {isMinimized ? (
                <div className="flex items-center gap-2 rounded-lg bg-white p-3 shadow-lg">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                        <span className="text-lg">🍪</span>
                    </div>
                    <div className="text-sm">
                        <p>Want to know more about something cool?</p>
                    </div>
                    <div
                        className="ml-auto h-8 w-8 rounded-full p-0"
                        onClick={() => setIsMinimized(false)}
                    >
                        <IoCloseOutline className="h-4 w-4" />
                    </div>
                </div>
            ) : (
                <div className="rounded-lg bg-white p-4 shadow-lg">
                    <div className="mb-3 flex items-center justify-between">
                        <div className="text-sm text-gray-500">This website uses cookies</div>
                        <div className="h-6 w-6 rounded-full p-0" onClick={() => setIsOpen(false)}>
                            <IoCloseOutline className="h-4 w-4" />
                        </div>
                    </div>
                    <p className="mb-3 text-sm text-gray-600">
                        This website uses cookies to enhance your browsing experience and analyze traffic on our website. You also
                        share information about your use of our site with our social media, advertising and analytics partners.
                    </p>
                    <div className="mb-3">
                        <div className="w-max p-2 rounded-sm text-white bg-purple-700 text-xs hover:bg-purple-800">ACCEPT ALL COOKIES</div>
                    </div>

                </div>
            )}
        </div>
    )
}

