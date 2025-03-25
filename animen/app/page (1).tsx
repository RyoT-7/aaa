import Image from "next/image"
import Link from "next/link"
import { Search, User, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { AnimeCard } from "@/components/anime-card"
import { EpisodeCard } from "@/components/episode-card"
import { MainNav } from "@/components/main-nav"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              ANIMEVERSE
            </span>
          </div>
          <MainNav />
          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-6">
        {/* Hero Banner */}
        <div className="relative mb-12 mt-4 overflow-hidden rounded-xl bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-6">
          <div className="relative z-10 max-w-2xl">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Anime Online{" "}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Premium
              </span>
            </h1>
            <p className="mb-6 text-lg text-zinc-300">
              Disfruta del mejor anime en HD con audio latino, castellano y subtítulos en español. Nuevos episodios cada
              día.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <Play className="mr-2 h-4 w-4" /> Ver ahora
              </Button>
              <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
                Explorar catálogo
              </Button>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
          <div className="absolute -right-10 -top-10 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 h-[300px] w-[300px] rounded-full bg-pink-500/20 blur-3xl"></div>
        </div>

        {/* Featured Anime Carousel */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Anime Destacado</h2>
          <Carousel className="w-full">
            <CarouselContent>
              {featuredAnime.map((anime) => (
                <CarouselItem key={anime.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="group relative overflow-hidden rounded-lg">
                    <div className="aspect-[16/9] w-full overflow-hidden rounded-lg">
                      <Image
                        src={anime.image || "/placeholder.svg"}
                        alt={anime.title}
                        width={600}
                        height={338}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <Badge className="mb-2 bg-purple-600 hover:bg-purple-700">ANIME</Badge>
                      <h3 className="mb-1 text-lg font-bold text-white">{anime.title}</h3>
                      <p className="text-sm text-zinc-300">{anime.year}</p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <Button className="bg-purple-600/90 hover:bg-purple-700">
                        <Play className="mr-2 h-4 w-4" /> Ver ahora
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-black/50 text-white hover:bg-black/70" />
            <CarouselNext className="right-2 bg-black/50 text-white hover:bg-black/70" />
          </Carousel>
        </section>

        {/* Latest Episodes */}
        <section className="mb-12">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Últimos Episodios</h2>
            <Button variant="link" className="text-purple-400 hover:text-purple-300">
              Ver todo
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {latestEpisodes.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>
        </section>

        {/* Popular Anime */}
        <section>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Anime Popular</h2>
            <Button variant="link" className="text-purple-400 hover:text-purple-300">
              Ver todo
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {popularAnime.map((anime) => (
              <AnimeCard key={anime.id} anime={anime} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-black py-8">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                ANIMEVERSE
              </span>
            </div>
            <p className="text-sm text-zinc-400">
              © {new Date().getFullYear()} AnimeVerse. Todos los derechos reservados.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-zinc-400 hover:text-white">
                Términos
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white">
                Privacidad
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white">
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

const featuredAnime = [
  {
    id: 1,
    title: "Demon Slayer: Kimetsu no Yaiba",
    image: "/placeholder.svg?height=338&width=600",
    year: "2023",
  },
  {
    id: 2,
    title: "Jujutsu Kaisen",
    image: "/placeholder.svg?height=338&width=600",
    year: "2023",
  },
  {
    id: 3,
    title: "Attack on Titan: Final Season",
    image: "/placeholder.svg?height=338&width=600",
    year: "2023",
  },
  {
    id: 4,
    title: "My Hero Academia",
    image: "/placeholder.svg?height=338&width=600",
    year: "2023",
  },
]

const latestEpisodes = [
  {
    id: 1,
    title: "Demon Slayer: Kimetsu no Yaiba",
    episode: 12,
    image: "/placeholder.svg?height=338&width=600",
    type: "Estreno",
  },
  {
    id: 2,
    title: "Jujutsu Kaisen",
    episode: 24,
    image: "/placeholder.svg?height=338&width=600",
    type: "Estreno",
  },
  {
    id: 3,
    title: "Attack on Titan: Final Season",
    episode: 16,
    image: "/placeholder.svg?height=338&width=600",
    type: "Final",
  },
  {
    id: 4,
    title: "My Hero Academia",
    episode: 25,
    image: "/placeholder.svg?height=338&width=600",
    type: "Estreno",
  },
  {
    id: 5,
    title: "One Piece",
    episode: 1015,
    image: "/placeholder.svg?height=338&width=600",
    type: "Estreno",
  },
]

const popularAnime = [
  {
    id: 1,
    title: "Demon Slayer: Kimetsu no Yaiba",
    image: "/placeholder.svg?height=338&width=600",
    rating: 9.5,
  },
  {
    id: 2,
    title: "Jujutsu Kaisen",
    image: "/placeholder.svg?height=338&width=600",
    rating: 9.2,
  },
  {
    id: 3,
    title: "Attack on Titan",
    image: "/placeholder.svg?height=338&width=600",
    rating: 9.8,
  },
  {
    id: 4,
    title: "My Hero Academia",
    image: "/placeholder.svg?height=338&width=600",
    rating: 8.9,
  },
  {
    id: 5,
    title: "One Piece",
    image: "/placeholder.svg?height=338&width=600",
    rating: 9.7,
  },
]

