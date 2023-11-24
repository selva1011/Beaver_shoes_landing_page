import { shoe8 } from "../assets/images";
import Button from "../components/Button";
const SuperQuaility = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-container gap-10 w-full max-lg:flex-col"
    >
      <div className="flex flex-1 flex-col">
        <h3 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          we provide you <span className="text-coral-red">Super</span>
          <br />
          <span className="text-coral-red">Quality</span> Shoes
        </h3>
        <p className="mt-4 lg:max-w-lg info-text">
        Stride to triumph with Beaver, where sports and style converge seamlessly. Our dynamic range of athletic footwear is meticulously crafted for the modern athlete, blending unparalleled comfort with trendsetting design. From the track to the street, unleash your potential with Beaver sports shoes – where performance meets fashion, and every step propels you to victory!
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <a href="#CustomerReviews"><Button label="View Customer Reviews" /></a>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} className="bg-hero-1 rounded-3xl"/>
      </div>
    </section>
  );
};

export default SuperQuaility;
