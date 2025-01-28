import React, { useState } from 'react';

const Inputs = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (!fullname || !email || !message) {
      alert('Please fill in all the fields before sending the message.');
      return;
    }

    const emoji = [
      { emoji: '✅', description: 'check mark button' },
      { emoji: '📞', description: 'telephone receiver' },
      { emoji: '⏰', description: 'alarm clock' },
      { emoji: '👤', description: 'bust in silhouette' },
      { emoji: '💬', description: 'speech balloon' },
      { emoji: '📆', description: 'tear-off calendar' },
    ];

    const myText = `
      ${emoji[0].emoji} Message Details:%0A
      ${emoji[3].emoji} <b>Full Name:</b> <i>${fullname}</i>%0A
      ${emoji[1].emoji} <b>Email:</b> <i>${email}</i>%0A
      ${emoji[4].emoji} <b>Message:</b> <i>${message}</i>
    `;

    const token = "7722165932:AAG2wLGF2ULF-X778aciSjrRgxr9PDasUF0";
    const chatId = -1002378500520;
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
      myText
    )}&parse_mode=html`;

    fetch(url)
      .then(() => {
        alert('Message successfully sent!');
        setFullname('');
        setEmail('');
        setMessage('');
      })
      .catch(() => {
        alert('Failed to send the message. Please try again.');
      });
  };

  return (
    <div className="my-20 flex flex-col gap-5 items-center justify-center">
      <input
        type="text"
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}
        className="w-full border-none outline-none bg-[#edf2f8] px-[15px] py-[15px] rounded-[10px] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)]"
        placeholder="Your Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border-none outline-none bg-[#edf2f8] px-[15px] py-[15px] rounded-[10px] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)]"
        placeholder="Your Email"
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full h-[130px] md:h-[200px] border-none outline-none bg-[#edf2f8] px-[15px] py-[15px] rounded-[10px] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)]"
        placeholder="Your Message"
      ></textarea>
      <button
        type="button"
        onClick={sendMessage}
        className="text-white bg-[#313bac] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-4 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 max-w-[200px]"
      >
        Send Message
      </button>
    </div>
  );
};

export default Inputs;
