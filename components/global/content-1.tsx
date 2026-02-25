import Image from 'next/image'
import { AuroraText } from '../ui/aurora-text'

export default function ContentSection1() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h1 className="text-center text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
                    THE <AuroraText colors={["#e0c53c", "#a1954e", "#d3944b", "#8b6654"]}>FLAVORS OF DUBAI</AuroraText> ARE HERE
                </h1>

                <p className="text-center text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                    The <span className='text-primary'>sweetest</span> Dubai styled desserts crafted with <span className="text-accent-foreground font-bold">only the best premium ingredients.</span>
                </p>

                <div className="grid grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-start">
                    <div className="flex flex-col items-center gap-2 md:gap-3">
                        <div className="relative w-full max-w-[200px] sm:max-w-[250px] md:max-w-xs lg:max-w-sm aspect-[9/16]">
                            <video
                                src="/crepe-vid.mp4"
                                className="absolute inset-0 w-full h-full rounded-2xl shadow-lg border border-border object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground">Handcrafted with care</p>
                    </div>

                    <div className="flex flex-col items-center gap-2 md:gap-3">
                        <div className="relative w-full max-w-[200px] sm:max-w-[250px] md:max-w-xs lg:max-w-sm aspect-[9/16]">
                            <Image
                                src="/nice-crepe.jpeg"
                                alt="Finished crepe"
                                fill
                                className="rounded-2xl shadow-lg border border-border object-cover"
                                sizes="(max-width: 640px) 200px, (max-width: 768px) 250px, (max-width: 1024px) 320px, 384px"
                            />
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground">Fresh ingredients daily</p>
                    </div>
                </div>
            </div>
        </section>
    )
}