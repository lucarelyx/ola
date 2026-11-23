"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import type { ReactNode } from "react";
import { ChecklistProvider } from "@/components/checklist/checklist-provider";
import { Icon } from "@/components/ui/icon";
import { publicAsset } from "@/lib/public-asset";

const navigation = [
  { label: "Inicio", href: "/", icon: "home" as const },
  { label: "Mi dashboard", href: "/dashboard", icon: "dashboard" as const },
  { label: "Trámites", href: "/tramites", icon: "book" as const },
  { label: "Checklist", href: "/checklist", icon: "checklist" as const },
  { label: "Buscador", href: "/buscar", icon: "search" as const },
];

function isCurrent(pathname: string, href: string) {
  if (href === "/") return false;
  return pathname === href || pathname.startsWith(href + "/");
}

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    function handleShortcut(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        router.push("/buscar");
      }
    }
    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, [router]);
  const title = pathname.startsWith("/tramites/")
    ? "Guía paso a paso"
    : pathname === "/tramites"
      ? "Guías y trámites"
      : pathname === "/checklist"
        ? "Tu checklist"
        : pathname === "/buscar"
          ? "Buscar en OLA"
          : "Tu espacio en Barcelona";

  return (
    <ChecklistProvider>
      <div className="app-shell">
        <aside className="sidebar">
          <Link className="sidebar-brand" href="/" aria-label="OLA, volver al inicio">
            <Image src={publicAsset("/brand/ola-icono-app.svg")} width={38} height={38} alt="" priority />
            <span>ola</span>
          </Link>
          <div className="sidebar-section-label">TU ESPACIO</div>
          <nav className="sidebar-nav" aria-label="Navegación principal">
            {navigation.map((item) => {
              const active = isCurrent(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={"sidebar-link" + (active ? " is-active" : "")}
                  aria-current={active ? "page" : undefined}
                >
                  <Icon name={item.icon} size={19} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
          <div className="sidebar-bottom">
            <div className="sidebar-help">
              <div className="help-icon"><Icon name="circle-help" size={17} /></div>
              <p>Un paso cada vez.</p>
              <span>Tu ruta puede cambiar contigo.</span>
            </div>
            <div className="profile-row">
              <div className="avatar avatar-small">CM</div>
              <div className="profile-copy"><strong>Camila M.</strong><span>Estudiante · Perú</span></div>
              <span className="demo-label">DEMO</span>
            </div>
          </div>
        </aside>

        <div className="workspace">
          <header className="workspace-header">
            <div>
              <p className="header-eyebrow">BARCELONA, A TU RITMO</p>
              <h1>{title}</h1>
            </div>
            <Link className="header-search" href="/buscar">
              <Icon name="search" size={18} />
              <span>Busca una guía, trámite o documento</span>
              <kbd>⌘ K</kbd>
            </Link>
            <div className="avatar header-avatar">CM</div>
          </header>
          <main className="workspace-content">{children}</main>
          <nav className="mobile-nav" aria-label="Navegación móvil">
            {navigation.filter((item) => item.href !== "/").map((item) => {
              const active = isCurrent(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={"mobile-nav-link" + (active ? " is-active" : "")}
                  aria-current={active ? "page" : undefined}
                >
                  <Icon name={item.icon} size={19} />
                  <span>{item.href === "/dashboard" ? "Inicio" : item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </ChecklistProvider>
  );
}
