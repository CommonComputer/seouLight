import { BotMessageType } from "@/types/MessageType";
import Image from "next/image";
import MessageRenderer from "./MessageRenderer";

interface BotMessageProps {
  message: BotMessageType;
  index: number;
}

export default function BotMessage({ message, index }: BotMessageProps) {
  return (
    <div className="flex w-full flex-col">
      <div className="flex items-center">
        <Image
          src={
            index % 4 === 0
              ? "/images/agent-profile/Muzie.png"
              : index % 4 === 1
                ? "/images/agent-profile/Actors.png"
                : index % 4 === 2
                  ? "/images/agent-profile/Foodie.png"
                  : "/images/agent-profile/Welly.png"
          }
          alt="Agent profile"
          width={32}
          height={32}
          className="flex-shrink-0 rounded-full"
        />
        <span className="ml-2 font-semibold">
          {index % 4 === 0
            ? "Muzie"
            : index % 4 === 1
              ? "Actors"
              : index % 4 === 2
                ? "Foodie"
                : "Welly"}
        </span>
      </div>
      <div>
        <MessageRenderer message={message.contents} />
      </div>
    </div>
  );
}
