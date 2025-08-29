'use client'

import { useState } from "react"
import TopNavOne from "@/components/Header/TopNav/TopNavOne"
import MenuOne from "@/components/Header/Menu/MenuOne"
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem"
import CtaOne from "@/components/Section/CTA/CtaOne"
import Footer from "@/components/Footer/Footer"
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Image from "next/image"

export default function Pricing() {
    const [switchBtn, setSwitchBtn] = useState(false)

    const handleSwitchChange = () => {
        setSwitchBtn(!switchBtn)
    }

    return (
        <>
            <div className="overflow-x-hidden">
                <header id="header">
                    <TopNavOne />
                    <MenuOne />
                </header>
                <main className="content">
                    <BreadcrumbItem link="Contact us" img="/images/banner/about1.png" title="Contact us" desc="Discover transparent pricing options tailored to your budget on our Pricing page." />
                    <div className="list-partner-block lg:py-[100px] sm:py-16 py-10">
                        <div className="container">
                            <div className="heading3 text-center">We are helping over 30k+ <br />customers for growing business</div>
                            <div className="list-partner mt-6">
                                <div className="flex flex-col justify-between gap-y-10 pt-[60px]">
                                    <div className="item-main flex items-center justify-between">
                                        <div className="bg-img"> <Image width={4000} height={4000} className="w-full max-lg:w-[180px]" src="/images/partner/1.svg" alt="1" /></div>
                                        <div className="bg-img"> <Image width={4000} height={4000} className="w-full max-lg:w-[180px]" src="/images/partner/2.svg" alt="1" /></div>
                                        <div className="bg-img"> <Image width={4000} height={4000} className="w-full max-lg:w-[180px]" src="/images/partner/3.svg" alt="1" /></div>
                                        <div className="bg-img"> <Image width={4000} height={4000} className="w-full max-lg:w-[180px]" src="/images/partner/4.svg" alt="1" /></div>
                                    </div>
                                    <div className="border border-line"></div>
                                    <div className="item-main flex items-center justify-between">
                                        <div className="bg-img"> <Image width={4000} height={4000} className="w-full max-lg:w-[180px]" src="/images/partner/5.svg" alt="1" /></div>
                                        <div className="bg-img"> <Image width={4000} height={4000} className="w-full max-lg:w-[180px]" src="/images/partner/6.svg" alt="1" /></div>
                                        <div className="bg-img"> <Image width={4000} height={4000} className="w-full max-lg:w-[180px]" src="/images/partner/1.svg" alt="1" /></div>
                                        <div className="bg-img"> <Image width={4000} height={4000} className="w-full max-lg:w-[180px]" src="/images/partner/8.svg" alt="1" /></div>
                                    </div>
                                    <div className="border border-line"></div>
                                    <div className="item-main flex items-center justify-between">
                                        <div className="bg-img"> <Image width={4000} height={4000} className="w-full max-lg:w-[180px]" src="/images/partner/9.svg" alt="1" /></div>
                                        <div className="bg-img"> <Image width={4000} height={4000} className="w-full max-lg:w-[180px]" src="/images/partner/3.svg" alt="1" /></div>
                                        <div className="bg-img"> <Image width={4000} height={4000} className="w-full max-lg:w-[180px]" src="/images/partner/8.svg" alt="1" /></div>
                                        <div className="bg-img"> <Image width={4000} height={4000} className="w-full max-lg:w-[180px]" src="/images/partner/7.svg" alt="1" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="more-list flex flex-col gap-y-8 lg:mt-[100px] sm:mt-16 mt-10">
                                <div className="list grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
                                    <div className="w-full">
                                        <div className="bg-img w-full flex items-center justify-center rounded-2xl border border-line"><Image width={4000} height={4000} className="w-[200px]" src="/images/partner/1.svg" alt="1" /></div>
                                    </div>
                                    <div className="w-full">
                                        <div className="bg-img w-full flex items-center justify-center rounded-2xl border border-line"><Image width={4000} height={4000} className="w-[200px]" src="/images/partner/2.svg" alt="1" /></div>
                                    </div>
                                    <div className="w-full">
                                        <div className="bg-img w-full flex items-center justify-center rounded-2xl border border-line"><Image width={4000} height={4000} className="w-[200px]" src="/images/partner/3.svg" alt="1" /></div>
                                    </div>
                                    <div className="w-full">
                                        <div className="bg-img w-full flex items-center justify-center rounded-2xl border border-line"><Image width={4000} height={4000} className="w-[200px]" src="/images/partner/4.svg" alt="1" /></div>
                                    </div>
                                    <div className="w-full">
                                        <div className="bg-img w-full flex items-center justify-center rounded-2xl border border-line"><Image width={4000} height={4000} className="w-[200px]" src="/images/partner/5.svg" alt="1" /></div>
                                    </div>
                                    <div className="w-full">
                                        <div className="bg-img w-full flex items-center justify-center rounded-2xl border border-line"><Image width={4000} height={4000} className="w-[200px]" src="/images/partner/6.svg" alt="1" /></div>
                                    </div>
                                    <div className="w-full">
                                        <div className="bg-img w-full flex items-center justify-center rounded-2xl border border-line"><Image width={4000} height={4000} className="w-[200px]" src="/images/partner/7.svg" alt="1" /></div>
                                    </div>
                                    <div className="w-full">
                                        <div className="bg-img w-full flex items-center justify-center rounded-2xl border border-line"><Image width={4000} height={4000} className="w-[200px]" src="/images/partner/8.svg" alt="1" /></div>
                                    </div>
                                    <div className="w-full">
                                        <div className="bg-img w-full flex items-center justify-center rounded-2xl border border-line"><Image width={4000} height={4000} className="w-[200px]" src="/images/partner/9.svg" alt="1" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CtaOne />
                </main>
                <footer id="footer">
                    <Footer />
                </footer>
            </div >
        </>
    )
}