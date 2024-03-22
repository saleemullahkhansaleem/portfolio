import Container from "../componenets/Container";
import Heading from "../componenets/Heading";
import { Data } from "../Data";

const Experiences = () => {
  return (
    <Container id="experiences" className="flex flex-col justify-center">
      <Heading text="My" colorText="Experiences" />
      <div className="mt-4">
        <div className="p-4"></div>
        <div className="inline-flex">
          <div className="border-l"></div>
          <table className="mt-3 ml-3 ">
            <tbody>
              {Data.experiences.map((item, index) => (
                <tr className="" key={index}>
                  <td className="align-top py-3">
                    <img
                      src="./public/circle.png"
                      width="12px"
                      className="-translate-x-5"
                    />
                  </td>
                  <td className="text-xs min-w-20 w-32 text-lime-500 py-3 align-top">
                    <span className="text-orange-500">From:</span>{" "}
                    {item.startDate} <br />
                    <span className="text-orange-500">To:</span> {item.endDate}
                  </td>
                  <td className="p-3">
                    <div className="uppercase text-xl">{item.title}</div>
                    <span className="text-lime-500">ON</span>{" "}
                    <span className="text-orange-500">{item.org}</span>
                    <br />
                    <p className="text-zinc-500">{item.details}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default Experiences;
