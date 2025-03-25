import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface EpisodeCardProps {
  episode: {
    id: number
    title: string
    episode: number
    image: string
    type: string
  }
}

export function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <Link href={`/ver/${episode.id}`}>
      <Card className="group overflow-hidden border-zinc-800 bg-zinc-900/50 transition-colors hover:bg-zinc-800/70">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={episode.image || "/placeholder.svg"}
            alt={`${episode.title} - Episodio ${episode.episode}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <Badge
              className={
                episode.type === "Estreno"
                  ? "bg-purple-600 hover:bg-purple-700"
                  : episode.type === "Final"
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-blue-600 hover:bg-blue-700"
              }
            >
              {episode.type}
            </Badge>
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Button size="icon" className="h-12 w-12 rounded-full bg-purple-600/90 hover:bg-purple-700">
              <Play className="h-6 w-6" />
            </Button>
          </div>
          <div className="absolute right-2 top-2 rounded bg-black/70 px-2 py-1 text-xs font-medium">
            EP {episode.episode}
          </div>
        </div>
        <CardContent className="p-3">
          <h3 className="line-clamp-2 text-sm font-medium">{episode.title}</h3>
        </CardContent>
      </Card>
    </Link>
  )
}

