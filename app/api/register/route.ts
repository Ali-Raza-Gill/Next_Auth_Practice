// import { NextResponse } from "next/server";
// import { connectDB } from "../../../lib/mongodb";
// import User from "@/models/user";

import connectDb from "@/lib/mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs";

import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: any) {
//   try {
//     const { name, email, password } = await req.json();
//     const hasedPassword = await bcrypt.hash(password, 12);

//     await connectDB();
//     await User.create({ name, email, password: hasedPassword });

//     return NextResponse.json(
//       { message: "User Registerd Successfully" },
//       { status: 201 }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Error occured while user registering account" },
//       { status: 500 }
//     );
//   }
// }

// import { NextRequest, NextResponse } from "next/server";
// import { connectDB } from "../../../lib/mongodb";
// import User from "@/models/user";
// import bcrypt from "bcryptjs";

// export async function POST(req: NextRequest) {
//   try {
//     const { name, email, password } = await req.json();
//     const hashedPassword = await bcrypt.hash(password, 12);

//     await connectDB();
//     await User.create({ name, email, password: hashedPassword });

//     return NextResponse.json(
//       { message: "sucessfully registered" },
//       { status: 201 }
//     );
//   } catch (error) {
//     NextResponse.json({ error: "error" });
//   }
// }

export const POST = async (req: NextRequest) => {
  try {
    const { name, email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 8);
    await connectDb();
    await User.create({ name, email, password: hashedPassword });
    return NextResponse.json(
      { message: "sucessfully registered" },
      { status: 201 }
    );
  } catch (error) {
    NextResponse.json({ error: "error" });
  }
};
