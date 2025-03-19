interface TitleContainerProps {
  title: string;
  children: React.ReactNode;
}

export const TitleContainer = ({ title, children }: TitleContainerProps) => {
  return (
    <div className="p-20 h-full w-screen max-md:p-8 ">
      <h3 className="text-lg font-title font-semibold mb-8">{title}</h3>
      {children}
    </div>
  );
};
