import Image from 'next/image';

export const metadata = {
  title: 'Shop | SHAOLIN JAZZ',
  description: 'Official Shaolin Jazz merchandise - apparel, vinyl, and more.',
};

export default function Shop() {
  const products = [
    {
      name: 'Shaolin Jazz T-Shirt',
      price: '$28.00',
      image: 'https://static.wixstatic.com/media/a27226_722921f359e9437fa06ebec5d84fac76~mv2.png/v1/crop/x_0,y_11,w_718,h_273/fill/w_282,h_108,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Shaolin%20Jazz%20Project%20Logo_edited.png',
    },
    {
      name: 'CIKI? Poster',
      price: '$20.00',
      image: 'https://static.wixstatic.com/media/a27226_9c3274187b3a4f91ab595d2f4a317205~mv2.png/v1/fill/w_282,h_390,q_90,enc_avif,quality_auto/a27226_9c3274187b3a4f91ab595d2f4a317205~mv2.png',
    },
    {
      name: 'Vinyl Collection',
      price: '$35.00',
      image: 'https://static.wixstatic.com/media/a27226_86f7a2751d5546af88db1de5a0a2f110~mv2.jpg/v1/fill/w_176,h_229,q_90,enc_avif,quality_auto/a27226_86f7a2751d5546af88db1de5a0a2f110~mv2.jpg',
    },
    {
      name: 'Sound Patterns Art Print',
      price: '$25.00',
      image: 'https://static.wixstatic.com/media/a27226_c09f3d8d4aa141deaac602fdfd767abc~mv2.png/v1/fill/w_288,h_32,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/sound%20patterns_PNG.png',
    },
    {
      name: 'Shaolin Jazz Hoodie',
      price: '$55.00',
      image: 'https://static.wixstatic.com/media/a27226_722921f359e9437fa06ebec5d84fac76~mv2.png/v1/crop/x_0,y_11,w_718,h_273/fill/w_282,h_108,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Shaolin%20Jazz%20Project%20Logo_edited.png',
    },
    {
      name: 'Live Performance DVD',
      price: '$18.00',
      image: 'https://static.wixstatic.com/media/a27226_c99e914ebdf942beaa9b91baf520f777~mv2.png/v1/fill/w_257,h_257,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/shaolin_jazz_live_logo.png',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-red-600">
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              SHOP
            </h1>
            <p className="text-lg sm:text-xl text-white/90">
              Official Shaolin Jazz Merchandise
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all group border border-gray-200"
              >
                <div className="relative h-64 sm:h-80 bg-gray-50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">
                    {product.name}
                  </h3>
                  <p className="text-xl sm:text-2xl font-bold text-red-600 mb-4">
                    {product.price}
                  </p>
                  <button className="w-full bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors">
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RedBubble Store Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-black">
            MORE PRODUCTS
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
            Visit our RedBubble store for even more Shaolin Jazz merchandise including
            stickers, phone cases, art prints, and custom apparel.
          </p>
          <a
            href="https://www.redbubble.com/people/dj2tonejones/explore?page=1&sortOrder=recent"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-md font-semibold text-sm sm:text-base hover:bg-red-700 transition-colors"
          >
            VISIT REDBUBBLE STORE
          </a>
        </div>
      </section>

      {/* Shipping Info */}
      <section className="py-12 sm:py-16 px-4 bg-black text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            SHIPPING & RETURNS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-red-600">FREE SHIPPING</h3>
              <p className="text-sm sm:text-base text-gray-300">
                On orders over $50
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">↩️</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-red-600">EASY RETURNS</h3>
              <p className="text-sm sm:text-base text-gray-300">
                30-day return policy
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-red-600">QUALITY GUARANTEE</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Premium products only
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Custom Orders */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-black">
            CUSTOM ORDERS
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
            Interested in bulk orders or custom merchandise? Contact us for special pricing
            and customization options.
          </p>
          <a
            href="mailto:info@shaolinjazz.com"
            className="inline-block bg-black text-white px-8 py-4 rounded-md font-semibold text-sm sm:text-base hover:bg-gray-800 transition-colors"
          >
            CONTACT US
          </a>
        </div>
      </section>
    </div>
  );
}
