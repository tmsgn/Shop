import React from "react";
import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div className=" flex items-center justify-center  px-4">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
