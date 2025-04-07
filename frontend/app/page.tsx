"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Plus } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-0">
        <div className="absolute inset-0 bg-[url('/background_fill.jpg')] bg-cover bg-center opacity-50 mix-blend-overlay"></div>
      </div>
      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-4 py-6 md:px-12">
        <div className="w-32 md:w-40">
          <Image src="/netflix-logo.png" alt="Netflix" width={167} height={45} priority />
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <div className="relative">
            <select className="appearance-none bg-black border border-white/30 rounded px-2 py-1 pr-6 text-sm text-white">
              <option>Español</option>
              <option>English</option>
            </select>
            <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 16 16" width="16" height="16" data-icon="CaretDownSmall" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z" fill="currentColor"></path></svg>
            </span>
          </div>
          <Link href="/login" className="bg-[#e50914] text-white px-4 py-1 rounded text-sm font-medium">
            Iniciar sesión
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-16 md:py-32">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Películas y series ilimitadas y mucho más</h1>
          <p className="text-lg md:text-xl mb-5">A partir de $119. Cancela cuando quieras.</p>
          <p className="text-base md:text-lg mb-5">
            ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.
          </p>

          <div className="flex flex-col md:flex-row gap-2 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-4 py-3 bg-black/60 border border-gray-600 rounded text-white"
            />
            <button className="bg-[#e50914] text-white px-6 py-3 rounded flex items-center justify-center gap-1 font-medium">
              Comenzar
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Arch and Banner Section */}
      <section className="relative bg-black py-4 px-4 md:px-12">
        {/* Arch Element */}
        <div className="relative h-[6.25rem] overflow-x-hidden z-[1]">
          <div className="curve-container">
            <div 
              className="absolute h-full top-0 mx-auto flex items-center border-solid border-[0.25rem] border-transparent rounded-t-[50%_100%] border-b-0"
              style={{
                backgroundClip: "padding-box",
                background: "radial-gradient(50% 500% at 50% -420%, rgba(64, 97, 231, 0.4) 80%, rgba(0, 0, 0, 0.1) 100%), black",
                width: "180%",
                left: "-40%"
              }}
            ></div>
          </div>
          <div className="relative z-[2] text-center mt-[1.875rem]"></div>
        </div>

        {/* Banner */}
        <div className="max-w-6xl mx-auto relative mt-4">
          <div className="group flex items-center gap-4 bg-[#1a1a3a] rounded-xl p-4 md:p-6 transition-all duration-300 hover:bg-[#232350] cursor-pointer">
            <div className="w-16 h-16 flex-shrink-0 relative">
              <Image
                src="/popcorn-icon.png"
                alt="Popcorn"
                width={64}
                height={64}
                className="object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-medium">Todo lo que te encanta de Netflix por tan solo $119.</h3>
              <p className="text-sm text-gray-300">Aprovecha nuestra opción más accesible, el plan con anuncios.</p>
            </div>
            <button className="bg-[#424242] hover:bg-[#525252] text-white px-4 py-2 rounded text-sm whitespace-nowrap transition-colors duration-300">
              Más info
            </button>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-12 px-4 md:px-12 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Tendencias</h2>

          <div className="relative flex gap-2 md:gap-4 overflow-x-auto pb-4">
            {[
              { num: 1, title: "CONTRAATAQUE" },
              { num: 2, title: "ADOLESCENCIA" },
              { num: 3, title: "JUEGO DEL CALAMAR" },
              { num: 4, title: "LISTA DE DESEOS" },
              { num: 5, title: "LUGAR EN SILENCIO" },
              { num: 6, title: "ESTADO ELECTRICO" },
              { num: 7, title: "SHREK" },
              { num: 8, title: "PLANKTON LA PELICULA" },
              { num: 9, title: "DEVIL MY CRY" },
              { num: 10, title: "COBRA KAI" },
            ].map((item) => (
              <div key={item.num} className="relative flex-shrink-0 w-[250px] cursor-pointer group">
                <div className="relative overflow-hidden rounded">
                  <Image
                    src={`/trending-${item.num}.webp`}
                    alt={item.title}
                    width={280}
                    height={400}
                    className="w-full aspect-[2/3] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-end justify-start pl-4 pb-4 z-10">
                    <span 
                      className="text-8xl font-bold text-black drop-shadow-lg group-hover:scale-105" 
                      style={{ WebkitTextStroke: '1px white' }}
                    >
                      {item.num}
                    </span>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 md:px-12 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Más motivos para unirte</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Feature 1 */}
            <div className="bg-[#1a1a3a] rounded-lg p-6 flex flex-col h-full">
              <h3 className="text-xl font-bold mb-4">Disfruta en tu TV</h3>
              <p className="text-sm text-gray-300 mb-auto">
                Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.
              </p>
              <div className="mt-6 flex justify-center">
                <Image src="/tv-icon.png" alt="TV" width={72} height={72} />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#1a1a3a] rounded-lg p-6 flex flex-col h-full">
              <h3 className="text-xl font-bold mb-4">Descarga tus series para verlas offline</h3>
              <p className="text-sm text-gray-300 mb-auto">
                Guarda tu contenido favorito y siempre tendrás algo para ver.
              </p>
              <div className="mt-6 flex justify-center">
                <Image src="/download-icon.png" alt="Download" width={72} height={72} />
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#1a1a3a] rounded-lg p-6 flex flex-col h-full">
              <h3 className="text-xl font-bold mb-4">Disfruta donde quieras</h3>
              <p className="text-sm text-gray-300 mb-auto">
                Películas y series ilimitadas en tu teléfono, tablet, laptop y TV.
              </p>
              <div className="mt-6 flex justify-center">
                <Image src="/celebration-icon.png" alt="Celebration" width={72} height={72} />
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-[#1a1a3a] rounded-lg p-6 flex flex-col h-full">
              <h3 className="text-xl font-bold mb-4">Crea perfiles para niños</h3>
              <p className="text-sm text-gray-300 mb-auto">
                Los niños vivirán aventuras con sus personajes favoritos en un espacio diseñado exclusivamente para
                ellos, gratis con tu membresía.
              </p>
              <div className="mt-6 flex justify-center">
                <Image src="/kids-icon.png" alt="Kids" width={72} height={72} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the content remains the same */}
      {/* FAQ Section */}
      <section className="py-12 px-4 md:px-12 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Preguntas frecuentes</h2>

          <div className="space-y-2">
            {[
              "¿Qué es Netflix?",
              "¿Cuánto cuesta Netflix?",
              "¿Dónde puedo ver Netflix?",
              "¿Cómo cancelo?",
              "¿Qué puedo ver en Netflix?",
              "¿Es bueno Netflix para los niños?",
            ].map((question, index) => (
              <div key={index} className="bg-[#2d2d2d] hover:bg-[#3d3d3d] transition-colors">
                <button className="w-full p-6 text-left flex justify-between items-center">
                  <span className="text-lg md:text-xl">{question}</span>
                  <Plus className="w-6 h-6 flex-shrink-0" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg mb-4">
              ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.
            </p>
            <div className="flex flex-col md:flex-row gap-2 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 py-3 bg-black/60 border border-gray-600 rounded text-white"
              />
              <button className="bg-[#e50914] text-white px-6 py-3 rounded flex items-center justify-center gap-1 font-medium">
                Comenzar
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-12 text-gray-400">
        <div className="max-w-6xl mx-auto">
          <p className="mb-6">
            ¿Preguntas? Llama al{" "}
            <a href="tel:8009531430" className="underline">
              800 953 1430
            </a>
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="space-y-3">
              <p>
                <a href="#" className="hover:underline">
                  Preguntas frecuentes
                </a>
              </p>
              <p>
                <a href="#" className="hover:underline">
                  Relaciones con inversionistas
                </a>
              </p>
              <p>
                <a href="#" className="hover:underline">
                  Comprar tarjetas de regalo
                </a>
              </p>
              <p>
                <a href="#" className="hover:underline">
                  Preferencias de cookies
                </a>
              </p>
              <p>
                <a href="#" className="hover:underline">
                  Avisos legales
                </a>
              </p>
            </div>

            <div className="space-y-3">
              <p>
                <a href="#" className="hover:underline">
                  Centro de ayuda
                </a>
              </p>
              <p>
                <a href="#" className="hover:underline">
                  Empleo
                </a>
              </p>
              <p>
                <a href="#" className="hover:underline">
                  Formas de ver
                </a>
              </p>
              <p>
                <a href="#" className="hover:underline">
                  Información corporativa
                </a>
              </p>
              <p>
                <a href="#" className="hover:underline">
                  Solo en Netflix
                </a>
              </p>
            </div>

            <div className="space-y-3">
              <p>
                <a href="#" className="hover:underline">
                  Cuenta
                </a>
              </p>
              <p>
                <a href="#" className="hover:underline">
                  Tienda de Netflix
                </a>
              </p>
              <p>
                <a href="#" className="hover:underline">
                  Términos de uso
                </a>
              </p>
              <p>
                <a href="#" className="hover:underline">
                  Contáctanos
                </a>
              </p>
            </div>

            <div className="space-y-3">
              <p>
                <a href="#" className="hover:underline">
                  Prensa
                </a>
              </p>
              <p>
                <a href="#" className="hover:underline">
                  Canjear tarjetas de regalo
                </a>
              </p>
              <p>
                <a href="#" className="hover:underline">
                  Privacidad
                </a>
              </p>
              <p>
                <a href="#" className="hover:underline">
                  Prueba de velocidad
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

