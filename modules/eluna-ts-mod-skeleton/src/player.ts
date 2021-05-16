import {
  RegisterPlayerOnChat,
  RegisterPlayerOnLogin,
} from "@azerothcore/eluna-ts-lib";

/**
 * Example with arrow function
 *
 * This is just an Hello World
 */
export const OnPlayerLogin: player_event_on_login = (event, player) => {
  player.SendChatMessageToPlayer(
    ChatMsg.CHAT_MSG_WHISPER,
    Language.LANG_UNIVERSAL,
    "Hello World",
    player,
  );
};

RegisterPlayerOnLogin(OnPlayerLogin);

/**
 *
 * This is an example of how to use TypeScript classes
 * and implement hook methods inside it.
 *
 * A class can be useful to implement more complex
 * scripts that can be instantiated or extended
 *
 */
export class PlayerChat {
  previousMessage: string;

  /**
   *
   * @param firstMessage The first message to display
   */
  constructor(firstMessage: string) {
    this.previousMessage = firstMessage;
  }

  OnPlayerChat: player_event_on_chat = (
    event,
    player,
    msg,
  ): string | boolean => {
    player.SendChatMessageToPlayer(
      ChatMsg.CHAT_MSG_WHISPER,
      Language.LANG_UNIVERSAL,
      `Before you said ${this.previousMessage}, and now you said: ${msg}!`,
      player,
    );

    this.previousMessage = msg;

    return true;
  };
}

const playerChat = new PlayerChat("First Message");

RegisterPlayerOnChat(playerChat.OnPlayerChat);
