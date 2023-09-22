import { connectToDb } from "@utils/database";
import User from "@models/user";

export const POST = async (req) => {
  try {
    await connectToDb();

    await User.create({
      email: "saipulanwar@gmail.com",
      username: "saipulanwar",
      image: "saipulanwar",
    });

    return new Response("Success signin", { status: 201 });
  } catch (error) {
    return new Response("failed to signin", { status: 500 });
  }
};
