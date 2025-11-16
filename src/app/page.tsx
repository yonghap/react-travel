export default function Home() {
  return (
    <div className="relative w-full h-[calc(100vh-120px)] px-4 max-w-[1800px] mx-auto">
      <ul className="flex gap-3 h-full items-stretch">
        <li className="flex-1 min-w-0">
          <div className="h-1/2">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/d/10OfcpxrjMd7RIQFbUldLvxifRkrV1ONP"
            />
            <button
              type="button"
              className="block p-2 pb-3 w-full text-center bg-[#f0efe6]"
            >
              <div className="font-bold text-2xl">홍콩</div>
              <div className="text-gray-500 text-xs mb-1">2017</div>
              <span className="bg-black text-white text-xs py-1 px-2">
                VIEW
              </span>
            </button>
          </div>
        </li>
        <li className="flex-1 min-w-0">
          <div className="h-1/2">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/d/1Elba1GyOxNpuwsdVzjZUJW9Rm9Q4ctX3"
            />
            <button
              type="button"
              className="block p-2 pb-3 w-full text-center bg-[#f0efe6]"
            >
              <div className="font-bold text-2xl">미국</div>
              <div className="text-gray-500 text-xs mb-1">2018</div>
              <span className="bg-black text-white text-xs py-1 px-2">
                VIEW
              </span>
            </button>
          </div>
        </li>
        <li className="flex-1 min-w-0">
          <div className="h-1/2">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/d/182xZuXdUrpIpCE-TUNhbJzSU9gpYaXb_"
            />
            <button
              type="button"
              className="block p-2 pb-3 w-full text-center bg-[#f0efe6]"
            >
              <div className="font-bold text-2xl">일본</div>
              <div className="text-gray-500 text-xs mb-1">2019</div>
              <span className="bg-black text-white text-xs py-1 px-2">
                VIEW
              </span>
            </button>
          </div>
        </li>

        <li className="flex-1 min-w-0">
          <div className="h-1/2">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/d/13xttX0P4nHolhBFlZK8jWKoGv34JuNKk"
            />
            <button
              type="button"
              className="block p-2 pb-3 w-full text-center bg-[#f0efe6]"
            >
              <div className="font-bold text-2xl">러시아</div>
              <div className="text-gray-500 text-xs mb-1">2019</div>
              <span className="bg-black text-white text-xs py-1 px-2">
                VIEW
              </span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
