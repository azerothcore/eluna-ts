export function RegisterServerOnAddonMessage(
  hook: addon_event_on_message,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterServerEvent(
    ServerEvents.ADDON_EVENT_ON_MESSAGE,
    (
      event: ServerEvents.ADDON_EVENT_ON_MESSAGE,
      sender: Player,
      type: number,
      prefix: string,
      msg: string,
      target: Player | Guild | Group | number,
    ) => hook(event, sender, type, prefix, msg, target),
    shots,
  );
}

export function RegisterServerOnGameEventStart(
  hook: game_event_start,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterServerEvent(
    ServerEvents.GAME_EVENT_START,
    (event: ServerEvents.GAME_EVENT_START, eventid: number) =>
      hook(event, eventid),
    shots,
  );
}

export function RegisterServerOnGameEventStop(
  hook: game_event_stop,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterServerEvent(
    ServerEvents.GAME_EVENT_STOP,
    (event: ServerEvents.GAME_EVENT_STOP, eventid: number) =>
      hook(event, eventid),
    shots,
  );
}

export function RegisterServerOnLuaStateClose(
  hook: eluna_event_on_lua_state_close,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterServerEvent(
    ServerEvents.ELUNA_EVENT_ON_LUA_STATE_CLOSE,
    (event: ServerEvents.ELUNA_EVENT_ON_LUA_STATE_CLOSE) => hook(event),
    shots,
  );
}

export function RegisterServerOnLuaStateOpen(
  hook: eluna_event_on_lua_state_open,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterServerEvent(
    ServerEvents.ELUNA_EVENT_ON_LUA_STATE_OPEN,
    (event: ServerEvents.ELUNA_EVENT_ON_LUA_STATE_OPEN) => hook(event),
    shots,
  );
}

export function RegisterServerOnAreaTrigger(
  hook: trigger_event_on_trigger,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterServerEvent(
    ServerEvents.TRIGGER_EVENT_ON_TRIGGER,
    (
      event: ServerEvents.TRIGGER_EVENT_ON_TRIGGER,
      pPlayer: Player,
      pTrigger: number,
    ) => hook(event, pPlayer, pTrigger),
    shots,
  );
}

export function RegisterServerOnWheatherChange(
  hook: weather_event_on_change,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterServerEvent(
    ServerEvents.WEATHER_EVENT_ON_CHANGE,
    (
      event: ServerEvents.WEATHER_EVENT_ON_CHANGE,
      zone: number,
      state: WeatherState,
      grade: number,
    ) => hook(event, zone, state, grade),
    shots,
  );
}

export function RegisterServerOnAuctionAdd(
  hook: auction_event_on_add,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterServerEvent(
    ServerEvents.AUCTION_EVENT_ON_ADD,
    (
      event: ServerEvents.AUCTION_EVENT_ON_ADD,
      auctionId: number,
      owner: Player,
      item: Item,
      expireTime: number,
      buyout: number,
      startBid: number,
      currentBid: number,
      bidderGUIDLow: number,
    ) =>
      hook(
        event,
        auctionId,
        owner,
        item,
        expireTime,
        buyout,
        startBid,
        currentBid,
        bidderGUIDLow,
      ),
    shots,
  );
}

export function RegisterServerOnAuctionRemove(
  hook: auction_event_on_remove,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterServerEvent(
    ServerEvents.AUCTION_EVENT_ON_REMOVE,
    (
      event: ServerEvents.AUCTION_EVENT_ON_REMOVE,
      auctionId: number,
      owner: Player,
      item: Item,
      expireTime: number,
      buyout: number,
      startBid: number,
      currentBid: number,
      bidderGUIDLow: number,
    ) =>
      hook(
        event,
        auctionId,
        owner,
        item,
        expireTime,
        buyout,
        startBid,
        currentBid,
        bidderGUIDLow,
      ),
    shots,
  );
}

export function RegisterServerOnAuctionSuccessful(
  hook: auction_event_on_successful,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterServerEvent(
    ServerEvents.AUCTION_EVENT_ON_SUCCESSFUL,
    (
      event: ServerEvents.AUCTION_EVENT_ON_SUCCESSFUL,
      auctionId: number,
      owner: Player,
      item: Item,
      expireTime: number,
      buyout: number,
      startBid: number,
      currentBid: number,
      bidderGUIDLow: number,
    ) =>
      hook(
        event,
        auctionId,
        owner,
        item,
        expireTime,
        buyout,
        startBid,
        currentBid,
        bidderGUIDLow,
      ),
    shots,
  );
}

export function RegisterServerOnAuctionExpire(
  hook: auction_event_on_expire,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterServerEvent(
    ServerEvents.AUCTION_EVENT_ON_EXPIRE,
    (
      event: ServerEvents.AUCTION_EVENT_ON_EXPIRE,
      auctionId: number,
      owner: Player,
      item: Item,
      expireTime: number,
      buyout: number,
      startBid: number,
      currentBid: number,
      bidderGUIDLow: number,
    ) =>
      hook(
        event,
        auctionId,
        owner,
        item,
        expireTime,
        buyout,
        startBid,
        currentBid,
        bidderGUIDLow,
      ),
    shots,
  );
}

export function RegisterServerOnOpenStateChange(
  hook: world_event_on_open_state_change,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterServerEvent(
    ServerEvents.WORLD_EVENT_ON_OPEN_STATE_CHANGE,
    (event: ServerEvents.WORLD_EVENT_ON_OPEN_STATE_CHANGE, open: boolean) =>
      hook(event, open),
    shots,
  );
}

export function RegisterServerOnShutdownInitiate(
  hook: world_event_on_shutdown_init,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterServerEvent(
    ServerEvents.WORLD_EVENT_ON_SHUTDOWN_INIT,
    (
      event: ServerEvents.WORLD_EVENT_ON_SHUTDOWN_INIT,
      code: ShutdownExitCode,
      mask: ShutdownMask,
    ) => hook(event, code, mask),
    shots,
  );
}

export function RegisterServerOnShutdownCancel(
  hook: world_event_on_shutdown_cancel,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterServerEvent(
    ServerEvents.WORLD_EVENT_ON_SHUTDOWN_CANCEL,
    (event: ServerEvents.WORLD_EVENT_ON_SHUTDOWN_CANCEL) => hook(event),
    shots,
  );
}

export function RegisterServerOnStartup(
  hook: world_event_on_startup,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterServerEvent(
    ServerEvents.WORLD_EVENT_ON_STARTUP,
    (event: ServerEvents.WORLD_EVENT_ON_STARTUP) => hook(event),
    shots,
  );
}

export function RegisterServerOnShutdown(
  hook: world_event_on_shutdown,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterServerEvent(
    ServerEvents.WORLD_EVENT_ON_SHUTDOWN,
    (event: ServerEvents.WORLD_EVENT_ON_SHUTDOWN) => hook(event),
    shots,
  );
}

export function RegisterServerOnMapCreate(
  hook: map_event_on_create,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterServerEvent(
    ServerEvents.MAP_EVENT_ON_CREATE,
    (event: ServerEvents.MAP_EVENT_ON_CREATE, map: EMap) => hook(event, map),
    shots,
  );
}

export function RegisterServerOnMapDestroy(
  hook: map_event_on_destroy,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterServerEvent(
    ServerEvents.MAP_EVENT_ON_DESTROY,
    (event: ServerEvents.MAP_EVENT_ON_DESTROY, map: EMap) => hook(event, map),
    shots,
  );
}

export function RegisterServerOnMapPlayerEnter(
  hook: map_event_on_player_enter,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterServerEvent(
    ServerEvents.MAP_EVENT_ON_PLAYER_ENTER,
    (
      event: ServerEvents.MAP_EVENT_ON_PLAYER_ENTER,
      map: EMap,
      player: Player,
    ) => hook(event, map, player),
    shots,
  );
}

export function RegisterServerOnMapPlayerLeave(
  hook: map_event_on_player_leave,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterServerEvent(
    ServerEvents.MAP_EVENT_ON_PLAYER_LEAVE,
    (
      event: ServerEvents.MAP_EVENT_ON_PLAYER_LEAVE,
      map: EMap,
      player: Player,
    ) => hook(event, map, player),
    shots,
  );
}

export function RegisterServerOnMapUpdate(
  hook: map_event_on_update,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterServerEvent(
    ServerEvents.MAP_EVENT_ON_UPDATE,
    (event: ServerEvents.MAP_EVENT_ON_UPDATE, map: EMap, diff: number) =>
      hook(event, map, diff),
    shots,
  );
}

export function RegisterServerOnDeleteGameObject(
  hook: world_event_on_delete_gameobject,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterServerEvent(
    ServerEvents.WORLD_EVENT_ON_DELETE_GAMEOBJECT,
    (
      event: ServerEvents.WORLD_EVENT_ON_DELETE_GAMEOBJECT,
      gameobject: GameObject,
    ) => hook(event, gameobject),
    shots,
  );
}

export function RegisterServerOnDeleteCreature(
  hook: world_event_on_delete_creature,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterServerEvent(
    ServerEvents.WORLD_EVENT_ON_DELETE_CREATURE,
    (event: ServerEvents.WORLD_EVENT_ON_DELETE_CREATURE, creature: Creature) =>
      hook(event, creature),
    shots,
  );
}
