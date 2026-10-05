export default function Title({ title, sub }) {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="text-mu text-sm mt-1">{sub}</p>
    </div>
  );
}
