import Temple from "../../../lib/Model/temple";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

export async function GET() {
  try {
    await mongoose.connect(MONGODB_URL);
    const data = await Temple.find();
    return NextResponse.json({ result: data });
  } catch (e) {
    return NextResponse.json(
      { message: "Server error, please try again!" },
      { status: 500 }
    );
  }
}

// export async function POST(req, res) {
//   try {
//     const body = await req.json();
//     await dbConnect();

//     await Temple.create(body);

//     return NextResponse.json(
//       {
//         message: "Message sent successfully!",
//       },
//       {
//         status: 200,
//       }
//     );
//   } catch (e) {
//     return NextResponse.json(
//       { message: "Server error, please try again!" },
//       { status: 500 }
//     );
//   }
// }
