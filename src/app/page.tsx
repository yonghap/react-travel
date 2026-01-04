export default function Home() {
  return (
    <div className="relative w-full ">
      {/* Main Story */}
      <div
        className="h-[750px] flex items-center"
        style={{
          backgroundImage: "url('/images/5.jpg')",
          backgroundSize: "cover",
        }}
      >
        <div className="card bg-white max-w-[370px] m-auto p-3 text-center rounded">
          <figure className="rounded-2xl overflow-hidden">
            <img src="/images/2.jpg" alt="Cover Image" />
          </figure>
          <div className="py-10">
            <h3 className="text-gray-500">October 10, 2025</h3>
            <p className="mt-1 text-2xl font-bold">도쿄 (Tokyo, 日本 도쿄도)</p>
          </div>
        </div>
      </div>
      {/* Latest Stories */}
      <div className="py-20 px-3 bg-[#F9F1E2]">
        <h2 className="text-3xl font-bold text-center">
          Latest travel stories
        </h2>
        <ul className="mt-10 grid grid-cols-2 gap-3 max-w-[752px] mx-auto">
          <li>
            <div className="card bg-white max-w-[370px]  p-3 text-center rounded">
              <figure className="rounded-2xl overflow-hidden">
                <img src="/images/1.jpg" alt="Cover Image" />
              </figure>
              <div className="py-8">
                <h3 className="text-gray-500">October 10, 2025</h3>
                <p className="mt-1 text-xl font-bold">
                  도쿄 (Tokyo, 日本 도쿄도)
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="card bg-white max-w-[370px]  p-3 text-center rounded">
              <figure className="rounded-2xl overflow-hidden">
                <img src="/images/2.jpg" alt="Cover Image" />
              </figure>
              <div className="py-8">
                <h3 className="text-gray-500">October 10, 2025</h3>
                <p className="mt-1 text-xl font-bold">
                  도쿄 (Tokyo, 日本 도쿄도)
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="card bg-white max-w-[370px]  p-3 text-center rounded">
              <figure className="rounded-2xl overflow-hidden">
                <img src="/images/3.jpg" alt="Cover Image" />
              </figure>
              <div className="py-8">
                <h3 className="text-gray-500">October 10, 2025</h3>
                <p className="mt-1 text-xl font-bold">
                  도쿄 (Tokyo, 日本 도쿄도)
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="card bg-white max-w-[370px]  p-3 text-center rounded">
              <figure className="rounded-2xl overflow-hidden">
                <img src="/images/4.jpg" alt="Cover Image" />
              </figure>
              <div className="py-8">
                <h3 className="text-gray-500">October 10, 2025</h3>
                <p className="mt-1 text-xl font-bold">
                  도쿄 (Tokyo, 日本 도쿄도)
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <ul className="grid grid-cols-4 gap-3 items-stretch ">
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
