import Image from "next/image";

type FotoCreditadaProps = {
  src: string;
  alt: string;
  credito: string;
  aspecto?: string;
  className?: string;
};

export function FotoCreditada({ src, alt, credito, aspecto = "aspect-video", className }: FotoCreditadaProps) {
  return (
    <figure className={className}>
      <div className={`relative overflow-hidden rounded-md border border-cinza-borda bg-cinza-fundo ${aspecto}`}>
        <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
      </div>
      <figcaption className="mt-1.5 text-xs text-cinza-medio">{credito}</figcaption>
    </figure>
  );
}
