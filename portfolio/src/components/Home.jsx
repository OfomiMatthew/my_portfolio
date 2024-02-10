import { matt } from "../assets";
import { AppText } from "../constants";

const Home = () => {
  return (
    <div className="mt-10 md:flex justify-evenly items-center">
      <div className="ml-auto">
        <h1 className="text-[40px] font-bold">{AppText.hello}</h1>
        <h1 className="text-[40px] font-bold ">
          {AppText.Iam} <span className="text-purple-400">{AppText.name}</span>
        </h1>
        <h1 className="text-gray-300">{AppText.description}</h1>
        <button className="bg-purple-400 p-2 px-3 rounded-[10px] mt-4 transition-all ease-out text-gray-700 hover:scale-110 hover:text-white">
          Resume
        </button>
      </div>
        
      <img src={matt} alt="matt" className="md:w-[200px] w-[100%] mt-5 rounded-[20px] my-0 mx-auto" />
      
    </div>
  );
};

export default Home;
