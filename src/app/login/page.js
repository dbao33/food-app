"use client"
import { signIn } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const LoginPage = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginInProcess, setloginInProcess] = useState(false)
  const handleFormSubmit = async (ev) => {
    ev.preventDefault()
    setloginInProcess(true)

    await signIn('credentials', { email, password })
    setloginInProcess(false)
  }
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">
        Login
      </h1>
      <form className="block max-w-sm mx-auto" onSubmit={handleFormSubmit}>
        <input type="email" name="email" placeholder="email" value={email}
          disabled={loginInProcess}
          onChange={ev => setEmail(ev.target.value)} />
        <input type="password" name="password" placeholder="password" value={password}
          disabled={loginInProcess}
          onChange={ev => setPassword(ev.target.value)} />
        <button
          type="submit"
          disabled={loginInProcess}
        >
          Login
        </button>
        <div className="my-4 text-center text-gray-500">
          or Login with provider
        </div>
        <button className="flex gap-4 justify-center">
          <Image src={"/google.png"} alt="google" width={24} height={24} />

          Login with Google
        </button>
      </form>
      <div className="text-center my-4 text-gray-500 border-t">
        No exist account?{' '}
        <Link className="underline " href={'/register'}>
          Register here &raquo;
        </Link>
      </div>
    </section>
  )
}
export default LoginPage