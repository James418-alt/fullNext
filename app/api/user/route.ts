import myUserModel from "@/app/utils/model/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { dbConfig } from "@/app/utils/dbConfig";

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    await dbConfig();
    const { name, email, password } = await req.json();
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const getD = await myUserModel.create({ name, email, password: hashed });
    return NextResponse.json({
      message: "user created!",
      status: 200,
      data: getD,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error Occured",
      status: 400,
    });
  }
};
export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    await dbConfig();
    const getD = await myUserModel.find();
    return NextResponse.json({
      message: "User found",
      status: 200,
      data: getD,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error Occured",
      status: 400,
    });
  }
};
