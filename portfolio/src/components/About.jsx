import { AppText, aboutSection } from "../constants";
import { laptop } from "../assets";

const About = () => {
  return (
    <div className="text-black text-center font-semibold relative">
      <img
        src={laptop}
        alt=""
        className="absolute top-[-40px] left-[-10px] w-[100px] rounded-[10px]"
      />
      <div className="h-[250px] bg-purple-300 mt-10 rounded-lg">
        <h2 className="text-[45px]">
          {AppText.About} <span className="text-white">{AppText.Me}</span>
        </h2>
        <h2 className="text-justify p-3 md:text-center">
          {AppText.description}
        </h2>
      </div>

      <div className="md:mt-[-30px] mt-10 md:flex md:justify-center md:items-center md:gap-5">
        {aboutSection.map((item) => (
          <div key={item.id} className="pb-7 text-white">
          
          
            <img src={item.image} className="md:w-[230px] rounded-md" />
            
            <h2 className="font-bold mt-2">{item.title}</h2>
            <h2 className="text-gray-400 text-[12px]">{item.desc}</h2>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
