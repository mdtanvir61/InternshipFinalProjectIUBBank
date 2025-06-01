import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How do I locate the nearest branch or ATM?",
    answer:
      "If your card is missing, let us know immediately. We’ll block your card right away and send over a new one on the same day. To report a lost or stolen card, call us at (406) 555-0120.",
  },
  {
    question: "What do I do if I lose my card or it gets stolen?",
    answer:
      "Contact our customer support immediately. We will block your card and issue a replacement as soon as possible to ensure your account's safety.",
  },
  {
    question: "What is your customer service number?",
    answer:
      "You can reach our customer service 24/7 at (406) 555-0120 for any banking-related queries or emergencies.",
  },
  {
    question: "How do I reset my pin?",
    answer:
      "You can reset your PIN through our mobile app or by visiting the nearest branch. For assistance, call our helpline.",
  },
  {
    question: "What is required to use Digital Banking?",
    answer:
      "You need an active account with us and a registered mobile number. Download our app or visit our website to get started.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full bg-blue-50 py-16 px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <div className="text-green-700 font-semibold mb-2 text-center">
          If you have question,we have answer
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-3">
          Frequently asked<br />questions
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Get answers to all questions you have and boost your knowledge so you can save, invest and spend smarter. See all questions here!
        </p>
        <div className="w-full space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg transition-all"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-lg focus:outline-none"
                onClick={() => toggleFAQ(idx)}
              >
                <span>{faq.question}</span>
                <span className="ml-4">
                  {openIndex === idx ? (
                    <Minus className="w-6 h-6 text-blue-700 bg-blue-50 rounded shadow" />
                  ) : (
                    <Plus className="w-6 h-6 text-blue-700 bg-blue-50 rounded shadow" />
                  )}
                </span>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-5 text-gray-600 text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;