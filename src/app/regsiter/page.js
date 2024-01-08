"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const RegsiterPage = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [creatingUser, setCreatingUser] = useState(false)
  const [userCreated, setUserCreated] = useState(false)
  const [error, setError] = useState(false)
  const handleFormSubmit = async (ev) => {
    ev.preventDefault()
    setCreatingUser(true)
    setError(false)
    setUserCreated(false)
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" }
    })

    if (response.ok) {
      setUserCreated(true)
    } else {
      setError(true)
    }
    setCreatingUser(false)
  }
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">
        Regsiter
      </h1>
      {userCreated && (
        <div className="my-4 text-center">
          User created.<br />Now you can {' '}
          <Link className="underline" href={'/login'}>Login</Link>
        </div>
      )}
      {error && (
        <div className="my-4 text-center">
          An error has occurred.<br />
          Please try again later.<br />
        </div>
      )}
      <form className="block max-w-sm mx-auto" onSubmit={handleFormSubmit}>
        <input type="email" placeholder="email" value={email}
          disabled={creatingUser}
          onChange={ev => setEmail(ev.target.value)} />
        <input type="password" placeholder="password" value={password}
          disabled={creatingUser}
          onChange={ev => setPassword(ev.target.value)} />
        <button
          type="submit"
          disabled={creatingUser}
        >
          Regsiter
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
        Existing account?{' '}
        <Link className="underline " href={'/login'}>
          Login here &raquo;
        </Link>
      </div>
    </section>
  )
}
export default RegsiterPage