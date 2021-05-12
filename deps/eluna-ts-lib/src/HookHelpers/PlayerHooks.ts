/**
 * @noSelf
 */
export function RegisterPlayerOnLearnTalents(
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterPlayerOnLootItem(
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterPlayerOnLootMoney(
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterPlayerOnFirstLogin(
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterPlayerOnRepop(
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterPlayerOnResurrect(
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterPlayerOnQuestAbandon(
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterPlayerOnEquip(
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterPlayerOnCanUseItem(
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterPlayerOnPlayerEnterCombat(
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterPlayerOnPlayerLeaveCombat(
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterPlayerOnPVPKill(
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterPlayerOnCreatureKill(
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterPlayerOnPlayerKilledByCreature(
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterPlayerOnLevelChanged(
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterPlayerOnFreeTalentPointsChanged(
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterPlayerOnTalentsReset(
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterPlayerOnMoneyChanged(
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterPlayerOnGiveXP(
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterPlayerOnReputationChange(
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterPlayerOnDuelRequest(
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterPlayerOnDuelStart(
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterPlayerOnDuelEnd(
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterPlayerOnEmote(
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterPlayerOnTextEmote(
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterPlayerOnSpellCast(
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterPlayerOnLogin(
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterPlayerOnLogout(
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterPlayerOnCreate(
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterPlayerOnDelete(
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterPlayerOnSave(
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterPlayerOnBindToInstance(
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterPlayerOnUpdateZone(
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterPlayerOnMapChanged(
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterPlayerOnChat(
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterPlayerOnChatGroup(
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterPlayerOnChatGuild(
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterPlayerOnChatChannel(
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterPlayerOnChatWhisper(
  /** @noSelf **/
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
