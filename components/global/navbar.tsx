'use client'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import React from 'react'
import { cn } from '@/lib/utils'
import { useScroll } from 'motion/react'

const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Contact', href: '/contact' },
]

export const Navbar = () => {
    const [open, setOpen] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)

    const { scrollYProgress } = useScroll()

    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setScrolled(latest > 0.0001)
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    return (
        <header>
            <nav
                className={cn(
                    'fixed z-20 w-full transition-colors duration-150',
                    scrolled && 'bg-background/80 backdrop-blur-xl border-b'
                )}
            >
                <div className="mx-auto max-w-7xl px-6 transition-all duration-300">
                    <div className="relative flex items-center justify-between py-4">
                        {/* Logo */}
                        <Link
                            href="/"
                            aria-label="home"
                            className="flex items-center space-x-2"
                        >
                            <img src="/sugarush-transparent.png" className="h-10" alt="SugaRush" />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-8">
                            <ul className="flex gap-8 text-sm font-medium">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-muted-foreground hover:text-foreground transition-colors duration-150"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <Button
                                asChild
                                className="bg-primary hover:bg-primary/90"
                            >
                                <Link href="https://www.toasttab.com/local/order/yoyo-chicken-753-merrick-rd-baldwin-753-merrick-rd">
                                    ORDER NOW
                                </Link>
                            </Button>
                        </div>

                        {/* Mobile Menu */}
                        <Sheet open={open} onOpenChange={setOpen}>
                            <SheetTrigger asChild className="lg:hidden">
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                                <SheetHeader className="text-center border-b pb-4">
                                    <SheetTitle className="flex justify-center">
                                        <Link
                                            href="/"
                                            onClick={() => setOpen(false)}
                                            className="flex items-center"
                                        >
                                            <img src="/sugarush-transparent.png" className="h-12" alt="SugaRush" />
                                        </Link>
                                    </SheetTitle>
                                </SheetHeader>
                                
                                <div className="flex flex-col items-center justify-center h-[calc(100%-80px)] gap-4">
                                    <nav className="w-full">
                                        <ul className="flex flex-col items-center gap-2">
                                            {menuItems.map((item, index) => (
                                                <li key={index} className="w-full">
                                                    <Link
                                                        href={item.href}
                                                        onClick={() => setOpen(false)}
                                                        className="text-xl font-semibold text-foreground hover:text-primary transition-colors duration-150 block py-3 text-center rounded-lg hover:bg-muted"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                    
                                    <div>

                                    </div>
                                    <Button
                                        asChild
                                        size="lg"
                                        className="bg-primary hover:bg-primary/90 w-full max-w-[250px] text-base font-bold"
                                    >
                                        <Link 
                                            href="https://www.toasttab.com/local/order/yoyo-chicken-753-merrick-rd-baldwin-753-merrick-rd"
                                            onClick={() => setOpen(false)}
                                        >
                                            ORDER NOW
                                        </Link>
                                    </Button>
                                    <p className='text-xs text-muted-foreground'>Open Daily 9 AM - 2 AM</p>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>
        </header>
    )
}