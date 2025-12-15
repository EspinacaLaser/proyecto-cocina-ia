import { getTag } from "../../data/pantry/tags";

function TagPill({ id }) {
  const t = getTag(id);

  const cls =
    t.tone === "good" ? "tag tagGood" :
    t.tone === "bad" ? "tag tagBad" :
    "tag tagNeutral";

  return <span className={cls}>{t.label}</span>;
}

export default TagPill;
