'use client'

import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

const SliderOne = () => {
    return (
        <>
            <div className="slider-block style-one">
                <div className="prev-arrow flex items-center justify-center">
                    <Icon.CaretLeft className="text-white heading6" weight="bold" />
                </div>
                <div className="slider-main">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation={{
                            prevEl: '.prev-arrow',
                            nextEl: '.next-arrow',
                        }}
                        loop={true}
                        pagination={{ clickable: true }}
                        speed={400}
                        modules={[Pagination, Autoplay, Navigation]}
                        className='h-full relative'
                        autoplay={{
                            delay: 4000,
                        }}
                    >
                        <SwiperSlide>
                            <div className="slider-item slider-first">
                                <div className="bg-img">
                                    <Image
                                        src={'/images/slider/slider5-1.webp'}
                                        width={4000}
                                        height={3000}
                                        alt="bgslider"
                                        priority={true}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="container">
                                    <div className="text-content flex-columns-between">
                                        <div className="heading2">
                                            <div className="relative overflow-hidden">
                                                <span className="block relative overflow-hidden">Simplifica tu</span>
                                                <span className="block absolute top-0 left-0 w-full h-full">Simplifica tu</span>
                                            </div>
                                            <div className="relative overflow-hidden">
                                                <span className="block relative overflow-hidden">Facturación</span>
                                                <span className="block absolute top-0 left-0 w-full h-full">Facturación</span>
                                            </div>
                                            <div className="relative overflow-hidden">
                                                <span className=" text-blue block relative overflow-hidden">Electrónica</span>
                                                <span className=" text-blue block absolute top-0 left-0 w-full h-full">Electrónica</span>
                                            </div>
                                        </div>
                                        <div className="body2 mt-3 text-secondary">Conectada a los 10 principales PACs de México, TecnoFact te ofrece <br />flexibilidad y opciones diversificadas para tus operaciones fiscales.</div>
                                        <div className="button-block md:mt-10 mt-6"><Link className="button-main bg-blue text-white" href="https://demo.tecnofact.mx/login" target="_blank">Demo en Línea</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item slider-second">
                                <div className="bg-img">
                                    <Image
                                        src={'/images/slider/1920x874.png'}
                                        width={4000}
                                        height={3000}
                                        alt="bgslider"
                                        priority={true}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="container">
                                    <div className="text-content flex-columns-between">
                                        <div className="heading2">
                                            <div className="relative overflow-hidden">
                                                <span className="block relative overflow-hidden">Potencia tu</span>
                                                <span className="block absolute top-0 left-0 w-full h-full">Potencia tu</span>
                                            </div>
                                            <div className="relative overflow-hidden">
                                                <span className="block relative overflow-hidden">Negocio con</span>
                                                <span className="block absolute top-0 left-0 w-full h-full">Negocio con</span>
                                            </div>
                                            <div className="relative overflow-hidden">
                                                <span className=" text-blue block relative overflow-hidden">CFDI Multipac</span>
                                                <span className=" text-blue block absolute top-0 left-0 w-full h-full">CFDI Multipac</span>
                                            </div>
                                        </div>
                                        <div className="body2 mt-3 text-secondary">Tu plataforma centralizada todo en uno. Emite, valida, recibe y <br />descarga tus CFDIs nunca ha sido tan fácil con TecnoFact.</div>
                                        <div className="button-block md:mt-10 mt-6"><Link className="button-main bg-blue text-white" href="https://app.tecnofact.mx/register" target="_blank">Registrarse Gratis</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item slider-third">
                                <div className="bg-img">
                                    <Image
                                        src={'/images/slider/1920x874.png'}
                                        width={4000}
                                        height={3000}
                                        alt="bgslider"
                                        priority={true}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="container">
                                    <div className="text-content flex-columns-between">
                                        <div className="heading2">
                                            <div className="relative overflow-hidden">
                                                <span className="block relative overflow-hidden">Soluciones</span>
                                                <span className="block absolute top-0 left-0 w-full h-full">Soluciones</span>
                                            </div>
                                            <div className="relative overflow-hidden">
                                                <span className="block relative overflow-hidden">Integrales para</span>
                                                <span className="block absolute top-0 left-0 w-full h-full">Integrales para</span>
                                            </div>
                                            <div className="relative overflow-hidden">
                                                <span className=" text-blue block relative overflow-hidden">Facturación Digital</span>
                                                <span className=" text-blue block absolute top-0 left-0 w-full h-full">Facturación Digital</span>
                                            </div>
                                        </div>
                                        <div className="body2 mt-3 text-secondary">Emite facturas, complementos, nóminas, cartas porte y más, con total <br />personalización y diseño intuitivo. ¡Control y eficiencia en cada timbrado!</div>
                                        <div className="button-block md:mt-10 mt-6"><Link className="button-main bg-blue text-white" href="/pages/pricing">Ver Planes</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="next-arrow flex items-center justify-center">
                    <Icon.CaretRight className="text-white heading6" weight="bold" />
                </div>
            </div>
        </>
    )
}

export default SliderOne