import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Particles from "@/components/Particles"; // <-- correct import

export default function HomePage() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="pb-16 relative overflow-hidden">
        {/* Background Particles (only behind hero) */}
        <div className="absolute inset-0 -z-10">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.2}
            particleBaseSize={110}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
            className="w-full h-full"
          />
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left */}
          <div className="text-center sm:text-left">
            <div className="mb-6">
              <span className="text-gray-500 font-light tracking-wide">
                spott<span className="text-purple-400">*</span>
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-[0.95] tracking-tight">
              Discover &<br />
              create amazing
              <br />
              <span className="bg-linear-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                events.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-lg font-light">
              Whether you're hosting or attending, Spott makes every event
              memorable. Join our community today.
            </p>

            <Link href="/explore">
              <Button size="xl" className="rounded-full">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Right – Image */}
          <div className="relative block">
            <Image
              src="/hero.png"
              alt="react meetup"
              width={700}
              height={700}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}
