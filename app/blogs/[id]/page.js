import { notFound } from 'next/navigation';
import React from 'react'

export default function BlogPage({params}) {
  const {id} = params;

  if (id >= "5") {
    notFound()
  }

  return (
    <div>
      Blog description
      <p>The blog id is: {id}</p>
    </div>
  )
}
