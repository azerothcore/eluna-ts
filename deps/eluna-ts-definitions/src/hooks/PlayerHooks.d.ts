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
  type: ChatMsg,
  lang: Language,
) => boolean | string;

declare type player_event_on_group_chat = (
  event: PlayerEvents.PLAYER_EVENT_ON_GROUP_CHAT,
  pPlayer: Player,
  msg: string,
  type: ChatMsg,
  lang: Language,
  pGroup: Group,
) => boolean | string;

declare type player_event_on_guild_chat = (
  event: PlayerEvents.PLAYER_EVENT_ON_GUILD_CHAT,
  pPlayer: Player,
  msg: string,
  type: ChatMsg,
  lang: Language,
  pGuild: Guild,
) => boolean | string;

declare type player_event_on_channel_chat = (
  event: PlayerEvents.PLAYER_EVENT_ON_CHANNEL_CHAT,
  player: Player,
  msg: string,
  type: ChatMsg,
  lang: Language,
  channel: number,
) => boolean | string;

declare type player_event_on_whisper = (
  event: PlayerEvents.PLAYER_EVENT_ON_WHISPER,
  pPlayer: Player,
  msg: string,
  type: ChatMsg,
  lang: Language,
  pReceiver: Player,
) => boolean | string;

/**
 * player is nil if command used from console. Can return false
 */
declare type player_event_on_command = (
  event: PlayerEvents.PLAYER_EVENT_ON_COMMAND,
  pPlayer: Player,
  command: string
) => boolean;

/**
 * @noself
 *
 * Registers a [Player] event handler.
 * ```typescript
 * enum PlayerEvents
 * {
 *     PLAYER_EVENT_ON_CHARACTER_CREATE        =     1,        // (event, player)
 *     PLAYER_EVENT_ON_CHARACTER_DELETE        =     2,        // (event, guid)
 *     PLAYER_EVENT_ON_LOGIN                   =     3,        // (event, player)
 *     PLAYER_EVENT_ON_LOGOUT                  =     4,        // (event, player)
 *     PLAYER_EVENT_ON_SPELL_CAST              =     5,        // (event, player, spell, skipCheck)
 *     PLAYER_EVENT_ON_KILL_PLAYER             =     6,        // (event, killer, killed)
 *     PLAYER_EVENT_ON_KILL_CREATURE           =     7,        // (event, killer, killed)
 *     PLAYER_EVENT_ON_KILLED_BY_CREATURE      =     8,        // (event, killer, killed)
 *     PLAYER_EVENT_ON_DUEL_REQUEST            =     9,        // (event, target, challenger)
 *     PLAYER_EVENT_ON_DUEL_START              =     10,       // (event, player1, player2)
 *     PLAYER_EVENT_ON_DUEL_END                =     11,       // (event, winner, loser, type)
 *     PLAYER_EVENT_ON_GIVE_XP                 =     12,       // (event, player, amount, victim) - Can return new XP amount
 *     PLAYER_EVENT_ON_LEVEL_CHANGE            =     13,       // (event, player, oldLevel)
 *     PLAYER_EVENT_ON_MONEY_CHANGE            =     14,       // (event, player, amount) - Can return new money amount
 *     PLAYER_EVENT_ON_REPUTATION_CHANGE       =     15,       // (event, player, factionId, standing, incremental) - Can return new standing
 *     PLAYER_EVENT_ON_TALENTS_CHANGE          =     16,       // (event, player, points)
 *     PLAYER_EVENT_ON_TALENTS_RESET           =     17,       // (event, player, noCost)
 *     PLAYER_EVENT_ON_CHAT                    =     18,       // (event, player, msg, Type, lang) - Can return false, newMessage
 *     PLAYER_EVENT_ON_WHISPER                 =     19,       // (event, player, msg, Type, lang, receiver) - Can return false, newMessage
 *     PLAYER_EVENT_ON_GROUP_CHAT              =     20,       // (event, player, msg, Type, lang, group) - Can return false, newMessage
 *     PLAYER_EVENT_ON_GUILD_CHAT              =     21,       // (event, player, msg, Type, lang, guild) - Can return false, newMessage
 *     PLAYER_EVENT_ON_CHANNEL_CHAT            =     22,       // (event, player, msg, Type, lang, channel) - Can return false, newMessage
 *     PLAYER_EVENT_ON_EMOTE                   =     23,       // (event, player, emote) - Not triggered on any known emote
 *     PLAYER_EVENT_ON_TEXT_EMOTE              =     24,       // (event, player, textEmote, emoteNum, guid)
 *     PLAYER_EVENT_ON_SAVE                    =     25,       // (event, player)
 *     PLAYER_EVENT_ON_BIND_TO_INSTANCE        =     26,       // (event, player, difficulty, mapid, permanent)
 *     PLAYER_EVENT_ON_UPDATE_ZONE             =     27,       // (event, player, newZone, newArea)
 *     PLAYER_EVENT_ON_MAP_CHANGE              =     28,       // (event, player)
 *     // Custom
 *     PLAYER_EVENT_ON_EQUIP                   =     29,       // (event, player, item, bag, slot)
 *     PLAYER_EVENT_ON_FIRST_LOGIN             =     30,       // (event, player)
 *     PLAYER_EVENT_ON_CAN_USE_ITEM            =     31,       // (event, player, itemEntry) - Can return InventoryResult enum value
 *     PLAYER_EVENT_ON_LOOT_ITEM               =     32,       // (event, player, item, count)
 *     PLAYER_EVENT_ON_ENTER_COMBAT            =     33,       // (event, player, enemy)
 *     PLAYER_EVENT_ON_LEAVE_COMBAT            =     34,       // (event, player)
 *     PLAYER_EVENT_ON_REPOP                   =     35,       // (event, player)
 *     PLAYER_EVENT_ON_RESURRECT               =     36,       // (event, player)
 *     PLAYER_EVENT_ON_LOOT_MONEY              =     37,       // (event, player, amount)
 *     PLAYER_EVENT_ON_QUEST_ABANDON           =     38,       // (event, player, questId)
 *     PLAYER_EVENT_ON_LEARN_TALENTS           =     39,       // (event, player, talentId, talentRank, spellid)
 *     // UNUSED                               =     40,       // (event, player)
 *     // UNUSED                               =     41,       // (event, player)
 *     PLAYER_EVENT_ON_COMMAND                 =     42,       // (event, player, command) - player is nil if command used from console. Can return false
 * };
 * ```
 */
declare function RegisterPlayerEvent(
  this:void,
  event: PlayerEvents.PLAYER_EVENT_ON_CHARACTER_CREATE,
  func: HookFunctionNoSelf<player_event_on_character_create>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterPlayerEvent(
  this:void,
  event: PlayerEvents.PLAYER_EVENT_ON_CHARACTER_DELETE,
  func: HookFunctionNoSelf<player_event_on_character_delete>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterPlayerEvent(
  this:void,
  event: PlayerEvents.PLAYER_EVENT_ON_LOGIN,
  func: HookFunctionNoSelf<player_event_on_login>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterPlayerEvent(
  this:void,
  event: PlayerEvents.PLAYER_EVENT_ON_LOGOUT,
  func: HookFunctionNoSelf<player_event_on_logout>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterPlayerEvent(
  this:void,
  event: PlayerEvents.PLAYER_EVENT_ON_SPELL_CAST,
  func: HookFunctionNoSelf<player_event_on_spell_cast>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterPlayerEvent(
  this:void,
  event: PlayerEvents.PLAYER_EVENT_ON_KILL_PLAYER,
  func: HookFunctionNoSelf<player_event_on_kill_player>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterPlayerEvent(
  this:void,
  event: PlayerEvents.PLAYER_EVENT_ON_KILL_CREATURE,
  func: HookFunctionNoSelf<player_event_on_kill_creature>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterPlayerEvent(
  this:void,
  event: PlayerEvents.PLAYER_EVENT_ON_KILLED_BY_CREATURE,
  func: HookFunctionNoSelf<player_event_on_killed_by_creature>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterPlayerEvent(
  this:void,
  event: PlayerEvents.PLAYER_EVENT_ON_DUEL_REQUEST,
  func: HookFunctionNoSelf<player_event_on_duel_request>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterPlayerEvent(
  this:void,
  event: PlayerEvents.PLAYER_EVENT_ON_DUEL_START,
  func: HookFunctionNoSelf<player_event_on_duel_start>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterPlayerEvent(
  this:void,
  event: PlayerEvents.PLAYER_EVENT_ON_DUEL_END,
  func: HookFunctionNoSelf<player_event_on_duel_end>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterPlayerEvent(
  this:void,
  event: PlayerEvents.PLAYER_EVENT_ON_GIVE_XP,
  func: HookFunctionNoSelf<player_event_on_give_xp>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterPlayerEvent(
  this:void,
  event: PlayerEvents.PLAYER_EVENT_ON_LEVEL_CHANGE,
  func: HookFunctionNoSelf<player_event_on_level_change>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterPlayerEvent(
  this:void,
  event: PlayerEvents.PLAYER_EVENT_ON_MONEY_CHANGE,
  func: HookFunctionNoSelf<player_event_on_money_change>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterPlayerEvent(
  this:void,
  event: PlayerEvents.PLAYER_EVENT_ON_REPUTATION_CHANGE,
  func: HookFunctionNoSelf<player_event_on_reputation_change>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterPlayerEvent(
  this:void,
  event: PlayerEvents.PLAYER_EVENT_ON_TALENTS_CHANGE,
  func: HookFunctionNoSelf<player_event_on_talents_change>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterPlayerEvent(
  this:void,
  event: PlayerEvents.PLAYER_EVENT_ON_TALENTS_RESET,
  func: HookFunctionNoSelf<player_event_on_talents_reset>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterPlayerEvent(
  this:void,
  event: PlayerEvents.PLAYER_EVENT_ON_CHAT,
  func: HookFunctionNoSelf<player_event_on_chat>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterPlayerEvent(
  this:void,
  event: PlayerEvents.PLAYER_EVENT_ON_WHISPER,
  func: HookFunctionNoSelf<player_event_on_whisper>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterPlayerEvent(
  this:void,
  event: PlayerEvents.PLAYER_EVENT_ON_GROUP_CHAT,
  func: HookFunctionNoSelf<player_event_on_group_chat>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterPlayerEvent(
  this:void,
  event: PlayerEvents.PLAYER_EVENT_ON_GUILD_CHAT,
  func: HookFunctionNoSelf<player_event_on_guild_chat>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterPlayerEvent(
  this:void,
  event: PlayerEvents.PLAYER_EVENT_ON_CHANNEL_CHAT,
  func: HookFunctionNoSelf<player_event_on_channel_chat>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterPlayerEvent(
  this:void,
  event: PlayerEvents.PLAYER_EVENT_ON_EMOTE,
  func: HookFunctionNoSelf<player_event_on_emote>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterPlayerEvent(
  this:void,
  event: PlayerEvents.PLAYER_EVENT_ON_TEXT_EMOTE,
  func: HookFunctionNoSelf<player_event_on_text_emote>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterPlayerEvent(
  this:void,
  event: PlayerEvents.PLAYER_EVENT_ON_SAVE,
  func: HookFunctionNoSelf<player_event_on_save>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterPlayerEvent(
  this:void,
  event: PlayerEvents.PLAYER_EVENT_ON_BIND_TO_INSTANCE,
  func: HookFunctionNoSelf<player_event_on_bind_to_instance>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterPlayerEvent(
  this:void,
  event: PlayerEvents.PLAYER_EVENT_ON_UPDATE_ZONE,
  func: HookFunctionNoSelf<player_event_on_update_zone>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterPlayerEvent(
  this:void,
  event: PlayerEvents.PLAYER_EVENT_ON_MAP_CHANGE,
  func: HookFunctionNoSelf<player_event_on_map_change>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterPlayerEvent(
  this:void,
  event: PlayerEvents.PLAYER_EVENT_ON_EQUIP,
  func: HookFunctionNoSelf<player_event_on_equip>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterPlayerEvent(
  this:void,
  event: PlayerEvents.PLAYER_EVENT_ON_FIRST_LOGIN,
  func: HookFunctionNoSelf<player_event_on_first_login>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterPlayerEvent(
  this:void,
  event: PlayerEvents.PLAYER_EVENT_ON_CAN_USE_ITEM,
  func: HookFunctionNoSelf<player_event_on_can_use_item>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterPlayerEvent(
  this:void,
  event: PlayerEvents.PLAYER_EVENT_ON_LOOT_ITEM,
  func: HookFunctionNoSelf<player_event_on_loot_item>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterPlayerEvent(
  this:void,
  event: PlayerEvents.PLAYER_EVENT_ON_ENTER_COMBAT,
  func: HookFunctionNoSelf<player_event_on_enter_combat>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterPlayerEvent(
  this:void,
  event: PlayerEvents.PLAYER_EVENT_ON_LEAVE_COMBAT,
  func: HookFunctionNoSelf<player_event_on_leave_combat>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterPlayerEvent(
  this:void,
  event: PlayerEvents.PLAYER_EVENT_ON_REPOP,
  func: HookFunctionNoSelf<player_event_on_repop>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterPlayerEvent(
  this:void,
  event: PlayerEvents.PLAYER_EVENT_ON_RESURRECT,
  func: HookFunctionNoSelf<player_event_on_resurrect>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterPlayerEvent(
  this:void,
  event: PlayerEvents.PLAYER_EVENT_ON_LOOT_MONEY,
  func: HookFunctionNoSelf<player_event_on_loot_money>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterPlayerEvent(
  this:void,
  event: PlayerEvents.PLAYER_EVENT_ON_QUEST_ABANDON,
  func: HookFunctionNoSelf<player_event_on_quest_abandon>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterPlayerEvent(
  this:void,
  event: PlayerEvents.PLAYER_EVENT_ON_LEARN_TALENTS,
  func: HookFunctionNoSelf<player_event_on_learn_talents>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterPlayerEvent(
  this:void,
  event: PlayerEvents.PLAYER_EVENT_ON_COMMAND,
  func: HookFunctionNoSelf<player_event_on_command>,
  shots?: number,
): (...args: any[]) => any;
