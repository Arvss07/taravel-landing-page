export default async function sitemap() {
  const base = "https://www.taravel.app";
  return [
    {
      url: `${base}/`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}


