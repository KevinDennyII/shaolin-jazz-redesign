import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90">
          <Image
            src="https://static.wixstatic.com/media/a27226_dc680b5c1c0843e0ab71219bfed2e295~mv2.jpg/v1/crop/x_0,y_172,w_1200,h_350/fill/w_1200,h_349,al_c,q_85,enc_avif,quality_auto/University%20Building_edited.jpg"
            alt="Shaolin Jazz"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-wider">
              SHAOLIN JAZZ
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-4">
              PRODUCING EVENTS AND CREATING CONTENT THAT HIGHLIGHT THE INTERSECTIONS BETWEEN HIP-HOP, JAZZ, AND MARTIAL ARTS CULTURE
            </p>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-red-600">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">UPCOMING EVENT</h2>
          <div className="bg-black/20 backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-lg">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">CAN I KICK IT?</h3>
            <p className="text-base sm:text-lg lg:text-xl mb-3 sm:mb-4">The Last Dragon</p>
            <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">Civic Space Park, Phoenix</p>
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6">February 28, 2026</p>
            <Link
              href="/events"
              className="inline-block bg-white text-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold text-sm sm:text-base hover:bg-gray-100 transition-colors"
            >
              VIEW ALL EVENTS
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Sections Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

            {/* CAN I KICK IT? */}
            <Link href="/can-i-kick-it" className="group">
              <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="https://static.wixstatic.com/media/a27226_9c3274187b3a4f91ab595d2f4a317205~mv2.png/v1/fill/w_282,h_390,q_90,enc_avif,quality_auto/a27226_9c3274187b3a4f91ab595d2f4a317205~mv2.png"
                  alt="Can I Kick It?"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                  <div className="absolute bottom-0 p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">CAN I KICK IT?</h3>
                    <p className="text-gray-200 text-sm sm:text-base">Martial arts films with live scoring</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Sound Patterns */}
            <Link href="/sound-patterns" className="group">
              <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="https://static.wixstatic.com/media/a27226_c09f3d8d4aa141deaac602fdfd767abc~mv2.png/v1/fill/w_556,h_63,al_c,lg_1,q_85,enc_avif,quality_auto/sound%20patterns_PNG.png"
                  alt="Sound Patterns"
                  fill
                  className="object-contain bg-gray-900 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                  <div className="absolute bottom-0 p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">SOUND PATTERNS</h3>
                    <p className="text-gray-200 text-sm sm:text-base">Multimedia art exhibition</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* SHAOLIN JAZZ L!VE */}
            <Link href="/live" className="group">
              <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="https://static.wixstatic.com/media/a27226_c99e914ebdf942beaa9b91baf520f777~mv2.png/v1/fill/w_257,h_257,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/shaolin_jazz_live_logo.png"
                  alt="Shaolin Jazz Live"
                  fill
                  className="object-contain bg-black group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                  <div className="absolute bottom-0 p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">SHAOLIN JAZZ L!VE</h3>
                    <p className="text-gray-200 text-sm sm:text-base">Live performance series</p>
                  </div>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-black">THE INTERSECTION</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8">
            Shaolin Jazz explores the unique connections between three powerful cultural forces:
            the improvisational genius of Jazz, the lyrical mastery of Hip-Hop, and the disciplined
            artistry of Martial Arts.
          </p>
          <Link
            href="/the-project"
            className="inline-block bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold text-sm sm:text-base hover:bg-gray-800 transition-colors"
          >
            LEARN MORE
          </Link>
        </div>
      </section>

      {/* Shop CTA */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-black text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">SHOP MERCHANDISE</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8">
            Represent the culture with official Shaolin Jazz apparel and products
          </p>
          <Link
            href="/shop"
            className="inline-block bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold text-sm sm:text-base hover:bg-red-700 transition-colors"
          >
            VISIT SHOP
          </Link>
        </div>
      </section>
    </div>
  );
}
