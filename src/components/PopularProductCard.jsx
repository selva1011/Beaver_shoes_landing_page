import { star } from "../assets/icons"

const PopularProductCard = ({ imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img
            src={imgURL} alt={name}
            className="h-[280px] w-[280px] bg-card-1 rounded-3xl"
        />
        <div className="flex mt-8 justify-start gap-2.5">
            <img src={star} alt="star" width={24} height={24}
            />
            <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
        <p className="text-coral-red font-montserrat font-semibold text-lg leading-normal mt-2">{price}</p>
    </div>
  )
}

export default PopularProductCard