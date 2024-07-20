"use client";

import Button from "@/app/_components/Button";
import Input from "@/app/_components/inputs/Input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

type variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [variant, setVariant] = useState<variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const toggleVariant = () => {
    setVariant((prev) => (prev === "LOGIN" ? "REGISTER" : "LOGIN"));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);
    console.log(data);
    setIsLoading(false);
  };

  return (
    <main className="mt-4 sm:mx-auto sm:w-full sm:max-w-md shadow-lg border border-gray-200">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input id="name" label="Name" register={register} errors={errors} />
          )}
          <Input
            id="email"
            label="Email address"
            type="email"
            register={register}
            errors={errors}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            register={register}
            errors={errors}
          />
          <div>
            <Button
              onClick={() => router.push("/dashboard")}
              disabled={isLoading}
              fullWidth
              type="submit"
            >
              {variant === "LOGIN" ? "Sign in" : "Register"}
            </Button>
          </div>
        </form>
        <div className="mt-6">
          <div
            className="
          flex
          gap-2
          justify-center
          text-sm
          mt-6
          px-2
          text-gray-500
          "
          >
            <span>
              {variant === "LOGIN"
                ? "Don't have an account?"
                : "Already have an account?"}
            </span>
            <button onClick={toggleVariant} className="text-gray-700 underline">
              {variant === "LOGIN" ? "Create an account" : "Sign in"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthForm;
