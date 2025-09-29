    "use client";
    import Button from "./ButtonBlue";
    import "swiper/css";

    interface CardProps {
    type?: string;
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
            return "flex-col justify-between items-center bg-[#0092E5] p-4 mt-16 font-bold rounded-xl shadow-md ";
        case "explore":
            return "flex justify-between items-center bg-yellow-300 pl-4 my-16 font-bold rounded-xl shadow-md ";
        }
    };

    return (
        <div className={getCardClasses()}>
        {description && (
            <p
            className={
                type === "explore" ? "text-gray-800 flex-1" : "text-amber-50"
            }
            >
            {description}
            </p>
        )}
        {buttonText && (
            <Button
            onClick={() => {
                console.log("Sign In button clicked");
            }}
            >
            {"Sign In"}
            </Button>
        )}
        {imageUrl && (
            <img src={imageUrl} alt="Card Image" className="w-24 h-24 o rounded-r-xl" />
        )}
        </div>
    );
    };

    export default Card;
