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
    <div className="w-full max-w-sm mx-2 mt-12 bg-black rounded sm:w-72 sm:mx-0">
      <div className="relative flex flex-col justify-between w-full h-full gap-4 px-6 py-4">
        <div className="border-8 border-zinc-900 -mt-[72px] mx-auto rounded-full">
          <div
            title={testimonial?.name}
            className="flex items-center justify-center w-24 h-24 overflow-hidden bg-black border-2 rounded-full border-zinc-500"
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
          <div className="text-xl text-center text-white">
            {testimonial?.name}
          </div>
          <div className="flex items-center justify-center gap-2 text-base text-center text-zinc-500">
            <img
              src={`feedback/${testimonial?.location?.split("-")[1]}.png`}
              className="w-5"
              alt="country flag"
              title={testimonial?.location?.split("-")[0]}
            />
            <span>{testimonial?.location?.split("-")[0]}</span>
          </div>
        </div>
        <p className="text-base text-center text-zinc-500">
          {testimonial?.feedback}
        </p>
      </div>
    </div>
  );
};

export default ClientFeedback;
