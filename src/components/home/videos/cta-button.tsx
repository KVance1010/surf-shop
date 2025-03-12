
interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-10 py-4 mx-auto my-0 text-md font-extrabold text-center text-secondary bg-contrast rounded-lg cursor-pointer w-fit"
    >
      {children}
    </button>
  );
};
