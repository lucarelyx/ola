import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuide, guides } from "@/data/guides";
import { Icon } from "@/components/ui/icon";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export const dynamicParams = false;

export default async function GuideDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  return (
    <div className="page-stack detail-page">
      <Link href="/tramites" className="back-link"><Icon name="arrow-left" size={17} /> Todas las guías</Link>
      <section className={"detail-hero tone-bg-" + guide.tone}>
        <div className={"guide-icon tone-" + guide.tone}><Icon name={guide.icon} size={23} /></div>
        <p className="section-kicker">{guide.category.toUpperCase()} <span>·</span> GUÍA DE ORIENTACIÓN</p>
        <h2>{guide.title}</h2>
        <p>{guide.summary}</p>
        <div className="detail-hero-meta"><span><Icon name="clock" size={15} /> {guide.timing.startsWith("Pendiente") ? "Plazo por confirmar" : "Consulta el plazo aplicable"}</span><span><Icon name="shield" size={15} /> Información oficial</span></div>
        <div className="detail-hero-decoration" />
      </section>
      <div className="detail-columns">
        <div className="detail-main">
          <section className="detail-section">
            <div className="detail-section-heading"><span className="detail-index">01</span><div><p className="section-kicker">PARA EMPEZAR</p><h3>¿Para qué sirve?</h3></div></div>
            <p className="detail-prose">{guide.purpose}</p>
          </section>
          <section className="detail-section">
            <div className="detail-section-heading"><span className="detail-index">02</span><div><p className="section-kicker">ANTES DE EMPEZAR</p><h3>Requisitos</h3></div></div>
            <ul className="detail-list">{guide.requirements.map((item) => <li key={item}><span><Icon name="check" size={14} /></span><p>{item}</p></li>)}</ul>
          </section>
          <section className="detail-section">
            <div className="detail-section-heading"><span className="detail-index">03</span><div><p className="section-kicker">PONLO EN MARCHA</p><h3>Documentación</h3></div></div>
            <ul className="detail-list document-list">{guide.documents.map((item) => <li key={item}><span><Icon name="file" size={14} /></span><p>{item}</p></li>)}</ul>
          </section>
          <section className="detail-section">
            <div className="detail-section-heading"><span className="detail-index">04</span><div><p className="section-kicker">PASO A PASO</p><h3>Cómo avanzar</h3></div></div>
            <ol className="procedure-list">{guide.steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></li>)}</ol>
          </section>
          <section className="detail-section mistakes-section">
            <div className="detail-section-heading"><span className="detail-index"><Icon name="circle-help" size={17} /></span><div><p className="section-kicker">UN POCO DE CONTEXTO</p><h3>Errores frecuentes</h3></div></div>
            <ul className="mistake-list">{guide.commonMistakes.map((item) => <li key={item}><Icon name="arrow-right" size={14} /><span>{item}</span></li>)}</ul>
          </section>
        </div>
        <aside className="detail-aside">
          <section className="detail-aside-card">
            <p className="section-kicker">DATOS CLAVE</p>
            <div className="detail-fact"><span><Icon name="building" size={16} /> Organismo</span><strong>{guide.responsible}</strong></div>
            <div className="detail-fact"><span><Icon name="clock" size={16} /> Tiempo</span><strong>{guide.timing}</strong></div>
            <div className="detail-fact"><span><Icon name="plus" size={16} /> Coste</span><strong>{guide.cost}</strong></div>
          </section>
          <section className="official-card">
            <div className="official-card-icon"><Icon name="shield" size={19} /></div>
            <p className="section-kicker">FUENTES OFICIALES</p>
            <h3>Comprueba los detalles</h3>
            <p>Consulta la información actualizada del organismo responsable antes de presentar documentación.</p>
            <div className="official-links">
              {guide.sources.map((source) => (
                <a href={source.href} target="_blank" rel="noreferrer" key={source.href}>
                  <span>{source.label}</span><Icon name="external" size={15} />
                </a>
              ))}
            </div>
          </section>
          <div className="validation-note"><Icon name="circle-help" size={17} /><p>Los datos marcados como <strong>pendiente de validación</strong> requieren confirmación para tu situación concreta.</p></div>
          <Link href="/checklist" className="button button-blue detail-checklist-link">Volver a mi checklist <Icon name="arrow-right" size={17} /></Link>
        </aside>
      </div>
    </div>
  );
}
