export default function SkillRing({ name, level }) {
  return (
    <div className="text-center text-sm">
      <div
        className="mx-auto mb-2 grid h-24 w-24 place-items-center rounded-full"
        style={{ background: `conic-gradient(var(--color-ac) ${level}%, var(--color-line) 0)` }}
      >
        <div className="grid h-[76px] w-[76px] place-items-center rounded-full bg-card font-semibold">{level}%</div>
      </div>
      {name}
    </div>
  );
}
