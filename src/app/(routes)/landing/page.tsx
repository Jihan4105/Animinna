import Image from "next/image"
import { Metadata } from "next"

import LandingSwiper from "@/components/LandingSwiper"
import CustomButton from "@/components/CustomButton"

export const metadata: Metadata = {
  title: "Landing"
}

export default function LandingPage() {
  return (
    <>
      <video 
        autoPlay 
        muted 
        loop 
        className="absolute top-0 left-0 z-[10] min-w-screen min-h-screen max-w-none"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero section */}
      <section className="grid grid-cols-1 md:grid-cols-2 place-items-center relative z-[30] mb-100">
        <div className="flex flex-col gap-4">
          <h1 className="font-black text-4xl sm:text-[60px]">Discover Your<br/>Masterpieces<br/>Anime</h1>
          <p className="md:text-[18px]">The widest and most fantasic “Sekai” for who loves anime</p>
          <div className="flex flex-col gap-2">
            <CustomButton label="visit library" variant="default" href="/library" />
            <CustomButton label="view news" variant="outline" href="/news" />
          </div>
        </div>
      </section>

      {/* Swiper section */}
      <section>
        <div>
          <LandingSwiper />
        </div>
        <div>
          <h2>Wise Library</h2>
          <p>With various tastes and different perspectives, we will introduce Otaku culture regardless of genre and number</p>
        </div>
      </section>

      {/* Review section */}
      <section>
        <div>
          <h2>Highquality Of Review</h2>
          <p>Experts with over 20 years of Otaku experience write reliable reviews with different perspectives!</p>
        </div>
        <div>
          <Image 
            className="hidden dark:block"
            src="/images/review_dark.png"
            width={2898}
            height={1907}
            alt="review dark"
          />
          <Image 
            className="dark:hidden"
            src="/images/review.png"
            width={2898}
            height={1907}
            alt="review light"
          />
        </div>
      </section>

      {/* Latest News Section */}
      <section>
        <div>
          <Image 
            src="/images/violet-evergarden.png"
            width={439}
            height={519}
            alt="Violet Evergarden"
          />
        </div>
        <div>
          <h2>Latest News Of Anime</h2>
          <p>We always provide latest news you must interested in, take a look and monitoring your favorite anime!</p>
          <CustomButton label="view news" variant="default" href="/news" />
        </div>
      </section>
    </>
  )
}