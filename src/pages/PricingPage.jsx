import React from "react";
import { Data } from "../Data";
import Heading from "../componenets/Heading";
import Container from "../componenets/Container";

const pricingData = Data.pricing;
const PricingCard = ({ plan }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden bg-zinc-900">
      <div className="px-6 py-4 flex flex-col justify-between h-full gap-4">
        <div>
          <div className="text-xl mb-2">{plan.name}</div>
          <ul className="text-zinc-500 text-base list-disc pl-6">
            {plan.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
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
    <div className="my-8 px-8">
      <h2 className="text-2xl mb-4">Additional Services</h2>
      <div className="pl-6">
        {pricingData.additionalServices.map((service, index) => (
          <span
            key={index}
            className="text-zinc-500 text-base mt-2 bg-zinc-900 p-2 rounded flex justify-between w-1/2"
          >
            <span>{service.service}</span>{" "}
            <span
              title="Price"
              className="bg-zinc-800 text-white text-center rounded py-1 px-4"
            >
              {service.price}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

const Notes = () => {
  return (
    <div className="my-8 px-8">
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
