type Movie = {
  id: string;
  title: string;
  description: string;
  genres: Array<string>;
  year: number;
  duration: number;
  ageRating: string;
  posterLink: string;
  movieLink: string;
};

export default [
  {
    id: '1',
    title: 'Dungeon na Lua',
    genres: ['Fantasia', 'Aventura'],
    duration: 6900,
    ageRating: '+12',
    posterLink: 'https://picsum.photos/300/450?random=1',
    description:
      'A primeira dungeon lunar é aberta e aventureiros disputam para explorá-la.',
    year: 2024,
    movieLink: '',
  },
  {
    id: '2',
    title: 'Kung-Fu do Frango Galáctico',
    genres: ['Ação', 'Comédia', 'Ficção Científica'],
    duration: 6420,
    ageRating: '+12',
    posterLink: 'https://picsum.photos/300/450?random=2',
    description:
      'Um frango com habilidades marciais protege a galáxia de vegetais mutantes.',
    year: 2021,
    movieLink: '',
  },
  {
    id: '3',
    title: 'O Último Pixel de Krypton',
    genres: ['Aventura', 'Fantasia'],
    duration: 7120,
    ageRating: '+14',
    posterLink: 'https://picsum.photos/300/450?random=3',
    description:
      'Um programador encontra um pixel ancestral que pode reiniciar o universo.',
    year: 2019,
    movieLink: '',
  },
  {
    id: '4',
    title: 'PokéChef: A Batalha Culinária Final',
    genres: ['Comédia', 'Ação'],
    duration: 5880,
    ageRating: 'L',
    posterLink: 'https://picsum.photos/300/450?random=4',
    description:
      'Treinadores batalham usando pratos gourmet ao invés de pokémons.',
    year: 2023,
    movieLink: '',
  },
  {
    id: '5',
    title: 'Samurai do Multiverso',
    genres: ['Ação', 'Aventura'],
    duration: 8040,
    ageRating: '+16',
    posterLink: 'https://picsum.photos/300/450?random=5',
    description:
      'Um samurai salta entre realidades para impedir o colapso de todas as linhas do tempo.',
    year: 2020,
    movieLink: '',
  },
  {
    id: '6',
    title: 'Robôs Também Amam?',
    genres: ['Romance', 'Ficção Científica'],
    duration: 6600,
    ageRating: '+10',
    posterLink: 'https://picsum.photos/300/450?random=6',
    description:
      'Dois androides descobrem o conceito de amor enquanto escapam de uma corporação.',
    year: 2022,
    movieLink: '',
  },
  {
    id: '7',
    title: 'O Mistério da Caixa 404',
    genres: ['Suspense', 'Mistério', 'Tecnologia'],
    duration: 7260,
    ageRating: '+14',
    posterLink: 'https://picsum.photos/300/450?random=7',
    description:
      'Uma caixa encontrada em um servidor abandonado revela eventos impossíveis.',
    year: 2018,
    movieLink: '',
  },
  {
    id: '8',
    title: 'Super-Heróis do Subúrbio',
    genres: ['Comédia', 'Ação'],
    duration: 5520,
    ageRating: 'L',
    posterLink: 'https://picsum.photos/300/450?random=8',
    description:
      'Heróis com poderes extremamente inúteis tentam salvar seu bairro.',
    year: 2017,
    movieLink: '',
  },
] satisfies Array<Movie>;
