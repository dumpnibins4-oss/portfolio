
import { useState } from "react"
import { BACKEND_URL } from "../../../../config"
import Swal from "sweetalert2"

const mailIcon = "./images/mail.png"
const phoneIcon = "./images/phone.png"
const locationIcon = "./images/location.png"
const sendIcon = "./images/send.png"

export default function ContactSection() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await fetch(BACKEND_URL + '/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, message })
            })

            const data = await response.json()

            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent!',
                    text: 'Thank you for reaching out. I\'ll get back to you soon!',
                    confirmButtonColor: '#ef4444',
                    background: '#1f2937',
                    color: '#fff'
                })
                setName("")
                setEmail("")
                setMessage("")
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: data.error || 'Failed to send message',
                    confirmButtonColor: '#ef4444',
                    background: '#1f2937',
                    color: '#fff'
                })
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Network Error',
                text: error,
                confirmButtonColor: '#ef4444',
                background: '#1f2937',
                color: '#fff'
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <>
            <div id="contacts" className="flex flex-col items-start justify-start w-full xl:h-screen px-5 xl:px-40 gap-15">
                <div className="w-full xl:w-1/2 flex flex-row items-center justify-start gap-5">
                    <h1 className="text-white text-2xl font-semibold"><span className="text-red-500">#</span>contacts</h1>
                    <div className="flex-grow bg-red-500 h-[1px] rounded-full"></div>
                </div>
                <div className="flex flex-col item-center justify-start w-full h-full gap-10 xl:px-40">
                    <div className="flex flex-col items-center justify-center gap-5">
                        <h2 className="text-2xl text-white font-semibold">Get In Touch</h2>
                        <p className="text-white text-center">Have a project in mind or want to collaborate? Feel free to reach out. I'd love to hear from you!</p>
                    </div>
                    <div className="flex flex-col xl:grid grid-cols-2 w-full h-full gap-10">
                        <div className="flex flex-col items-start justify-start gap-5">
                            <h2 className="text-xl text-white text-medium">Contact Information</h2>
                            <div className="flex flex-row items-center justify-start gap-2">
                                <div className="flex flex-col items-center justify-center h-13 w-13 bg-gray-500 rounded-md">
                                    <img src={mailIcon} className="h-8 w-auto invert-100" />
                                </div>
                                <div className="grid grid-rows-2 items-start justify-center h-13 w-auto">
                                    <div className="flex flex-col items-start justify-end h-full">
                                        <h3 className="text-white text-md font-semibold">Email</h3>
                                    </div>
                                    <div className="flex flex-col items-start justify-end h-full">
                                        <a href="" className="text-white hover:text-red-500 transition duration-200">vince.salenga@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-start gap-2">
                                <div className="flex flex-col items-center justify-center h-13 w-13 bg-gray-500 rounded-md">
                                    <img src={phoneIcon} className="h-8 w-auto invert-100" />
                                </div>
                                <div className="grid grid-rows-2 items-start justify-center h-13 w-auto">
                                    <div className="flex flex-col items-start justify-end h-full">
                                        <h3 className="text-white text-md font-semibold">Phone</h3>
                                    </div>
                                    <div className="flex flex-col items-start justify-end h-full">
                                        <p className="text-white">+63 948 205 3970</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-start gap-2">
                                <div className="flex flex-col items-center justify-center h-13 w-13 bg-gray-500 rounded-md">
                                    <img src={locationIcon} className="h-8 w-auto invert-100" />
                                </div>
                                <div className="grid grid-rows-2 items-start justify-center h-13 w-auto">
                                    <div className="flex flex-col items-start justify-end h-full">
                                        <h3 className="text-white text-md font-semibold">Location</h3>
                                    </div>
                                    <div className="flex flex-col items-start justify-end h-full">
                                        <p className="text-white">Bataan, PH</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-start w-full h-full">
                            <form onSubmit={handleSubmit} className="flex flex-col items-start justify-center gap-5 xl:justify-between w-full h-full pb-15 xl:pb-25">
                                <div className="flex flex-col items-start justify-center w-full gap-1">
                                    <p className="text-white">Name</p>
                                    <input
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        type="text"
                                        required
                                        disabled={isSubmitting}
                                        className="w-full bg-gray-800 h-13 rounded-md border-3 border-gray-700 pl-5 active:outline-red-500 focus:outline-none focus:border-red-500 p-5 text-white transition duration-300"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className="flex flex-col items-start justify-center w-full gap-1">
                                    <p className="text-white">Email</p>
                                    <input
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        required
                                        disabled={isSubmitting}
                                        className="w-full bg-gray-800 h-13 rounded-md border-3 border-gray-700 pl-5 active:outline-red-500 focus:outline-none focus:border-red-500 p-5 text-white transition duration-300"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                                <div className="flex flex-col items-start justify-center w-full gap-1">
                                    <p className="text-white">Message</p>
                                    <textarea
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                        disabled={isSubmitting}
                                        className="w-full bg-gray-800 h-40 rounded-md border-3 border-gray-700 active:outline-red-500 focus:outline-none focus:border-red-500 p-5 text-white transition duration-300"
                                        placeholder="Your message here..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full h-10 bg-red-800 rounded-md text-white text-lg cursor-pointer hover:bg-red-500 transition duration-300 flex flex-row items-center justify-center gap-2"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                    <img src={sendIcon} className="h-5 w-auto invert-100" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}