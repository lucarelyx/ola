"use client";

import Link from "next/link";
import { useChecklist } from "@/components/checklist/checklist-provider";
import { GuideCard } from "@/components/tramites/guide-card";
import { Icon } from "@/components/ui/icon";
import { guides } from "@/data/guides";
import { tasks } from "@/data/tasks";

export default function DashboardPage() {
  const { completed } = useChecklist();
  const progress = Math.round((completed.size / tasks.length) * 100);
  const nextTasks = tasks.filter((task) => !completed.has(task.id)).slice(0, 3);
  const recommendedGuides = guides.filter((guide) => ["tie", "empadronamiento", "tarjeta-sanitaria"].includes(guide.slug));

  return (
    <div className="page-stack">
      <section className="dashboard-welcome">
        <div>
          <div className="section-kicker">TU PROCESO, PASO A PASO <span className="demo-chip">PERFIL DEMO</span></div>
          <h2>¡Hola, Camila! <span className="hello-spark">✳</span></h2>
          <p>Barcelona ya es tu casa. Vamos con lo que sigue.</p>
        </div>
        <div className="welcome-location"><Icon name="map-pin" size={17} /><span>Barcelona, España</span></div>
      </section>

      <section className="dashboard-hero">
        <div className="dashboard-hero-copy">
          <div className="dashboard-hero-label"><span /> TU RUTA DE LLEGADA</div>
          <h3>Tu nueva etapa<br />ya está en marcha.</h3>
          <p>Ya tienes dos pasos listos. El siguiente: revisar tu TIE con calma.</p>
          <Link href="/tramites/tie" className="button button-white button-hero">Ver mi siguiente paso <Icon name="arrow-right" size={17} /></Link>
        </div>
        <div className="dashboard-progress-block">
          <div className="progress-ring" style={{ "--progress": progress + "%" } as React.CSSProperties}>
            <div><strong>{progress}<small>%</small></strong><span>PROGRESO</span></div>
          </div>
          <span className="progress-caption">{completed.size} de {tasks.length} pasos completados</span>
          <Link href="/checklist" className="progress-link">Ver checklist <Icon name="arrow-up-right" size={15} /></Link>
        </div>
        <div className="hero-contour contour-one" /><div className="hero-contour contour-two" />
      </section>

      <div className="dashboard-columns">
        <section className="panel next-steps-panel">
          <div className="panel-heading">
            <div><p className="section-kicker">A CONTINUACIÓN</p><h3>Tus próximos pasos</h3></div>
            <Link href="/checklist" className="small-link">Ver todos <Icon name="arrow-right" size={15} /></Link>
          </div>
          <div className="next-step-list">
            {nextTasks.map((task, index) => {
              const guide = guides.find((item) => item.slug === task.guideSlug);
              return (
                <Link href={"/tramites/" + task.guideSlug} className="next-step-row" key={task.id}>
                  <span className={"step-order" + (index === 0 ? " step-order-current" : "")}>{String(index + 1).padStart(2, "0")}</span>
                  <span className={"next-step-icon tone-" + (guide?.tone ?? "blue")}><Icon name={guide?.icon ?? "file"} size={18} /></span>
                  <span className="next-step-copy"><strong>{task.title}</strong><span>{task.description}</span></span>
                  <Icon name="chevron-right" size={18} />
                </Link>
              );
            })}
            {nextTasks.length === 0 && <div className="all-done"><span><Icon name="check" size={18} /></span><strong>¡Todo listo!</strong><p>Has completado los pasos de esta ruta.</p></div>}
          </div>
        </section>

        <section className="panel profile-panel">
          <div className="panel-heading">
            <div><p className="section-kicker">TU PUNTO DE PARTIDA</p><h3>Así va tu llegada</h3></div>
            <div className="profile-mini-avatar">CM</div>
          </div>
          <div className="profile-facts">
            <div><span>NACIONALIDAD</span><strong><Icon name="globe" size={15} /> Peruana</strong></div>
            <div><span>ESTUDIOS</span><strong><Icon name="book" size={15} /> Máster</strong></div>
            <div><span>ALOJAMIENTO</span><strong><i className="fact-status fact-status-ready" /> Confirmado</strong></div>
            <div><span>NIE / TIE</span><strong><i className="fact-status fact-status-mixed" /> NIE listo · TIE pendiente</strong></div>
            <div><span>PADRÓN</span><strong><i className="fact-status fact-status-pending" /> Pendiente</strong></div>
          </div>
          <Link className="profile-panel-link" href="/onboarding">Revisar mi punto de partida <Icon name="arrow-up-right" size={16} /></Link>
        </section>
      </div>

      <section className="dashboard-guides">
        <div className="panel-heading">
          <div><p className="section-kicker">PARA SEGUIR AVANZANDO</p><h3>Guías que te pueden ayudar</h3></div>
          <Link href="/tramites" className="small-link">Todas las guías <Icon name="arrow-right" size={15} /></Link>
        </div>
        <div className="dashboard-guide-grid">
          {recommendedGuides.map((guide) => <GuideCard guide={guide} key={guide.slug} />)}
        </div>
      </section>
      <div className="dashboard-note"><Icon name="shield" size={16} /><span>Las guías enlazan a fuentes oficiales. Confirma los requisitos aplicables a tu situación antes de iniciar un trámite.</span></div>
    </div>
  );
}
