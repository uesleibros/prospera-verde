type VideoAulaProps = {
  videoId: string;
  titulo: string;
  canal: string;
};

export function VideoAula({ videoId, titulo, canal }: VideoAulaProps) {
  return (
    <figure>
      <div className="relative aspect-video overflow-hidden rounded-md border border-cinza-borda bg-cinza-fundo">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title={titulo}
          className="absolute inset-0 h-full w-full"
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <figcaption className="mt-1.5 text-xs text-cinza-medio">
        Vídeo: {titulo}, {canal} (YouTube)
      </figcaption>
    </figure>
  );
}
