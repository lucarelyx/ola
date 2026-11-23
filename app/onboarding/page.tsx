"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "@/components/ui/icon";
import { publicAsset } from "@/lib/public-asset";

const questions = [
  {
    label: "¿Cuál es tu nacionalidad?",
    help: "Así podemos orientarte hacia la información que más te puede servir.",
    options: ["Peruana", "Colombiana", "Mexicana", "Argentina", "Chilena", "Otra nacionalidad"],
  },
  {
    label: "¿Cuándo llegas a Barcelona?",
    help: "Tu momento de llegada nos ayuda a ordenar los primeros pasos.",
    options: ["Ya estoy en Barcelona", "En las próximas semanas", "En 1–3 meses", "Más adelante"],
  },
  {
    label: "¿Cuál es tu situación migratoria?",
    help: "Elige lo que mejor describe tu situación. Siempre puedes cambiarlo.",
    options: ["Estancia por estudios", "Ciudadanía de la Unión Europea", "Estoy revisando mi situación", "Otra situación"],
  },
  {
    label: "¿Ya tienes alojamiento?",
    help: "Un lugar donde vivir también puede influir en otros trámites.",
    options: ["Sí, tengo alojamiento", "Estoy buscando", "Tengo alojamiento temporal"],
  },
  {
    label: "¿Tienes NIE?",
    help: "Recuerda: el NIE es un número, no una tarjeta física.",
    options: ["Sí, ya lo tengo", "No todavía", "No estoy segura"],
  },
  {
    label: "¿Tienes TIE?",
    help: "La TIE es una tarjeta física para acreditar tu situación administrativa.",
    options: ["Sí, ya la tengo", "No, está pendiente", "No aplica a mi situación", "No estoy segura"],
  },
  {
    label: "¿Estás empadronada en Barcelona?",
    help: "El padrón acredita el domicilio municipal. Puedes revisarlo más adelante.",
    options: ["Sí, ya estoy empadronada", "No, está pendiente", "No estoy segura"],
  },
];

const initialAnswers = [
  "Peruana",
  "Ya estoy en Barcelona",
  "Estancia por estudios",
  "Sí, tengo alojamiento",
  "Sí, ya lo tengo",
  "No, está pendiente",
  "No, está pendiente",
];

export default function OnboardingPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(initialAnswers);
  const question = questions[step];
  const finished = step >= questions.length;

  function setAnswer(value: string) {
    setAnswers((current) => current.map((answer, index) => index === step ? value : answer));
  }

  function continueOnboarding() {
    setStep((current) => Math.min(current + 1, questions.length));
  }

  return (
    <main className="onboarding-page">
      <header className="onboarding-header">
        <Link href="/" className="landing-brand"><Image src={publicAsset("/brand/ola-icono-app.svg")} width={38} height={38} alt="" /><span>ola</span></Link>
        <Link href="/" className="onboarding-exit"><Icon name="close" size={19} /><span>Salir</span></Link>
      </header>
      <div className="onboarding-layout">
        <aside className="onboarding-aside">
          <div className="onboarding-aside-top"><span className="onboarding-star">✳</span><span>UN BUEN COMIENZO</span></div>
          <h1>Tu camino empieza <span>aquí.</span></h1>
          <p>Responde unas preguntas y prepararemos un punto de partida para tu nueva vida en Barcelona.</p>
          <div className="onboarding-aside-foot"><Icon name="shield" size={17} /><span>Es una demo. Tus respuestas no se guardan.</span></div>
          <div className="onboarding-decoration" aria-hidden="true"><span>ola</span><i /></div>
        </aside>
        <section className="onboarding-form-card" aria-live="polite">
          {!finished ? (
            <>
              <div className="onboarding-progress-row">
                <span>PREGUNTA {String(step + 1).padStart(2, "0")} <i>/ {String(questions.length).padStart(2, "0")}</i></span>
                <span>{Math.round(((step + 1) / questions.length) * 100)}%</span>
              </div>
              <div className="onboarding-progress-track"><span style={{ width: (((step + 1) / questions.length) * 100) + "%" }} /></div>
              <div className="question-heading"><h2>{question.label}</h2><p>{question.help}</p></div>
              <div className="answer-grid">
                {question.options.map((option, index) => {
                  const selected = answers[step] === option;
                  return (
                    <button
                      className={"answer-option" + (selected ? " selected" : "")}
                      type="button"
                      key={option}
                      onClick={() => setAnswer(option)}
                      aria-pressed={selected}
                    >
                      <span className="answer-option-index">{String.fromCharCode(65 + index)}</span>
                      <span>{option}</span>
                      <span className="answer-radio">{selected && <i />}</span>
                    </button>
                  );
                })}
              </div>
              <div className="onboarding-form-footer">
                <button className="button button-back" type="button" onClick={() => setStep((current) => Math.max(current - 1, 0))} disabled={step === 0}>
                  <Icon name="arrow-left" size={17} /> Anterior
                </button>
                <button className="button button-blue" type="button" onClick={continueOnboarding}>
                  Continuar <Icon name="arrow-right" size={17} />
                </button>
              </div>
            </>
          ) : (
            <div className="onboarding-finished">
              <div className="finished-icon"><Icon name="check" size={26} /></div>
              <p className="section-kicker">TU PUNTO DE PARTIDA</p>
              <h2>Ya tenemos el mapa.<br /><span>El camino lo haces tú.</span></h2>
              <p className="finished-copy">Tu perfil de demostración está listo. Hemos marcado la TIE y el empadronamiento como próximos pasos.</p>
              <div className="finished-summary">
                <div><span>NACIONALIDAD</span><strong>{answers[0]}</strong></div>
                <div><span>ALOJAMIENTO</span><strong>{answers[3]}</strong></div>
                <div><span>NIE</span><strong>{answers[4].startsWith("Sí") ? "Lo tienes" : "Por revisar"}</strong></div>
                <div><span>TIE</span><strong>{answers[5].startsWith("Sí") ? "La tienes" : "Pendiente"}</strong></div>
                <div><span>EMPADRONAMIENTO</span><strong>{answers[6].startsWith("Sí") ? "Completado" : "Pendiente"}</strong></div>
              </div>
              <div className="onboarding-form-footer">
                <button className="button button-back" type="button" onClick={() => setStep(questions.length - 1)}>
                  <Icon name="arrow-left" size={17} /> Revisar respuestas
                </button>
                <Link className="button button-blue" href="/dashboard">
                  Ir a mi dashboard <Icon name="arrow-right" size={17} />
                </Link>
              </div>
            </div>
          )}
        </section>
      </div>
      <footer className="onboarding-footer"><span>OLA · TE ACOMPAÑA EN BARCELONA</span><span>Hecho para empezar con calma <b>✳</b></span></footer>
    </main>
  );
}
