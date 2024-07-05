import AuthForm from "@/app/(site)/join/_components/AuthForm";

const Join = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-semibold text-center">
        Join <span className="text-blue-500">Hire</span>
        <span className="text-blue-800">You</span>
      </h1>
      <AuthForm />
    </div>
  );
};

export default Join;
