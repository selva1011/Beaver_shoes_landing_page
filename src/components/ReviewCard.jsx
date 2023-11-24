import { star } from "../assets/icons"


const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img 
        src={imgURL}
        alt="customer" 
        className="rounded-full object-cover w-[120px] h-[120px]"
        />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="mt-3 flex justify-center gap-2.5 items-center">
        <img 
          src={star} 
          alt="star"
          height={24}
          width={24} 
          className="object-contain m-0"/>
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
    </div>
  )
}

export default ReviewCard