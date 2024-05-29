// import Hero from "@/components/shared/Hero"
import Hero from "../../components/shared/Hero"
import {prisma} from "../../../lib/prisma"
import Jobs from "../../components/shared/Jobs";
export const metadata = {
  title:"Jobs"
}

const Home = async () => {
  const jobs = await prisma.jobPosting.findMany({});
  return (
    <>
      <Hero jobs={jobs} />
      <Jobs/>
      {/* <Sponsors />
      <About />
      <Contact /> */}
    </>
  );
};

export default Home;