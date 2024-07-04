interface HeroButtonProps {
  children: React.ReactNode;
}

const HeroButton: React.FC<HeroButtonProps> = ({ children }) => {
  return (
    <button className="mt-7 px-5 py-3 border border-black bg-blue-500 text-gray-200 font-semibold rounded-md hover:bg-blue-400">
      {children}
    </button>
  );
};

export default HeroButton;
