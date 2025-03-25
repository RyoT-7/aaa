import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

interface AnimeCardProps {
  anime: {
    id: number
    title: string
    image: string
    rating: number
  }
}

export function AnimeCard({ anime }: AnimeCardProps) {
  return (
    <Link href={`/anime/${anime.id}`}>
      <Card className="group overflow-hidden border-zinc-800 bg-zinc-900/50 transition-colors hover:bg-zinc-800/70">
        <div className="relative aspect-[2/3] overflow-hidden">
          <Image
            src={anime.image || "/placeholder.svg"}
            alt={anime.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-md bg-black/70 px-2 py-1 text-xs font-medium text-white">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span>{anime.rating}</span>
          </div>
        </div>
        <CardContent className="p-3">
          <h3 className="line-clamp-2 font-medium">{anime.title}</h3>
        </CardContent>
      </Card>
    </Link>
  )
}

