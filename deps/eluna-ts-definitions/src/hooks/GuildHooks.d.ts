declare type guild_event_on_add_member = (
  event: GuildEvents.GUILD_EVENT_ON_ADD_MEMBER,
  guild: Guild,
  player: Player,
  plRank: number,
) => void;

declare type guild_event_on_remove_member = (
  event: GuildEvents.GUILD_EVENT_ON_REMOVE_MEMBER,
  guild: Guild,
  player: Player,
  isDisbanding: boolean,
) => void;

declare type guild_event_on_motd_change = (
  event: GuildEvents.GUILD_EVENT_ON_MOTD_CHANGE,
  guild: Guild,
  newMotd: string,
) => void;

declare type guild_event_on_info_change = (
  event: GuildEvents.GUILD_EVENT_ON_INFO_CHANGE,
  guild: Guild,
  newInfo: string,
) => void;

declare type guild_event_on_create = (
  event: GuildEvents.GUILD_EVENT_ON_CREATE,
  guild: Guild,
  leader: Player,
  name: string,
) => void;

declare type guild_event_on_disband = (
  event: GuildEvents.GUILD_EVENT_ON_DISBAND,
  guild: Guild,
) => void;

declare type guild_event_on_money_withdraw = (
  event: GuildEvents.GUILD_EVENT_ON_MONEY_WITHDRAW,
  guild: Guild,
  player: Player,
  amount: number,
  isRepair: boolean,
) => void;

declare type guild_event_on_money_deposit = (
  event: GuildEvents.GUILD_EVENT_ON_MONEY_DEPOSIT,
  guild: Guild,
  player: Player,
  amount: number,
) => void;

declare type guild_event_on_item_move = (
  event: GuildEvents.GUILD_EVENT_ON_ITEM_MOVE,
  guild: Guild,
  player: Player,
  item: Item,
  isSrcBank: boolean,
  srcContainer: number,
  srcSlotId: number,
  isDestBank: boolean,
  destContainer:number,
  destSlotId:number
) => void;

declare type guild_event_on_event = (
  event: GuildEvents.GUILD_EVENT_ON_EVENT,
  guild: Guild,
  eventType: number,
  playerGuid1: number,
  playerGuid2: number,
  newRank: number,
) => void;

declare type guild_event_on_bank_event = (
  event: GuildEvents.GUILD_EVENT_ON_BANK_EVENT,
  guild: Guild,
  eventType: number,
  tabId: number,
  playerGuid: number,
  itemOrMoney: number,
  itemStackCount: number,
  destTabId: number,
) => void;

/**
 * Registers a [Guild] event handler.
 * ```typescript
 * enum GuildEvents
 * {
 *     // Guild
 *     GUILD_EVENT_ON_ADD_MEMBER               =     1,       // (event, guild, player, rank)
 *     GUILD_EVENT_ON_REMOVE_MEMBER            =     2,       // (event, guild, player, isDisbanding)
 *     GUILD_EVENT_ON_MOTD_CHANGE              =     3,       // (event, guild, newMotd)
 *     GUILD_EVENT_ON_INFO_CHANGE              =     4,       // (event, guild, newInfo)
 *     GUILD_EVENT_ON_CREATE                   =     5,       // (event, guild, leader, name)  // Not on TC
 *     GUILD_EVENT_ON_DISBAND                  =     6,       // (event, guild)
 *     GUILD_EVENT_ON_MONEY_WITHDRAW           =     7,       // (event, guild, player, amount, isRepair) - Can return new money amount
 *     GUILD_EVENT_ON_MONEY_DEPOSIT            =     8,       // (event, guild, player, amount) - Can return new money amount
 *     GUILD_EVENT_ON_ITEM_MOVE                =     9,       // (event, guild, player, item, isSrcBank, srcContainer, srcSlotId, isDestBank, destContainer, destSlotId)   // TODO
 *     GUILD_EVENT_ON_EVENT                    =     10,      // (event, guild, eventType, plrGUIDLow1, plrGUIDLow2, newRank)  // TODO
 *     GUILD_EVENT_ON_BANK_EVENT               =     11,      // (event, guild, eventType, tabId, playerGUIDLow, itemOrMoney, itemStackCount, destTabId)
 *     GUILD_EVENT_COUNT
 * };
 * ```
 */
 declare function RegisterGuildEvent(
  this: void,
  event: GuildEvents.GUILD_EVENT_ON_ADD_MEMBER,
  func: HookFunctionNoSelf<guild_event_on_add_member>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterGuildEvent(
  this: void,
  event: GuildEvents.GUILD_EVENT_ON_REMOVE_MEMBER,
  func: HookFunctionNoSelf<guild_event_on_remove_member>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterGuildEvent(
  this: void,
  event: GuildEvents.GUILD_EVENT_ON_MOTD_CHANGE,
  func: HookFunctionNoSelf<guild_event_on_motd_change>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterGuildEvent(
  this: void,
  event: GuildEvents.GUILD_EVENT_ON_INFO_CHANGE,
  func: HookFunctionNoSelf<guild_event_on_info_change>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterGuildEvent(
  this: void,
  event: GuildEvents.GUILD_EVENT_ON_CREATE,
  func: HookFunctionNoSelf<guild_event_on_create>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterGuildEvent(
  this: void,
  event: GuildEvents.GUILD_EVENT_ON_DISBAND,
  func: HookFunctionNoSelf<guild_event_on_disband>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterGuildEvent(
  this: void,
  event: GuildEvents.GUILD_EVENT_ON_MONEY_WITHDRAW,
  func: HookFunctionNoSelf<guild_event_on_money_withdraw>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterGuildEvent(
  this: void,
  event: GuildEvents.GUILD_EVENT_ON_MONEY_DEPOSIT,
  func: HookFunctionNoSelf<guild_event_on_money_deposit>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterGuildEvent(
  this: void,
  event: GuildEvents.GUILD_EVENT_ON_ITEM_MOVE,
  func: HookFunctionNoSelf<guild_event_on_item_move>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterGuildEvent(
  this: void,
  event: GuildEvents.GUILD_EVENT_ON_EVENT,
  func: HookFunctionNoSelf<guild_event_on_event>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterGuildEvent(
  this: void,
  event: GuildEvents.GUILD_EVENT_ON_BANK_EVENT,
  func: HookFunctionNoSelf<guild_event_on_bank_event>,
  shots?: number,
): (...args: any[]) => any;
