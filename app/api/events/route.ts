import { connectToDB } from "@utils/database";
import { Event, EventModel } from "@models/event";
import { NextRequest, NextResponse } from "next/server";

// Get all events
const GET = async (req: NextRequest) => {
  const year = req.nextUrl.searchParams.get("year");
  try {
    await connectToDB();

    const events: Event[] = await EventModel.find({
      $expr: { $eq: [{ $year: "$date" }, year] },
    }).sort({ date: 1 });
    return NextResponse.json(events, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
};

// Create event
const POST = async (req: NextRequest) => {
  try {
    await connectToDB();

    const newEventRequest = await req.json();
    const newEvent = new EventModel(newEventRequest);

    await newEvent.save();

    return NextResponse.json(newEvent, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
};

export { GET, POST };
