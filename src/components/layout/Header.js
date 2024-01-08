"use client"
import Link from "next/link"
import { signOut, useSession } from "next-auth/react"
// import { useRouter } from 'next/navigation'
const Header = () => {

  const session = useSession()
  const status = session.status
  console.log(session)
  // const router = useRouter()
  // const handleClick = (item) => {
  //   console.log('item', item)
  //   if (item) {
  //     router.push('/')
  //   }
  //   // router.push('/')
  //   signOut()
  // }
  return (
    <header className='flex items-center justify-between'>

      <nav className='flex gap-4 items-center text-gray-400 font-bold'>
        <Link className='text-primary font-semibold text-2xl' href='/'>
          RYU PIZZA
        </Link>
        <Link href={'/'}>Home</Link>
        <Link href={''}>Menu</Link>
        <Link href={''}>About</Link>
        <Link href={''}>Contact</Link>

      </nav>
      <nav className='flex items-center font-semibold text-gray-500 gap-4'>
        {status === 'authenticated' && (
          <button
            onClick={() => signOut()}
            // onClick={() => handleClick('/')}
            className='bg-primary rounded-full text-white px-6 py-2'
          >
            Logout
          </button>
        )}
        {status !== 'authenticated' && (
          <>
            <Link href={'/regsiter'}>
              Regsiter
            </Link>
            <Link href={'/login'} className='bg-primary rounded-full text-white px-6 py-2'>
              Login
            </Link>
          </>
        )}

      </nav>
    </header>
  )
}
export default Header