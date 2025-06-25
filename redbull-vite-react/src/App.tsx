import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto flex items-center justify-between p-4">
          <div className="text-redbullRed font-bold text-xl">Red Bull</div>
          <ul className="flex space-x-6 text-sm font-semibold text-gray-700">
            <li className="cursor-pointer hover:text-redbullRed">Energy Drinks</li>
            <li className="cursor-pointer hover:text-redbullRed">Eventos</li>
            <li className="cursor-pointer hover:text-redbullRed">Atletas</li>
            <li className="cursor-pointer hover:text-redbullRed">Red Bull TV</li>
          </ul>
          <div className="flex space-x-4">
            <button aria-label="User Account" className="p-2 hover:text-redbullRed">👤</button>
            <button aria-label="Search" className="p-2 hover:text-redbullRed">🔍</button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-blue-300 flex items-center justify-center h-[500px]">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <div className="max-w-lg text-white">
            <h1 className="text-4xl font-extrabold mb-4">Red Bull Winter Edition Sugarfree</h1>
            <p className="mb-6">Red Bull Winter Edition Sugarfree: Energia sem açúcar com o sabor de Blueberry e Baunilha.</p>
            <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition">Saiba mais</button>
            <div className="flex space-x-2 mt-6">
              <span className="w-4 h-4 rounded-full bg-white opacity-50"></span>
              <span className="w-4 h-4 rounded-full bg-white opacity-100"></span>
              <span className="w-4 h-4 rounded-full bg-white opacity-50"></span>
              <span className="w-4 h-4 rounded-full bg-white opacity-50"></span>
            </div>
          </div>
          <div className="max-w-xs md:max-w-md">
            <img
              src="https://images.unsplash.com/photo-1606813909353-7a7a7a7a7a7a?auto=format&fit=crop&w=400&q=80"
              alt="Red Bull Winter Edition Sugarfree"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Produtos</h2>
          <button className="text-sm text-gray-600 hover:text-redbullRed">Ver todos &rarr;</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: 'Red Bull Energy Drink', img: 'https://images.unsplash.com/photo-1606813909353-7a7a7a7a7a7a?auto=format&fit=crop&w=200&q=80' },
            { title: 'Red Bull Sugarfree', img: 'https://images.unsplash.com/photo-1606813909353-7a7a7a7a7a7a?auto=format&fit=crop&w=200&q=80' },
            { title: 'Red Bull Winter Edition', img: 'https://images.unsplash.com/photo-1606813909353-7a7a7a7a7a7a?auto=format&fit=crop&w=200&q=80' },
            { title: 'Red Bull Winter Edition Sugarfree', img: 'https://images.unsplash.com/photo-1606813909353-7a7a7a7a7a7a?auto=format&fit=crop&w=200&q=80' },
          ].map((product, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
              <img src={product.img} alt={product.title} className="w-24 h-48 object-contain mb-4" />
              <h3 className="text-center font-semibold">{product.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Competitions Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Competições</h2>
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="min-w-[200px] h-40 bg-gray-300 rounded-lg flex-shrink-0"></div>
          ))}
        </div>
      </section>

      {/* Platform Carousel Section */}
      <section className="bg-blue-100 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-3xl font-bold mb-4">PLATAFORMA</h2>
          <p className="text-center text-gray-600 mb-8">Red Bull te dá asasas.</p>
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1606813909353-7a7a7a7a7a7a?auto=format&fit=crop&w=800&q=80"
                alt="Platform"
                className="w-full object-cover"
              />
            </div>
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
              <button className="bg-redbullRed text-white px-6 py-2 rounded-full hover:bg-red-700 transition">Saiba mais</button>
            </div>
          </div>
        </div>
      </section>

      {/* Pilots Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Pilotos</h2>
          <button className="text-sm text-gray-600 hover:text-redbullRed">Ver todos &rarr;</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'Yndiara Asp', sport: 'Skate', country: 'Brasil', img: 'https://images.unsplash.com/photo-1606813909353-7a7a7a7a7a7a?auto=format&fit=crop&w=200&q=80' },
            { name: 'Italo Ferreira', sport: 'Surfe', country: 'Brasil', img: 'https://images.unsplash.com/photo-1606813909353-7a7a7a7a7a7a?auto=format&fit=crop&w=200&q=80' },
            { name: 'Duda Lisboa', sport: 'Vôlei de Praia', country: 'Brasil', img: 'https://images.unsplash.com/photo-1606813909353-7a7a7a7a7a7a?auto=format&fit=crop&w=200&q=80' },
            { name: 'Lucas Braathen', sport: 'Esqui Alpino', country: 'Brasil', img: 'https://images.unsplash.com/photo-1606813909353-7a7a7a7a7a7a?auto=format&fit=crop&w=200&q=80' },
          ].map((pilot, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
              <img src={pilot.img} alt={pilot.name} className="w-24 h-24 rounded-full mb-4 object-cover" />
              <div className="text-center">
                <div className="text-xs text-green-600 mb-1">🇧🇷 {pilot.country}</div>
                <h3 className="font-semibold">{pilot.name}</h3>
                <p className="text-sm text-gray-600">{pilot.sport}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs">
          <div>
            <ul>
              <li>Produtos e Companhia</li>
              <li>Fale Conosco</li>
              <li>Jobs</li>
              <li>Imprensa</li>
              <li>Red Bull Loja</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Configurações de Cookie</li>
              <li>Política de Privacidade</li>
              <li>Termos de Uso</li>
              <li>Marca</li>
              <li>Proteção de Marca</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Alerta de Fraude</li>
              <li>Speak Up - Red Bull Integrity Line</li>
            </ul>
          </div>
          <div className="text-right">
            <p>© 2025 Red Bull</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
