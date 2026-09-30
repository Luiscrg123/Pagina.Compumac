// Loader de next/image para la exportacion estatica: las fotos ya estan
// generadas en /img/fotos/<nombre>-<ancho>.webp con estos anchos.
const WIDTHS = [320, 640, 1080, 1600]

export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }) {
  if (!src.startsWith("/img/fotos/")) return src
  const w = WIDTHS.find((x) => x >= width) ?? WIDTHS[WIDTHS.length - 1]
  return src.replace(/\.webp$/, `-${w}.webp`)
}
