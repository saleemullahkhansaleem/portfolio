import React from "react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="px-2">
      <div className="max-w-sm w-full sm:w-72 mx-2 sm:mx-0 rounded bg-zinc-900 mt-6">
        <div className="px-6 py-4 flex flex-col justify-between h-full gap-4 relative w-full">
          {testimonial?.photo && (
            <div
              title={testimonial?.name}
              className="w-24 h-24 rounded-full mx-auto -mt-16 border-4 border-black bg-zinc-900 overflow-hidden flex justify-center items-center"
            >
              <img
                src={testimonial.photo}
                alt={`${testimonial?.name}'s photo`}
                className="h-full max-w-min"
              />
            </div>
          )}
          <div className="text-center text-xl text-white">
            {testimonial.name}
          </div>
          <p className="text-zinc-500 text-base">{testimonial.feedback}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
