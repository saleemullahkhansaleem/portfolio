import { Data } from "../Data";
import Container from "../componenets/Container";
import SocialLinks from "../componenets/SocialLinks";
import NavBar from "../componenets/NavBar";

const Home = () => {
  return (
    <Container
      id="home"
      className="md:min-h-screen flex flex-wrap justify-between"
    >
      <div className="w-full sm:w-full md:w-4/12 flex items-center">
        <div className="md:w-full w-48 md:h-auto h-48 bg-black md:bg-transparent rounded overflow-hidden m-auto">
          <img
            id="profile-img"
            src="/profile.png"
            className="w-full max-w-sm border-b m-auto"
          />
        </div>
        {/* <SocialLinks data={Data.contactLinks} className="mt-4" /> */}
        {/* <SocialLinks className="mt-4" iconSize="lg" data={Data.socialLinks} /> */}
      </div>
      <div className="w-full md:w-8/12 flex flex-col justify-center gap-10 p-8">
        <h1 className="text-4xl lg:text-6xl leading-tight">
          Hi From <br />
          <span className="text-lime-500">Saleemullah Khan Saleem,</span>
          <br />
          <span id="element">A React.js Developer</span>
        </h1>
        <p className="slogn text-zinc-500">
          Programming is my Love, when I start coding I don't care about a
          thing,
          <br />
          and Web development is game for me, I play with heart. <br />
          Just simple like that!
        </p>

        {/* <SocialLinks iconSize="2xl" data={Data.contactLinks} className="mt-4" /> */}
        <SocialLinks iconSize="2xl" data={Data.socialLinks} />
      </div>
    </Container>
  );
};

export default Home;
