'use client'

import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation";
import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr";

const MenuOne = () => {
    const pathname = usePathname()
    const [fixedHeader, setFixedHeader] = useState(false)
    // const [lastScrollPosition, setLastScrollPosition] = useState(0);
    const [openMenuMobile, setOpenMenuMobile] = useState(false)
    const [openSubNavMobile, setOpenSubNavMobile] = useState<number | null>(null)

    const handleOpenSubNavMobile = (index: number) => {
        setOpenSubNavMobile(openSubNavMobile === index ? null : index)
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setFixedHeader(scrollPosition > 400);
            // setLastScrollPosition(scrollPosition);
        };

        // Gắn sự kiện cuộn khi component được mount
        window.addEventListener('scroll', handleScroll);

        // Hủy sự kiện khi component bị unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`header-menu style-one bg-white ${fixedHeader ? 'fixed' : ''}`}>
                <div className="container flex items-center justify-between h-20">
                    <Link className="menu-left-block" href="/">
                        <Image
                            src={'/logos/TecnoFact2024.png'}
                            width={2000}
                            height={1000}
                            alt="TecnoFact Logo"
                            priority={true}
                            className="w-[149px] max-sm:w-[132px]"
                        />
                    </Link>
                    <div className="menu-center-block h-full">
                        <ul className="menu-nav flex items-center xl:gap-2 h-full">
                            <li className={`nav-item h-full flex items-center justify-center ${pathname === '/' ? 'active' : ''}`}><Link className="nav-link text-title" href="/">
                                <span>Inicio</span>
                            </Link>
                            </li>
                            <li className={`nav-item h-full flex items-center justify-center ${pathname.includes('/about/') ? 'active' : ''}`}><Link className="nav-link text-title" href="/about">
                                <span>Nosotros</span>
                            </Link>
                            </li>
                            <li className={`nav-item h-full flex items-center justify-center ${pathname.includes('/service') ? 'active' : ''}`}><Link className="nav-link text-title flex items-center gap-1" href="#!">
                                <span>Servicios</span>
                                <span><Icon.CaretDown className="text-sm" /></span>
                            </Link>
                                <ul className="sub-nav">
                                    <li className={`sub-nav-item`}> <Link className="sub-nav-link font-medium" href="/service/cfdi-app">CFDI App TecnoFact</Link></li>
                                    <li className={`sub-nav-item`}> <Link className="sub-nav-link font-medium" href="/service/panel-cfdi">Panel CFDI</Link></li>
                                    <li className={`sub-nav-item`}> <Link className="sub-nav-link font-medium" href="/service/monitor-cfdi">Monitor CFDI</Link></li>
                                    <li className={`sub-nav-item`}> <Link className="sub-nav-link font-medium" href="/service/timbraexpress">TimbraExpress</Link></li>
                                </ul>
                            </li>
                            <li className={`nav-item h-full flex items-center justify-center ${pathname.includes('/pages/pricing') ? 'active' : ''}`}><Link className="nav-link text-title" href="/pages/pricing">
                                <span>Planes</span>
                            </Link>
                            </li>
                            <li className={`nav-item h-full flex items-center justify-center ${pathname.includes('/pages/faqs') ? 'active' : ''}`}><Link className="nav-link text-title" href="/pages/faqs">
                                <span>FAQ</span>
                            </Link>
                            </li>
                            <li className={`nav-item h-full flex items-center justify-center ${pathname.includes('/contact/') ? 'active' : ''}`}><Link className="nav-link text-title" href="/contact">
                                <span>Contacto</span>
                            </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="menu-right-block flex items-center">
                        <div className="icon-call"><i className="icon-phone-call text-4xl"></i></div>
                        <div className="text ml-3">
                            <div className="text caption1">Soporte Técnico</div>
                            <div className="number text-button">(669) 454-0439</div>
                        </div>
                        <div className="menu-humburger hidden pointer" onClick={() => setOpenMenuMobile(!openMenuMobile)}>
                            <Icon.List className="text-2xl" weight="bold" />
                        </div>
                    </div>
                </div>
                <div id="menu-mobile-block" className={`${openMenuMobile && 'open'}`}>
                    <div className="menu-mobile-main">
                        <div className="container">
                            <ul className="menu-nav-mobile h-full pt-1 pb-1">
                                <li className={`nav-item-mobile h-full flex-column gap-2 pt-2 pb-2 pl-3 pr-3 pointer home ${openSubNavMobile === 1 ? 'active' : ''}`}
                                    onClick={() => handleOpenSubNavMobile(1)}
                                ><a className="nav-link-mobile flex items-center justify-between" href="#!">
                                        <span className="body2 font-semibold">Home </span>
                                        <Icon.CaretRight className="text-base" />
                                    </a>
                                    <ul className={`sub-nav-mobile ${openSubNavMobile === 1 ? 'open' : ''}`}>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2 active"><Link className="sub-nav-link text-base" href="/">Payment Solution</Link></li>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"> <Link className="sub-nav-link text-base" href="/homepages/home2">Financial Planning</Link></li>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"> <Link className="sub-nav-link text-base" href="/homepages/home3">Online Banking</Link></li>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"> <Link className="sub-nav-link text-base" href="/homepages/home4">Personal Finance</Link></li>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"> <Link className="sub-nav-link text-base" href="/homepages/home5">Cryptocurrency Financial</Link></li>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"> <Link className="sub-nav-link text-base" href="/homepages/home6">Blockchain</Link></li>
                                    </ul>
                                </li>
                                <li className={`nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3 pointer about ${openSubNavMobile === 2 ? 'active' : ''}`}
                                    onClick={() => handleOpenSubNavMobile(2)}
                                ><a className="nav-link-mobile flex items-center justify-between" href="#!">
                                        <span className="body2 font-semibold">About </span>
                                        <Icon.CaretRight className="text-base" />
                                    </a>
                                    <ul className={`sub-nav-mobile ${openSubNavMobile === 2 ? 'open' : ''}`}>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"><Link className="sub-nav-link text-base" href="/about/about-one">About Style 1</Link></li>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"> <Link className="sub-nav-link text-base" href="/about/about-two">About Style 2</Link></li>
                                    </ul>
                                </li>
                                <li className={`nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3 pointer services ${openSubNavMobile === 3 ? 'active' : ''}`}
                                    onClick={() => handleOpenSubNavMobile(3)}
                                ><a className="nav-link-mobile flex items-center justify-between" href="#!">
                                        <span className="body2 font-semibold">Services </span>
                                        <Icon.CaretRight className="text-base" />
                                    </a>
                                    <ul className={`sub-nav-mobile ${openSubNavMobile === 3 ? 'open' : ''}`}>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"><Link className="sub-nav-link text-base" href="/service/service-one">Service Style 1</Link></li>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"> <Link className="sub-nav-link text-base" href="/service/service-two">Service Style 2</Link></li>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"> <Link className="sub-nav-link text-base" href="/service/service-detail">Services Detail</Link></li>
                                    </ul>
                                </li>
                                <li className={`nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3 pointer case ${openSubNavMobile === 4 ? 'active' : ''}`}
                                    onClick={() => handleOpenSubNavMobile(4)}
                                ><a className="nav-link-mobile flex items-center justify-between" href="#!">
                                        <span className="body2 font-semibold">Case Studies </span>
                                        <Icon.CaretRight className="text-base" />
                                    </a>
                                    <ul className={`sub-nav-mobile ${openSubNavMobile === 4 ? 'open' : ''}`}>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"> <Link className="sub-nav-link text-base" href="/case-studies/case-studies-one">Case Studies 1</Link></li>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"> <Link className="sub-nav-link text-base" href="/case-studies/case-studies-two">Case Studies 2</Link></li>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"> <Link className="sub-nav-link text-base" href="/case-studies/detail">Case Studies Detail</Link></li>
                                    </ul>
                                </li>
                                <li className={`nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3 pointer pages ${openSubNavMobile === 5 ? 'active' : ''}`}
                                    onClick={() => handleOpenSubNavMobile(5)}
                                ><a className="nav-link-mobile flex items-center justify-between" href="#!">
                                        <span className="body2 font-semibold">Pages </span>
                                        <Icon.CaretRight className="text-base" />
                                    </a>
                                    <ul className={`sub-nav-mobile ${openSubNavMobile === 5 ? 'open' : ''}`}>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"><Link className="sub-nav-link text-base" href="/pages/faqs">FAQs</Link></li>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"> <Link className="sub-nav-link text-base" href="/pages/pricing">Pricing</Link></li>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"> <Link className="sub-nav-link text-base" href="/pages/partners">Partners</Link></li>
                                    </ul>
                                </li>
                                <li className={`nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3 pointer blog ${openSubNavMobile === 6 ? 'active' : ''}`}
                                    onClick={() => handleOpenSubNavMobile(6)}
                                ><a className="nav-link-mobile flex items-center justify-between" href="#!">
                                        <span className="body2 font-semibold">Blog </span>
                                        <Icon.CaretRight className="text-base" />
                                    </a>
                                    <ul className={`sub-nav-mobile ${openSubNavMobile === 6 ? 'open' : ''}`}>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"><Link className="sub-nav-link text-base" href="/blog/blog-list-one">Blog List 1</Link></li>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"> <Link className="sub-nav-link text-base" href="/blog/blog-list-two">Blog List 2</Link></li>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"><Link className="sub-nav-link text-base" href="/blog/blog-grid">Blog Grid</Link></li>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"><Link className="sub-nav-link text-base" href="/blog/blog-detail-one">Blog Detail 1</Link></li>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"> <Link className="sub-nav-link text-base" href="/blog/blog-detail-two">Blog Detail 2</Link></li>
                                    </ul>
                                </li>
                                <li className={`nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3 pointer contact ${openSubNavMobile === 7 ? 'active' : ''}`}
                                    onClick={() => handleOpenSubNavMobile(7)}
                                ><a className="nav-link-mobile flex items-center justify-between" href="#!">
                                        <span className="body2 font-semibold">Contact </span>
                                        <Icon.CaretRight className="text-base" />
                                    </a>
                                    <ul className={`sub-nav-mobile ${openSubNavMobile === 7 ? 'open' : ''}`}>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"><Link className="sub-nav-link text-base" href="/contact/contact-one">Contact Style 1</Link></li>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"> <Link className="sub-nav-link text-base" href="/contact/contact-two">Contact Style 2</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MenuOne