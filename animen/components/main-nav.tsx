import React from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export function MainNav() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-zinc-400 hover:bg-zinc-800 hover:text-white">
            Géneros
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {genres.map((genre) => (
                <ListItem key={genre.title} title={genre.title} href={genre.href}>
                  {genre.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-zinc-400 hover:bg-zinc-800 hover:text-white">
            Idiomas
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {languages.map((language) => (
                <ListItem key={language.title} title={language.title} href={language.href}>
                  {language.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-zinc-400 hover:bg-zinc-800 hover:text-white">
            Películas
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {movies.map((movie) => (
                <ListItem key={movie.title} title={movie.title} href={movie.href}>
                  {movie.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/calendario" legacyBehavior passHref>
            <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white focus:bg-zinc-800 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
              Calendario
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/directorio" legacyBehavior passHref>
            <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white focus:bg-zinc-800 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
              Directorio
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-zinc-800 hover:text-white focus:bg-zinc-800 focus:text-white",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-zinc-400">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

const genres = [
  {
    title: "Acción",
    href: "/generos/accion",
    description: "Anime con escenas de combate, violencia y alta energía",
  },
  {
    title: "Aventura",
    href: "/generos/aventura",
    description: "Historias de viajes, búsquedas y descubrimientos",
  },
  {
    title: "Comedia",
    href: "/generos/comedia",
    description: "Anime con enfoque en el humor y situaciones divertidas",
  },
  {
    title: "Drama",
    href: "/generos/drama",
    description: "Historias con desarrollo emocional y conflictos personales",
  },
]

const languages = [
  {
    title: "Audio Latino",
    href: "/idiomas/latino",
    description: "Anime doblado al español latinoamericano",
  },
  {
    title: "Audio Castellano",
    href: "/idiomas/castellano",
    description: "Anime doblado al español de España",
  },
  {
    title: "Subtitulado",
    href: "/idiomas/subtitulado",
    description: "Anime en japonés con subtítulos en español",
  },
  {
    title: "Dual Audio",
    href: "/idiomas/dual",
    description: "Anime con múltiples opciones de audio",
  },
]

const movies = [
  {
    title: "Películas de Anime",
    href: "/peliculas",
    description: "Todas las películas de anime disponibles",
  },
  {
    title: "Estrenos",
    href: "/peliculas/estrenos",
    description: "Últimos lanzamientos de películas de anime",
  },
  {
    title: "Clásicos",
    href: "/peliculas/clasicos",
    description: "Películas de anime legendarias y reconocidas",
  },
  {
    title: "Studio Ghibli",
    href: "/peliculas/ghibli",
    description: "Colección de películas del famoso estudio",
  },
]

