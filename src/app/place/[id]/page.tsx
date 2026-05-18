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
      <header className="text-center py-10">
        <h1 className="text-[100px] font-bold uppercase">{place.name}</h1>
        <p className="text-4xl">{place.description}</p>
      </header>
      {place.sections[0]?.image && (
        <figure className="px-10 max-w-[1000px] mx-auto">
          <img src={place.sections[0].image} alt={place.name} className="w-full" />
        </figure>
      )}

      {place.sections.map((section, index) => {
        switch (section.type) {
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
    </main>
  );
}
