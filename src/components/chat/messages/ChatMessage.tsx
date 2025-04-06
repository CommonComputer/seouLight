"use client";

import React from "react";

import BotMessage from "./BotMessage";
import UserMessage from "./UserMessage";
import { Sender } from "@/types/MessageType";

interface ChatMessageProps {
  message: any;
  index: number;
}

export default function ChatMessage({ message, index }: ChatMessageProps) {
  if (message.sender === Sender.USER || message.contents?.content.length > 0) {
    if (message.sender !== Sender.USER) {
      return <BotMessage message={message} index={index} />;
    } else {
      return <UserMessage message={message} />;
    }
  }
}
