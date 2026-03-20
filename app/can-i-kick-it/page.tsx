import Image from 'next/image';

export const metadata = {
  title: 'CAN I KICK IT? | SHAOLIN JAZZ',
  description: 'Martial arts films with live musical scoring - a unique Shaolin Jazz experience.',
};

export default function CanIKickIt() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] bg-black">
        <div className="absolute inset-0">
          <Image
            src="https://static.wixstatic.com/media/a27226_9c3274187b3a4f91ab595d2f4a317205~mv2.png/v1/fill/w_564,h_780,q_90,enc_avif,quality_auto/a27226_9c3274187b3a4f91ab595d2f4a317205~mv2.png"
            alt="Can I Kick It?"
            fill
            className="object-contain"
            priority
          />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            CAN I KICK IT?
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed">
            Martial arts cinema meets live musical performance
          </p>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-black text-center">
            THE CONCEPT
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-center">
            CAN I KICK IT? is Shaolin Jazz's signature event series that reimagines classic martial arts
            films with live musical scoring. DJs and musicians create a unique soundtrack in real-time,
            blending hip-hop, jazz, and funk with the visual spectacle of kung fu cinema.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center">
            Each screening becomes a one-of-a-kind experience where film and music merge to create
            something entirely new—paying homage to both the golden age of martial arts cinema and
            the sampling culture that has kept these films alive in hip-hop.
          </p>
        </div>
      </section>

      {/* Featured Films */}
      <section className="py-12 sm:py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-black text-center">
            FEATURED FILMS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="group">
              <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-lg mb-4">
                <Image
                  src="https://static.wixstatic.com/media/a27226_9efbe91e4f1842d2baea740c7180efcf~mv2.jpg/v1/fill/w_331,h_442,q_90,enc_avif,quality_auto/a27226_9efbe91e4f1842d2baea740c7180efcf~mv2.jpg"
                  alt="Film Poster"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="group">
              <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-lg mb-4">
                <Image
                  src="https://static.wixstatic.com/media/a27226_abce40caadae4b24af38119595bad109~mv2.jpg/v1/fill/w_331,h_442,fp_0.4_0.42,q_90,enc_avif,quality_auto/a27226_abce40caadae4b24af38119595bad109~mv2.jpg"
                  alt="Film Poster"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="group">
              <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-lg mb-4">
                <Image
                  src="https://static.wixstatic.com/media/a27226_cbb40bb42dc94dc8b758363714b5d6d5~mv2.jpg/v1/fill/w_332,h_442,q_90,enc_avif,quality_auto/a27226_cbb40bb42dc94dc8b758363714b5d6d5~mv2.jpg"
                  alt="Film Poster"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="group">
              <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-lg mb-4">
                <Image
                  src="https://static.wixstatic.com/media/a27226_dc0bdae964034a228806e9fa6716e336~mv2.jpg/v1/fill/w_332,h_442,fp_0.56_0.51,q_90,enc_avif,quality_auto/a27226_dc0bdae964034a228806e9fa6716e336~mv2.jpg"
                  alt="Film Poster"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Experience */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-black text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center">
            THE EXPERIENCE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl mb-4">🎬</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-red-600">CLASSIC CINEMA</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Iconic martial arts films from the golden age of kung fu cinema
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl mb-4">🎵</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-red-600">LIVE SCORING</h3>
              <p className="text-sm sm:text-base text-gray-300">
                DJs and musicians create original soundtracks in real-time
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl mb-4">🥋</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-red-600">CULTURE FUSION</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Hip-hop, jazz, and martial arts come together in perfect harmony
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-black text-center">
            PAST EVENTS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://static.wixstatic.com/media/a27226_f5377661671044e19bf8c831a4fc3a9e~mv2.png/v1/fill/w_653,h_486,q_90,enc_avif,quality_auto/a27226_f5377661671044e19bf8c831a4fc3a9e~mv2.png"
                alt="Event"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://static.wixstatic.com/media/a27226_b5a33c04531c4127a4b9577a8ab6f05b~mv2.png/v1/fill/w_322,h_423,q_90,enc_avif,quality_auto/a27226_b5a33c04531c4127a4b9577a8ab6f05b~mv2.png"
                alt="Event"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://static.wixstatic.com/media/a27226_c8ea65489c2341258eee29ef778bf273~mv2.jpg/v1/fill/w_322,h_491,q_90,enc_avif,quality_auto/a27226_c8ea65489c2341258eee29ef778bf273~mv2.jpg"
                alt="Event"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-red-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            COMING TO A CITY NEAR YOU
          </h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8">
            Check our events page for upcoming CAN I KICK IT? screenings
          </p>
          <a
            href="/events"
            className="inline-block bg-black text-white px-8 py-4 rounded-md font-semibold text-sm sm:text-base hover:bg-gray-900 transition-colors"
          >
            VIEW EVENTS
          </a>
        </div>
      </section>
    </div>
  );
}
