import { connectToDB } from "@utils/database";
import { Cyclist, CyclistModel } from "@models/cyclist";
import { NextRequest, NextResponse } from "next/server";

// Get all events
const GET = async (req: NextRequest) => {
  try {
    await connectToDB();

    const events: Cyclist[] = await CyclistModel.find({});
    return NextResponse.json(events, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
};

const POST = async (req: NextRequest) => {};
