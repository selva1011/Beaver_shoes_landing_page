import { offer } from "../assets/images"
import Button from "../components/Button"
import { arrowUp } from "../assets/icons"
const SpecialOffer = () => {
  
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img 
          src={offer} 
          alt="specialofferimg"
          height={687}
          width={773}
          className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col">
        <h3 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offers
        </h3>
        <p className="mt-4 lg:max-w-lg info-text">
        Kick off greatness with Beaver Sports Shoes! 🚀 Unleash your potential with our exclusive offer: Buy any pair of Beaver kicks and receive a second pair at 50% off. Elevate your game, double the style. 
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
        Don't miss out – this offer is your ticket to stepping into a world where performance meets unbeatable value. Gear up for success with Beaver Sports Shoes today. Play hard, step harder with Beaver Sports Shoes!
        </p>
        <div className="mt-11">
          <a href="#products"><Button label="View Products" iconURL={arrowUp}/></a>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer