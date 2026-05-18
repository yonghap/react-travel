import { place } from '@/data/data';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative h-screen overflow-y-hidden">
      <ul className="inline-flex gap-2 h-full">
        {place.map((item) => (
          <li key={item.id} className="w-[300px] flex-1 min-w-0 overflow-hidden relative">
            <Link href={`/place/${item.city}`} className="block h-full">
              <figure className="h-[100%]">
                {item.image ? (
                  <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
                ) : (
                  <img
                    src="https://lh3.googleusercontent.com/d/13xttX0P4nHolhBFlZK8jWKoGv34JuNKk"
                    alt={item.name}
                    className="object-cover w-full h-full"
                  />
                )}
              </figure>
              <div className="block absolute p-3 pb-4 w-full text-center bg-[#f0efe6] bottom-[10%] left-0 w-full">
                <div className="font-bold text-2xl">{item.name}</div>
                <div className="text-gray-500 text-xs mb-1">{item.year}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
