"use client";

import { useContext, useEffect, useState } from "react";
import { useAtom } from "jotai";
import { CurrentMentorContext } from "@/middleware/CurrentMentorProvider";
import MentorBox from "./MentorBox";
import styles from "./mentor.module.scss";
import { getMessage } from "@/utils/getMessages";
import { toast } from "react-toastify";
import LoadingAnimation from "../ui/animation/LoadingAnimation";
import MessageIndexBox from "../message/MessageIndexBox";
import { isOpenCardAtom, messagesAtom } from "@/atoms/atoms";
import MessageCardIndex from "../message/MessageCardIndex";

export default function MentorDetail() {
  const [messages, setMessages] = useAtom(messagesAtom);
  const [isCardOpen] = useAtom(isOpenCardAtom);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const currentMentor = useContext(CurrentMentorContext);

  useEffect(() => {
    const fetchMessages = async () => {
      setError(false);
      await getMessage()
        .then((data) => {
          setMessages(data.messages);
          setLoading(false);
        })
        .catch((e) => {
          toast.error("通信に失敗しました");
          setLoading(false);
          setError(true);
        });
    };

    fetchMessages();
  }, []);

  if (!currentMentor) {
    return <></>;
  }

  return (
    <>
      <div className={styles["detail-container"]}>
        <MentorBox mentor={currentMentor} />
        {messages && !loading && !error && (
          <div className={styles["message-index-container"]}>
            {messages.map((message) => (
              <MessageIndexBox message={message} key={message.id} />
            ))}
          </div>
        )}
        {loading && (
          <div className={styles["loading-container"]}>
            <LoadingAnimation />
          </div>
        )}
      </div>
      {isCardOpen.isOpenCard && <MessageCardIndex />}
    </>
  );
}
