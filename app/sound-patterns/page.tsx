import Image from 'next/image';

export const metadata = {
  title: 'Sound Patterns | SHAOLIN JAZZ',
  description: 'A multimedia art exhibition featuring contributing artists exploring the intersections of sound, culture, and visual art.',
};

export default function SoundPatterns() {
  const artists = [
    {
      name: 'DJ 2-Tone Jones',
      image: 'https://static.wixstatic.com/media/a27226_81d8af75f120485096c67ce1ae581af2~mv2.jpg/v1/fill/w_147,h_147,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/a27226_81d8af75f120485096c67ce1ae581af2~mv2.jpg'
    },
    {
      name: 'Tarus Magee',
      image: 'https://static.wixstatic.com/media/a27226_51b971807093408e8dbe35f319f61928~mv2.jpg/v1/fill/w_147,h_147,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/a27226_51b971807093408e8dbe35f319f61928~mv2.jpg'
    },
    {
      name: 'Gerald Watson',
      image: 'https://static.wixstatic.com/media/a27226_8e811391d9a44bcaad70a127832bd7fb~mv2.jpg/v1/fill/w_147,h_147,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/a27226_8e811391d9a44bcaad70a127832bd7fb~mv2.jpg'
    },
    {
      name: 'Michael Jaworek',
      image: 'https://static.wixstatic.com/media/a27226_a0c5e003853c4fdf96e3bf522b55839a~mv2.jpg/v1/fill/w_147,h_147,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/a27226_a0c5e003853c4fdf96e3bf522b55839a~mv2.jpg'
    },
    {
      name: 'Chris Nolan',
      image: 'https://static.wixstatic.com/media/a27226_c27c426f73544ed2abe8d56e9d6912c8~mv2.jpg/v1/fill/w_147,h_147,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/a27226_c27c426f73544ed2abe8d56e9d6912c8~mv2.jpg'
    },
    {
      name: 'Laura Gressani',
      image: 'https://static.wixstatic.com/media/a27226_cf916d6ee2164b62af180a2b070374da~mv2.jpg/v1/fill/w_147,h_147,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/a27226_cf916d6ee2164b62af180a2b070374da~mv2.jpg'
    },
    {
      name: 'Demze',
      image: 'https://static.wixstatic.com/media/a27226_ee12260ebc34409487c27be300e0bf56~mv2.jpg/v1/fill/w_147,h_147,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/a27226_ee12260ebc34409487c27be300e0bf56~mv2.jpg'
    },
    {
      name: 'Tanya Allen',
      image: 'https://static.wixstatic.com/media/a27226_f88181b90df942239c7a29267ccef100~mv2.jpg/v1/fill/w_147,h_147,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/a27226_f88181b90df942239c7a29267ccef100~mv2.jpg'
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] sm:h-[50vh] bg-black">
        <div className="absolute inset-0 bg-black flex items-center justify-center">
          <Image
            src="https://static.wixstatic.com/media/a27226_c09f3d8d4aa141deaac602fdfd767abc~mv2.png/v1/fill/w_556,h_63,al_c,lg_1,q_85,enc_avif,quality_auto/sound%20patterns_PNG.png"
            alt="Sound Patterns"
            width={600}
            height={100}
            className="object-contain"
          />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-black">
            MULTIMEDIA ART EXHIBITION
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Sound Patterns is a multimedia art exhibition that explores the visual and sonic
            intersections of hip-hop, jazz, and martial arts culture through the work of
            talented contributing artists.
          </p>
        </div>
      </section>

      {/* Featured Artwork */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://static.wixstatic.com/media/a27226_9cc4ff8269e54bff825db61e0e4f1d59~mv2.jpg/v1/fill/w_480,h_361,q_90,enc_avif,quality_auto/a27226_9cc4ff8269e54bff825db61e0e4f1d59~mv2.jpg"
                alt="Sound Patterns Artwork"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://static.wixstatic.com/media/a27226_8f0d6754704c4118acb35d6c04a8b9b4~mv2.jpg/v1/fill/w_490,h_368,q_90,enc_avif,quality_auto/a27226_8f0d6754704c4118acb35d6c04a8b9b4~mv2.jpg"
                alt="Sound Patterns Artwork"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://static.wixstatic.com/media/a27226_a403dc2b0f6c40a1afe12c0bd08dfdb0~mv2.png/v1/fill/w_597,h_467,q_90,enc_avif,quality_auto/a27226_a403dc2b0f6c40a1afe12c0bd08dfdb0~mv2.png"
                alt="Sound Patterns Artwork"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contributing Artists */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center">
            CONTRIBUTING ARTISTS
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">
            {artists.map((artist, index) => (
              <div key={index} className="text-center group">
                <div className="relative w-full aspect-square rounded-full overflow-hidden mb-3 sm:mb-4 shadow-lg">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="text-sm sm:text-base font-semibold">{artist.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exhibition Images */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center text-black">
            EXHIBITION GALLERY
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://static.wixstatic.com/media/a27226_c23f0c0af3d84ff5b044d88e034593d9~mv2.png/v1/fill/w_343,h_229,q_90,enc_avif,quality_auto/a27226_c23f0c0af3d84ff5b044d88e034593d9~mv2.png"
                alt="Exhibition"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://static.wixstatic.com/media/a27226_8aedb6bb7322402182c087167d7df009~mv2.jpg/v1/fill/w_317,h_211,q_90,enc_avif,quality_auto/a27226_8aedb6bb7322402182c087167d7df009~mv2.jpg"
                alt="Exhibition"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://static.wixstatic.com/media/a27226_315f1db53f2940208dc7bdf667a6a307~mv2.jpg/v1/fill/w_282,h_189,q_90,enc_avif,quality_auto/a27226_315f1db53f2940208dc7bdf667a6a307~mv2.jpg"
                alt="Exhibition"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
