import Image from 'next/image';

export const metadata = {
  title: 'Events | SHAOLIN JAZZ',
  description: 'Upcoming Shaolin Jazz events, performances, and experiences.',
};

export default function Events() {
  const events = [
    {
      title: 'CAN I KICK IT? - The Last Dragon',
      location: 'Civic Space Park, Phoenix, AZ',
      date: 'February 28, 2026',
      time: '7:00 PM',
      description: 'Classic martial arts film with live musical scoring',
      image: 'https://static.wixstatic.com/media/a27226_9c3274187b3a4f91ab595d2f4a317205~mv2.png/v1/fill/w_282,h_390,q_90,enc_avif,quality_auto/a27226_9c3274187b3a4f91ab595d2f4a317205~mv2.png',
    },
    {
      title: 'SHAOLIN JAZZ L!VE',
      location: 'Turnstyle, Washington, DC',
      date: 'March 15, 2026',
      time: '8:00 PM',
      description: 'Live performance featuring jazz and hip-hop fusion',
      image: 'https://static.wixstatic.com/media/a27226_ddce08455440473fa98f917a91ab215f~mv2.png/v1/fill/w_391,h_390,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/shaolin_jazz_live_logo_edited.png',
    },
    {
      title: 'Sound Patterns Exhibition',
      location: 'Gallery Space, Austin, TX',
      date: 'April 5, 2026',
      time: '6:00 PM',
      description: 'Multimedia art exhibition opening reception',
      image: 'https://static.wixstatic.com/media/a27226_c09f3d8d4aa141deaac602fdfd767abc~mv2.png/v1/fill/w_556,h_63,al_c,lg_1,q_85,enc_avif,quality_auto/sound%20patterns_PNG.png',
    },
    {
      title: 'CAN I KICK IT? - 36th Chamber',
      location: 'Outdoor Venue, Jackson Hole, WY',
      date: 'May 20, 2026',
      time: '7:30 PM',
      description: 'Shaw Brothers classic with live DJ performance',
      image: 'https://static.wixstatic.com/media/a27226_9c3274187b3a4f91ab595d2f4a317205~mv2.png/v1/fill/w_282,h_390,q_90,enc_avif,quality_auto/a27226_9c3274187b3a4f91ab595d2f4a317205~mv2.png',
    },
    {
      title: 'SHAOLIN JAZZ L!VE Summer Series',
      location: 'Various Cities',
      date: 'June - August 2026',
      time: 'Various Times',
      description: 'Multi-city tour featuring live performances',
      image: 'https://static.wixstatic.com/media/a27226_c99e914ebdf942beaa9b91baf520f777~mv2.png/v1/fill/w_257,h_257,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/shaolin_jazz_live_logo.png',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center px-4">
            UPCOMING EVENTS
          </h1>
        </div>
      </section>

      {/* Events List */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8 lg:space-y-12">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-200"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                  {/* Event Image */}
                  <div className="relative h-64 md:h-auto bg-black">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-contain p-4"
                    />
                  </div>

                  {/* Event Details */}
                  <div className="md:col-span-2 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-black">
                        {event.title}
                      </h3>
                      <p className="text-base sm:text-lg text-gray-700 mb-4">
                        {event.description}
                      </p>
                      <div className="space-y-2 text-sm sm:text-base text-gray-600">
                        <p className="flex items-center">
                          <span className="font-semibold mr-2">📍</span>
                          {event.location}
                        </p>
                        <p className="flex items-center">
                          <span className="font-semibold mr-2">📅</span>
                          {event.date}
                        </p>
                        <p className="flex items-center">
                          <span className="font-semibold mr-2">🕐</span>
                          {event.time}
                        </p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <button className="bg-red-600 text-white px-6 sm:px-8 py-3 rounded-md font-semibold text-sm sm:text-base hover:bg-red-700 transition-colors w-full sm:w-auto">
                        GET TICKETS
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            STAY UPDATED
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8">
            Subscribe to our newsletter for event announcements and exclusive content
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
            <button
              type="submit"
              className="bg-red-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-700 transition-colors"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-black text-center">
            PAST EVENTS
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              'https://static.wixstatic.com/media/a9ff3b_03155a7e79bd4cca9aaf3f0e98378100.jpg/v1/fill/w_147,h_147,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/a9ff3b_03155a7e79bd4cca9aaf3f0e98378100.jpg',
              'https://static.wixstatic.com/media/a9ff3b_119100d8c0144221b2f6733f4d205d2e.jpg/v1/fill/w_147,h_147,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/a9ff3b_119100d8c0144221b2f6733f4d205d2e.jpg',
              'https://static.wixstatic.com/media/a9ff3b_18ef3d9c8058444ea08059329237a1f2.jpg/v1/fill/w_147,h_147,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/a9ff3b_18ef3d9c8058444ea08059329237a1f2.jpg',
              'https://static.wixstatic.com/media/a9ff3b_1e66a0a1739b419093a0a7ad9fd2b029.jpg/v1/fill/w_147,h_147,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/a9ff3b_1e66a0a1739b419093a0a7ad9fd2b029.jpg',
              'https://static.wixstatic.com/media/a9ff3b_1eec973ae9eb43f4bca9876e5d90f6fa.jpg/v1/fill/w_147,h_147,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/a9ff3b_1eec973ae9eb43f4bca9876e5d90f6fa.jpg',
              'https://static.wixstatic.com/media/a9ff3b_2dc1e209d10945a7b4329d2328dfcd7b.jpg/v1/fill/w_147,h_147,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/a9ff3b_2dc1e209d10945a7b4329d2328dfcd7b.jpg',
              'https://static.wixstatic.com/media/a9ff3b_368c28dfbd9a4a47a7db85fe6c956996.jpg/v1/fill/w_147,h_147,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/a9ff3b_368c28dfbd9a4a47a7db85fe6c956996.jpg',
              'https://static.wixstatic.com/media/a9ff3b_4121bbe6516d48278536acade5b02421.jpg/v1/fill/w_147,h_147,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/a9ff3b_4121bbe6516d48278536acade5b02421.jpg',
            ].map((image, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                <Image
                  src={image}
                  alt={`Past Event ${index + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
