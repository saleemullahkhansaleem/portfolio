import React from "react";
import { Data } from "../Data";
import Heading from "../componenets/Heading";
import Container from "../componenets/Container";

const pricingData = Data.pricing;
const PricingCard = ({ plan }) => {
  return (
    <div className="max-w-sm w-full sm:w-72 mx-2 sm:mx-0 rounded bg-zinc-900 mt-6">
      <div className="px-6 py-4 flex flex-col justify-between h-full gap-4 relative w-full">
        <div className="text-xl absolute left-0 right-0 mx-auto p-2 text-center -top-6 bg-zinc-900 border-black border-4 rounded-full w-11/12">
          {plan.name}
        </div>
        <ul className="text-zinc-500 text-base list-disc pl-6 mt-8">
          {plan.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <span
          title="Price"
          className="bg-zinc-800 text-white text-center rounded py-1 px-4"
        >
          {plan.price}
        </span>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {pricingData.plans.map((plan, index) => (
        <PricingCard key={index} plan={plan} />
      ))}
    </div>
  );
};

const AdditionalServices = () => {
  return (
    <div className="p-0 md:p-8">
      <h2 className="text-2xl p-4">Additional Services</h2>
      <div className="flex flex-wrap justify-center">
        {pricingData.additionalServices.map((service, index) => (
          <div key={index} className="w-full lg:w-1/2 max-w-md p-2">
            <div className="text-zinc-500 text-base bg-zinc-900 p-2 pl-4 rounded flex justify-between items-center gap-2 flex-wrap w-full">
              <span>{service.service}</span>{" "}
              <span
                title="Price"
                className="bg-zinc-800 text-white text-center rounded py-1 px-4 ml-auto"
              >
                {service.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Notes = () => {
  return (
    <div className="p-2 md:p-8">
      <h2 className="text-2xl mb-4">Notes</h2>
      <ul className="list-disc pl-6">
        {pricingData.notes.map((note, index) => (
          <li key={index} className="text-zinc-500 text-base">
            {note}
          </li>
        ))}
      </ul>
    </div>
  );
};

const PricingPage = () => {
  return (
    <Container id="pricing" full>
      <Heading title="Pricing" text="Pricing" colorText="Plans" />
      <Pricing />
      <AdditionalServices />
      <Notes />
    </Container>
  );
};

export default PricingPage;
