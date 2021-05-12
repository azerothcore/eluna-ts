/**
 * @noSelf
 */
export function RegisterServerOnAddonMessage(
  /** @noSelf **/
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
} /**
 * @noSelf
 */

export function RegisterServerOnGameEventStart(
  /** @noSelf **/
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
} /**
 * @noSelf
 */

export function RegisterServerOnGameEventStop(
  /** @noSelf **/
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
} /**
 * @noSelf
 */

export function RegisterServerOnLuaStateClose(
  /** @noSelf **/
  hook: eluna_event_on_lua_state_close,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterServerEvent(
    ServerEvents.ELUNA_EVENT_ON_LUA_STATE_CLOSE,
    (event: ServerEvents.ELUNA_EVENT_ON_LUA_STATE_CLOSE) => hook(event),
    shots,
  );
} /**
 * @noSelf
 */

export function RegisterServerOnLuaStateOpen(
  /** @noSelf **/
  hook: eluna_event_on_lua_state_open,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterServerEvent(
    ServerEvents.ELUNA_EVENT_ON_LUA_STATE_OPEN,
    (event: ServerEvents.ELUNA_EVENT_ON_LUA_STATE_OPEN) => hook(event),
    shots,
  );
} /**
 * @noSelf
 */

export function RegisterServerOnAreaTrigger(
  /** @noSelf **/
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
} /**
 * @noSelf
 */

export function RegisterServerOnWheatherChange(
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterServerOnAuctionAdd(
  /** @noSelf **/
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
} /**
 * @noSelf
 */

export function RegisterServerOnAuctionRemove(
  /** @noSelf **/
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
} /**
 * @noSelf
 */

export function RegisterServerOnAuctionSuccessful(
  /** @noSelf **/
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
} /**
 * @noSelf
 */

export function RegisterServerOnAuctionExpire(
  /** @noSelf **/
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
} /**
 * @noSelf
 */

export function RegisterServerOnOpenStateChange(
  /** @noSelf **/
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
} /**
 * @noSelf
 */

export function RegisterServerOnShutdownInitiate(
  /** @noSelf **/
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
} /**
 * @noSelf
 */

export function RegisterServerOnShutdownCancel(
  /** @noSelf **/
  hook: world_event_on_shutdown_cancel,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterServerEvent(
    ServerEvents.WORLD_EVENT_ON_SHUTDOWN_CANCEL,
    (event: ServerEvents.WORLD_EVENT_ON_SHUTDOWN_CANCEL) => hook(event),
    shots,
  );
} /**
 * @noSelf
 */

export function RegisterServerOnStartup(
  /** @noSelf **/
  hook: world_event_on_startup,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterServerEvent(
    ServerEvents.WORLD_EVENT_ON_STARTUP,
    (event: ServerEvents.WORLD_EVENT_ON_STARTUP) => hook(event),
    shots,
  );
} /**
 * @noSelf
 */

export function RegisterServerOnShutdown(
  /** @noSelf **/
  hook: world_event_on_shutdown,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterServerEvent(
    ServerEvents.WORLD_EVENT_ON_SHUTDOWN,
    (event: ServerEvents.WORLD_EVENT_ON_SHUTDOWN) =>
      hook(event),
    shots,
  );
} /**
 * @noSelf
 */

export function RegisterServerOnMapCreate(
  /** @noSelf **/
  hook: map_event_on_create,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterServerEvent(
    ServerEvents.MAP_EVENT_ON_CREATE,
    (event: ServerEvents.MAP_EVENT_ON_CREATE, map: EMap) => hook(event, map),
    shots,
  );
} /**
 * @noSelf
 */

export function RegisterServerOnMapDestroy(
  /** @noSelf **/
  hook: map_event_on_destroy,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterServerEvent(
    ServerEvents.MAP_EVENT_ON_DESTROY,
    (event: ServerEvents.MAP_EVENT_ON_DESTROY, map: EMap) => hook(event, map),
    shots,
  );
} /**
 * @noSelf
 */

export function RegisterServerOnMapPlayerEnter(
  /** @noSelf **/
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
} /**
 * @noSelf
 */

export function RegisterServerOnMapPlayerLeave(
  /** @noSelf **/
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
} /**
 * @noSelf
 */

export function RegisterServerOnMapUpdate(
  /** @noSelf **/
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
} /**
 * @noSelf
 */

export function RegisterServerOnDeleteGameObject(
  /** @noSelf **/
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
} /**
 * @noSelf
 */

export function RegisterServerOnDeleteCreature(
  /** @noSelf **/
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
