"use client";

import { useRouter } from "next/navigation";

interface HeroButtonProps {
  children: React.ReactNode;
  href?: string;
}

const HeroButton: React.FC<HeroButtonProps> = ({ children, href }) => {
  const router = useRouter();
  const handleOnClick = () => {
    if (href) {
      router.push(href);
    }
  };

  return (
    <button
      className="mt-7 px-5 py-3 border border-black bg-blue-500 text-gray-200 font-semibold rounded-md hover:bg-blue-400"
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};

export default HeroButton;
