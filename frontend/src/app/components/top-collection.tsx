import Image from 'next/image';
import bottle from '@/assets/bottle.png';

export function TopCollection() {
  const items = [1, 2, 3];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading with decorative lines */}
        <div className="mb-12 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-gray-400" />
          <h2 className="text-center text-3xl font-semibold text-[#6B4A1E] sm:text-4xl">
            Our Top Collection
          </h2>
          <div className="h-px w-16 bg-gray-400" />
        </div>

        {/* Bottles grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item}
              className="flex flex-col items-center"
            >
              <div className="flex w-full max-w-xs transform items-center justify-center rounded-3xl bg-white p-6 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
                <Image
                  src={bottle}
                  alt="Top collection ghee bottle"
                  className="h-auto w-full max-w-[280px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

