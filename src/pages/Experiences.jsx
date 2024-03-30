import Container from "../componenets/Container";
import Heading from "../componenets/Heading";
import { Data } from "../Data";
import EduUI from "../componenets/EduUI";

const Experiences = () => {
  return (
    <Container id="experiences" className="flex flex-col justify-center">
      <Heading text="My" colorText="Experiences" />
      <EduUI data={Data.experiences} />
    </Container>
  );
};

export default Experiences;
