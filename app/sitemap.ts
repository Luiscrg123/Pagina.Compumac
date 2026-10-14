import type { MetadataRoute } from "next"
import { LAPTOP_PAGE, SITE_URL } from "@/lib/site"

// Con exportacion estatica se genera out/sitemap.xml al compilar.
export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, priority: 1 },
    { url: `${SITE_URL}${LAPTOP_PAGE}`, priority: 0.8 },
  ]
}
