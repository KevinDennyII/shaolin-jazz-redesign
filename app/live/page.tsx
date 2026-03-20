import Image from 'next/image';

export const metadata = {
  title: 'SHAOLIN JAZZ L!VE | SHAOLIN JAZZ',
  description: 'Experience the live performance series blending hip-hop, jazz, and martial arts culture.',
};

export default function Live() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black flex items-center justify-center">
          <div className="text-center px-4">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto mb-6">
              <Image
                src="https://static.wixstatic.com/media/a27226_ddce08455440473fa98f917a91ab215f~mv2.png/v1/fill/w_391,h_390,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/shaolin_jazz_live_logo_edited.png"
                alt="Shaolin Jazz Live"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              SHAOLIN JAZZ L!VE
            </h1>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-black">
            LIVE PERFORMANCE SERIES
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
            SHAOLIN JAZZ L!VE is a dynamic live performance series that brings together musicians,
            DJs, and artists to explore the intersections of hip-hop, jazz, and martial arts culture
            in real-time.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Each performance is a unique experience, blending live instrumentation with DJ culture,
            improvisation with careful arrangement, and tradition with innovation.
          </p>
        </div>
      </section>

      {/* Performance Images */}
      <section className="py-12 sm:py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="relative h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://static.wixstatic.com/media/a27226_a1e2426d34b3451a8498bc45bee2d01e~mv2.png/v1/fill/w_949,h_269,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/wideshot.png"
                alt="Live Performance"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://static.wixstatic.com/media/a27226_e0916583adc54367989becc7ca9ed4ac~mv2.jpg/v1/crop/x_0,y_486,w_2592,h_756/fill/w_1347,h_394,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_2430_edited_edited.jpg"
                alt="Live Performance"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Venues & Cities */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center text-black">
            PERFORMANCE CITIES
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div className="bg-red-600 text-white p-6 rounded-lg">
              <p className="text-xl sm:text-2xl font-bold">DC</p>
            </div>
            <div className="bg-red-600 text-white p-6 rounded-lg">
              <p className="text-xl sm:text-2xl font-bold">PHOENIX</p>
            </div>
            <div className="bg-red-600 text-white p-6 rounded-lg">
              <p className="text-xl sm:text-2xl font-bold">AUSTIN</p>
            </div>
            <div className="bg-red-600 text-white p-6 rounded-lg">
              <p className="text-xl sm:text-2xl font-bold">JACKSON HOLE</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">THE EXPERIENCE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-red-600">LIVE INSTRUMENTATION</h3>
              <p className="text-sm sm:text-base text-gray-300">
                World-class musicians bringing jazz and hip-hop to life
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-red-600">DJ CULTURE</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Turntablism and production techniques on full display
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-red-600">IMPROVISATION</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Spontaneous creativity and musical conversation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Image */}
      <section className="relative h-64 sm:h-80 lg:h-96">
        <Image
          src="https://static.wixstatic.com/media/a27226_848a0690e3ff48f59f71295fe6db98b9~mv2.png/v1/fill/w_288,h_146,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/turnstyle.png"
          alt="Venue"
          fill
          className="object-contain bg-gray-100"
        />
      </section>
    </div>
  );
}
