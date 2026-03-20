import Image from 'next/image';

export const metadata = {
  title: 'The Project | SHAOLIN JAZZ',
  description: 'Discover the intersections between Hip-Hop, Jazz, and Martial Arts culture through the Shaolin Jazz Project.',
};

export default function TheProject() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] sm:h-[50vh] bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90">
          <Image
            src="https://static.wixstatic.com/media/a27226_ffb98e912e9f4a5db8784bb7a11165bb~mv2.jpg/v1/crop/x_15,y_0,w_690,h_202/fill/w_966,h_283,al_c,lg_1,q_80,enc_avif,quality_auto/dsc_0672_edited.jpg"
            alt="The Project"
            fill
            className="object-cover opacity-50"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">THE PROJECT</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-4xl mx-auto">

          {/* Introduction */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-black">
              THE INTERSECTION OF CULTURE
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              Shaolin Jazz explores the unique connections between three powerful cultural forces:
              the improvisational genius of Jazz, the lyrical mastery of Hip-Hop, and the disciplined
              artistry of Martial Arts.
            </p>
          </div>

          {/* Jazz & Hip-Hop Parallels */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-black">
              JAZZ & HIP-HOP: SHARED DNA
            </h3>

            <div className="space-y-6 sm:space-y-8">
              <div>
                <h4 className="text-lg sm:text-xl font-semibold mb-3 text-red-600">Rhythmic Innovation</h4>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  The rhythmic devices used in jazz solos mirror the delivery patterns of skilled MCs.
                  Both art forms use syncopation, call-and-response, and rhythmic variation to create
                  compelling sonic experiences.
                </p>
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-semibold mb-3 text-red-600">Improvisation & Freestyle</h4>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Jazz improvisation and freestyle rhyming share a common thread: the ability to create
                  in the moment. Both require deep knowledge of theory, extensive practice, and the
                  courage to take creative risks in real-time.
                </p>
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-semibold mb-3 text-red-600">Dance & Movement</h4>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  From the swing dancing of the big band era to the breaking and popping of hip-hop
                  culture, both movements have spawned iconic dance styles that reflect the energy and
                  spirit of their respective musical foundations.
                </p>
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-semibold mb-3 text-red-600">Cultural Expression</h4>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Both jazz and hip-hop emerged as powerful voices for marginalized communities,
                  serving as platforms for social commentary, cultural pride, and artistic innovation
                  that would influence generations to come.
                </p>
              </div>
            </div>
          </div>

          {/* Martial Arts Connection */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-black">
              THE MARTIAL ARTS ELEMENT
            </h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              Martial arts philosophy emphasizes discipline, practice, and the pursuit of mastery—principles
              that resonate deeply with both jazz musicians and hip-hop artists. The dedication required to
              perfect a kata mirrors the hours spent in the studio refining technique.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              The connection extends beyond philosophy. Martial arts films, particularly those from the
              Shaw Brothers era and Hong Kong cinema, have heavily influenced hip-hop culture, from sampling
              in production to references in lyrics and visual aesthetics.
            </p>
          </div>

          {/* Album Covers Grid */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 text-black">
              THE MUSIC
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://static.wixstatic.com/media/a27226_86f7a2751d5546af88db1de5a0a2f110~mv2.jpg/v1/fill/w_176,h_229,q_90,enc_avif,quality_auto/a27226_86f7a2751d5546af88db1de5a0a2f110~mv2.jpg"
                  alt="Album Cover"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://static.wixstatic.com/media/a27226_98333c6019224b46abc84a67e2260c77~mv2.jpg/v1/fill/w_168,h_211,q_90,enc_avif,quality_auto/a27226_98333c6019224b46abc84a67e2260c77~mv2.jpg"
                  alt="Album Cover"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://static.wixstatic.com/media/a27226_9c8bb090ef3c4d8fa173eb3cea6e6d8a~mv2.png/v1/fill/w_146,h_218,q_90,enc_avif,quality_auto/a27226_9c8bb090ef3c4d8fa173eb3cea6e6d8a~mv2.png"
                  alt="Album Cover"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-black text-white p-6 sm:p-8 lg:p-10 rounded-lg">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-center">OUR MISSION</h3>
            <p className="text-base sm:text-lg text-center text-gray-200 leading-relaxed">
              Shaolin Jazz produces events and creates content that celebrate these intersections,
              bringing together communities that appreciate the artistry, discipline, and cultural
              significance of hip-hop, jazz, and martial arts.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
