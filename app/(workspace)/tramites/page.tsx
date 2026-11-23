import Link from "next/link";
import { GuideCard } from "@/components/tramites/guide-card";
import { Icon } from "@/components/ui/icon";
import { guides } from "@/data/guides";

export default function GuidesPage() {
  return (
    <div className="page-stack">
      <section className="page-intro">
        <div>
          <p className="section-kicker">GUÍAS PARA TU LLEGADA</p>
          <h2>Todo empieza por <span>entenderlo.</span></h2>
          <p>Información clara para dar tus próximos pasos con más confianza.</p>
        </div>
        <Link href="/buscar" className="button button-outline"><Icon name="search" size={17} /> Buscar una guía</Link>
      </section>
      <div className="guides-meta"><span><strong>06</strong> GUÍAS DE DEMOSTRACIÓN</span><span><Icon name="shield" size={15} /> Fuentes oficiales enlazadas</span></div>
      <div className="guide-grid">
        {guides.map((guide) => <GuideCard guide={guide} key={guide.slug} />)}
      </div>
      <section className="guides-help">
        <div className="help-icon"><Icon name="circle-help" size={18} /></div>
        <div><strong>¿No sabes por cuál empezar?</strong><p>Revisa tu checklist para ver qué paso te conviene mirar primero.</p></div>
        <Link href="/checklist" className="small-link">Ver mis pasos <Icon name="arrow-right" size={15} /></Link>
      </section>
      <div className="dashboard-note"><Icon name="shield" size={16} /><span>Guías de orientación. Los requisitos dependen de tu caso; cuando no se han confirmado aquí, se indica como pendiente de validación.</span></div>
    </div>
  );
}
