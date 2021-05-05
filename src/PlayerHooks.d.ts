declare type OnLogin = (
  event: PlayerEvents.PLAYER_EVENT_ON_LOGIN,
  player: Player,
) => void;

declare type OnLogout = (
  event: PlayerEvents.PLAYER_EVENT_ON_LOGOUT,
  player: Player,
) => void;

declare interface PlayerHooks {
  OnLogin?: OnLogin;
  OnLogout?: OnLogout;
}

/**
 * @noSelf
 */
declare function RegisterPlayerEvent(
  event: number,
  hook: unknown,
): void;
