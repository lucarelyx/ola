"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";

type ChecklistContextValue = {
  completed: Set<string>;
  toggle: (taskId: string) => void;
};

const ChecklistContext = createContext<ChecklistContextValue | null>(null);

export function ChecklistProvider({ children }: { children: ReactNode }) {
  const [completed, setCompleted] = useState<Set<string>>(
    () => new Set(["nie-number", "housing-confirm"]),
  );
  const value = useMemo(
    () => ({
      completed,
      toggle: (taskId: string) => {
        setCompleted((current) => {
          const next = new Set(current);
          if (next.has(taskId)) next.delete(taskId);
          else next.add(taskId);
          return next;
        });
      },
    }),
    [completed],
  );

  return <ChecklistContext.Provider value={value}>{children}</ChecklistContext.Provider>;
}

export function useChecklist() {
  const context = useContext(ChecklistContext);
  if (!context) throw new Error("useChecklist debe usarse dentro de ChecklistProvider");
  return context;
}
