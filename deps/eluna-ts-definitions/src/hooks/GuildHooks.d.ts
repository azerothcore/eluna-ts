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
