import { connectToDB } from "@utils/database";
import { Event, EventModel } from "@models/event";
import { NextRequest, NextResponse } from "next/server";
import { RaceModel } from "@models/race";
import { EventIdParams } from "../route";

const GET = async (req: NextRequest, { params }: EventIdParams) => {
  const races = [{ name: "La etapa La Paz" }];

  return new Response(JSON.stringify(races));
};

// Create race
const POST = async (req: NextRequest, { params }: EventIdParams) => {
  try {
    const eventId = params?.eventId;

    await connectToDB();

    const newRaceRequest = await req.json();
    const newRace = new RaceModel(newRaceRequest);
    await newRace.save();

    await EventModel.findByIdAndUpdate(
      eventId,
      {
        $push: { races: newRace._id },
      },
      { new: true, upsert: true }
    ).exec();

    return NextResponse.json(newRace, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
};

export { GET, POST };
