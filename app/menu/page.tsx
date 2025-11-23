import { Card, CardContent } from "@/components/ui/card"

export default function Menu() {
    const menuData = {
        "Cafe": [
            { name: "Latte", price: 4.99 },
            { name: "Americano", price: 4.99 },
            { name: "Coffee", price: 1.99 },
            { name: "Matcha Latte", price: 5.99 },
            { name: "Cold Brew", price: 3.99 },
            { name: "Cappuccino", price: 5.99 },
            { name: "Cappuccino Blast", price: 7.99 },
            { name: "Hot Tea", price: 1.99 },
            { name: "Ice Tea", price: 2.99 },
            { name: "Hot Green Tea", price: 1.99 },
            { name: "Green Ice Tea", price: 2.99 },
            { name: "Milk Cup", price: 1.99 },
            { name: "Ice Cup", price: 1.00 }
        ],
        "Crazy Shakes": [
            { name: "Classic", price: 9.99 },
            { name: "Oreo Shake", price: 9.99 },
            { name: "Strawberry Shake", price: 9.99 },
            { name: "Chocolate Shake", price: 9.99 },
            { name: "Vanilla Shake", price: 9.99 },
            { name: "Banana Shake", price: 9.99 },
            { name: "Fruity Bubbles", price: 10.99 },
            { name: "Cinnamon Toast Crunch", price: 10.99 },
            { name: "Strawberry Shortcake Shake", price: 10.99 },
            { name: "Reese's Shake", price: 10.99 },
            { name: "Kinder Shake", price: 10.99 },
            { name: "Ferrero Shake", price: 10.99 },
            { name: "Nutella Shake", price: 10.99 },
            { name: "Lotus Shake", price: 10.99 },
            { name: "Red Velvet", price: 10.99 }
        ],
        "Cakes": [
            { name: "Cake Slice", price: 8.99 },
            { name: "Tiramisu", price: 9.99 },
            { name: "Tres Leche", price: 7.99 },
            { name: "New York Cheesecake", price: 8.99 }
        ],
        "Refreshers": [
            { name: "Mango", price: 4.99 },
            { name: "Strawberry Dragon Fruit", price: 4.99 },
            { name: "Lemonade", price: 4.99 },
            { name: "Passion Fruit", price: 4.99 },
            { name: "Watermelon Mint", price: 4.99 }
        ],
        "Ice Cream": [
            { name: "Soft Serve Vanilla", price: 3.99 },
            { name: "One Scoop", price: 3.99 },
            { name: "Two Scoops", price: 5.99 },
            { name: "Three Scoops", price: 7.99 }
        ],
        "Cups": [
            { name: "Dubai Chocolate", price: 13.99 },
            { name: "Strawberry Chocolate", price: 11.99 },
            { name: "Strawberry Banana", price: 11.99 }
        ],
        "Kunafa": [
            { name: "SugaRush Special Kunafa", price: 12.99 },
            { name: "Kunafa Custard", price: 7.99 },
            { name: "Kunafa Nuts", price: 9.99 }
        ],
        "Crepes / Waffles / Mini Pancakes": [
            { name: "Sugarush Special", price: 14.99 },
            { name: "Oreo", price: 10.99 },
            { name: "Reese's", price: 11.99 },
            { name: "Fruity Pebbles", price: 10.99 },
            { name: "Ferrero", price: 11.99 },
            { name: "Lotus Biscoff", price: 11.99 },
            { name: "Kinder", price: 10.99 },
            { name: "Pistachio", price: 12.99 },
            { name: "Brownie", price: 13.99 },
            { name: "New York Cheesecake", price: 13.99 },
            { name: "Cinnamon Toast Crunch", price: 10.99 },
            { name: "Triple Chocolate", price: 9.99 },
            { name: "Dubai Style", price: 11.99 }
        ],
        "Smoothies": [
            { name: "Mango", price: 7.99 },
            { name: "Strawberry", price: 7.99 },
            { name: "Mix Berries", price: 7.99 },
            { name: "Pineapple", price: 7.99 },
            { name: "Mint Lemonade", price: 7.99 }
        ]
    }

    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="text-center space-y-4 mb-12 md:mb-16">
                    <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                        Our Menu
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Explore our delicious selection of handcrafted treats and beverages
                    </p>
                </div>

                {/* Menu Grid */}
                <div className="grid gap-8 md:gap-10">
                    {Object.entries(menuData).map(([category, items]) => (
                        <Card key={category} className="overflow-hidden border-2 hover:border-primary/20 transition-colors">
                            <div className="bg-linear-to-r from-primary to-primary/80 p-4 md:p-6">
                                <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide">
                                    {category}
                                </h3>
                            </div>
                            <CardContent className="p-4 md:p-6">
                                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                    {items.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                                        >
                                            <span className="text-sm md:text-base font-medium group-hover:text-primary transition-colors">
                                                {item.name}
                                            </span>
                                            <span className="text-sm md:text-base font-bold text-primary ml-2 flex-shrink-0">
                                                ${item.price.toFixed(2)}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Footer Note */}
                <div className="mt-12 text-center border-b border-border pb-8">
                    <div className="flex flex-col items-center gap-4 mb-4">
                        <img
                            src={"halal.png"}
                            className='size-12'
                            alt="Halal Certified"
                        />
                        <p className="text-sm font-medium text-secondary-foreground tracking-wide">
                            100% HALAL CERTIFIED
                        </p>
                    </div>
                    <p className="text-xs text-secondary-foreground max-w-2xl mx-auto leading-relaxed px-4">
                        Please inform your server of any dietary restrictions or allergies.
                    </p>
                </div>
            </div>
        </section>
    )
}