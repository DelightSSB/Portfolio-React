import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./contactMe.css";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        { publicKey }
      );

      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="container">
      <h2>Contact Me!</h2>
      <div id="contact-icons">
        <div className="link">
          <a href="https://www.linkedin.com/in/jazirsimon/" target="_blank">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
              alt="linkedin"
            />
          </a>
        </div>
        <div className="link">
          <a href="https://github.com/DelightSSB" target="_blank">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
              alt="github"
            />
          </a>
        </div>
      </div>
      <h3 style={{ marginTop: "5rem" }}>Send me a message!</h3>

      <form id="contactForm" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={onChange}
          required
        />

        <label htmlFor="email">Your Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={onChange}
          required
        />

        <label htmlFor="subject">Subject:</label>
        <input
          id="subject"
          name="subject"
          value={form.subject}
          onChange={onChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={onChange}
          required
        />

        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send"}
        </button>

        {status === "sent" && <p>Your email has been sent!</p>}
        {status === "error" && <p>There was a problem sending your message.</p>}
      </form>
    </section>
  );
}
