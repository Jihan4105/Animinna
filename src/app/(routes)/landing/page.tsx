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
      {/* Hero section */}
      <section>
        <div>
          <h1>Discover Your Masterpieces Anime</h1>
          <p>The widest and most fantasic “Sekai” for who loves anime</p>
          <div>
            <CustomButton label="visit library" variant="default" href="/library" />
            <CustomButton label="view news" variant="outline" href="/news" />
          </div>
        </div>
        <div>
          <video src="/video.mp4" autoPlay muted loop></video>
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