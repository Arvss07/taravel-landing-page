export default async function sitemap() {
  const base = "https://www.taravel.app";
  const currentDate = new Date().toISOString();
  
  return [
    {
      url: `${base}/`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        canonical: `${base}/`,
      },
    },
  ];
}


