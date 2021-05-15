export function RegisterGuildOnAddMember(
  hook: guild_event_on_add_member,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterGuildEvent(
    GuildEvents.GUILD_EVENT_ON_ADD_MEMBER,
    (
      event: GuildEvents.GUILD_EVENT_ON_ADD_MEMBER,
      guild: Guild,
      player: Player,
      plRank: number,
    ) => hook(event, guild, player, plRank),
    shots,
  );
}

export function RegisterGuildOnRemoveMember(
  hook: guild_event_on_remove_member,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterGuildEvent(
    GuildEvents.GUILD_EVENT_ON_REMOVE_MEMBER,
    (
      event: GuildEvents.GUILD_EVENT_ON_REMOVE_MEMBER,
      guild: Guild,
      player: Player,
      isDisbanding: boolean,
    ) => hook(event, guild, player, isDisbanding),
    shots,
  );
}

export function RegisterGuildOnMOTDChanged(
  hook: guild_event_on_motd_change,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterGuildEvent(
    GuildEvents.GUILD_EVENT_ON_MOTD_CHANGE,
    (
      event: GuildEvents.GUILD_EVENT_ON_MOTD_CHANGE,
      guild: Guild,
      newMotd: string,
    ) => hook(event, guild, newMotd),
    shots,
  );
}

export function RegisterGuildOnInfoChanged(
  hook: guild_event_on_info_change,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterGuildEvent(
    GuildEvents.GUILD_EVENT_ON_INFO_CHANGE,
    (
      event: GuildEvents.GUILD_EVENT_ON_INFO_CHANGE,
      guild: Guild,
      newInfo: string,
    ) => hook(event, guild, newInfo),
    shots,
  );
}

export function RegisterGuildOnCreate(
  hook: guild_event_on_create,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterGuildEvent(
    GuildEvents.GUILD_EVENT_ON_CREATE,
    (
      event: GuildEvents.GUILD_EVENT_ON_CREATE,
      guild: Guild,
      leader: Player,
      name: string,
    ) => hook(event, guild, leader, name),
    shots,
  );
}

export function RegisterGuildOnDisband(
  hook: guild_event_on_disband,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterGuildEvent(
    GuildEvents.GUILD_EVENT_ON_DISBAND,
    (event: GuildEvents.GUILD_EVENT_ON_DISBAND, guild: Guild) =>
      hook(event, guild),
    shots,
  );
}

export function RegisterGuildOnMemberWitdrawMoney(
  hook: guild_event_on_money_withdraw,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterGuildEvent(
    GuildEvents.GUILD_EVENT_ON_MONEY_WITHDRAW,
    (
      event: GuildEvents.GUILD_EVENT_ON_MONEY_WITHDRAW,
      guild: Guild,
      player: Player,
      amount: number,
      isRepair: boolean,
    ) => hook(event, guild, player, amount, isRepair),
    shots,
  );
}

export function RegisterGuildOnMemberDepositMoney(
  hook: guild_event_on_money_deposit,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterGuildEvent(
    GuildEvents.GUILD_EVENT_ON_MONEY_DEPOSIT,
    (
      event: GuildEvents.GUILD_EVENT_ON_MONEY_DEPOSIT,
      guild: Guild,
      player: Player,
      amount: number,
    ) => hook(event, guild, player, amount),
    shots,
  );
}

export function RegisterGuildOnEvent(
  hook: guild_event_on_event,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterGuildEvent(
    GuildEvents.GUILD_EVENT_ON_EVENT,
    (
      event: GuildEvents.GUILD_EVENT_ON_EVENT,
      guild: Guild,
      eventType: number,
      playerGuid1: number,
      playerGuid2: number,
      newRank: number,
    ) => hook(event, guild, eventType, playerGuid1, playerGuid2, newRank),
    shots,
  );
}

export function RegisterGuildOnBankEvent(
  hook: guild_event_on_bank_event,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterGuildEvent(
    GuildEvents.GUILD_EVENT_ON_BANK_EVENT,
    (
      event: GuildEvents.GUILD_EVENT_ON_BANK_EVENT,
      guild: Guild,
      eventType: number,
      tabId: number,
      playerGuid: number,
      itemOrMoney: number,
      itemStackCount: number,
      destTabId: number,
    ) =>
      hook(
        event,
        guild,
        eventType,
        tabId,
        playerGuid,
        itemOrMoney,
        itemStackCount,
        destTabId,
      ),
    shots,
  );
}
