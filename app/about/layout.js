import Link from 'next/link'

export const metadata = {
  title: 'About',
  description: 'About our blogs',
}

export default function AboutLayout({children}) {
  return (
    <div>
      <nav className='my-6'>
        <ul className="flex gap-2">
          <li><Link href='/about/mission'> Mission </Link></li>
          <li><Link href='/about/vision'> Vision </Link></li>
        </ul>
      </nav>
      {children}
    </div>
  )
}
