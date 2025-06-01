import { useState } from "react";

const testimonials = [
  {
    img: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&w=400&h=400&fit=crop",
    quote: "I love IUB Bank, they're the best",
    text: "It's been 2 years since I found IUB Bank, and it’s such a relief as a small business owner to not worry about unnecessary fees. I lost my credit card once, and the service was so prompt that I was back to work the next day!",
    name: "Sophie Moore",
    country: "United Kingdom",
  },
  {
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&w=400&h=400&fit=crop",
    quote: "Great customer service!",
    text: "The support team at IUB Bank is always available and super helpful. They made my transition to their services seamless and easy.",
    name: "John Smith",
    country: "Canada",
  },
  {
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&w=400&h=400&fit=crop",
    quote: "Highly recommend!",
    text: "IUB Bank offers the best rates and their online banking is very user-friendly. I recommend them to all my friends.",
    name: "Maria Garcia",
    country: "Spain",
  },
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <div className="text-green-700 font-semibold mb-2 text-center">Testimonials</div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-3">
          Don’t take our word for<br />it, take theirs
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Take a look at our past customers success stories. Our goal is to help you grow
        </p>
        <div className="flex flex-col md:flex-row items-center w-full gap-8">
          {/* Image */}
          <div className="flex-shrink-0 flex justify-center items-center w-full md:w-1/3">
            <div className="rounded-full bg-blue-700 w-64 h-64 flex items-center justify-center overflow-hidden">
              <img
                src={testimonials[activeIndex].img}
                alt={testimonials[activeIndex].name}
                className="object-cover w-56 h-56 rounded-full"
              />
            </div>
          </div>
          {/* Testimonial Content */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <div className="text-4xl text-[#6ad0ff] mb-2">“</div>
            <div className="font-bold text-lg mb-2">
              “{testimonials[activeIndex].quote}”
            </div>
            <div className="text-gray-700 mb-4 max-w-xl text-center md:text-left">
              {testimonials[activeIndex].text}
            </div>
            <div className="font-bold text-lg">{testimonials[activeIndex].name}</div>
            <div className="text-green-700">{testimonials[activeIndex].country}</div>
            {/* Swiper Pagination */}
            <div className="flex items-center gap-2 mt-6">
              <button
                className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-50 text-blue-700 text-xl"
                onClick={handlePrev}
                aria-label="Previous testimonial"
              >
                &#8592;
              </button>
              {testimonials.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-3 h-3 rounded-full inline-block cursor-pointer transition-all ${
                    activeIndex === idx ? "bg-blue-400" : "bg-blue-200"
                  }`}
                  onClick={() => setActiveIndex(idx)}
                ></span>
              ))}
              <button
                className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-50 text-blue-700 text-xl"
                onClick={handleNext}
                aria-label="Next testimonial"
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;