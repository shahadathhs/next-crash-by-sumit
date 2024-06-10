import getAllPosts from "@/lib/getAllPosts"
import Link from "next/link";

export const metadata = {
  title: 'Posts',
  description: 'This is our posts',
}

export default async function Posts() {
  const posts = await getAllPosts();
  console.log(posts)

  return (
    <div className='mt-10 space-y-4'>
      <h2>This is posts.</h2>

      <ul>
        {
          posts?.map(post =>
            <li key={post.id}>{post.id}. {post.title} 
              <Link href={`/posts/${post.id}`}> <button className="bg-green-500 rounded-md px-4 py-2"> View Details </button> </Link> 
            </li>
          )
        }
      </ul>

    </div>
  )
}