'use client'

import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import Image from "next/image";

const AboutThree = () => {
    const [openVideo, setOpenVideo] = useState(false)
    
    return (
        <div className="style-three">
            <div className=" layout-item lg:mt-[100px] sm:mt-16 mt-10">
                <div className="container">
                    <div className="flex max-lg:flex-col-reverse gap-y-8">
                        <div className="w-full lg:w-1/2 lg:pr-[40px] flex flex-col justify-center">
                            <div className="heading3">Registering and Using Online Banking Services</div>
                            <div className="body2 text-secondary mt-5">Online banking allows you to manage your finances from anywhere, anytime. You can access your bank account, check your balance, view transactions, and transfer money without having to visit a physical bank.</div>
                            <div className="button-block mt-6">
                                <Link className="button-main bg-gradient hover:bg-black text-white inline-flex items-center gap-4" href="/contact/contact-two">
                                    <span>discovery</span>
                                    <Icon.ArrowRight weight="bold" className="text-white text-xl" />
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 lg:pl-[55px]">
                            <div className="bg-video w-full overflow-hidden rounded-2xl relative">
                                <Image width={5000} height={5000} className="w-full block" src="/images/component/assessment.png" alt="" />
                                <div
                                    className="absolute w-20 h-20 bg-white flex items-center justify-center rounded-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 duration-300 cursor-pointer text-gradient hover:bg-gradient hover:text-white"
                                    onClick={() => setOpenVideo(true)}
                                >
                                    <Icon.Play weight="fill" className="text-3xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`modal-video-block`} onClick={() => setOpenVideo(false)}>
                <div className={`modal-video-main ${openVideo ? 'open' : ''}`} onClick={(e) => { e.stopPropagation() }}>
                    <div className="video-block h-full w-full">
                        <iframe src="https://www.youtube.com/embed/RaQKTgGyyyo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutThree