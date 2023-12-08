import { connectToDB } from "@utils/database";
import { Event, EventModel } from "@models/event";
import { NextRequest, NextResponse } from "next/server";

export interface EventIdParams {
  params: {
    eventId: string;
  };
}

// Get all events
const GET = async (_req: NextRequest, { params }: EventIdParams) => {
  try {
    const eventId = params?.eventId;

    await connectToDB();

    const event: Event | null = await EventModel.findById<Event>(
      eventId
    ).populate("races");

    return NextResponse.json(event, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
};

export { GET };
