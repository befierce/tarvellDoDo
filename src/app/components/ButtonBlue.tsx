"use client"; 

type ButtonBlueProps = {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
};

export default function ButtonBlue({
  onClick,
  type = "button",
  children,
}: ButtonBlueProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-amber-400 text-white px-4 py-2 mt-4 font-bold rounded hover:bg-amber-500 transition"
    >
      {children}
    </button>
  );
}