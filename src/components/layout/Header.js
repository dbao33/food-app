import Link from "next/link"

const Header = () => {
  return (
    <header className='flex items-center justify-between'>
      <Link className='text-primary font-semibold text-2xl' href=''>
        RYU PIZZA
      </Link>
      <nav className='flex gap-4 items-center text-gray-400 font-bold'>
        <Link href={''}>Home</Link>
        <Link href={''}>Menu</Link>
        <Link href={''}>About</Link>
        <Link href={''}>Contact</Link>
        <Link href={''} className="bg-primary rounded-full text-white px-6 py-2">
          Login
        </Link>
      </nav>
    </header>
  )
}
export default Header