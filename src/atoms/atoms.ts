import { atom } from 'jotai';
import { MessageType } from '@/types/messageType';

type isOpenCardType = {
  isOpenCard: boolean,
  openCardId: number,
};

export const messagesAtom = atom<MessageType[]>([]);
export const isOpenCardAtom = atom<isOpenCardType>({
  isOpenCard: false,
  openCardId: 0,
});
export const isScrollInvalidAtom = atom(false);
