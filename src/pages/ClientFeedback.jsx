import React from "react";
import { Data } from "../Data";
import Heading from "../componenets/Heading";
import Container from "../componenets/Container";

const ClientFeedback = () => {
  return (
    <Container id="feedback" full>
      <Heading title="Testimonials" text="Clients" colorText="Feedback" />
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {Data.testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </Container>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="max-w-sm w-full sm:w-72 mx-2 sm:mx-0 rounded bg-zinc-900 mt-6">
      <div className="px-6 py-4 flex flex-col justify-between h-full gap-4 relative w-full">
        {testimonial?.photo && (
          <div className="border-4 border-black -mt-16 mx-auto rounded-full">
            <div
              title={testimonial?.name}
              className="w-24 h-24 rounded-full border-2 border-zinc-500 bg-zinc-900 overflow-hidden flex justify-center items-center"
            >
              <img
                src={testimonial.photo}
                alt={`${testimonial?.name}'s photo`}
                className="h-full max-w-min"
              />
            </div>
          </div>
        )}
        <div className="text-center text-xl text-white">{testimonial.name}</div>
        <p className="text-zinc-500 text-base">{testimonial.feedback}</p>
      </div>
    </div>
  );
};

export default ClientFeedback;
