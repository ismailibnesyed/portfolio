export default function ReviewCard({ review }) {
  return (
    <article className="card h-full min-h-51.25">
      <div className="text-3xl leading-none text-ac">“</div>
      <blockquote className="my-2 text-sm text-mu">{review.text}</blockquote>
      <div className="mt-4 flex items-center gap-3 text-sm">
        <div className="grid h-9 w-9 place-items-center rounded-full bg-linear-to-br from-ac2 to-ac font-bold text-white">{review.name[0]}</div>
        <div>
          <p className="text-main">{review.name}</p>
          <p className="text-xs text-mu">{review.role}</p>
        </div>
        <span className="ml-auto text-xs text-yellow-400" aria-label={`${review.rating} out of 5 stars`}>
          {"★".repeat(review.rating)}
        </span>
      </div>
    </article>
  );
}
