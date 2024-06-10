import Link from "next/link"

export const metadata = {
  title: 'Blogs',
  description: 'About our blogs',
}

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "blog 1",
      description: "blog 1 description"
    },
    { 
      id: 2,
      title: "blog 2",
      description: "blog 2 description"
    },
    {
      id: 3,
      title: "blog 3",
      description: "blog 3 description"
    },
    {
      id: 4,
      title: "blog 4",
      description: "blog 4 description"
    }
  ]

  return (
    <main className="mt-10">
      <div className="space-y-4">
        <p> Blogs </p>
        <ul>
          {
            blogs.map(blog =>
              <li key={blog.id}><Link href={`/blogs/${blog.id}`}> {blog.title} </Link></li>
            )
          }
        </ul>
      </div>
    </main>
  )
}
