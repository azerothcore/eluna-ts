declare type OnLogin = (
  event: PlayerEvents.PLAYER_EVENT_ON_LOGIN,
  player: Player,
) => void;

declare type OnLogout = (
  event: PlayerEvents.PLAYER_EVENT_ON_LOGOUT,
  player: Player,
) => void;

declare type OnChat = (
  event: PlayerEvents.PLAYER_EVENT_ON_LOGOUT,
  player: Player,
  msg: string,
  type: number,
  lang: number,
) => void;

declare interface PlayerHooks {
  OnLogin?: OnLogin;
  OnLogout?: OnLogout;
  OnChat?: OnChat;
}

/**
 * @noSelf
 */
declare function RegisterPlayerEvent(
  event: number,
  hook: unknown,
): void;
