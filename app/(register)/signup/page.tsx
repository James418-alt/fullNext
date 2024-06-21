import Link from "next/link";
import React from "react";
import { BsGoogle } from "react-icons/bs";
import { GrGithub } from "react-icons/gr";

const page = () => {
  const mainAction = async (formData: FormData) => {
    "use server";
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    const url = "https://full-next-wt9o.vercel.app/api/user";
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
  };

  return (
    <form
      action={mainAction}
      className="flex justify-center items-center w-full h-[100vh] bg-red-50"
    >
      <div className="p-5 border flex flex-col gap-6 ">
        <div className="flex flex-col gap-2">
          <label className="font-sans font-semibold text-[12px]">Name</label>
          <input className=" outline-none" name="name" type="text" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-sans font-semibold text-[12px]">Email</label>
          <input className="outline-none" name="email" type="text" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-sans font-semibold text-[12px]">
            Password
          </label>
          <input className="outline-none" name="password" type="text" />
          <p className="text-[10px]">
            Already have an account?
            <Link href="/signin" className="pl-1 underline">
              Sign in here
            </Link>
          </p>
        </div>

        <button
          type="submit"
          className="w-full p-1 bg-red-200 font-sans text-[14px] font-semibold rounded-sm"
        >
          Register
        </button>

        <div className="mt-[-12px] flex flex-col gap-4">
          <div className="flex justify-center">
            <p className="text-gray-400 text-[10px]">Socials</p>
          </div>

          <div className="flex bg-red-600 p-1 rounded-sm items-center gap-2 text-[13px] font-sans font-semibold cursor-pointer justify-center text-white">
            <div>
              <BsGoogle />
            </div>
            <div>Google</div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default page;
