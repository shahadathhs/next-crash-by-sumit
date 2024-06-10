import getPost from '@/lib/getPost';
import getPostComment from '@/lib/getPostComment';
import { notFound } from 'next/navigation';
import React from 'react';

export default async function PostPage({ params }) {
  const { id } = params;

  if (parseInt(id) >= 10) {
    notFound();
  }

  const postPromise = getPost({ id });
  const commentPromise = getPostComment({ id });
  const [post, comments] = await Promise.all([postPromise, commentPromise]);

  return (
    <div className='space-y-3'>
      <p>The post id is: {id}</p>
      <p className='text-blue-600'>Title: {post.title} </p>
      <p className='text-orange-500'> Description: {post.body} </p>

      <hr />
      <br />
      <div>
        <p>COMMENTS</p>
        <div className='border-2 p-4 m-2'>
          {
            comments.map(comment =>
              <ul className='border-2 p-4 m-2'>
              <li>Name: {comment.name} </li>
              <li>Comment: {comment.body} </li>
              </ul>
            )
          }
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await getPost({ id });

  return {
    title: post.title,
    description: post.body,
  };
}
