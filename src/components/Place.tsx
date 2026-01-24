export default function Place() {
  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-3 shadow-sm">
      <div className="relative flex gap-3 cursor-pointer">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-neutral-100">
          📍🍜
        </div>

        <div className="flex flex-col">
          <span className="text-sm font-semibold text-neutral-900">
            삿타토게
          </span>
          <span className="text-xs text-neutral-500">Fuji View Spot</span>
        </div>
      </div>
      <div className="mt-3">
        <div className="grid grid-cols-4 gap-2">
          <figure className="pt-[100%] relative">
            <button
              type="button"
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage:
                  "url(https://picsum.photos/seed/picsum/200/300)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </figure>
          <figure className="pt-[100%] relative">
            <button
              type="button"
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage:
                  "url(https://picsum.photos/seed/picsum/200/300)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </figure>
          <figure className="pt-[100%] relative">
            <button
              type="button"
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage:
                  "url(https://picsum.photos/seed/picsum/200/300)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </figure>
          <figure className="pt-[100%] relative">
            <button
              type="button"
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage:
                  "url(https://picsum.photos/seed/picsum/200/300)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </figure>
        </div>
      </div>
    </div>
  );
}
