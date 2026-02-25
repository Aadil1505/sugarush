import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { SparklesText } from "../ui/sparkles-text"

const carouselImages = [
    { src: "/crepe-store.jpeg", alt: "Dubai Crepe" },
    { src: "/shake-store.jpeg", alt: "Crazy Shake" },
    { src: "/kunafa.jpeg", alt: "Kunafa" },
    { src: "/waffle.jpg", alt: "Dubai Waffle" },
    { src: "/waffle-stick.jpeg", alt: "Waffle Sticks" },
    { src: "/strawberry.jpg", alt: "Strawberry Cup" },
]

export default function ContentSection3() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center space-y-4 mb-12">
                    <SparklesText colors={{ first: "#f02475", second: "#e0c53c" }} className="text-center text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">Soooo Sweet</SparklesText>
                    <h2 className="text-center text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
                        You&apos;ll Seek Seconds
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                        Come and try <span className="text-primary">everything</span>
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
                                <div className="relative group h-80 rounded-2xl overflow-hidden shadow-lg border border-border">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
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