import { useState } from 'react'

const nextSteps = [
  'Editá src/App.jsx para construir tu primera pantalla.',
  'Agregá componentes dentro de src/components.',
  'Ejecutá npm run build antes de publicar tus cambios.',
]

export default function App() {
  const [isReady, setIsReady] = useState(false)

  return (
    <main className="page-shell">
      <section className="welcome-card" aria-labelledby="main-title">
        <p className="eyebrow">React + Vite</p>
        <h1 id="main-title">Tu proyecto ya está listo.</h1>
        <p className="intro">
          Una base ligera para empezar a crear interfaces rápidas y mantenibles.
        </p>

        <button
          className="primary-button"
          type="button"
          onClick={() => setIsReady(true)}
        >
          {isReady ? '¡Listo para crear!' : 'Comenzar'}
        </button>

        {isReady && (
          <div className="next-steps" role="status">
            <h2>Próximos pasos</h2>
            <ul>
              {nextSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </main>
  )
}
