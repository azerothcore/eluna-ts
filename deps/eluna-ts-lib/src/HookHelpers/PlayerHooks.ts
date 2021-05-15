export function RegisterPlayerOnLearnTalents(
  hook: player_event_on_learn_talents,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPlayerEvent(
    PlayerEvents.PLAYER_EVENT_ON_LEARN_TALENTS,
    (
      event: PlayerEvents.PLAYER_EVENT_ON_LEARN_TALENTS,
      pPlayer: Player,
      talentId: number,
      talentRank: number,
      spellid: number,
    ) => hook(event, pPlayer, talentId, talentRank, spellid),
    shots,
  );
}

export function RegisterPlayerOnLootItem(
  hook: player_event_on_loot_item,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPlayerEvent(
    PlayerEvents.PLAYER_EVENT_ON_LOOT_ITEM,
    (
      event: PlayerEvents.PLAYER_EVENT_ON_LOOT_ITEM,
      pPlayer: Player,
      pItem: Item,
      count: number,
      guid: number,
    ) => hook(event, pPlayer, pItem, count, guid),
    shots,
  );
}

export function RegisterPlayerOnLootMoney(
  hook: player_event_on_loot_money,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPlayerEvent(
    PlayerEvents.PLAYER_EVENT_ON_LOOT_MONEY,
    (
      event: PlayerEvents.PLAYER_EVENT_ON_LOOT_MONEY,
      pPlayer: Player,
      amount: number,
    ) => hook(event, pPlayer, amount),
    shots,
  );
}

export function RegisterPlayerOnFirstLogin(
  hook: player_event_on_first_login,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPlayerEvent(
    PlayerEvents.PLAYER_EVENT_ON_FIRST_LOGIN,
    (event: PlayerEvents.PLAYER_EVENT_ON_FIRST_LOGIN, pPlayer: Player) =>
      hook(event, pPlayer),
    shots,
  );
}

export function RegisterPlayerOnRepop(
  hook: player_event_on_repop,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPlayerEvent(
    PlayerEvents.PLAYER_EVENT_ON_REPOP,
    (event: PlayerEvents.PLAYER_EVENT_ON_REPOP, pPlayer: Player) =>
      hook(event, pPlayer),
    shots,
  );
}

export function RegisterPlayerOnResurrect(
  hook: player_event_on_resurrect,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPlayerEvent(
    PlayerEvents.PLAYER_EVENT_ON_RESURRECT,
    (event: PlayerEvents.PLAYER_EVENT_ON_RESURRECT, pPlayer: Player) =>
      hook(event, pPlayer),
    shots,
  );
}

export function RegisterPlayerOnQuestAbandon(
  hook: player_event_on_quest_abandon,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPlayerEvent(
    PlayerEvents.PLAYER_EVENT_ON_QUEST_ABANDON,
    (
      event: PlayerEvents.PLAYER_EVENT_ON_QUEST_ABANDON,
      pPlayer: Player,
      questId: number,
    ) => hook(event, pPlayer, questId),
    shots,
  );
}

export function RegisterPlayerOnEquip(
  hook: player_event_on_equip,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPlayerEvent(
    PlayerEvents.PLAYER_EVENT_ON_EQUIP,
    (
      event: PlayerEvents.PLAYER_EVENT_ON_EQUIP,
      pPlayer: Player,
      pItem: Item,
      bag: number,
      slot: number,
    ) => hook(event, pPlayer, pItem, bag, slot),
    shots,
  );
}

export function RegisterPlayerOnCanUseItem(
  hook: player_event_on_can_use_item,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPlayerEvent(
    PlayerEvents.PLAYER_EVENT_ON_CAN_USE_ITEM,
    (
      event: PlayerEvents.PLAYER_EVENT_ON_CAN_USE_ITEM,
      pPlayer: Player,
      itemEntry: number,
    ) => hook(event, pPlayer, itemEntry),
    shots,
  );
}

export function RegisterPlayerOnPlayerEnterCombat(
  hook: player_event_on_enter_combat,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPlayerEvent(
    PlayerEvents.PLAYER_EVENT_ON_ENTER_COMBAT,
    (
      event: PlayerEvents.PLAYER_EVENT_ON_ENTER_COMBAT,
      pPlayer: Player,
      pEnemy: Unit,
    ) => hook(event, pPlayer, pEnemy),
    shots,
  );
}

export function RegisterPlayerOnPlayerLeaveCombat(
  hook: player_event_on_leave_combat,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPlayerEvent(
    PlayerEvents.PLAYER_EVENT_ON_LEAVE_COMBAT,
    (event: PlayerEvents.PLAYER_EVENT_ON_LEAVE_COMBAT, pPlayer: Player) =>
      hook(event, pPlayer),
    shots,
  );
}

export function RegisterPlayerOnPVPKill(
  hook: player_event_on_kill_player,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPlayerEvent(
    PlayerEvents.PLAYER_EVENT_ON_KILL_PLAYER,
    (
      event: PlayerEvents.PLAYER_EVENT_ON_KILL_PLAYER,
      pKiller: Player,
      pKilled: Player,
    ) => hook(event, pKiller, pKilled),
    shots,
  );
}

export function RegisterPlayerOnCreatureKill(
  hook: player_event_on_kill_creature,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPlayerEvent(
    PlayerEvents.PLAYER_EVENT_ON_KILL_CREATURE,
    (
      event: PlayerEvents.PLAYER_EVENT_ON_KILL_CREATURE,
      pKiller: Player,
      pKilled: Creature,
    ) => hook(event, pKiller, pKilled),
    shots,
  );
}

export function RegisterPlayerOnPlayerKilledByCreature(
  hook: player_event_on_killed_by_creature,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPlayerEvent(
    PlayerEvents.PLAYER_EVENT_ON_KILLED_BY_CREATURE,
    (
      event: PlayerEvents.PLAYER_EVENT_ON_KILLED_BY_CREATURE,
      pKiller: Creature,
      pKilled: Player,
    ) => hook(event, pKiller, pKilled),
    shots,
  );
}

export function RegisterPlayerOnLevelChanged(
  hook: player_event_on_level_change,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPlayerEvent(
    PlayerEvents.PLAYER_EVENT_ON_LEVEL_CHANGE,
    (
      event: PlayerEvents.PLAYER_EVENT_ON_LEVEL_CHANGE,
      pPlayer: Player,
      oldLevel: number,
    ) => hook(event, pPlayer, oldLevel),
    shots,
  );
}

export function RegisterPlayerOnFreeTalentPointsChanged(
  hook: player_event_on_talents_change,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPlayerEvent(
    PlayerEvents.PLAYER_EVENT_ON_TALENTS_CHANGE,
    (
      event: PlayerEvents.PLAYER_EVENT_ON_TALENTS_CHANGE,
      pPlayer: Player,
      newPoints: number,
    ) => hook(event, pPlayer, newPoints),
    shots,
  );
}

export function RegisterPlayerOnTalentsReset(
  hook: player_event_on_talents_reset,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPlayerEvent(
    PlayerEvents.PLAYER_EVENT_ON_TALENTS_RESET,
    (
      event: PlayerEvents.PLAYER_EVENT_ON_TALENTS_RESET,
      pPlayer: Player,
      noCost: boolean,
    ) => hook(event, pPlayer, noCost),
    shots,
  );
}

export function RegisterPlayerOnMoneyChanged(
  hook: player_event_on_money_change,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPlayerEvent(
    PlayerEvents.PLAYER_EVENT_ON_MONEY_CHANGE,
    (
      event: PlayerEvents.PLAYER_EVENT_ON_MONEY_CHANGE,
      pPlayer: Player,
      amount: number,
    ) => hook(event, pPlayer, amount),
    shots,
  );
}

export function RegisterPlayerOnGiveXP(
  hook: player_event_on_give_xp,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPlayerEvent(
    PlayerEvents.PLAYER_EVENT_ON_GIVE_XP,
    (
      event: PlayerEvents.PLAYER_EVENT_ON_GIVE_XP,
      pPlayer: Player,
      amount: number,
      pVictim: Unit,
    ) => hook(event, pPlayer, amount, pVictim),
    shots,
  );
}

export function RegisterPlayerOnReputationChange(
  hook: player_event_on_reputation_change,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPlayerEvent(
    PlayerEvents.PLAYER_EVENT_ON_REPUTATION_CHANGE,
    (
      event: PlayerEvents.PLAYER_EVENT_ON_REPUTATION_CHANGE,
      pPlayer: Player,
      factionID: number,
      standing: number,
      incremental: boolean,
    ) => hook(event, pPlayer, factionID, standing, incremental),
    shots,
  );
}

export function RegisterPlayerOnDuelRequest(
  hook: player_event_on_duel_request,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPlayerEvent(
    PlayerEvents.PLAYER_EVENT_ON_DUEL_REQUEST,
    (
      event: PlayerEvents.PLAYER_EVENT_ON_DUEL_REQUEST,
      pTarget: Player,
      pChallenger: Player,
    ) => hook(event, pTarget, pChallenger),
    shots,
  );
}

export function RegisterPlayerOnDuelStart(
  hook: player_event_on_duel_start,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPlayerEvent(
    PlayerEvents.PLAYER_EVENT_ON_DUEL_START,
    (
      event: PlayerEvents.PLAYER_EVENT_ON_DUEL_START,
      pStarter: Player,
      pChallenger: Player,
    ) => hook(event, pStarter, pChallenger),
    shots,
  );
}

export function RegisterPlayerOnDuelEnd(
  hook: player_event_on_duel_end,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPlayerEvent(
    PlayerEvents.PLAYER_EVENT_ON_DUEL_END,
    (
      event: PlayerEvents.PLAYER_EVENT_ON_DUEL_END,
      pWinner: Player,
      pLoser: Player,
      type: DuelCompleteType,
    ) => hook(event, pWinner, pLoser, type),
    shots,
  );
}

export function RegisterPlayerOnEmote(
  hook: player_event_on_emote,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPlayerEvent(
    PlayerEvents.PLAYER_EVENT_ON_EMOTE,
    (
      event: PlayerEvents.PLAYER_EVENT_ON_EMOTE,
      pPlayer: Player,
      emote: number,
    ) => hook(event, pPlayer, emote),
    shots,
  );
}

export function RegisterPlayerOnTextEmote(
  hook: player_event_on_text_emote,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPlayerEvent(
    PlayerEvents.PLAYER_EVENT_ON_TEXT_EMOTE,
    (
      event: PlayerEvents.PLAYER_EVENT_ON_TEXT_EMOTE,
      pPlayer: Player,
      textEmote: number,
      emoteNum: number,
      guid: number,
    ) => hook(event, pPlayer, textEmote, emoteNum, guid),
    shots,
  );
}

export function RegisterPlayerOnSpellCast(
  hook: player_event_on_spell_cast,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPlayerEvent(
    PlayerEvents.PLAYER_EVENT_ON_SPELL_CAST,
    (
      event: PlayerEvents.PLAYER_EVENT_ON_SPELL_CAST,
      pPlayer: Player,
      pSpell: Spell,
      skipCheck: boolean,
    ) => hook(event, pPlayer, pSpell, skipCheck),
    shots,
  );
}

export function RegisterPlayerOnLogin(
  hook: player_event_on_login,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPlayerEvent(
    PlayerEvents.PLAYER_EVENT_ON_LOGIN,
    (event: PlayerEvents.PLAYER_EVENT_ON_LOGIN, pPlayer: Player) =>
      hook(event, pPlayer),
    shots,
  );
}

export function RegisterPlayerOnLogout(
  hook: player_event_on_logout,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPlayerEvent(
    PlayerEvents.PLAYER_EVENT_ON_LOGOUT,
    (event: PlayerEvents.PLAYER_EVENT_ON_LOGOUT, pPlayer: Player) =>
      hook(event, pPlayer),
    shots,
  );
}

export function RegisterPlayerOnCreate(
  hook: player_event_on_character_create,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPlayerEvent(
    PlayerEvents.PLAYER_EVENT_ON_CHARACTER_CREATE,
    (event: PlayerEvents.PLAYER_EVENT_ON_CHARACTER_CREATE, pPlayer: Player) =>
      hook(event, pPlayer),
    shots,
  );
}

export function RegisterPlayerOnDelete(
  hook: player_event_on_character_delete,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPlayerEvent(
    PlayerEvents.PLAYER_EVENT_ON_CHARACTER_DELETE,
    (event: PlayerEvents.PLAYER_EVENT_ON_CHARACTER_DELETE, guidlow: number) =>
      hook(event, guidlow),
    shots,
  );
}

export function RegisterPlayerOnSave(
  hook: player_event_on_save,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPlayerEvent(
    PlayerEvents.PLAYER_EVENT_ON_SAVE,
    (event: PlayerEvents.PLAYER_EVENT_ON_SAVE, pPlayer: Player) =>
      hook(event, pPlayer),
    shots,
  );
}

export function RegisterPlayerOnBindToInstance(
  hook: player_event_on_bind_to_instance,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPlayerEvent(
    PlayerEvents.PLAYER_EVENT_ON_BIND_TO_INSTANCE,
    (
      event: PlayerEvents.PLAYER_EVENT_ON_BIND_TO_INSTANCE,
      pPlayer: Player,
      difficulty: Difficulty,
      mapid: number,
      permanent: boolean,
    ) => hook(event, pPlayer, difficulty, mapid, permanent),
    shots,
  );
}

export function RegisterPlayerOnUpdateZone(
  hook: player_event_on_update_zone,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPlayerEvent(
    PlayerEvents.PLAYER_EVENT_ON_UPDATE_ZONE,
    (
      event: PlayerEvents.PLAYER_EVENT_ON_UPDATE_ZONE,
      pPlayer: Player,
      newZone: number,
      newArea: number,
    ) => hook(event, pPlayer, newZone, newArea),
    shots,
  );
}

export function RegisterPlayerOnMapChanged(
  hook: player_event_on_map_change,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPlayerEvent(
    PlayerEvents.PLAYER_EVENT_ON_MAP_CHANGE,
    (event: PlayerEvents.PLAYER_EVENT_ON_MAP_CHANGE, player: Player) =>
      hook(event, player),
    shots,
  );
}

export function RegisterPlayerOnChat(
  hook: player_event_on_chat,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPlayerEvent(
    PlayerEvents.PLAYER_EVENT_ON_CHAT,
    (
      event: PlayerEvents.PLAYER_EVENT_ON_CHAT,
      pPlayer: Player,
      msg: string,
      type: number,
      lang: number,
    ) => hook(event, pPlayer, msg, type, lang),
    shots,
  );
}

export function RegisterPlayerOnChatGroup(
  hook: player_event_on_group_chat,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPlayerEvent(
    PlayerEvents.PLAYER_EVENT_ON_GROUP_CHAT,
    (
      event: PlayerEvents.PLAYER_EVENT_ON_GROUP_CHAT,
      pPlayer: Player,
      msg: string,
      type: number,
      lang: number,
      pGroup: Group,
    ) => hook(event, pPlayer, msg, type, lang, pGroup),
    shots,
  );
}

export function RegisterPlayerOnChatGuild(
  hook: player_event_on_guild_chat,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPlayerEvent(
    PlayerEvents.PLAYER_EVENT_ON_GUILD_CHAT,
    (
      event: PlayerEvents.PLAYER_EVENT_ON_GUILD_CHAT,
      pPlayer: Player,
      msg: string,
      type: number,
      lang: number,
      pGuild: Guild,
    ) => hook(event, pPlayer, msg, type, lang, pGuild),
    shots,
  );
}

export function RegisterPlayerOnChatChannel(
  hook: player_event_on_channel_chat,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPlayerEvent(
    PlayerEvents.PLAYER_EVENT_ON_CHANNEL_CHAT,
    (
      event: PlayerEvents.PLAYER_EVENT_ON_CHANNEL_CHAT,
      player: Player,
      msg: string,
      type: number,
      lang: number,
      channel: number,
    ) => hook(event, player, msg, type, lang, channel),
    shots,
  );
}

export function RegisterPlayerOnChatWhisper(
  hook: player_event_on_whisper,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPlayerEvent(
    PlayerEvents.PLAYER_EVENT_ON_WHISPER,
    (
      event: PlayerEvents.PLAYER_EVENT_ON_WHISPER,
      pPlayer: Player,
      msg: string,
      type: number,
      lang: number,
      pReceiver: Player,
    ) => hook(event, pPlayer, msg, type, lang, pReceiver),
    shots,
  );
}
