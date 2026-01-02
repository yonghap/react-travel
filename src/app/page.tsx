export default function Home() {
  return (
    <div className="relative w-full px-4 max-w-[1800px] mx-auto">
      <ul className="grid grid-cols-5 gap-3 items-stretch ">
        {/* 2023 대한민국 */}
        <li className="flex-1 min-w-0">
          <div>
            <img src="https://lh3.googleusercontent.com/d/13xttX0P4nHolhBFlZK8jWKoGv34JuNKk" />
            <button
              type="button"
              className="block p-2 pb-3 w-full text-center bg-[#f0efe6]"
            >
              <div className="font-bold text-2xl">대한민국</div>
              <div className="text-gray-500 text-xs mb-1">2019</div>
              <span className="bg-black text-white text-xs py-1 px-2">
                VIEW
              </span>
            </button>
          </div>
        </li>
        {/* 2023 중국 */}
        <li className="flex-1 min-w-0">
          <div>
            <img src="https://lh3.googleusercontent.com/d/13xttX0P4nHolhBFlZK8jWKoGv34JuNKk" />
            <button
              type="button"
              className="block p-2 pb-3 w-full text-center bg-[#f0efe6]"
            >
              <div className="font-bold text-2xl">중국</div>
              <div className="text-gray-500 text-xs mb-1">2019</div>
              <span className="bg-black text-white text-xs py-1 px-2">
                VIEW
              </span>
            </button>
          </div>
        </li>
        {/* 2023 싱가폴 */}
        <li className="flex-1 min-w-0">
          <div>
            <img src="https://lh3.googleusercontent.com/d/13xttX0P4nHolhBFlZK8jWKoGv34JuNKk" />
            <button
              type="button"
              className="block p-2 pb-3 w-full text-center bg-[#f0efe6]"
            >
              <div className="font-bold text-2xl">싱가포르</div>
              <div className="text-gray-500 text-xs mb-1">2018</div>
              <span className="bg-black text-white text-xs py-1 px-2">
                VIEW
              </span>
            </button>
          </div>
        </li>
        {/* 2023 대만 */}
        <li className="flex-1 min-w-0">
          <div>
            <img src="https://lh3.googleusercontent.com/d/13xttX0P4nHolhBFlZK8jWKoGv34JuNKk" />
            <button
              type="button"
              className="block p-2 pb-3 w-full text-center bg-[#f0efe6]"
            >
              <div className="font-bold text-2xl">대만</div>
              <div className="text-gray-500 text-xs mb-1">2019</div>
              <span className="bg-black text-white text-xs py-1 px-2">
                VIEW
              </span>
            </button>
          </div>
        </li>
        {/* 2019 러시아 */}
        <li className="flex-1 min-w-0">
          <div>
            <img src="https://lh3.googleusercontent.com/d/13xttX0P4nHolhBFlZK8jWKoGv34JuNKk" />
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
        {/* 2019 일본 */}
        <li className="flex-1 min-w-0">
          <div>
            <img src="https://lh3.googleusercontent.com/d/182xZuXdUrpIpCE-TUNhbJzSU9gpYaXb_" />
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
        {/* 2018 홍콩 */}
        <li className="flex-1 min-w-0">
          <div>
            <img src="https://lh3.googleusercontent.com/d/1Elba1GyOxNpuwsdVzjZUJW9Rm9Q4ctX3" />
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
        {/* 2017 홍콩 */}
        <li className="flex-1 min-w-0 w-[calc((100% - 18px) / 6)]">
          <div>
            <img src="https://lh3.googleusercontent.com/d/10OfcpxrjMd7RIQFbUldLvxifRkrV1ONP" />
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
      </ul>
    </div>
  );
}
