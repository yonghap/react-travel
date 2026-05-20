import { places } from '@/data/place';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PlacePage({ params }: Props) {
  const { id } = await params;

  const place = places.find((item) => item.id === id);

  if (!place) {
    notFound();
  }

  return (
    <main>
      <header className="text-center py-10 max-w-[1100px] mx-auto">
        <h1 className="text-[100px] font-bold uppercase">{place.name}</h1>
        <p className="text-4xl">{place.description}</p>
        {place.header.image && (
          <figure className="mt-10">
            <img src={place.header.image} alt={place.name} className="mx-auto" />
          </figure>
        )}
        <p className="text-left mt-4 text-3xl/10 font-semibold  break-keep whitespace-pre-line">
          {place.header.description}
        </p>
      </header>
      <section className="max-w-[1100px] mx-auto">
        {place.sections.map((section, index) => {
          switch (section.type) {
            case 'imageBox':
              return (
                <section key={index}>
                  <div className="grid grid-cols-2 grid-rows-2 gap-4">
                    <div className="bg-red-200">
                      <img src={section.image1} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="bg-blue-200">
                      <img src={section.image2} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="bg-green-200">
                      <img src={section.image3} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="bg-yellow-200">
                      <img src={section.image4} alt="" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </section>
              );

            case 'hero':
              return (
                <section key={index}>
                  <h2>{section.title}</h2>
                </section>
              );

            case 'text':
              return (
                <section key={index}>
                  <p>{section.content}</p>
                </section>
              );

            case 'gallery':
              return (
                <section key={index}>
                  <div className="grid grid-cols-3 gap-4">
                    {section.images.map((image: string) => (
                      <img key={image} src={image} alt="" className="w-full" />
                    ))}
                  </div>
                </section>
              );

            default:
              return null;
          }
        })}
      </section>
    </main>
  );
}
