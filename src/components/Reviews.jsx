import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { reviews as sampleReviews } from "../data/data";
import Container from "./Container";
import Title from "./Title";

function ReviewCard({ review }) {
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

export default function Reviews() {
  const reviews = sampleReviews;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (reviews.length < 2) return undefined;
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % reviews.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [reviews.length]);

  const showReview = (index) => {
    setActiveIndex((index + reviews.length) % reviews.length);
  };
  const visibleReviews = [-1, 0, 1].map((offset) => ({
    review: reviews[(activeIndex + offset + reviews.length) % reviews.length],
    offset,
  }));

  return (
    <section id="review" className="section">
      <Container>
        <Title title="Client Reviews" sub="Sample feedback · replace with verified testimonials" />
        {reviews.length ? (
          <div aria-label="Client review carousel">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {visibleReviews.map(({ review, offset }) => (
                <motion.div
                  key={review.id}
                  layout
                  className={`${offset !== 0 ? "hidden sm:block sm:opacity-70" : "opacity-100"} transition-opacity duration-500`}
                  transition={{ layout: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }}
                  aria-hidden={offset !== 0}
                >
                  <ReviewCard review={review} />
                </motion.div>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-center gap-2" aria-label={`Review ${activeIndex + 1} of ${reviews.length}`}>
              {reviews.map((item, index) => (
                <button
                  key={item.id || index}
                  type="button"
                  onClick={() => showReview(index)}
                  aria-label={`Show review ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  className={`h-2.5 rounded-full transition-all ${index === activeIndex ? "w-6 bg-ac" : "w-2.5 bg-line hover:bg-ac/60"}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center text-sm text-mu">No reviews to show yet.</p>
        )}
      </Container>
    </section>
  );
}
