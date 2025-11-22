'use client'

import * as React from 'react'
import { Play, Pause, ShoppingCart } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'

const slides = [
  {
    type: 'video',
    src: 'vid.mp4',
    title: 'Video',
  },
  {
    type: 'image',
    src: 'waffle.jpg',
    title: 'Waffle',
  },
  {
    type: 'image',
    src: 'shake1.jpg',
    title: 'Milkshake',
  },
]

export default function HeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  const [videoPlaying, setVideoPlaying] = React.useState(true)
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const autoplayRef = React.useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
    })
  )

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  React.useEffect(() => {
    if (videoRef.current && current === 1) {
      if (videoPlaying) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }, [videoPlaying, current])

  // Handle video ended event to advance to next slide
  React.useEffect(() => {
    const video = videoRef.current
    if (!api) return

    const handleVideoEnded = () => {
      // Move to next slide after video completes
      api.scrollNext()
    }

    if (current === 1 && video) {
      // Stop autoplay when on video slide
      autoplayRef.current.stop()
      video.addEventListener('ended', handleVideoEnded)
    } else if (current !== 1) {
      // Resume autoplay for image slides
      autoplayRef.current.play()
    }

    return () => {
      video?.removeEventListener('ended', handleVideoEnded)
    }
  }, [api, current])

  const toggleVideoPlayback = () => {
    setVideoPlaying(!videoPlaying)
  }

  const handleOrderNow = () => {
    // Add your order logic here
    console.log('Order Now clicked')
  }

  return (
    <div className="relative h-dvh w-full overflow-hidden bg-background">
      <Carousel
        setApi={setApi}
        plugins={[autoplayRef.current]}
        className="h-full w-full"
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent className="h-screen ml-0">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative h-screen pl-0">
              {slide.type === 'video' ? (
                <video
                  ref={videoRef}
                  src={slide.src}
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={slide.src}
                  alt={slide.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Order Now Button - Bottom Left */}
      <Button
        className="absolute bottom-12 left-8  font-semibold shadow-2xl transition-transform hover:scale-105"
      >
        <Link href={"https://www.toasttab.com/local/order/yoyo-chicken-753-merrick-rd-baldwin-753-merrick-rd"}>
          ORDER NOW
        </Link>
      </Button>

      {/* Video Play/Pause Button */}
      {current === 1 && (
        <Button
          onClick={toggleVideoPlayback}
          size="icon"
          variant="ghost"
          className="absolute bottom-12 right-8  rounded-full bg-background/20 text-primary-foreground backdrop-blur-md transition-transform hover:bg-background/40 hover:scale-110"
          aria-label={videoPlaying ? 'Pause video' : 'Play video'}
        >
          {videoPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
        </Button>
      )}

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2  flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-3 rounded-full transition-all ${index === current - 1
                ? 'w-12 bg-primary'
                : 'w-3 bg-muted-foreground/50 hover:bg-muted-foreground'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}