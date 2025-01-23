import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:rutanroni@gmail.com?subject=Message from ${name}&body=${message} (Contact: ${email})`;
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto m-28 md:p-8">
      <div className="mb-4">
        <label htmlFor="name" className="block text-xl">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border bg-stone-300 rounded p-2 text-stone-900"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-xl">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border bg-stone-300 rounded p-2 text-stone-900"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-xl">
          Message:
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full border bg-stone-300 rounded p-4 text-stone-900"
        />
      </div>
      <button
        type="submit"
        className="bg-stone-300 text-stone-900 text-xl px-24 py-2 rounded-xl"
      >
        Send
      </button>
    </form>
  );
}
