import React from "react";
import { Data } from "../Data";
import Heading from "../componenets/Heading";
import Container from "../componenets/Container";

const ClientFeedback = () => {
  return (
    <Container id="feedback" full>
      <Heading title="Testimonials" text="Clients" colorText="Feedback" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 max-w-7xl mx-auto mt-8 p-4">
        {Data.testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </Container>
  );
};

const TestimonialCard = ({ testimonial }) => {
  const getStarRating = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        fill={index < rating ? "gold" : "none"}
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4 text-yellow-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.1 6.5a1 1 0 00.95.69h6.897c.97 0 1.371 1.24.588 1.81l-5.578 4.048a1 1 0 00-.363 1.118l2.1 6.5c.3.922-.755 1.688-1.54 1.118l-5.578-4.048a1 1 0 00-1.176 0l-5.578 4.048c-.785.57-1.84-.196-1.54-1.118l2.1-6.5a1 1 0 00-.363-1.118L.465 11.927c-.783-.57-.382-1.81.588-1.81h6.897a1 1 0 00.95-.69l2.1-6.5z"
        />
      </svg>
    ));
  };

  return (
    <div className="w-full bg-zinc-950 text-white rounded shadow-lg p-6 relative">
      <img
        src={`./feedback/${testimonial.source
          .replace(" ", "")
          .toLowerCase()}.svg`}
        alt={testimonial.source}
        title={testimonial.source}
        className="absolute top-6 right-8 max-w-12 max-h-8"
      />
      <div className="flex items-center gap-4 mb-4">
        <div
          title={testimonial?.name}
          className="flex items-center justify-center w-16 h-16 overflow-hidden rounded-full bg-zinc-900 shadow-md"
        >
          {testimonial?.photo ? (
            <img
              src={testimonial.photo}
              alt={`${testimonial?.name}'s photo`}
              className="h-full max-w-min object-cover"
            />
          ) : (
            <h1 className="text-2xl font-semibold text-gray-300">
              {testimonial?.name?.slice(0, 1)}
              {/* {testimonial?.name?.split(" ")[1]?.slice(0, 1)} */}
            </h1>
          )}
        </div>
        <div>
          <h4 className="text-lg font-bold flex gap-2 items-center">
            {testimonial?.name}
          </h4>{" "}
          {testimonial?.username && (
            <span className="text-xs text-gray-500 px-2 py-px bg-zinc-900 rounded-full">
              @{testimonial?.username}
            </span>
          )}
          <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
            <img
              src={`feedback/${testimonial?.location?.split("-")[1]}.png`}
              className="w-5"
              alt="country flag"
              title={testimonial?.location?.split("-")[0]}
            />
            <span>{testimonial?.location?.split("-")[0]}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-1 mb-4">
        {getStarRating(testimonial?.rating || 5)}
      </div>
      <p className="text-base text-gray-300 mb-8">{testimonial?.feedback}</p>
      <p className="text-xs text-gray-600 absolute bottom-6">
        Delivered on time • Original order:{" "}
        <span className="text-gray-500">{testimonial.order}</span>
      </p>
    </div>
  );
};

export default ClientFeedback;
