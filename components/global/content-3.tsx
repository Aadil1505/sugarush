import * as React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { HyperText } from "../ui/hyper-text"
import { SparklesText } from "../ui/sparkles-text"

const carouselImages = [
    { src: "/shake1.jpg", alt: "Classic Nutella Crepe" },
    { src: "/waffle.jpg", alt: "Strawberry Delight" },
    { src: "/crepe-3.jpg", alt: "Pistachio Dream" },
    { src: "/crepe-4.jpg", alt: "Lotus Biscoff Special" },
    { src: "/crepe-5.jpg", alt: "Mixed Berry Crepe" },
    { src: "/crepe-6.jpg", alt: "Caramel Banana Crepe" },
]

export default function ContentSection2() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center space-y-4 mb-12">
                    <SparklesText className="text-center text-4xl font- tracking-tighter md:text-5xl lg:text-7xl">Soooo Sweet</SparklesText>
                    <h2 className="text-center text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
                        You&apos;ll Seek Seconds
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Explore our handcrafted crepes made fresh daily with the finest ingredients
                    </p>
                </div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {carouselImages.map((image, index) => (
                            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                <div className="relative group">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="rounded-2xl shadow-lg w-full h-80 object-cover border border-border"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl">
                                        <div className="absolute bottom-4 left-4 text-white">
                                            <p className="font-semibold text-lg">{image.alt}</p>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                </Carousel>
            </div>
        </section>
    )
}