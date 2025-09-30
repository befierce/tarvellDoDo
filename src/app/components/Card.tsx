"use client";
import Button from "./ButtonBlue";
import "swiper/css";

interface CardProps {
  type?: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  imageUrl?: string;
  onButtonClick?: () => void;
  children?: React.ReactNode;
}

const Card = (props: CardProps) => {
  const { description, buttonText, imageUrl, onButtonClick, children, type } =
    props;
  const getCardClasses = () => {
    switch (props.type) {
      case "signIn":
        return "flex flex-col-reverse justify-between items-center bg-[#0092E5] p-4 mt-16 font-bold text-white rounded-xl shadow-md ";
      case "explore":
        return "flex justify-between items-center bg-yellow-300 my-10 font-bold text-gray-800 flex-1 rounded-xl shadow-md ";
      case "offer":
        return "flex flex-col-reverse justify-between items-center bg-yellow-300 font-bold rounded-xl shadow-md text-grey-800";
    }
  };
  const getImageClasses = () => {
    switch (props.type) {
      case "explore":
        return "w-24 h-24 o rounded-r-xl";
      case "offer":
        return "w-full h-full object-cover rounded-t-xl ";
    }
  };

  const getButtonClasses = () => {
    switch (props.type) {
      case "signIn":
        return "bg-amber-400 text-white px-4 py-2 mt-4 font-bold rounded hover:bg-amber-500 transition";
      case "offer":
        return "bg-black text-white px-4 py-2 mt-4 rounded-3xl font-bold rounded hover:bg-amber-500 transition";
    }
  };

  return (
    <div className={getCardClasses()}>
      {buttonText && (
        <Button
          className={getButtonClasses()}
          onClick={() => {
            console.log(buttonText);
          }}
        >
          {buttonText}
        </Button>
      )}
      {description && <p className="p-4">{description}</p>}
      {imageUrl && (
        <img src={imageUrl} alt="Card Image" className={getImageClasses()} />
      )}
    </div>
  );
};

export default Card;
