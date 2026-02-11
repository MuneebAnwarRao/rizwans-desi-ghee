import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Leaf, Award, Heart, Truck, CreditCard, CheckCircle, Star, Quote } from 'lucide-react';
import { useApp } from '@/app/context/app-context';
import { products } from '@/app/data/products';
import bottle from '@/assets/bottle.png';
import { ProductImage3D } from '@/app/components/product-image-3d';
import { HomeProductShowcase } from '@/app/components/home-product-showcase';
import { TopCollection } from '@/app/components/top-collection';

export function HomePage() {
  const { setCurrentPage, setSelectedProduct, addToCart } = useApp();
  const [currentSlide, setCurrentSlide] = useState(0);

  const bottleImages = [bottle];

  const handleShopNow = () => {
    setCurrentPage('shop');
    window.scrollTo(0, 0);
  };

  const handleLearnMore = () => {
    setCurrentPage('about');
    window.scrollTo(0, 0);
  };

  const handleViewProduct = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setCurrentPage('product');
    window.scrollTo(0, 0);
  };

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart(product, 1, product.weight);
  };

  const testimonials = [
    {
      name: 'Ayesha Khan',
      location: 'Karachi',
      rating: 5,
      text: 'The taste reminds me of my grandmother\'s home-made ghee. Absolutely authentic and pure!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
    },
    {
      name: 'Hamza Ali',
      location: 'Lahore',
      rating: 5,
      text: 'Best quality desi ghee. The aroma and taste are exceptional. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
    },
    {
      name: 'Fatima Siddiqui',
      location: 'Islamabad',
      rating: 5,
      text: 'Using for 2 years now. The quality is consistently excellent. Worth every rupee!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section with single bottle carousel */}
      <section className="relative bg-[#FAF7F2] pt-10 pb-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <p className="uppercase tracking-[0.2em] text-sm text-[#6B4A1E]/70" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Pure • Traditional • Authentic
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#6B4A1E]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Rizwan&apos;s <span className="text-[#E6B65C]">Desi Ghee</span>
            </h1>
            <p className="text-lg md:text-xl text-[#5F6B3C] max-w-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Handcrafted bilona ghee with rich aroma and golden color, made from farm-fresh milk in Punjab, Pakistan.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleShopNow}
                className="bg-[#E6B65C] hover:bg-[#D9A74F] text-[#6B4A1E] px-8 py-3 rounded-full font-semibold shadow-lg transition-transform duration-200 hover:scale-105"
              >
                Shop Now
              </button>
              <button
                onClick={handleLearnMore}
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#E6B65C] text-[#6B4A1E] hover:bg-[#E6B65C] hover:text-[#6B4A1E] transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Bottle carousel (single image, slider-ready) */}
          <div className="relative">
            <div className="relative px-4 py-6 md:px-8 md:py-10">
              <div className="flex items-center justify-between gap-4">
                {/* Prev */}
                <button
                  type="button"
                  onClick={() =>
                    setCurrentSlide(
                      (currentSlide - 1 + bottleImages.length) % bottleImages.length
                    )
                  }
                  className="hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-[#E6B65C]/60 text-[#6B4A1E] hover:bg-[#FAF7F2] transition-colors"
                  aria-label="Previous image"
                >
                  ‹
                </button>

                {/* Image area */}
                <div className="flex-1 flex justify-center">
                  <div className="max-h-[420px] w-auto flex items-center justify-center">
                    {/* Premium 3D hover effect for hero bottle (desktop only, motion-safe) */}
                    <ProductImage3D
                      src={bottleImages[currentSlide]}
                      alt="Rizwan's Desi Ghee bottle"
                      priority
                      width={400}
                      height={420}
                      sizes="(max-width: 768px) 280px, 360px"
                    />
                  </div>
                </div>

                {/* Next */}
                <button
                  type="button"
                  onClick={() =>
                    setCurrentSlide((currentSlide + 1) % bottleImages.length)
                  }
                  className="hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-[#E6B65C]/60 text-[#6B4A1E] hover:bg-[#FAF7F2] transition-colors"
                  aria-label="Next image"
                >
                  ›
                </button>
              </div>

              {/* Dots */}
              <div className="mt-4 flex justify-center gap-2">
                {bottleImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      currentSlide === index
                        ? 'bg-[#E6B65C]'
                        : 'bg-[#FAF7F2] border border-[#E6B65C]/60'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Row */}
      <section className="bg-white py-12 border-y border-[#E6B65C]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E6B65C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-[#5F6B3C]" />
              </div>
              <h3 className="text-lg text-[#6B4A1E] mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>100% Pure</h3>
              <p className="text-sm text-[#6B4A1E]/60" style={{ fontFamily: 'Poppins, sans-serif' }}>No additives</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E6B65C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-[#5F6B3C]" />
              </div>
              <h3 className="text-lg text-[#6B4A1E] mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>Traditional Method</h3>
              <p className="text-sm text-[#6B4A1E]/60" style={{ fontFamily: 'Poppins, sans-serif' }}>Hand-churned</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E6B65C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-[#5F6B3C]" />
              </div>
              <h3 className="text-lg text-[#6B4A1E] mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>Cash on Delivery</h3>
              <p className="text-sm text-[#6B4A1E]/60" style={{ fontFamily: 'Poppins, sans-serif' }}>Pay at home</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E6B65C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-[#5F6B3C]" />
              </div>
              <h3 className="text-lg text-[#6B4A1E] mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>Fast Delivery</h3>
              <p className="text-sm text-[#6B4A1E]/60" style={{ fontFamily: 'Poppins, sans-serif' }}>Within 3-5 days</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products marquee headline */}
      <div className="bg-black">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="group relative flex h-9 sm:h-10 items-center overflow-hidden">
            <div className="flex w-max items-center gap-8 pr-6 animate-announcement-marquee group-hover:[animation-play-state:paused]">
              {Array.from({ length: 2 }).map((_, idx) => (
                <span
                  // Duplicate content twice for seamless loop
                  key={idx}
                  className="whitespace-nowrap text-xs sm:text-sm font-medium text-white"
                >
                  100% Purity Guarantee • Agar aap mutmain nahi, toh paisa wapis • Traditional Hand-Churned Desi Ghee • Fast Delivery • Cash on Delivery
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Top collection section */}
      <TopCollection />

      {/* Featured Products Section */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl text-[#6B4A1E] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Featured Products
            </h2>
            <p className="text-lg text-[#6B4A1E]/70" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Choose from our range of pure desi ghee
            </p>
          </div>
        </div>
      </section>

      {/* Interactive product showcase section (detail-style) */}
      <HomeProductShowcase />
    </div>
  );
}
