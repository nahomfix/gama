"use client";

import { StarIcon } from "@heroicons/react/24/solid";
import { FC } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { WatchNowButton } from "@/components/WatchNowButton";
import Image from "next/image";

export const Hero: FC = () => {
    return (
        <div>
            <div className="md:hidden">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                    }}
                >
                    <SwiperSlide>
                        <div className="bg-[url('https://gama-test-1.onrender.com/public/gentlmen.jpg')] bg-center bg-no-repeat bg-cover h-dvh">
                            <WatchNowButton />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-[url('https://gama-test-1.onrender.com/public/gentlmen.jpg')] bg-center bg-no-repeat bg-cover h-dvh">
                            <WatchNowButton />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="bg-[url('https://gama-test-1.onrender.com/public/gentlmen.jpg')] bg-center bg-no-repeat bg-cover rounded-[20px] hidden md:block relative mt-4 mx-8 overflow-hidden">
                <div className="backdrop-blur-md absolute top-0 left-0 right-0 bottom-0 bg-black/60" />
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                    }}
                >
                    <SwiperSlide>
                        <div className="h-3/4 p-4 flex gap-20 items-center">
                            <Image
                                src="https://gama-test-1.onrender.com/public/gentlmen.jpg"
                                alt="Gentlmen"
                                width={400}
                                height={600}
                                className="rounded-[40px]"
                            />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-6xl font-bold">
                                    The Gentlemen
                                </h1>
                                <div className="flex items-center gap-1">
                                    <StarIcon className="h-6 w-6 text-yellow-500" />
                                    <p className="text-4xl font-bold">8.5</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-3/4 p-4 flex gap-20 items-center">
                            <Image
                                src="https://gama-test-1.onrender.com/public/gentlmen.jpg"
                                alt="Gentlmen"
                                width={400}
                                height={600}
                                className="rounded-[40px]"
                            />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-6xl font-bold">
                                    The Gentlemen
                                </h1>
                                <div className="flex items-center gap-1">
                                    <StarIcon className="h-6 w-6 text-yellow-500" />
                                    <p className="text-4xl font-bold">8.5</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};
