"use client";
import Link from "next/link";
import React from "react";
import { BsGoogle } from "react-icons/bs";
import { GrGithub } from "react-icons/gr";

const page = () => {
  return (
    <form className="flex justify-center items-center w-full h-[100vh] bg-red-50">
      <div className="p-5 border flex flex-col gap-6 ">
        <div className="flex flex-col gap-2">
          <label className="font-sans font-semibold text-[12px]">Email</label>
          <input className="outline-none" type="text" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-sans font-semibold text-[12px]">
            Password
          </label>
          <input className="outline-none" type="text" />
          <p className="text-[10px]">
            Don't have an account?
            <Link href="/signup" className="pl-1 underline">
              Sign Up here
            </Link>
          </p>
        </div>

        <button className="w-full p-1 bg-red-200 font-sans text-[14px] font-semibold rounded-sm">
          Sign In
        </button>

        <div className="mt-[-12px] flex flex-col gap-4">
          <div className="flex justify-center">
            <p className="text-gray-400 text-[10px]">Socials</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center gap-2 text-[13px] font-sans font-semibold cursor-pointer">
              <div>
                <BsGoogle />
              </div>
              <div>Google</div>
            </div>
            <div className="flex justify-between items-center gap-2 text-[13px] font-sans font-semibold cursor-pointer">
              <div>
                <GrGithub />
              </div>
              <div>GitHub</div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default page;
