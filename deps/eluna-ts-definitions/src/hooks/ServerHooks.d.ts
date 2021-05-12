declare type addon_event_on_message = (
  event: ServerEvents.ADDON_EVENT_ON_MESSAGE,
  sender: Player,
  type: number,
  prefix: string,
  msg: string,
  target: Player | Guild | Group | number,
) => boolean;

declare type game_event_start = (
  event: ServerEvents.GAME_EVENT_START,
  eventid: number,
) => void;

declare type game_event_stop = (
  event: ServerEvents.GAME_EVENT_STOP,
  eventid: number,
) => void;

declare type eluna_event_on_lua_state_close = (
  event: ServerEvents.ELUNA_EVENT_ON_LUA_STATE_CLOSE,
) => void;

declare type eluna_event_on_lua_state_open = (
  event: ServerEvents.ELUNA_EVENT_ON_LUA_STATE_OPEN,
) => void;

declare type trigger_event_on_trigger = (
  event: ServerEvents.TRIGGER_EVENT_ON_TRIGGER,
  pPlayer: Player,
  pTrigger: number,
) => boolean;

declare type weather_event_on_change = (
  event: ServerEvents.WEATHER_EVENT_ON_CHANGE,
  zone: number,
  state: WeatherState,
  grade: number,
) => void;

declare type auction_event_on_add = (
  event: ServerEvents.AUCTION_EVENT_ON_ADD,
  auctionId: number,
  owner: Player,
  item: Item,
  expireTime: number,
  buyout: number,
  startBid: number,
  currentBid: number,
  bidderGUIDLow: number,
) => void;

declare type auction_event_on_remove = (
  event: ServerEvents.AUCTION_EVENT_ON_REMOVE,
  auctionId: number,
  owner: Player,
  item: Item,
  expireTime: number,
  buyout: number,
  startBid: number,
  currentBid: number,
  bidderGUIDLow: number,
) => void;

declare type auction_event_on_successful = (
  event: ServerEvents.AUCTION_EVENT_ON_SUCCESSFUL,
  auctionId: number,
  owner: Player,
  item: Item,
  expireTime: number,
  buyout: number,
  startBid: number,
  currentBid: number,
  bidderGUIDLow: number,
) => void;

declare type auction_event_on_expire = (
  event: ServerEvents.AUCTION_EVENT_ON_EXPIRE,
  auctionId: number,
  owner: Player,
  item: Item,
  expireTime: number,
  buyout: number,
  startBid: number,
  currentBid: number,
  bidderGUIDLow: number,
) => void;

declare type world_event_on_open_state_change = (
  event: ServerEvents.WORLD_EVENT_ON_OPEN_STATE_CHANGE,
  open: boolean,
) => void;

declare type world_event_on_shutdown_init = (
  event: ServerEvents.WORLD_EVENT_ON_SHUTDOWN_INIT,
  code: ShutdownExitCode,
  mask: ShutdownMask,
) => void;

declare type world_event_on_shutdown_cancel = (
  event: ServerEvents.WORLD_EVENT_ON_SHUTDOWN_CANCEL,
) => void;

declare type world_event_on_startup = (
  event: ServerEvents.WORLD_EVENT_ON_STARTUP,
) => void;

declare type world_event_on_shutdown = (
  event: ServerEvents.WORLD_EVENT_ON_SHUTDOWN,
) => void;

declare type map_event_on_create = (
  event: ServerEvents.MAP_EVENT_ON_CREATE,
  map: EMap,
) => void;

declare type map_event_on_destroy = (
  event: ServerEvents.MAP_EVENT_ON_DESTROY,
  map: EMap,
) => void;

declare type map_event_on_player_enter = (
  event: ServerEvents.MAP_EVENT_ON_PLAYER_ENTER,
  map: EMap,
  player: Player,
) => void;

declare type map_event_on_player_leave = (
  event: ServerEvents.MAP_EVENT_ON_PLAYER_LEAVE,
  map: EMap,
  player: Player,
) => void;

declare type map_event_on_update = (
  event: ServerEvents.MAP_EVENT_ON_UPDATE,
  map: EMap,
  diff: number,
) => void;

declare type world_event_on_delete_gameobject = (
  event: ServerEvents.WORLD_EVENT_ON_DELETE_GAMEOBJECT,
  gameobject: GameObject,
) => void;

declare type world_event_on_delete_creature = (
  event: ServerEvents.WORLD_EVENT_ON_DELETE_CREATURE,
  creature: Creature,
) => void;
