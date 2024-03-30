import Container from "../componenets/Container";
import EduUI from "../componenets/EduUI";
import Heading from "../componenets/Heading";
import { Data } from "../Data";

const Educations = () => {
  return (
    <Container id="educations" className="flex flex-col justify-center">
      <Heading text="My" colorText="Educations" />
      <EduUI data={Data.education} />
      <h2 className="text-4xl text-lime-500 py-8">Awards</h2>
      <EduUI data={Data.awards} />
      <h2 className="text-4xl text-lime-500 py-8">Certificates</h2>
      <EduUI data={Data.certificates} />
    </Container>
  );
};

export default Educations;
