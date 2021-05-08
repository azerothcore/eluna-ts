export function RegisterPlayerOnLogin(listener: OnLogin) {
  RegisterPlayerEvent(
    PlayerEvents.PLAYER_EVENT_ON_LOGIN,
    /** @noSelf **/
    function (event: number, player: Player) {
      return listener(event, player);
    },
  );
}

export function RegisterPlayerOnLogout(listener: OnLogin) {
  RegisterPlayerEvent(
    PlayerEvents.PLAYER_EVENT_ON_LOGOUT,
    /** @noSelf **/
    function (event: number, player: Player) {
      return listener(event, player);
    },
  );
}

export function RegisterPlayerOnChat(listener: OnChat) {
  RegisterPlayerEvent(
    PlayerEvents.PLAYER_EVENT_ON_CHAT,
    /** @noSelf **/
    function (
      event: number,
      player: Player,
      msg: string,
      type: number,
      lang: number,
    ) {
      return listener(event, player, msg, type, lang);
    },
  );
}
