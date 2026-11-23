"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { guides } from "@/data/guides";
import { Icon } from "@/components/ui/icon";

const popularSearches = ["TIE", "empadronamiento", "tarjeta sanitaria", "alquiler"];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const matches = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("es");
    if (!normalized) return [];
    return guides.filter((guide) => {
      const text = [
        guide.title,
        guide.category,
        guide.summary,
        guide.purpose,
        ...guide.requirements,
        ...guide.documents,
        ...guide.keywords,
      ].join(" ").toLocaleLowerCase("es");
      return normalized.split(/\s+/).every((word) => text.includes(word));
    });
  }, [query]);

  return (
    <div className="page-stack search-page">
      <section className="search-intro">
        <div className="search-orb"><Icon name="search" size={26} /></div>
        <p className="section-kicker">BUSCA EN TU ESPACIO</p>
        <h2>¿Qué necesitas <span>resolver?</span></h2>
        <p>Escribe un trámite, una palabra o un documento.</p>
        <label className="search-box">
          <Icon name="search" size={21} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ej. TIE, padrón, tarjeta sanitaria..." aria-label="Buscar en guías y trámites" />
          {query && <button type="button" onClick={() => setQuery("")} aria-label="Borrar búsqueda"><Icon name="close" size={18} /></button>}
          {!query && <kbd>⌘ K</kbd>}
        </label>
        {!query && <div className="popular-searches"><span>PRUEBA CON</span>{popularSearches.map((term) => <button type="button" key={term} onClick={() => setQuery(term)}>{term}</button>)}</div>}
      </section>
      {query && (
        <section className="search-results" aria-live="polite">
          <div className="panel-heading"><div><p className="section-kicker">RESULTADOS</p><h3>{matches.length ? matches.length + (matches.length === 1 ? " guía encontrada" : " guías encontradas") : "No encontramos resultados"}</h3></div></div>
          {matches.length ? (
            <div className="guide-grid search-results-grid">{matches.map((guide) => (
              <Link href={"/tramites/" + guide.slug} className="guide-card search-result-card" key={guide.slug}>
                <div className={"guide-icon tone-" + guide.tone}><Icon name={guide.icon} size={21} /></div>
                <div className="guide-card-copy"><span className="guide-category">{guide.category}</span><h3>{guide.title}</h3><p>{guide.summary}</p></div>
                <span className="guide-card-arrow"><Icon name="arrow-up-right" size={19} /></span>
              </Link>
            ))}</div>
          ) : (
            <div className="empty-state"><span><Icon name="circle-help" size={22} /></span><h3>Prueba con otra palabra</h3><p>Por ejemplo: NIE, documentos, vivienda o salud.</p></div>
          )}
        </section>
      )}
      <div className="search-hint"><Icon name="shield" size={16} /><span>Las guías enlazan a fuentes oficiales. Los resultados son contenido de demostración.</span></div>
    </div>
  );
}
