declare type player_event_on_learn_talents = (
  event: PlayerEvents.PLAYER_EVENT_ON_LEARN_TALENTS,
  pPlayer: Player,
  talentId: number,
  talentRank: number,
  spellid: number,
) => void;

declare type player_event_on_loot_item = (
  event: PlayerEvents.PLAYER_EVENT_ON_LOOT_ITEM,
  pPlayer: Player,
  pItem: Item,
  count: number,
  guid: number,
) => void;

declare type player_event_on_loot_money = (
  event: PlayerEvents.PLAYER_EVENT_ON_LOOT_MONEY,
  pPlayer: Player,
  amount: number,
) => void;

declare type player_event_on_first_login = (
  event: PlayerEvents.PLAYER_EVENT_ON_FIRST_LOGIN,
  pPlayer: Player,
) => void;

declare type player_event_on_repop = (
  event: PlayerEvents.PLAYER_EVENT_ON_REPOP,
  pPlayer: Player,
) => void;

declare type player_event_on_resurrect = (
  event: PlayerEvents.PLAYER_EVENT_ON_RESURRECT,
  pPlayer: Player,
) => void;

declare type player_event_on_quest_abandon = (
  event: PlayerEvents.PLAYER_EVENT_ON_QUEST_ABANDON,
  pPlayer: Player,
  questId: number,
) => void;

declare type player_event_on_equip = (
  event: PlayerEvents.PLAYER_EVENT_ON_EQUIP,
  pPlayer: Player,
  pItem: Item,
  bag: number,
  slot: number,
) => void;

declare type player_event_on_can_use_item = (
  event: PlayerEvents.PLAYER_EVENT_ON_CAN_USE_ITEM,
  pPlayer: Player,
  itemEntry: number,
) => InventoryResult;

declare type player_event_on_enter_combat = (
  event: PlayerEvents.PLAYER_EVENT_ON_ENTER_COMBAT,
  pPlayer: Player,
  pEnemy: Unit,
) => void;

declare type player_event_on_leave_combat = (
  event: PlayerEvents.PLAYER_EVENT_ON_LEAVE_COMBAT,
  pPlayer: Player,
) => void;

declare type player_event_on_kill_player = (
  event: PlayerEvents.PLAYER_EVENT_ON_KILL_PLAYER,
  pKiller: Player,
  pKilled: Player,
) => void;

declare type player_event_on_kill_creature = (
  event: PlayerEvents.PLAYER_EVENT_ON_KILL_CREATURE,
  pKiller: Player,
  pKilled: Creature,
) => void;

declare type player_event_on_killed_by_creature = (
  event: PlayerEvents.PLAYER_EVENT_ON_KILLED_BY_CREATURE,
  pKiller: Creature,
  pKilled: Player,
) => void;

declare type player_event_on_level_change = (
  event: PlayerEvents.PLAYER_EVENT_ON_LEVEL_CHANGE,
  pPlayer: Player,
  oldLevel: number,
) => void;

declare type player_event_on_talents_change = (
  event: PlayerEvents.PLAYER_EVENT_ON_TALENTS_CHANGE,
  pPlayer: Player,
  newPoints: number,
) => void;

declare type player_event_on_talents_reset = (
  event: PlayerEvents.PLAYER_EVENT_ON_TALENTS_RESET,
  pPlayer: Player,
  noCost: boolean,
) => void;

declare type player_event_on_money_change = (
  event: PlayerEvents.PLAYER_EVENT_ON_MONEY_CHANGE,
  pPlayer: Player,
  amount: number,
) => void;

declare type player_event_on_give_xp = (
  event: PlayerEvents.PLAYER_EVENT_ON_GIVE_XP,
  pPlayer: Player,
  amount: number,
  pVictim: Unit,
) => void;

declare type player_event_on_reputation_change = (
  event: PlayerEvents.PLAYER_EVENT_ON_REPUTATION_CHANGE,
  pPlayer: Player,
  factionID: number,
  standing: number,
  incremental: boolean,
) => void;

declare type player_event_on_duel_request = (
  event: PlayerEvents.PLAYER_EVENT_ON_DUEL_REQUEST,
  pTarget: Player,
  pChallenger: Player,
) => void;

declare type player_event_on_duel_start = (
  event: PlayerEvents.PLAYER_EVENT_ON_DUEL_START,
  pStarter: Player,
  pChallenger: Player,
) => void;

declare type player_event_on_duel_end = (
  event: PlayerEvents.PLAYER_EVENT_ON_DUEL_END,
  pWinner: Player,
  pLoser: Player,
  type: DuelCompleteType,
) => void;

declare type player_event_on_emote = (
  event: PlayerEvents.PLAYER_EVENT_ON_EMOTE,
  pPlayer: Player,
  emote: number,
) => void;

declare type player_event_on_text_emote = (
  event: PlayerEvents.PLAYER_EVENT_ON_TEXT_EMOTE,
  pPlayer: Player,
  textEmote: number,
  emoteNum: number,
  guid: number,
) => void;

declare type player_event_on_spell_cast = (
  event: PlayerEvents.PLAYER_EVENT_ON_SPELL_CAST,
  pPlayer: Player,
  pSpell: Spell,
  skipCheck: boolean,
) => void;

declare type player_event_on_login = (
  event: PlayerEvents.PLAYER_EVENT_ON_LOGIN,
  pPlayer: Player,
) => void;

declare type player_event_on_logout = (
  event: PlayerEvents.PLAYER_EVENT_ON_LOGOUT,
  pPlayer: Player,
) => void;

declare type player_event_on_character_create = (
  event: PlayerEvents.PLAYER_EVENT_ON_CHARACTER_CREATE,
  pPlayer: Player,
) => void;

declare type player_event_on_character_delete = (
  event: PlayerEvents.PLAYER_EVENT_ON_CHARACTER_DELETE,
  guidlow: number,
) => void;

declare type player_event_on_save = (
  event: PlayerEvents.PLAYER_EVENT_ON_SAVE,
  pPlayer: Player,
) => void;

declare type player_event_on_bind_to_instance = (
  event: PlayerEvents.PLAYER_EVENT_ON_BIND_TO_INSTANCE,
  pPlayer: Player,
  difficulty: Difficulty,
  mapid: number,
  permanent: boolean,
) => void;

declare type player_event_on_update_zone = (
  event: PlayerEvents.PLAYER_EVENT_ON_UPDATE_ZONE,
  pPlayer: Player,
  newZone: number,
  newArea: number,
) => void;

declare type player_event_on_map_change = (
  event: PlayerEvents.PLAYER_EVENT_ON_MAP_CHANGE,
  player: Player,
) => void;

declare type player_event_on_chat = (
  event: PlayerEvents.PLAYER_EVENT_ON_CHAT,
  pPlayer: Player,
  msg: string,
  type: number,
  lang: number,
) => boolean | string;

declare type player_event_on_group_chat = (
  event: PlayerEvents.PLAYER_EVENT_ON_GROUP_CHAT,
  pPlayer: Player,
  msg: string,
  type: number,
  lang: number,
  pGroup: Group,
) => boolean | string;

declare type player_event_on_guild_chat = (
  event: PlayerEvents.PLAYER_EVENT_ON_GUILD_CHAT,
  pPlayer: Player,
  msg: string,
  type: number,
  lang: number,
  pGuild: Guild,
) => boolean | string;

declare type player_event_on_channel_chat = (
  event: PlayerEvents.PLAYER_EVENT_ON_CHANNEL_CHAT,
  player: Player,
  msg: string,
  type: number,
  lang: number,
  channel: number,
) => boolean | string;

declare type player_event_on_whisper = (
  event: PlayerEvents.PLAYER_EVENT_ON_WHISPER,
  pPlayer: Player,
  msg: string,
  type: number,
  lang: number,
  pReceiver: Player,
) => boolean | string;
