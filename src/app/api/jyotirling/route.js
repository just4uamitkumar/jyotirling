import Jyotirling from "../../../lib/Model/jyotirling";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

export async function GET() {
  try {
    await mongoose.connect(MONGODB_URL);
    const data = await Jyotirling.find();
    return NextResponse.json({ data });
  } catch (e) {
    return NextResponse.json(
      { message: "Server error, please try again!" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await mongoose.connect(MONGODB_URL);
    const body = await req.json();
    await Jyotirling.create(body);

    return NextResponse.json(
      {
        message: "Message sent successfully!",
      },
      {
        status: 201,
      }
    );
  } catch (e) {
    return NextResponse.json(
      { message: "Server error, please try again!" },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    await mongoose.connect(MONGODB_URL);

    const { _id } = req._id;

    const temple = await Jyotirling.findById(_id);

    console.log('temple', temple)

    await temple.remove();
  } catch (e) {
    return NextResponse.json(
      { message: "Server error, please try again!" },
      { status: 500 }
    );
  }
}
