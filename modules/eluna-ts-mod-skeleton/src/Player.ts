import {
  RegisterPlayerOnChat,
  RegisterPlayerOnLogin,
} from "@azerothcore/eluna-ts-lib";

const OnPlayerLogin: player_event_on_login = (event, player) => {
  player.SendChatMessageToPlayer(
    ChatMsg.CHAT_MSG_WHISPER,
    Language.LANG_UNIVERSAL,
    "Hello World",
    player,
  );
};

RegisterPlayerOnLogin(OnPlayerLogin);

const OnPlayerChat: player_event_on_chat = (
  event,
  player,
  msg,
): string | boolean => {
  player.SendChatMessageToPlayer(
    ChatMsg.CHAT_MSG_WHISPER,
    Language.LANG_UNIVERSAL,
    `You said: ${msg}`,
    player,
  );

  return true;
};

RegisterPlayerOnChat(OnPlayerChat);
