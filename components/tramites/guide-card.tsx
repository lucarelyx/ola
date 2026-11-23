import Link from "next/link";
import type { Guide } from "@/data/guides";
import { Icon } from "@/components/ui/icon";

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link href={"/tramites/" + guide.slug} className="guide-card">
      <div className={"guide-icon tone-" + guide.tone}><Icon name={guide.icon} size={21} /></div>
      <div className="guide-card-copy">
        <span className="guide-category">{guide.category}</span>
        <h3>{guide.title}</h3>
        <p>{guide.summary}</p>
      </div>
      <span className="guide-card-arrow"><Icon name="arrow-up-right" size={19} /></span>
    </Link>
  );
}
