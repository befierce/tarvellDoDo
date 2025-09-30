"use client";

type ButtonBlueProps = {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  children: React.ReactNode;
};

export default function ButtonBlue({
  onClick,
  type = "button",
  className = "",
  children,
}: ButtonBlueProps) {
  // Default blue button styling
  const defaultClasses =
    "bg-blue-600 text-white px-4 py-2 rounded font-bold hover:bg-blue-700 transition w-full";

  return (
    <button
      type={type}
      onClick={onClick}
      className={className || defaultClasses} // Use custom class if provided, otherwise use default
    >
      {children}
    </button>
  );
}
