import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    "https://nmd-racing.vercel.app";

  return [
    {
      url: baseUrl,
    },
    {
      url: `${baseUrl}/products`,
    },
    {
      url: `${baseUrl}/about`,
    },
    {
      url: `${baseUrl}/dealers`,
    },
    {
      url: `${baseUrl}/contact`,
    },
    {
      url: `${baseUrl}/gallery`,
    },
  ];
}