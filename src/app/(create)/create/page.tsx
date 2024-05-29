import CreateForm from "../components/CreateForm";
import { EdgeStoreProvider } from '../../../../lib/edgestore';

const page = () => {
  return (
    <div className="max-w-[1450px] w-[90%] mx-auto p-2">
      <div className="w-full mt-5 text-center">
        <h1 className="md:text-6xl text-4xl font-extrabold uppercase mb-1">
          Post a{" "}
          <span className="text-purple-600">job</span>
        </h1>
        <span className="w-full text-center">
          Currently 100,000 users are actively looking for a
          job
        </span>
      </div>
      <EdgeStoreProvider><CreateForm /></EdgeStoreProvider>
      
    </div>
  );
};

export default page;