import Image from 'next/image'
import Link from 'next/link'
 

export default function NotFound() {
  return (
    <div>
    <div className='-m-5 mb-10'>
        <Image src="/static/imgs/faladev.jpg" alt="FalaDev Logo" height="50" width="200" />
    </div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className='underline' href="/">Return Home</Link>
    </div>
  )
}