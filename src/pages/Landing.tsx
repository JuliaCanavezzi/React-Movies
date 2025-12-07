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
    <div className="h-screen w-full overflow-y-auto bg-zinc-950 selection:bg-green-400 selection:text-emerald-950 lg:overflow-hidden">
      <header className="container mx-auto flex h-16 items-center justify-between px-4 sm:h-20 sm:px-6">
        <div className="flex items-center gap-2">
          <Icon
            icon="ph:film-strip-bold"
            className="text-green-400 text-xl sm:text-2xl"
          />
          <span className="font-black text-base text-white tracking-tighter sm:text-lg">
            NODE<span className="text-green-400">MOVIES</span>
          </span>
        </div>

        <Link
          to="/auth/sign-in"
          className="font-bold text-[10px] text-zinc-300 uppercase tracking-wide transition hover:text-green-400 sm:text-xs"
        >
          Entrar
        </Link>
      </header>

      <main className="container mx-auto grid min-h-[calc(100vh-64px)] grid-cols-1 items-center gap-10 px-4 pb-10 sm:min-h-[calc(100vh-80px)] sm:px-6 lg:grid-cols-2 lg:pb-0">
        <div className="z-10 order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-900/50 px-3 py-1 font-medium text-green-400 text-xs ring-1 ring-green-400/30 backdrop-blur-md">
            <Icon icon="ph:sparkle-bold" />
            Nova era do streaming
          </span>

          <h1 className="font-black text-[clamp(2rem,5vw,3.75rem)] text-white leading-tight tracking-tight">
            Descubra seu próximo{' '}
            <span className="bg-linear-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              filme favorito.
            </span>
          </h1>

          <p className="mt-4 max-w-md text-sm text-zinc-400 sm:text-base">
            Milhares de títulos com curadoria humana. Sem algoritmos
            repetitivos. Cancele quando quiser.
          </p>

          <div className="mt-6 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              to="/auth/sign-up"
              className="group flex h-11 items-center justify-center gap-2 rounded-full bg-green-400 px-8 font-bold text-emerald-950 text-sm transition-all hover:scale-105 hover:bg-green-500 active:scale-95"
            >
              Começar Agora
              <Icon
                icon="ph:arrow-right-bold"
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <p className="mt-4 text-[10px] text-zinc-500 uppercase tracking-wider">
            A partir de R$ 19,90/mês.
          </p>
        </div>

        <div className="relative order-1 flex max-h-[360px] w-full items-center justify-center sm:max-h-[420px] lg:order-2 lg:max-h-full">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute inset-1/2 h-[280px] w-[280px] rounded-full bg-green-500/20 blur-[90px] sm:h-[360px] sm:w-[360px]" />

          <div className="transform-[rotateX(20deg)_rotateZ(-20deg)_skewY(5deg)] mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent) grid scale-90 grid-cols-3 gap-2 p-2 opacity-80 sm:scale-100 sm:gap-3 sm:p-4 lg:scale-110">
            <div className="-mt-6 sm:-mt-8 flex animate-pulse flex-col gap-2 duration-3000 sm:gap-3">
              <img
                src={posters[0]}
                alt="poster-1"
                className="rounded-lg object-cover shadow-xl ring-1 ring-white/10"
              />
              <img
                src={posters[1]}
                alt="poster-2"
                className="rounded-lg object-cover shadow-xl ring-1 ring-white/10"
              />
            </div>

            <div className="flex flex-col gap-2 sm:gap-3">
              <img
                src={posters[2]}
                alt="poster-3"
                className="rounded-lg object-cover shadow-xl ring-1 ring-white/10"
              />
              <img
                src={posters[3]}
                alt="poster-4"
                className="rounded-lg object-cover shadow-xl ring-1 ring-white/10"
              />
            </div>

            <div className="mt-6 flex animate-pulse flex-col gap-2 duration-4000 sm:mt-8 sm:gap-3">
              <img
                src={posters[4]}
                alt="poster-5"
                className="rounded-lg object-cover shadow-xl ring-1 ring-white/10"
              />
              <img
                src={posters[5]}
                alt="poster-6"
                className="rounded-lg object-cover shadow-xl ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
