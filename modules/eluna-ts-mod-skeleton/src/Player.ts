import {
  RegisterPlayerOnChat,
  RegisterPlayerOnLogin,
} from "@azerothcore/eluna-ts-lib";

/**
 * Example with arrow function
 */

const OnPlayerLogin: player_event_on_login = (event, player) => {
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
 * Example with class
 *
 */

class PlayerChat {
  previousMessage: string;

  constructor(prevMessage: string) {
    this.previousMessage = prevMessage;
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
