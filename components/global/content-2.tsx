import { Button } from "../ui/button"

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
            <div className="mx-auto max-w-7xl px-6">
                <div className="bg-[#f02475] rounded-3xl overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-16">
                        {/* Text Content */}
                        <div className="space-y-6 text-primary-foreground z-10 text-center md:text-left">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                                TRY OUR NEW SHAKES
                            </h2>
                            <p className="text-lg md:text-xl text-primary-foreground leading-relaxed">
                                Indulge in our creamy, handcrafted shakes made with premium ice cream and fresh ingredients.
                                Each shake is a perfect blend of flavor and texture, topped with whipped cream and your favorite toppings.
                            </p>
                            <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
                                <Button variant={"secondary"}>
                                    ORDER NOW
                                </Button>
                                <Button variant={"default"}>
                                    VIEW MENU
                                </Button>
                            </div>
                        </div>

                        {/* Shake Image */}
                        <div className="relative flex justify-center items-center md:justify-end">
                            <img
                                src="/shake-transparent.png"
                                alt="Delicious shake"
                                className="w-60 rotate-6 drop-shadow-2xl opacity-20"
                            />
                            <img
                                src="/shake-transparent.png"
                                alt="Delicious shake"
                                className="w-60 rotate-6 drop-shadow-2xl hover:rotate-12 transition-transform duration-300"
                            />
                            <img
                                src="/shake-transparent.png"
                                alt="Delicious shake"
                                className="w-60 rotate-6 drop-shadow-2xl opacity-20"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}