import Link from "next/link"

const Header = () => {
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
        <Link href={'/regsiter'}>
          Regsiter
        </Link>
        <Link href={'/login'} className='bg-primary rounded-full text-white px-6 py-2'>
          Login
        </Link>
      </nav>
    </header>
  )
}
export default Header