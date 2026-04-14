import { place } from '@/data/data';

export default function Home() {
  return (
    <div className="relative w-full p-6 max-w-[1800px] mx-auto">
      <ul className="grid grid-cols-4 gap-4 items-stretch">
        {place.map((item) => (
          <li key={item.id} className="flex-1 min-w-0 rounded overflow-hidden">
            <figure>
              <img src="https://lh3.googleusercontent.com/d/13xttX0P4nHolhBFlZK8jWKoGv34JuNKk" />
            </figure>
            <button type="button" className="block p-3 pb-4 w-full text-center bg-[#f0efe6]">
              <div className="font-bold text-2xl">{item.name}</div>
              <div className="text-gray-500 text-xs mb-1">{item.year}</div>
              <span className="bg-black text-white text-xs py-1 px-2">VIEW</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
