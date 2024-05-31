import Link from 'next/link'
import { headers } from 'next/headers'
 
export default async function NotFound() {
  return (
    <div>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/blog">all posts</Link>
      </p>
    </div>
  )
}