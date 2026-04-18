import { place } from '@/data/data';

export default function Home() {
  return (
    <div className="relative h-screen">
      <ul className="inline-flex gap-2 h-full overflow-hidden">
        {place.map((item) => (
          <li key={item.id} className="w-[300px] flex-1 min-w-0 rounded overflow-hidden">
            <figure className="h-[50%]">
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
            <button type="button" className="block p-3 pb-4 w-full text-center bg-[#f0efe6]">
              <div className="font-bold text-2xl">{item.name}</div>
              <div className="text-gray-500 text-xs mb-1">{item.year}</div>
              <span className="bg-black text-white text-xs py-1 px-3">VIEW</span>
            </button>
            <figure className="h-[50%]">
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
          </li>
        ))}
      </ul>
    </div>
  );
}
