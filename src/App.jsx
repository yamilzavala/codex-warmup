import { useEffect, useState } from 'react'

const topics = [
  { label: 'Frontend', title: 'Interfaces que se sienten vivas', description: 'Convertí ideas complejas en experiencias claras, rápidas y accesibles. El código de interfaz es donde la lógica encuentra a las personas.', accent: '#ff8559' },
  { label: 'Backend', title: 'La arquitectura detrás de la pantalla', description: 'Diseñá servicios confiables, contratos simples y sistemas capaces de crecer. Una buena API hace que todo lo demás sea más sencillo.', accent: '#83d8ff' },
  { label: 'Datos', title: 'Señales en cada decisión', description: 'Transformá datos en contexto: modelá, medí y encontrá patrones que ayuden al producto a tomar mejores decisiones.', accent: '#b9ff90' },
  { label: 'DevOps', title: 'Flujos de entrega sin fricción', description: 'Automatizá la entrega, observá lo importante y construí equipos que puedan desplegar con confianza cada día.', accent: '#b899ff' },
  { label: 'IA', title: 'Modelos que amplifican ideas', description: 'Usá inteligencia artificial de forma útil, responsable y conectada con problemas reales de las personas.', accent: '#ffcc70' },
  { label: 'Seguridad', title: 'Construir confianza desde el inicio', description: 'Protegé datos, validá los límites y convertí la seguridad en una parte natural del proceso de desarrollo.', accent: '#ff88b5' },
]

const bars = [48, 74, 56, 89, 64, 97, 71, 52, 85, 62, 91, 68]

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [lightTheme, setLightTheme] = useState(false)
  const activeTopic = topics[activeIndex]

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        event.preventDefault()
        setActiveIndex((current) => (current + 1) % topics.length)
      }
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault()
        setActiveIndex((current) => (current - 1 + topics.length) % topics.length)
      }
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <main className={lightTheme ? 'code-home is-light' : 'code-home'} style={{ '--accent': activeTopic.accent }}>
      <div className="animated-background" aria-hidden="true"><span /><span /><span /></div>
      <header className="topbar">
        <div className="corner-menu">
          <button className="hamburger" type="button" aria-label="Abrir navegación" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}><i /><i /></button>
          <a href="#inicio" className="wordmark">codeverse</a>
          {menuOpen && <nav className="popover-menu" aria-label="Navegación"><a href="#inicio">Inicio</a><a href="#explorar">Explorar</a><a href="#acerca">Acerca</a></nav>}
        </div>
        <button className="theme-toggle" type="button" aria-pressed={lightTheme} onClick={() => setLightTheme((value) => !value)}>
          <span aria-hidden="true">{lightTheme ? '☼' : '◐'}</span> {lightTheme ? 'Tema claro' : 'Tema oscuro'}
        </button>
      </header>

      <section id="inicio" className="dashboard" aria-labelledby="topic-title">
        <aside className="intro-panel"><p className="eyebrow">/ 01 · code practice</p><h1 id="topic-title">{activeTopic.title}</h1><p>{activeTopic.description}</p><a href="#explorar" className="text-link">Explorar ruta <span>↘</span></a></aside>

        <div className="visual-stage" id="explorar">
          <div className="orbit orbit-one" aria-hidden="true" /><div className="orbit orbit-two" aria-hidden="true" /><div className="orbit orbit-three" aria-hidden="true" />
          <div className="radial-menu" aria-label="Temas de programación">
            {topics.map((topic, index) => <button key={topic.label} type="button" className={index === activeIndex ? 'topic active' : 'topic'} style={{ '--angle': `${index * 60}deg` }} onMouseEnter={() => setActiveIndex(index)} onFocus={() => setActiveIndex(index)} onClick={() => setActiveIndex(index)} aria-pressed={index === activeIndex}>{topic.label}</button>)}
          </div>
          <div className="chart-core" aria-label={`Gráfico animado: ${activeTopic.label}`}>
            <div className="core-heading"><span className="live-dot" /> LIVE · {activeTopic.label}</div>
            <div className="bars" aria-hidden="true">{bars.map((height, index) => <span key={index} style={{ '--height': `${height}%`, '--delay': `${index * -0.23}s` }} />)}</div>
            <div className="chart-footer"><span>runtime</span><strong>92.4</strong><span>ms</span></div>
          </div>
          <div className="topic-caption" aria-live="polite"><strong>{activeTopic.label}</strong><span>paso {String(activeIndex + 1).padStart(2, '0')} / {String(topics.length).padStart(2, '0')}</span></div>
        </div>

        <aside className="detail-panel"><p className="eyebrow">tema activo</p><h2>{activeTopic.label}</h2><p>{activeTopic.description}</p><div className="keyboard-hint"><kbd>←</kbd><kbd>→</kbd><span>Navegá los temas</span></div></aside>
      </section>
      <footer id="acerca" className="footer"><span>Construí. Medí. Iterá.</span><span>2026 / laboratorio digital</span></footer>
    </main>
  )
}
