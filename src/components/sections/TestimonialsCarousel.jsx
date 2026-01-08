import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    quote: "Working with this team transformed our workflow. The architecture is robust, scalable, and incredibly fast. A truly world-class solution that exceeded all expectations.",
    name: "Alex Johnson",
    title: "CTO, TechCorp Solutions",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    quote: "The attention to detail and commitment to performance is unmatched. Our conversion rates jumped significantly after implementing their frontend design.",
    name: "Sarah Chen",
    title: "Lead Product Manager, InnovateX",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    quote: "As a Senior Architect myself, I appreciate the clean code and modular design. It makes maintenance a breeze. Highly recommended for complex projects.",
    name: "Michael Davis",
    title: "Principal Engineer, Global Systems",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="flex flex-col p-8 bg-white rounded-xl shadow-2xl h-full transition duration-300 hover:shadow-primary/30 border border-gray-100">
    <Quote className="w-8 h-8 text-primary mb-4 opacity-70" />
    <p className="text-lg font-medium text-gray-700 flex-grow italic">
      "{testimonial.quote}"
    </p>
    <div className="mt-6 pt-4 border-t border-gray-100 flex items-center">
      <img
        className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-primary/50"
        src={testimonial.avatar}
        alt={testimonial.name}
        onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/150" }}
      />
      <div>
        <p className="text-xl font-semibold text-gray-900">{testimonial.name}</p>
        <p className="text-sm text-gray-500">{testimonial.title}</p>
      </div>
    </div>
  </div>
);

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  // Determine which testimonials to show based on screen size
  const getVisibleTestimonials = () => {
    if (window.innerWidth >= 1024) { // lg screens: show 3
      return [
        testimonialsData[currentIndex % testimonialsData.length],
        testimonialsData[(currentIndex + 1) % testimonialsData.length],
        testimonialsData[(currentIndex + 2) % testimonialsData.length],
      ];
    } else if (window.innerWidth >= 768) { // md screens: show 2
      return [
        testimonialsData[currentIndex % testimonialsData.length],
        testimonialsData[(currentIndex + 1) % testimonialsData.length],
      ];
    } else { // sm screens: show 1
      return [testimonialsData[currentIndex % testimonialsData.length]];
    }
  };

  // Note: For a true carousel, we would use a library or complex CSS/JS for smooth sliding.
  // Here, we implement a basic index change and rely on Tailwind's grid/flex for layout.

  return (
    <section className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header and Controls */}
        <div className="flex justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Trusted by leading companies worldwide for delivering high-quality, scalable frontend solutions.
            </p>
          </div>
          
          {/* Navigation Controls (Hidden on small screens, visible on larger screens for context) */}
          <div className="hidden md:flex space-x-4">
            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="p-3 rounded-full bg-white text-gray-700 border border-gray-300 hover:bg-primary hover:text-white transition duration-300 shadow-md"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="p-3 rounded-full bg-white text-gray-700 border border-gray-300 hover:bg-primary hover:text-white transition duration-300 shadow-md"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Testimonials Grid/Carousel Track */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 
              We map the data directly based on the current index. 
              In a real implementation, this would be a single track element 
              that translates horizontally based on currentIndex.
              For simplicity and responsiveness, we show the current item(s) statically.
            */}
            {testimonialsData.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`transition-opacity duration-500 ${
                  index === currentIndex ? 'opacity-100 block' : 'hidden lg:block opacity-0 lg:opacity-100'
                } ${
                    // Show 2 items on MD, 3 on LG, 1 on SM
                    (index === (currentIndex + 1) % testimonialsData.length && window.innerWidth >= 768) ? 'block' : 'hidden md:block'
                } ${
                    (index === (currentIndex + 2) % testimonialsData.length && window.innerWidth >= 1024) ? 'block' : 'hidden lg:block'
                }`}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile Navigation Dots and Arrows */}
        <div className="mt-12 flex justify-center items-center space-x-3 md:hidden">
            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="p-2 rounded-full bg-white text-gray-700 border border-gray-300 hover:bg-primary hover:text-white transition duration-300 shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {testimonialsData.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        index === currentIndex ? 'bg-primary scale-110' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                />
            ))}
            
            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="p-2 rounded-full bg-white text-gray-700 border border-gray-300 hover:bg-primary hover:text-white transition duration-300 shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsCarousel;