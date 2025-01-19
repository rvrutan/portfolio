import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:rutanroni@gmail.com?subject=Message from ${name}&body=${message} (Contact: ${email})`;
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto m-28">
      <div className="mb-4">
        <label htmlFor="name" className="block">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block ">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full border rounded p-2"
        />
      </div>
      <button type="submit" className="bg-blue-700 text-white px-52 py-2 rounded">
        Send
      </button>
    </form>
  );
}