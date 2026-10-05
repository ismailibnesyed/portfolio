import { useRef, useState } from "react";
import { contactCards } from "../data/data";
import Container from "./Container";
import Title from "./Title";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim();
const hasAccessKey = Boolean(
  ACCESS_KEY && ACCESS_KEY !== "YOUR_WEB3FORMS_ACCESS_KEY" && ACCESS_KEY !== "your_public_web3forms_access_key",
);

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submissionInProgress = useRef(false);

  const handleChange = (event) => {
    setForm((currentForm) => ({ ...currentForm, [event.target.name]: event.target.value }));
    if (status.message) setStatus({ type: "", message: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (submissionInProgress.current) return;

    const formElement = event.currentTarget;
    const trimmedForm = {
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    };

    if (!trimmedForm.name || !trimmedForm.email || !trimmedForm.message) {
      setStatus({ type: "error", message: "Please complete your name, a valid email, and a message." });
      return;
    }
    if (!formElement.reportValidity()) return;
    if (!hasAccessKey) {
      setStatus({
        type: "error",
        message: "The contact form is not configured yet. Add your Web3Forms access key to frontend/.env and restart the site.",
      });
      return;
    }

    submissionInProgress.current = true;
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      // Web3Forms keeps this portfolio frontend serverless while delivering to the configured inbox.
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: trimmedForm.name,
          email: trimmedForm.email,
          replyto: trimmedForm.email,
          message: trimmedForm.message,
          subject: `Portfolio message from ${trimmedForm.name}`,
          from_name: "Portfolio contact form",
        }),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Your message could not be sent. Please try again.");
      }

      setForm({ name: "", email: "", message: "" });
      setStatus({ type: "success", message: "Thanks! Your message has been sent successfully." });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof TypeError
        ? "We couldn't connect to Web3Forms. Check your connection and try again."
        : error instanceof Error
          ? error.message
          : "We couldn't send your message. Check your connection and try again.",
      });
    } finally {
      submissionInProgress.current = false;
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section">
      <Container>
        <Title title="Get in Touch" sub="Contact me" />
        <div className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
          <div id="contact" className="grid content-start grid-cols-1 gap-3 min-[420px]:grid-cols-2">
            {contactCards.map((c) => (
              <a key={c.title} href={c.url} target={c.external ? "_blank" : undefined} rel={c.external ? "noreferrer" : undefined} className="card text-center text-xs flex flex-col gap-1.5 hover:border-ac">
                <span className="w-8 h-8 rounded-lg mx-auto grid place-items-center" style={{ background: c.color }}><c.icon /></span>
                <b className="text-[13px]">{c.title}</b>
                <span className="text-mu break-all">{c.handle}</span>
                <span className="text-ac">{c.action}</span>
              </a>
            ))}
          </div>
          <form id="message" onSubmit={handleSubmit} className="card space-y-4">
            <b className="text-base">Let’s build something great</b>
            <p className="text-sm text-mu">Tell me about your idea, and I’ll get back to you soon.</p>
            <label className="sr-only" htmlFor="contact-name">Name</label>
            <input id="contact-name" className="field" name="name" placeholder="Name" autoComplete="name" maxLength={80} required value={form.name} onChange={handleChange} />
            <label className="sr-only" htmlFor="contact-email">Email</label>
            <input id="contact-email" className="field" name="email" type="email" placeholder="Email" autoComplete="email" maxLength={120} required value={form.email} onChange={handleChange} />
            <label className="sr-only" htmlFor="contact-message">Message</label>
            <textarea id="contact-message" className="field h-28" name="message" placeholder="Your message…" minLength={5} maxLength={3000} required value={form.message} onChange={handleChange} />
            <button className="btn disabled:cursor-not-allowed disabled:opacity-60" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending…" : "Send Message ➤"}
            </button>
            {status.message && (
              <p className={`text-xs ${status.type === "success" ? "text-ac" : "text-red-500"}`} role="status" aria-live="polite">
                {status.message}
              </p>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
}
