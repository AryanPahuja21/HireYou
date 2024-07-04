import HeroButton from "./HeroButton";

const HeroSection = () => {
  return (
    <main className="h-full flex flex-col items-center justify-center">
      <h3 className="text-blue-400 text-3xl font-extrabold text-center">
        Your Ultimate Platform for Fast AI Interviews and Comprehensive
        Assessments
      </h3>
      <p className="mt-3 font-semibold text-center">
        Join HireYou and experience the future of hiring
      </p>
      <HeroButton>Get Started</HeroButton>
    </main>
  );
};

export default HeroSection;
