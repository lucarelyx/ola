"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useChecklist } from "@/components/checklist/checklist-provider";
import { Icon } from "@/components/ui/icon";
import { tasks } from "@/data/tasks";

const filters = ["Todos", "Pendientes", "Completados"] as const;
type Filter = (typeof filters)[number];

export default function ChecklistPage() {
  const { completed, toggle } = useChecklist();
  const [filter, setFilter] = useState<Filter>("Todos");
  const progress = Math.round((completed.size / tasks.length) * 100);
  const shownTasks = useMemo(() => tasks.filter((task) => {
    if (filter === "Pendientes") return !completed.has(task.id);
    if (filter === "Completados") return completed.has(task.id);
    return true;
  }), [completed, filter]);
  const groups = Array.from(new Set(shownTasks.map((task) => task.category)));

  return (
    <div className="page-stack">
      <section className="checklist-summary">
        <div className="checklist-summary-copy">
          <p className="section-kicker">TU RUTA PERSONAL <span className="demo-chip">DEMO</span></p>
          <h2>Cada paso cuenta.</h2>
          <p>Marca lo que ya has hecho. Tu progreso se actualiza al momento.</p>
        </div>
        <div className="checklist-score">
          <strong>{progress}<small>%</small></strong>
          <span>{completed.size} de {tasks.length} completados</span>
        </div>
        <div className="checklist-progress-line"><span style={{ width: progress + "%" }} /></div>
      </section>
      <div className="checklist-toolbar">
        <div className="filter-tabs" role="tablist" aria-label="Filtrar tareas">
          {filters.map((item) => <button key={item} type="button" role="tab" aria-selected={filter === item} className={filter === item ? "is-selected" : ""} onClick={() => setFilter(item)}>{item}</button>)}
        </div>
        <span className="tasks-count">{shownTasks.length} {shownTasks.length === 1 ? "paso" : "pasos"}</span>
      </div>
      {groups.length > 0 ? groups.map((group) => (
        <section className="checklist-group" key={group}>
          <div className="checklist-group-title"><span>{group}</span><i /></div>
          <div className="task-list">
            {shownTasks.filter((task) => task.category === group).map((task) => {
              const done = completed.has(task.id);
              return (
                <article className={"task-row" + (done ? " task-done" : "")} key={task.id}>
                  <button
                    className="task-check-button"
                    type="button"
                    aria-label={(done ? "Marcar pendiente: " : "Marcar completada: ") + task.title}
                    aria-pressed={done}
                    onClick={() => toggle(task.id)}
                  >
                    {done && <Icon name="check" size={15} />}
                  </button>
                  <div className="task-row-copy"><strong>{task.title}</strong><p>{task.description}</p></div>
                  <span className={"task-state" + (done ? " task-state-done" : "")}><i />{done ? "Completada" : task.statusLabel}</span>
                  <Link href={"/tramites/" + task.guideSlug} className="task-guide-link">Ver guía <Icon name="arrow-up-right" size={14} /></Link>
                </article>
              );
            })}
          </div>
        </section>
      )) : (
        <div className="empty-state"><span><Icon name={filter === "Completados" ? "check" : "sparkles"} size={22} /></span><h3>{filter === "Completados" ? "Todavía no hay pasos completados" : "¡Tu ruta está al día!"}</h3><p>{filter === "Completados" ? "Cuando marques un paso, aparecerá aquí." : "Has terminado todos los pasos de esta demo."}</p></div>
      )}
      <div className="checklist-footnote"><Icon name="circle-help" size={17} /><span>Este checklist es una demostración y se reinicia al recargar la página.</span></div>
    </div>
  );
}
