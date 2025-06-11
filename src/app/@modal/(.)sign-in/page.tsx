"use client";
import React from "react";
import { SignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const router = useRouter();
  const onClose = () => {
    router.back();
  };
  return (
    <div
      className="z-10 absolute h-screen w-screen top-0 overflow-hidden"
      onClick={onClose}
    >
      <div className="flex items-center justify-center mt-2 h-full">
        <div className="z-20" onClick={(e) => e.stopPropagation()}>
          <SignIn />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
