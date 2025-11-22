import { AuroraText } from '../ui/aurora-text'

export default function ContentSection1() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h1 className="text-center text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
                    THE <AuroraText colors={["#e0c53c", "#a1954e", "#d3944b", "#8b6654"]}>FLAVORS OF DUBAI</AuroraText> ARE HERE
                </h1>
                
                <p className="text-center text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                    Experience authentic Dubai crepes crafted with <span className="text-accent-foreground font-bold">premium ingredients and traditional techniques</span> — bringing the taste of the Middle East directly to your neighborhood.
                </p>

                <div className="grid grid-cols-2 gap-4 md:gap-8 lg:gap-12">
                    <div className="text-center space-y-2 md:space-y-3">
                        <img 
                            src="/crepe.gif" 
                            className="rounded-2xl shadow-lg w-full max-w-[200px] sm:max-w-[250px] md:max-w-xs lg:max-w-sm h-auto border border-border mx-auto object-cover" 
                            alt="Crepe preparation" 
                        />
                        <p className="text-xs sm:text-sm text-muted-foreground">Handcrafted with care</p>
                    </div>
                    
                    <div className="text-center space-y-2 md:space-y-3">
                        <img 
                            src="/nice-crepe.jpeg" 
                            className="rounded-2xl shadow-lg w-full max-w-[200px] sm:max-w-[250px] md:max-w-xs lg:max-w-sm h-auto border border-border mx-auto object-cover" 
                            alt="Finished crepe" 
                        />
                        <p className="text-xs sm:text-sm text-muted-foreground">Fresh ingredients daily</p>
                    </div>
                </div>
            </div>
        </section>
    )
}