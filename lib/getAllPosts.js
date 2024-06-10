// export default async function getAllPosts() {
//   const result = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const posts = await result.json();
  
//   return posts.slice(0, 10);
// }

export default async function getAllPosts() {
  const result = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');

  if (!result.ok) {
    throw new Error("error fetching all post data");
  }
  
  return result.json()
}