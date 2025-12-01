import { CardMovie, Navbar } from '@/components';

export function Home() {
  const movies = [
    {
      id: '1',
      title: 'Festa da Salsicha',
      genres: ['Comédia', 'Ação', 'Aventura'],
      duration: 5340,
      ageRating: '+18',
      posterLink:
        'https://br.web.img2.acsta.net/pictures/16/09/20/19/46/556589.jpg',
    },
    {
      id: '2',
      title: 'Festa da Salsicha',
      genres: ['Comédia', 'Ação', 'Aventura'],
      duration: 5340,
      ageRating: '+18',
      posterLink:
        'https://br.web.img2.acsta.net/pictures/16/09/20/19/46/556589.jpg',
    },
    {
      id: '3',
      title: 'Festa da Salsicha',
      genres: ['Comédia', 'Ação', 'Aventura'],
      duration: 5340,
      ageRating: '+18',
      posterLink:
        'https://br.web.img2.acsta.net/pictures/16/09/20/19/46/556589.jpg',
    },
    {
      id: '4',
      title: 'Festa da Salsicha',
      genres: ['Comédia', 'Ação', 'Aventura'],
      duration: 5340,
      ageRating: '+18',
      posterLink:
        'https://br.web.img2.acsta.net/pictures/16/09/20/19/46/556589.jpg',
    },
    {
      id: '5',
      title: 'Festa da Salsicha',
      genres: ['Comédia', 'Ação', 'Aventura'],
      duration: 5340,
      ageRating: '+18',
      posterLink:
        'https://br.web.img2.acsta.net/pictures/16/09/20/19/46/556589.jpg',
    },
    {
      id: '6',
      title: 'Festa da Salsicha',
      genres: ['Comédia', 'Ação', 'Aventura'],
      duration: 5340,
      ageRating: '+18',
      posterLink:
        'https://br.web.img2.acsta.net/pictures/16/09/20/19/46/556589.jpg',
    },
    {
      id: '7',
      title: 'Festa da Salsicha',
      genres: ['Comédia', 'Ação', 'Aventura'],
      duration: 5340,
      ageRating: '+18',
      posterLink:
        'https://br.web.img2.acsta.net/pictures/16/09/20/19/46/556589.jpg',
    },
    {
      id: '8',
      title: 'Festa da Salsicha',
      genres: ['Comédia', 'Ação', 'Aventura'],
      duration: 5340,
      ageRating: '+18',
      posterLink:
        'https://br.web.img2.acsta.net/pictures/16/09/20/19/46/556589.jpg',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      <Navbar />
      <div className="min-h-screen p-8">
        <div className="mx-auto w-full px-8">
          <div className="grid grid-cols-4 gap-6">
            {movies.map((movie) => (
              <CardMovie key={movie.id} {...movie} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
