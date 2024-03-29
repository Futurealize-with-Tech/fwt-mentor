import { mentorKey } from "@/lib/key/key";

export const getMessage = async () => {
  const mentorId = localStorage.getItem(mentorKey);
  try {
    const res = await fetch(`https://api.futurealize-with.tech/api/v1/mentor/${mentorId}`);
    return res.json();
  } catch (error) {
    return error;
  }
};
