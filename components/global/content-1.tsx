import { AuroraText } from '../ui/aurora-text'

export default function ContentSection1() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h1 className="text-center text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
                    The <AuroraText colors={["#e0c53c", "#a1954e", "#d3944b", "#8b6654"]}>Flavors Of Dubai</AuroraText> Right At Home
                </h1>
                
                <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto">
                    Experience authentic Dubai crepes crafted with <span className="text-accent-foreground font-bold">premium ingredients and traditional techniques</span> — bringing the taste of the Middle East directly to your neighborhood.
                </p>

                <div className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:gap-12 place-items-center">
                    <div className="text-center space-y-3">
                        <img 
                            src="/crepe.gif" 
                            className="rounded-2xl shadow-lg w-80 h-auto border border-border-2 mx-auto" 
                            alt="Crepe preparation" 
                        />
                        <p className="text-sm text-muted-foreground">Handcrafted with care</p>
                    </div>
                    
                    <div className="text-center space-y-3">
                        <img 
                            src="/nice-crepe.jpeg" 
                            className="rounded-2xl shadow-lg w-80 h-auto border border-border-2 mx-auto" 
                            alt="Finished crepe" 
                        />
                        <p className="text-sm text-muted-foreground">Fresh ingredients daily</p>
                    </div>
                </div>
            </div>
        </section>
    )
}