import { RiRadioButtonFill } from "react-icons/ri";

const EduUI = ({ data = [] }) => {
  return (
    <div className="mt-4">
      <div className="inline-flex px-4">
        <div className="border-l"></div>
        <table>
          <tbody>
            {data?.map((item, index) => (
              <tr className="" key={index}>
                <td className="relative w-6 sm:w-8">
                  <div className="w-4 border-t absolute top-[22px] left-1"></div>
                  <div className="absolute p-1 bg-zinc-900 -left-[11px] top-3 rounded-full">
                    <RiRadioButtonFill className="text-xs" />
                  </div>
                </td>
                <td className="p-3">
                  <p className="text-sm text-lime-500">
                    {item.startDate} {item.endDate ? " - " : ""} {item.endDate}
                  </p>
                  <h3 className="py-1 text-xl uppercase">{item.title}</h3>
                  <p>
                    <span className="text-lg text-lime-500">@</span>{" "}
                    <span className="">{item.org}</span>
                  </p>
                  <p className="text-zinc-500">{item.details}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EduUI;
