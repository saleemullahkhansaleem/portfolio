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
    <div className="max-w-sm w-full sm:w-72 mx-2 sm:mx-0 rounded bg-black mt-12">
      <div className="px-6 py-4 flex flex-col justify-between h-full gap-4 relative w-full">
        <div className="border-8 border-zinc-900 -mt-[72px] mx-auto rounded-full">
          <div
            title={testimonial?.name}
            className="w-24 h-24 rounded-full border-2 border-zinc-500 bg-black overflow-hidden flex justify-center items-center"
          >
            {testimonial?.photo ? (
              <img
                src={testimonial.photo}
                alt={`${testimonial?.name}'s photo`}
                className="h-full max-w-min"
              />
            ) : (
              <h1 className="text-2xl">
                {testimonial?.name?.slice(0, 1)}
                {testimonial?.name?.split(" ")[1]?.slice(0, 1)}
              </h1>
            )}
          </div>
        </div>
        <div>
          <div className="text-center text-xl text-white">
            {testimonial?.name}
          </div>
          <div className="text-zinc-500 text-center text-base flex items-center justify-center gap-2">
            <img
              src={`feedback/${testimonial?.location?.split("-")[1]}.png`}
              className="w-5"
              alt="country flag"
              title={testimonial?.location?.split("-")[0]}
            />
            <span>{testimonial?.location?.split("-")[0]}</span>
          </div>
        </div>
        <p className="text-zinc-500 text-base text-center">
          {testimonial?.feedback}
        </p>
      </div>
    </div>
  );
};

export default ClientFeedback;
