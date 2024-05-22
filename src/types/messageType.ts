import { MessageMentorType } from "./mentorType";

export type MessageType = {
  id: number,
  memberName: string | null,
  body: string,
  cardDesign: number,
  mentorId: number,
};

export type MessageShowType = {
  id: number,
  memberName: string | null,
  body: string,
  cardDesign: number,
  mentor: MessageMentorType,
};
