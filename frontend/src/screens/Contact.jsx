import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


function Contact() {

  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage(null);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(
      (result) => {
        setStatusMessage({ success: true, message: 'Message sent successfully!' });
        form.current.reset();
        setTimeout(() => {
          setStatusMessage(null);
        }
          , 5000);
      },
      (error) => {
        setStatusMessage({ success: false, message: 'Failed to send your message - Please try again later.' });
        console.log(error.text);
        console.error('EmailJS error:', error);
        setTimeout(() => {
          setStatusMessage(null);
        }
          , 5000);
      }
    ).finally(() => {
      setIsSending(false);
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
      <form className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 space-y-6" onSubmit={sendEmail} ref={form}>
        <div>
          <label className="block text-sm font-medium text-gray-300">Name</label>
          <input type="text" name="name" className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Your name" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300">Email</label>
          <input type="email" name="email" className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="you@example.com" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300">Title</label>
          <input type="title" name="title" className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Query" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300">Message</label>
          <textarea rows="4" name="message" className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Write your message here..."></textarea>
        </div>

        <button type="submit" disabled={isSending} className={`bg-indigo-600 text-white px-4 py-2 rounded transition ${isSending ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-700'}`}>
          {isSending ? 'Sending...' : 'Send Message'}
        </button>

        {statusMessage && (
          <div className={`text-sm font-medium ${statusMessage.success ? 'text-green-500' : 'text-red-500'} mt-2`}>
            {statusMessage.message}
          </div>
        )}
      </form>
    </div>
  );
}

export default Contact;
