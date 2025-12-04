import { Icon } from '@iconify/react';
import { Link } from 'react-router';

const posters = [
  'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&fit=crop',
  'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&h=750&fit=crop',
  'https://images.unsplash.com/photo-1579566346927-c68383817a25?w=500&h=750&fit=crop',
  'https://images.unsplash.com/photo-1608346128025-1896b97a6fa7?w=500&h=750&fit=crop',
  'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=500&h=750&fit=crop',
  'https://images.unsplash.com/photo-1512149673953-1e251807ec7c?w=500&h=750&fit=crop',
];

export function Landing() {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-zinc-950 selection:bg-green-400 selection:text-emerald-950">
      <header className="container flex items-center justify-between p-6">
        <div className="flex items-center gap-2">
          <Icon icon="ph:film-strip-bold" className="text-3xl text-green-400" />
          <span className="font-black text-white text-xl tracking-tighter">
            NODE<span className="text-green-400">MOVIES</span>
          </span>
        </div>
        <Link
          to="/auth/sign-in"
          className="font-bold text-sm text-zinc-300 transition hover:text-green-400"
        >
          Entrar
        </Link>
      </header>

      <main className="container grid min-h-[80vh] grid-cols-1 items-center gap-12 p-6 lg:grid-cols-2">
        <div className="z-10 order-2 flex flex-col items-start text-left lg:order-1">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-900/50 px-3 py-1 font-medium text-green-400 text-sm ring-1 ring-green-400/30 backdrop-blur-md">
            <Icon icon="ph:sparkle-bold" />A nova era do streaming
          </span>

          <h1 className="font-black text-5xl text-white leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Descubra seu próximo{' '}
            <span className="bg-linear-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              filme favorito.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg text-zinc-400">
            Acesso instantâneo a milhares de títulos. Curadoria feita por
            especialistas, sem algoritmos chatos. Cancele quando quiser.
          </p>

          <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Link
              to="/auth/sign-up"
              className="group flex h-12 items-center justify-center gap-2 rounded-full bg-green-400 px-8 font-bold text-base text-emerald-950 transition-all hover:scale-105 hover:bg-green-500 active:scale-95"
            >
              Começar Agora
              <Icon
                icon="ph:arrow-right-bold"
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <p className="mt-6 text-xs text-zinc-500">
            Assinatura a partir de R$ 19,90/mês. Termos aplicáveis.
          </p>
        </div>

        <div className="perspective-1000 relative order-1 h-full min-h-[400px] w-full lg:order-2">
          <div className="-z-10 -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 h-[500px] w-[500px] rounded-full bg-green-500/20 blur-[100px]" />

          <div className="mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent) transform-[rotateX(20deg)_rotateZ(-20deg)_skewY(5deg)] grid scale-110 grid-cols-3 gap-4 p-4 opacity-80">
            <div className="-mt-12 flex animate-pulse flex-col gap-4 duration-3000">
              <img
                src={posters[0]}
                className="rounded-xl object-cover shadow-2xl shadow-emerald-900/50 ring-1 ring-white/10"
                alt="Poster 1"
              />
              <img
                src={posters[1]}
                className="rounded-xl object-cover shadow-2xl shadow-emerald-900/50 ring-1 ring-white/10"
                alt="Poster 2"
              />
            </div>
            <div className="flex flex-col gap-4">
              <img
                src={posters[2]}
                className="rounded-xl object-cover shadow-2xl shadow-emerald-900/50 ring-1 ring-white/10"
                alt="Poster 3"
              />
              <img
                src={posters[3]}
                className="rounded-xl object-cover shadow-2xl shadow-emerald-900/50 ring-1 ring-white/10"
                alt="Poster 4"
              />
            </div>
            <div className="mt-12 flex animate-pulse flex-col gap-4 duration-4000">
              <img
                src={posters[4]}
                className="rounded-xl object-cover shadow-2xl shadow-emerald-900/50 ring-1 ring-white/10"
                alt="Poster 5"
              />
              <img
                src={posters[5]}
                className="rounded-xl object-cover shadow-2xl shadow-emerald-900/50 ring-1 ring-white/10"
                alt="Poster 6"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
