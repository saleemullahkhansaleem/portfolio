import Container from "../componenets/Container";
import Heading from "../componenets/Heading";
import { Data } from "../Data";

const Educations = () => {
  return (
    <Container id="educations" className="flex flex-col justify-center">
      <Heading text="My" colorText="Educations" />
      <div className="">
        <div className="p-4"></div>
        <div className="inline-flex">
          <div className="border-l"></div>
          <table className="mt-3 ml-3">
            <tbody>
              {Data.education.map((item, index) => (
                <tr className="" key={index}>
                  <td className="align-top py-3 min-w-4">
                    <img
                      src="./circle.png"
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
        <h2 className="text-4xl text-lime-500 py-8 mx-auto">Awards</h2>
        <div className="inline-flex">
          <div className="border-l"></div>
          <table className="mt-3 ml-3">
            <tbody>
              {Data.awards.map((item, index) => (
                <tr className="" key={index}>
                  <td className="align-top py-3 min-w-4">
                    <img
                      src="./circle.png"
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
        <h2 className="text-4xl text-lime-500 py-8 mx-auto">Certificates</h2>
        <div className="inline-flex">
          <div className="border-l"></div>
          <table className="mt-3 ml-3">
            <tbody>
              {Data.certificates.map((item, index) => (
                <tr className="" key={index}>
                  <td className="align-top py-3 min-w-4">
                    <img
                      src="./circle.png"
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

export default Educations;
