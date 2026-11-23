import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { publicAsset } from "@/lib/public-asset";

const steps = [
  { number: "01", title: "Cuéntanos tu punto de partida", text: "Unas preguntas sencillas para entender qué necesitas." },
  { number: "02", title: "Recibe una ruta clara", text: "Ordenamos los trámites según tu situación y tus tiempos." },
  { number: "03", title: "Avanza a tu manera", text: "Guías prácticas y una checklist para no perder el hilo." },
];

export default function Home() {
  return (
    <main className="landing">
      <header className="landing-header">
        <Link href="/" className="landing-brand" aria-label="OLA inicio">
          <Image src={publicAsset("/brand/ola-icono-app.svg")} width={40} height={40} alt="" priority />
          <span>ola</span>
        </Link>
        <nav className="landing-nav" aria-label="Secciones">
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#que-encontraras">Qué encontrarás</a>
        </nav>
        <div className="landing-actions">
          <Link className="landing-login" href="/dashboard">Ver la plataforma</Link>
          <Link className="button button-small button-blue" href="/onboarding">
            Comenzar <Icon name="arrow-right" size={16} />
          </Link>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-copy">
          <div className="eyebrow-pill"><span className="eyebrow-mark" /> TU VIDA NUEVA, CON MÁS CLARIDAD</div>
          <h1>Tu nueva vida en Barcelona <span>empieza con claridad.</span></h1>
          <p className="hero-description">
            Los primeros pasos en otro país pueden ser mucho. OLA te ayuda a ordenar tus trámites, entender qué necesitas y sentirte en casa, paso a paso.
          </p>
          <div className="hero-actions">
            <Link className="button button-blue" href="/onboarding">
              Crear mi ruta <Icon name="arrow-right" size={18} />
            </Link>
            <Link className="button button-quiet" href="/dashboard">
              Explorar la demo
            </Link>
          </div>
          <div className="hero-note">
            <div className="avatar-stack"><span>CM</span><span>+</span></div>
            <span>Una guía cercana para empezar con buen pie.</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Vista previa del panel de progreso de OLA">
          <div className="hero-sun" />
          <div className="hero-scribble hero-scribble-one" />
          <div className="hero-scribble hero-scribble-two" />
          <div className="preview-card">
            <div className="preview-topline"><span>MI RUTA EN BARCELONA</span><span className="preview-live"><i /> EN MARCHA</span></div>
            <div className="preview-title-row">
              <div><p>¡Hola, Camila!</p><span>Todo empieza a tomar forma.</span></div>
              <div className="preview-avatar">CM</div>
            </div>
            <div className="preview-progress-card">
              <div className="preview-progress-copy"><span>Tu progreso</span><strong>33%</strong></div>
              <div className="progress-track"><span style={{ width: "33%" }} /></div>
              <div className="preview-progress-foot"><span>2 de 6 pasos listos</span><Icon name="arrow-up-right" size={16} /></div>
            </div>
            <div className="preview-list-label">TU SIGUIENTE PASO <span>HOY</span></div>
            <div className="preview-task">
              <div className="preview-task-icon"><Icon name="shield" size={18} /></div>
              <div><strong>Revisa tu TIE</strong><span>Una guía clara para empezar</span></div>
              <Icon name="chevron-right" size={18} />
            </div>
            <div className="preview-task preview-task-muted">
              <div className="preview-task-check"><Icon name="check" size={15} /></div>
              <div><strong>Confirma tu NIE</strong><span>Listo, buen trabajo</span></div>
              <span className="ready-tag">HECHO</span>
            </div>
            <div className="preview-footer"><Icon name="map-pin" size={16} /><span>Barcelona se construye paso a paso</span><span className="footer-spark">✳</span></div>
          </div>
          <div className="floating-note"><span className="floating-note-icon"><Icon name="sparkles" size={16} /></span><div><strong>Un paso cada vez</strong><span>La ruta es tuya.</span></div></div>
          <div className="visual-caption"><span>01 /</span> TU ESPACIO, EN ORDEN</div>
        </div>
      </section>

      <div className="trust-strip">
        <div className="trust-intro">MENOS DUDAS. MÁS VIDA.</div>
        <div><Icon name="compass" size={19} /><span>Una ruta que se adapta a ti</span></div>
        <div><Icon name="file" size={19} /><span>Información organizada</span></div>
        <div><Icon name="heart" size={19} /><span>Acompañamiento cercano</span></div>
      </div>

      <section className="section-how" id="como-funciona">
        <div className="section-heading">
          <div><p className="section-kicker">SENCILLO DESDE EL PRINCIPIO</p><h2>De “¿por dónde empiezo?”<br /><span>a “ya lo tengo”.</span></h2></div>
          <p>Lo importante, en el orden que te sirve. Sin tener que buscar en diez sitios a la vez.</p>
        </div>
        <div className="steps-grid">
          {steps.map((step) => (
            <article className="step-card" key={step.number}>
              <span className="step-number">{step.number}</span>
              <div className="step-line" />
              <h3>{step.title}</h3><p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-features" id="que-encontraras">
        <div className="features-copy">
          <p className="section-kicker">TODO EN UN MISMO LUGAR</p>
          <h2>Menos pestañas.<br /><span>Más tranquilidad.</span></h2>
          <p>Desde la TIE hasta tu primer abono de transporte. Encuentra lo esencial para instalarte y seguir con lo que viniste a hacer: tu máster y tu nueva vida.</p>
          <Link href="/tramites" className="text-link">Ver guías y trámites <Icon name="arrow-right" size={17} /></Link>
        </div>
        <div className="feature-grid">
          <Link href="/tramites" className="feature-card feature-card-blue">
            <div className="feature-icon"><Icon name="book" size={20} /></div><span className="feature-count">06 GUÍAS</span>
            <h3>Entiende cada trámite</h3><p>Qué es, qué preparar y dónde revisar la información oficial.</p><Icon name="arrow-up-right" size={19} />
          </Link>
          <Link href="/checklist" className="feature-card feature-card-cream">
            <div className="feature-icon"><Icon name="checklist" size={20} /></div><span className="feature-count">A TU RITMO</span>
            <h3>Tu checklist, siempre a mano</h3><p>Marca tus avances y vuelve cuando lo necesites.</p><Icon name="arrow-up-right" size={19} />
          </Link>
          <Link href="/buscar" className="feature-card feature-card-white">
            <div className="feature-icon"><Icon name="search" size={20} /></div><span className="feature-count">SIN COMPLICARTE</span>
            <h3>Encuentra una respuesta</h3><p>Busca por trámite, documento o palabra clave.</p><Icon name="arrow-up-right" size={19} />
          </Link>
        </div>
      </section>

      <section className="landing-cta">
        <div className="cta-mark"><Image src={publicAsset("/brand/ola-icono-app.svg")} width={42} height={42} alt="" /></div>
        <div><p>BARCELONA TE ESPERA</p><h2>¿Empezamos por lo primero?</h2><span>Tu ruta se crea en un par de minutos.</span></div>
        <Link className="button button-white" href="/onboarding">Crear mi ruta <Icon name="arrow-right" size={17} /></Link>
        <div className="cta-loop" aria-hidden="true" />
      </section>
      <footer className="landing-footer"><Link href="/" className="footer-brand">ola</Link><span>Una bienvenida más clara a Barcelona.</span><span>© OLA · Plataforma de demostración</span></footer>
    </main>
  );
}
