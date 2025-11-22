import { MapPin, Phone, Clock, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Contact() {
    const hours = [
        { day: "Monday", time: "9:00 AM - 2:00 AM" },
        { day: "Tuesday", time: "9:00 AM - 2:00 AM" },
        { day: "Wednesday", time: "9:00 AM - 2:00 AM" },
        { day: "Thursday", time: "9:00 AM - 2:00 AM" },
        { day: "Friday", time: "9:00 AM - 2:00 AM" },
        { day: "Saturday", time: "9:00 AM - 2:00 AM" },
        { day: "Sunday", time: "9:00 AM - 2:00 AM" },
    ];
    return (
        <div className="min-h-screen pt-24">
            {/* Hero Section */}
            <section className="py-24 bg-background" id="location">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">

                        <div className="text-center space-y-4 mb-12 md:mb-16">
                            <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                                Contact Us
                            </h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Here for anything you need. As long as its <span className="text-primary">sweet...</span>
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="border-2 border-border">
                                <CardContent className="p-8 space-y-6">
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                                <MapPin className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg text-foreground mb-1">Address</h3>
                                                <p className="text-muted-foreground">
                                                    753 Merrick Rd<br />
                                                    Baldwin, NY 11510
                                                </p>
                                                <Button
                                                    variant="link"
                                                    className="px-0 h-auto text-primary hover:text-primary/80 mt-2"
                                                    asChild
                                                >
                                                    <a
                                                        href="https://maps.app.goo.gl/vsqk9uqi3Lv4mV1S9?g_st=ipc"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        Get Directions →
                                                    </a>
                                                </Button>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                                <Phone className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg text-foreground mb-1">Phone</h3>
                                                <a
                                                    href="tel:6316443982"
                                                    className="text-muted-foreground hover:text-primary transition-colors"
                                                >
                                                    (631) 644-3982
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                                <Clock className="w-6 h-6 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-lg text-foreground mb-3">Hours</h3>
                                                <div className="space-y-2">
                                                    {hours.map((item) => (
                                                        <div
                                                            key={item.day}
                                                            className="flex justify-between text-sm"
                                                        >
                                                            <span className={"text-muted-foreground font-medium"}>
                                                                {item.day}
                                                            </span>
                                                            <span className={"text-muted-foreground"}>
                                                                {item.time}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="rounded-lg overflow-hidden border-2 border-border shadow-lg h-full min-h-[400px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.0155672789115!2d-73.61661802390098!3d40.65158724131184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c27bc98434362d%3A0xefc5703619aad6a!2ssugarush!5e0!3m2!1sen!2sus!4v1763845896341!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Sugarush Location Map"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Info Section */}
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-4xl px-6">
                    <div className="text-center space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                            Questions?
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Feel free to give us a call or visit us in person. Our friendly staff is ready to serve you and answer any questions about our menu and services.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 pt-6">
                            <Button
                                asChild
                                size="lg"
                                className="bg-primary hover:bg-primary/90"
                            >
                                <a href="tel:+16316443982">
                                    <Phone className="w-4 h-4 mr-2" />
                                    Call Us Now
                                </a>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="border-primary text-primary hover:bg-primary/10"
                            >
                                <a href="https://www.toasttab.com/local/order/yoyo-chicken-753-merrick-rd-baldwin-753-merrick-rd">
                                    Order Online
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}