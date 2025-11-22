import { Ipad } from '../ui/ipad'
import { LineShadowText } from '../ui/line-shadow-text'
import { Star } from 'lucide-react'

export default function ContentSection() {
    return (
        <section className="bg-background py-16 md:py-24">
            <div className="mx-auto max-w-6xl space-y-12 px-6 md:space-y-16">
                <h1 className="text-center text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
                    YOUR DAILY DOSE OF {" "}
                    <LineShadowText className="italic text-primary" shadowColor={"#000"}>
                        SUGAR...
                    </LineShadowText>
                </h1>

                <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
                    {/* Image Side */}
                    <div className="relative">
                        <Ipad
                            src="waffle.jpg"
                            className="size-full"
                        />
                    </div>

                    {/* Content Side */}
                    <div className="flex flex-col justify-center space-y-8">
                        <div className="space-y-4">
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Experience flavors that keep you <span className='italic'>rushing</span> back.
                                <span className="text-foreground font-semibold"> Every bite is crafted with passion</span> and the finest HALAL ingredients.
                            </p>
                        </div>

                        {/* Testimonial */}
                        <a href='https://share.google/A75ELFx7Yno6jdTGo' className="bg-muted/50 rounded-2xl border border-border p-6 backdrop-blur-sm" target="_blank" rel="noopener noreferrer">
                            <blockquote className="space-y-4">
                                <p className="text-foreground text-lg italic leading-relaxed">
                                    "Creamy, flavorful, and made just right. With crepes, waffles, ice cream, and so many toppings to choose from, there's something for every sweet tooth."
                                </p>

                                <div className="flex items-center gap-4 pt-2">
                                    <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full border border-black overflow-hidden">
                                        <img 
                                            src="https://lh3.googleusercontent.com/a-/ALV-UjUydiLKRTOK7KZ2liDDRb1pgr5YPX_tWv02eXIE5iwTv7j2VHM=w144-h144-p-rp-mo-ba4-br100"
                                            alt="Irtaza Reviews"
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <cite className="text-foreground not-italic font-semibold">Irtaza Reviews</cite>
                                        <div className="flex gap-0.5">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="h-4 w-4 fill-[#FFD700] text-black stroke-1"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </blockquote>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}