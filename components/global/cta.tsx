import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CallToAction() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-4xl font-semibold lg:text-5xl">What Are You Waiting For?</h2>
                    <p className="mt-4 text-primary">Get your Sugarush in.</p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Button
                            asChild
                            size="lg">
                            <Link href="https://www.toasttab.com/local/order/yoyo-chicken-753-merrick-rd-baldwin-753-merrick-rd">
                                <span>ORDER NOW</span>
                            </Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="outline">
                            <Link href="/menu">
                                <span>VIEW MENU</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}