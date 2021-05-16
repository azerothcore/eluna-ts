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

declare type world_event_on_config_load = (
  event: ServerEvents.WORLD_EVENT_ON_CONFIG_LOAD,
  reload: boolean,
) => void;

declare type world_event_on_shutdown_init = (
  event: ServerEvents.WORLD_EVENT_ON_SHUTDOWN_INIT,
  code: ShutdownExitCode,
  mask: ShutdownMask,
) => void;

declare type world_event_on_shutdown_cancel = (
  event: ServerEvents.WORLD_EVENT_ON_SHUTDOWN_CANCEL,
) => void;

declare type world_event_on_update = (
  event: ServerEvents.WORLD_EVENT_ON_UPDATE,
  diff: number
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


/**
 * Registers a server event handler.
 *     enum ServerEvents
 *     {
 *         // Server
 *         SERVER_EVENT_ON_NETWORK_START           =     1,       // Not Implemented
 *         SERVER_EVENT_ON_NETWORK_STOP            =     2,       // Not Implemented
 *         SERVER_EVENT_ON_SOCKET_OPEN             =     3,       // Not Implemented
 *         SERVER_EVENT_ON_SOCKET_CLOSE            =     4,       // Not Implemented
 *         SERVER_EVENT_ON_PACKET_RECEIVE          =     5,       // (event, packet, player) - Player only if accessible. Can return false, newPacket
 *         SERVER_EVENT_ON_PACKET_RECEIVE_UNKNOWN  =     6,       // Not Implemented
 *         SERVER_EVENT_ON_PACKET_SEND             =     7,       // (event, packet, player) - Player only if accessible. Can return false, newPacket
 *         // World
 *         WORLD_EVENT_ON_OPEN_STATE_CHANGE        =     8,        // (event, open) - Needs core support on Mangos
 *         WORLD_EVENT_ON_CONFIG_LOAD              =     9,        // (event, reload)
 *         // UNUSED                               =     10,
 *         WORLD_EVENT_ON_SHUTDOWN_INIT            =     11,       // (event, code, mask)
 *         WORLD_EVENT_ON_SHUTDOWN_CANCEL          =     12,       // (event)
 *         WORLD_EVENT_ON_UPDATE                   =     13,       // (event, diff)
 *         WORLD_EVENT_ON_STARTUP                  =     14,       // (event)
 *         WORLD_EVENT_ON_SHUTDOWN                 =     15,       // (event)
 *         // Eluna
 *         ELUNA_EVENT_ON_LUA_STATE_CLOSE          =     16,       // (event) - triggers just before shutting down eluna (on shutdown and restart)
 *         // Map
 *         MAP_EVENT_ON_CREATE                     =     17,       // (event, map)
 *         MAP_EVENT_ON_DESTROY                    =     18,       // (event, map)
 *         MAP_EVENT_ON_GRID_LOAD                  =     19,       // Not Implemented
 *         MAP_EVENT_ON_GRID_UNLOAD                =     20,       // Not Implemented
 *         MAP_EVENT_ON_PLAYER_ENTER               =     21,       // (event, map, player)
 *         MAP_EVENT_ON_PLAYER_LEAVE               =     22,       // (event, map, player)
 *         MAP_EVENT_ON_UPDATE                     =     23,       // (event, map, diff)
 *         // Area trigger
 *         TRIGGER_EVENT_ON_TRIGGER                =     24,       // (event, player, triggerId) - Can return true
 *         // Weather
 *         WEATHER_EVENT_ON_CHANGE                 =     25,       // (event, zoneId, state, grade)
 *         // Auction house
 *         AUCTION_EVENT_ON_ADD                    =     26,       // (event, auctionId, owner, item, expireTime, buyout, startBid, currentBid, bidderGUIDLow)
 *         AUCTION_EVENT_ON_REMOVE                 =     27,       // (event, auctionId, owner, item, expireTime, buyout, startBid, currentBid, bidderGUIDLow)
 *         AUCTION_EVENT_ON_SUCCESSFUL             =     28,       // (event, auctionId, owner, item, expireTime, buyout, startBid, currentBid, bidderGUIDLow)
 *         AUCTION_EVENT_ON_EXPIRE                 =     29,       // (event, auctionId, owner, item, expireTime, buyout, startBid, currentBid, bidderGUIDLow)
 *         // AddOns
 *         ADDON_EVENT_ON_MESSAGE                  =     30,       // (event, sender, type, prefix, msg, target) - target can be nil/whisper_target/guild/group/channel. Can return false
 *         WORLD_EVENT_ON_DELETE_CREATURE          =     31,       // (event, creature)
 *         WORLD_EVENT_ON_DELETE_GAMEOBJECT        =     32,       // (event, gameobject)
 *         // Eluna
 *         ELUNA_EVENT_ON_LUA_STATE_OPEN           =     33,       // (event) - triggers after all scripts are loaded
 *         GAME_EVENT_START                        =     34,       // (event, gameeventid)
 *         GAME_EVENT_STOP                         =     35,       // (event, gameeventid)
 *     };
 */
declare function RegisterServerEvent(
  this: void,
  entry: number,
  event: ServerEvents.SERVER_EVENT_ON_PACKET_RECEIVE,
  func: HookFunctionNoSelf<server_event_on_packet_receive_any>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterServerEvent(
  this: void,
  entry: number,
  event: ServerEvents.SERVER_EVENT_ON_PACKET_SEND,
  func: HookFunctionNoSelf<server_event_on_packet_send_any>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterServerEvent(
  this: void,
  event: ServerEvents.WORLD_EVENT_ON_OPEN_STATE_CHANGE,
  func: HookFunctionNoSelf<world_event_on_open_state_change>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterServerEvent(
  this: void,
  event: ServerEvents.WORLD_EVENT_ON_CONFIG_LOAD,
  func: HookFunctionNoSelf<world_event_on_config_load>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterServerEvent(
  this: void,
  event: ServerEvents.WORLD_EVENT_ON_SHUTDOWN_INIT,
  func: HookFunctionNoSelf<world_event_on_shutdown_init>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterServerEvent(
  this: void,
  event: ServerEvents.WORLD_EVENT_ON_SHUTDOWN_CANCEL,
  func: HookFunctionNoSelf<world_event_on_shutdown_cancel>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterServerEvent(
  this: void,
  event: ServerEvents.WORLD_EVENT_ON_UPDATE,
  func: HookFunctionNoSelf<world_event_on_update>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterServerEvent(
  this: void,
  event: ServerEvents.WORLD_EVENT_ON_STARTUP,
  func: HookFunctionNoSelf<world_event_on_startup>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterServerEvent(
  this: void,
  event: ServerEvents.WORLD_EVENT_ON_SHUTDOWN,
  func: HookFunctionNoSelf<world_event_on_shutdown>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterServerEvent(
  this: void,
  event: ServerEvents.ELUNA_EVENT_ON_LUA_STATE_CLOSE,
  func: HookFunctionNoSelf<eluna_event_on_lua_state_close>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterServerEvent(
  this: void,
  event: ServerEvents.MAP_EVENT_ON_CREATE,
  func: HookFunctionNoSelf<map_event_on_create>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterServerEvent(
  this: void,
  event: ServerEvents.MAP_EVENT_ON_DESTROY,
  func: HookFunctionNoSelf<map_event_on_destroy>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterServerEvent(
  this: void,
  event: ServerEvents.MAP_EVENT_ON_PLAYER_ENTER,
  func: HookFunctionNoSelf<map_event_on_player_enter>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterServerEvent(
  this: void,
  event: ServerEvents.MAP_EVENT_ON_PLAYER_LEAVE,
  func: HookFunctionNoSelf<map_event_on_player_leave>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterServerEvent(
  this: void,
  event: ServerEvents.MAP_EVENT_ON_UPDATE,
  func: HookFunctionNoSelf<map_event_on_update>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterServerEvent(
  this: void,
  event: ServerEvents.TRIGGER_EVENT_ON_TRIGGER,
  func: HookFunctionNoSelf<trigger_event_on_trigger>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterServerEvent(
  this: void,
  event: ServerEvents.WEATHER_EVENT_ON_CHANGE,
  func: HookFunctionNoSelf<weather_event_on_change>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterServerEvent(
  this: void,
  event: ServerEvents.AUCTION_EVENT_ON_ADD,
  func: HookFunctionNoSelf<auction_event_on_add>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterServerEvent(
  this: void,
  event: ServerEvents.AUCTION_EVENT_ON_REMOVE,
  func: HookFunctionNoSelf<auction_event_on_remove>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterServerEvent(
  this: void,
  event: ServerEvents.AUCTION_EVENT_ON_SUCCESSFUL,
  func: HookFunctionNoSelf<auction_event_on_successful>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterServerEvent(
  this: void,
  event: ServerEvents.AUCTION_EVENT_ON_EXPIRE,
  func: HookFunctionNoSelf<auction_event_on_expire>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterServerEvent(
  this: void,
  event: ServerEvents.ADDON_EVENT_ON_MESSAGE,
  func: HookFunctionNoSelf<addon_event_on_message>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterServerEvent(
  this: void,
  event: ServerEvents.WORLD_EVENT_ON_DELETE_CREATURE,
  func: HookFunctionNoSelf<world_event_on_delete_creature>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterServerEvent(
  this: void,
  event: ServerEvents.WORLD_EVENT_ON_DELETE_GAMEOBJECT,
  func: HookFunctionNoSelf<world_event_on_delete_gameobject>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterServerEvent(
  this: void,
  event: ServerEvents.ELUNA_EVENT_ON_LUA_STATE_OPEN,
  func: HookFunctionNoSelf<eluna_event_on_lua_state_open>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterServerEvent(
  this: void,
  event: ServerEvents.GAME_EVENT_START,
  func: HookFunctionNoSelf<game_event_start>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterServerEvent(
  this: void,
  event: ServerEvents.GAME_EVENT_STOP,
  func: HookFunctionNoSelf<game_event_stop>,
  shots?: number,
): (...args: any[]) => any;
