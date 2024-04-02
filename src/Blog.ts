export async function fetchPosts(): Promise<Record<string, any>[]> {
  let blogData = await fetch(process.env.WORDPRESS_API_ENDPOINT ?? "");
  if (!blogData.ok) {
    throw new Error("Failed to fetch blog data. :(");
  }
  return blogData.json();
}
