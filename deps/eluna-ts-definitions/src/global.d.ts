declare type HookFunction = (event:number, ...args: any[]) => any

declare type HookFunctionNoSelf<T extends HookFunction> = T extends (...a: infer U) => infer R ? (this: void, ...a:U) => R: never;

declare const enum CorpseType {
  CORPSE_BONES = 0,
  CORPSE_RESURRECTABLE_PVE = 1,
  CORPSE_RESURRECTABLE_PVP = 2,
}
declare const enum SelectAggroTarget {
  SELECT_TARGET_RANDOM = 0, // Just selects a random target
  SELECT_TARGET_TOPAGGRO, // Selects targets from top aggro to bottom
  SELECT_TARGET_BOTTOMAGGRO, // Selects targets from bottom aggro to top
  SELECT_TARGET_NEAREST,
  SELECT_TARGET_FARTHEST,
}
declare const enum CreatureFamily {
  CREATURE_FAMILY_NONE = 0, // TrinityCore only
  CREATURE_FAMILY_WOLF = 1,
  CREATURE_FAMILY_CAT = 2,
  CREATURE_FAMILY_SPIDER = 3,
  CREATURE_FAMILY_BEAR = 4,
  CREATURE_FAMILY_BOAR = 5,
  CREATURE_FAMILY_CROCOLISK = 6,
  CREATURE_FAMILY_CARRION_BIRD = 7,
  CREATURE_FAMILY_CRAB = 8,
  CREATURE_FAMILY_GORILLA = 9,
  CREATURE_FAMILY_HORSE_CUSTOM = 10, // Does not exist in DBC but used for horse like beasts in DB
  CREATURE_FAMILY_RAPTOR = 11,
  CREATURE_FAMILY_TALLSTRIDER = 12,
  CREATURE_FAMILY_FELHUNTER = 15,
  CREATURE_FAMILY_VOIDWALKER = 16,
  CREATURE_FAMILY_SUCCUBUS = 17,
  CREATURE_FAMILY_DOOMGUARD = 19,
  CREATURE_FAMILY_SCORPID = 20,
  CREATURE_FAMILY_TURTLE = 21,
  CREATURE_FAMILY_IMP = 23,
  CREATURE_FAMILY_BAT = 24,
  CREATURE_FAMILY_HYENA = 25,
  CREATURE_FAMILY_BIRD_OF_PREY = 26, // Named CREATURE_FAMILY_OWL in Mangos
  CREATURE_FAMILY_WIND_SERPENT = 27,
  CREATURE_FAMILY_REMOTE_CONTROL = 28,
  CREATURE_FAMILY_FELGUARD = 29, // This and below is TBC+
  CREATURE_FAMILY_DRAGONHAWK = 30,
  CREATURE_FAMILY_RAVAGER = 31,
  CREATURE_FAMILY_WARP_STALKER = 32,
  CREATURE_FAMILY_SPOREBAT = 33,
  CREATURE_FAMILY_NETHER_RAY = 34,
  CREATURE_FAMILY_SERPENT = 35,
  CREATURE_FAMILY_SEA_LION = 36, // TBC only
  CREATURE_FAMILY_MOTH = 37, // This and below is WotLK+
  CREATURE_FAMILY_CHIMAERA = 38,
  CREATURE_FAMILY_DEVILSAUR = 39,
  CREATURE_FAMILY_GHOUL = 40,
  CREATURE_FAMILY_SILITHID = 41,
  CREATURE_FAMILY_WORM = 42,
  CREATURE_FAMILY_RHINO = 43,
  CREATURE_FAMILY_WASP = 44,
  CREATURE_FAMILY_CORE_HOUND = 45,
  CREATURE_FAMILY_SPIRIT_BEAST = 46,
}
declare const enum GOState {
  GO_STATE_ACTIVE = 0, // show in world as used and not reset (closed door open)
  GO_STATE_READY = 1, // show in world as ready (closed door close)
  GO_STATE_ACTIVE_ALTERNATIVE = 2, // show in world as used in alt way and not reset (closed door open by cannon fire)
}
declare const enum LootState {
  GO_NOT_READY = 0,
  GO_READY, // can be ready but despawned, and then not possible activate until spawn
  GO_ACTIVATED,
  GO_JUST_DEACTIVATED,
}
declare const enum BanMode {
  BAN_ACCOUNT = 0,
  BAN_CHARACTER = 1,
  BAN_IP = 2,
}
declare const enum LocaleConstant {
  LOCALE_enUS = 0,
  LOCALE_koKR = 1,
  LOCALE_frFR = 2,
  LOCALE_deDE = 3,
  LOCALE_zhCN = 4,
  LOCALE_zhTW = 5,
  LOCALE_esES = 6,
  LOCALE_esMX = 7,
  LOCALE_ruRU = 8,
}
declare const enum TeamId {
  TEAM_ALLIANCE = 0,
  TEAM_HORDE = 1,
  TEAM_NEUTRAL = 2,
}
declare const enum BGEvents {
  BG_EVENT_ON_START = 1, // (event, bg, bgId, instanceId) - Needs to be added to TC
  BG_EVENT_ON_END = 2, // (event, bg, bgId, instanceId, winner) - Needs to be added to TC
  BG_EVENT_ON_CREATE = 3, // (event, bg, bgId, instanceId) - Needs to be added to TC
  BG_EVENT_ON_PRE_DESTROY = 4, // (event, bg, bgId, instanceId) - Needs to be added to TC
}
declare const enum CreatureEvents {
  CREATURE_EVENT_ON_ENTER_COMBAT = 1, // (event, creature, target) - Can return true to stop normal action
  CREATURE_EVENT_ON_LEAVE_COMBAT = 2, // (event, creature) - Can return true to stop normal action
  CREATURE_EVENT_ON_TARGET_DIED = 3, // (event, creature, victim) - Can return true to stop normal action
  CREATURE_EVENT_ON_DIED = 4, // (event, creature, killer) - Can return true to stop normal action
  CREATURE_EVENT_ON_SPAWN = 5, // (event, creature) - Can return true to stop normal action
  CREATURE_EVENT_ON_REACH_WP = 6, // (event, creature, type, id) - Can return true to stop normal action
  CREATURE_EVENT_ON_AIUPDATE = 7, // (event, creature, diff) - Can return true to stop normal action
  CREATURE_EVENT_ON_RECEIVE_EMOTE = 8, // (event, creature, player, emoteid) - Can return true to stop normal action
  CREATURE_EVENT_ON_DAMAGE_TAKEN = 9, // (event, creature, attacker, damage) - Can return true to stop normal action, can return new damage as second return value.
  CREATURE_EVENT_ON_PRE_COMBAT = 10, // (event, creature, target) - Can return true to stop normal action
  // UNUSED
  CREATURE_EVENT_ON_OWNER_ATTACKED = 12, // (event, creature, target) - Can return true to stop normal action            // Not on mangos
  CREATURE_EVENT_ON_OWNER_ATTACKED_AT = 13, // (event, creature, attacker) - Can return true to stop normal action          // Not on mangos
  CREATURE_EVENT_ON_HIT_BY_SPELL = 14, // (event, creature, caster, spellid) - Can return true to stop normal action
  CREATURE_EVENT_ON_SPELL_HIT_TARGET = 15, // (event, creature, target, spellid) - Can return true to stop normal action
  // UNUSED                                         = 16, // (event, creature)
  // UNUSED                                         = 17, // (event, creature)
  // UNUSED                                         = 18, // (event, creature)
  CREATURE_EVENT_ON_JUST_SUMMONED_CREATURE = 19, // (event, creature, summon) - Can return true to stop normal action
  CREATURE_EVENT_ON_SUMMONED_CREATURE_DESPAWN = 20, // (event, creature, summon) - Can return true to stop normal action
  CREATURE_EVENT_ON_SUMMONED_CREATURE_DIED = 21, // (event, creature, summon, killer) - Can return true to stop normal action    // Not on mangos
  CREATURE_EVENT_ON_SUMMONED = 22, // (event, creature, summoner) - Can return true to stop normal action
  CREATURE_EVENT_ON_RESET = 23, // (event, creature)
  CREATURE_EVENT_ON_REACH_HOME = 24, // (event, creature) - Can return true to stop normal action
  // UNUSED                                         = 25, // (event, creature)
  CREATURE_EVENT_ON_CORPSE_REMOVED = 26, // (event, creature, respawndelay) - Can return true to stop normal action, can return new respawndelay as second return value
  CREATURE_EVENT_ON_MOVE_IN_LOS = 27, // (event, creature, unit) - Can return true to stop normal action. Does not actually check LOS, just uses the sight range
  // UNUSED                                         = 28, // (event, creature)
  // UNUSED                                         = 29, // (event, creature)
  CREATURE_EVENT_ON_DUMMY_EFFECT = 30, // (event, caster, spellid, effindex, creature)
  CREATURE_EVENT_ON_QUEST_ACCEPT = 31, // (event, player, creature, quest) - Can return true
  // UNUSED                                         = 32, // (event, creature)
  // UNUSED                                         = 33, // (event, creature)
  CREATURE_EVENT_ON_QUEST_REWARD = 34, // (event, player, creature, quest, opt) - Can return true
  CREATURE_EVENT_ON_DIALOG_STATUS = 35, // (event, player, creature)
  CREATURE_EVENT_ON_ADD = 36, // (event, creature)
  CREATURE_EVENT_ON_REMOVE = 37, // (event, creature)
}
declare const enum GossipEvents {
  GOSSIP_EVENT_ON_HELLO = 1, // (event, player, object) - Object is the Creature/GameObject/Item. Can return false to do default action. For item gossip can return false to stop spell casting.
  GOSSIP_EVENT_ON_SELECT = 2, // (event, player, object, sender, intid, code, menu_id) - Object is the Creature/GameObject/Item/Player, menu_id is only for player gossip. Can return false to do default action.
}
declare const enum GameObjectEvents {
  GAMEOBJECT_EVENT_ON_AIUPDATE = 1, // (event, go, diff)
  GAMEOBJECT_EVENT_ON_SPAWN = 2, // (event, go)
  GAMEOBJECT_EVENT_ON_DUMMY_EFFECT = 3, // (event, caster, spellid, effindex, go) - Can return true to stop normal action
  GAMEOBJECT_EVENT_ON_QUEST_ACCEPT = 4, // (event, player, go, quest) - Can return true to stop normal action
  GAMEOBJECT_EVENT_ON_QUEST_REWARD = 5, // (event, player, go, quest, opt) - Can return true to stop normal action
  GAMEOBJECT_EVENT_ON_DIALOG_STATUS = 6, // (event, player, go)
  GAMEOBJECT_EVENT_ON_DESTROYED = 7, // (event, go, attacker)
  GAMEOBJECT_EVENT_ON_DAMAGED = 8, // (event, go, attacker)
  GAMEOBJECT_EVENT_ON_LOOT_STATE_CHANGE = 9, // (event, go, state)
  GAMEOBJECT_EVENT_ON_GO_STATE_CHANGED = 10, // (event, go, state)
  // UNUSED                                       = 11,   // (event, gameobject)
  GAMEOBJECT_EVENT_ON_ADD = 12, // (event, gameobject)
  GAMEOBJECT_EVENT_ON_REMOVE = 13, // (event, gameobject)
  GAMEOBJECT_EVENT_ON_USE = 14, // (event, go, player) - Can return true to stop normal action
}
declare const enum GroupEvents {
  // Group
  GROUP_EVENT_ON_MEMBER_ADD = 1, // (event, group, guid)
  GROUP_EVENT_ON_MEMBER_INVITE = 2, // (event, group, guid)
  GROUP_EVENT_ON_MEMBER_REMOVE = 3, // (event, group, guid, method, kicker, reason)
  GROUP_EVENT_ON_LEADER_CHANGE = 4, // (event, group, newLeaderGuid, oldLeaderGuid)
  GROUP_EVENT_ON_DISBAND = 5, // (event, group)
  GROUP_EVENT_ON_CREATE = 6, // (event, group, leaderGuid, groupType)
}
declare const enum GuildEvents {
  // Guild
  GUILD_EVENT_ON_ADD_MEMBER = 1, // (event, guild, player, rank)
  GUILD_EVENT_ON_REMOVE_MEMBER = 2, // (event, guild, player, isDisbanding)
  GUILD_EVENT_ON_MOTD_CHANGE = 3, // (event, guild, newMotd)
  GUILD_EVENT_ON_INFO_CHANGE = 4, // (event, guild, newInfo)
  GUILD_EVENT_ON_CREATE = 5, // (event, guild, leader, name)  // Not on TC
  GUILD_EVENT_ON_DISBAND = 6, // (event, guild)
  GUILD_EVENT_ON_MONEY_WITHDRAW = 7, // (event, guild, player, amount, isRepair) - Can return new money amount
  GUILD_EVENT_ON_MONEY_DEPOSIT = 8, // (event, guild, player, amount) - Can return new money amount
  GUILD_EVENT_ON_ITEM_MOVE = 9, // (event, guild, player, item, isSrcBank, srcContainer, srcSlotId, isDestBank, destContainer, destSlotId)   // TODO
  GUILD_EVENT_ON_EVENT = 10, // (event, guild, eventType, plrGUIDLow1, plrGUIDLow2, newRank)  // TODO
  GUILD_EVENT_ON_BANK_EVENT = 11, // (event, guild, eventType, tabId, playerGUIDLow, itemOrMoney, itemStackCount, destTabId)
}
declare const enum InstanceEvents {
  INSTANCE_EVENT_ON_INITIALIZE = 1, // (event, instance_data, map)
  INSTANCE_EVENT_ON_LOAD = 2, // (event, instance_data, map)
  INSTANCE_EVENT_ON_UPDATE = 3, // (event, instance_data, map, diff)
  INSTANCE_EVENT_ON_PLAYER_ENTER = 4, // (event, instance_data, map, player)
  INSTANCE_EVENT_ON_CREATURE_CREATE = 5, // (event, instance_data, map, creature)
  INSTANCE_EVENT_ON_GAMEOBJECT_CREATE = 6, // (event, instance_data, map, go)
  INSTANCE_EVENT_ON_CHECK_ENCOUNTER_IN_PROGRESS = 7, // (event, instance_data, map)
}
declare const enum ItemEvents {
  ITEM_EVENT_ON_DUMMY_EFFECT = 1, // (event, caster, spellid, effindex, item)
  ITEM_EVENT_ON_USE = 2, // (event, player, item, target) - Can return false to stop the spell casting
  ITEM_EVENT_ON_QUEST_ACCEPT = 3, // (event, player, item, quest) - Can return true
  ITEM_EVENT_ON_EXPIRE = 4, // (event, player, itemid) - Can return true
  ITEM_EVENT_ON_REMOVE = 5, // (event, player, item) - Can return true
}
declare const enum PacketEvents {
  PACKET_EVENT_ON_PACKET_RECEIVE = 5, // (event, packet, player) - Player only if accessible. Can return false, newPacket
  PACKET_EVENT_ON_PACKET_RECEIVE_UNKNOWN = 6, // Not Implemented
  PACKET_EVENT_ON_PACKET_SEND = 7, // (event, packet, player) - Player only if accessible. Can return false, newPacket
}
declare const enum PlayerEvents {
  PLAYER_EVENT_ON_CHARACTER_CREATE = 1, // (event, player)
  PLAYER_EVENT_ON_CHARACTER_DELETE = 2, // (event, guid)
  PLAYER_EVENT_ON_LOGIN = 3, // (event, player)
  PLAYER_EVENT_ON_LOGOUT = 4, // (event, player)
  PLAYER_EVENT_ON_SPELL_CAST = 5, // (event, player, spell, skipCheck)
  PLAYER_EVENT_ON_KILL_PLAYER = 6, // (event, killer, killed)
  PLAYER_EVENT_ON_KILL_CREATURE = 7, // (event, killer, killed)
  PLAYER_EVENT_ON_KILLED_BY_CREATURE = 8, // (event, killer, killed)
  PLAYER_EVENT_ON_DUEL_REQUEST = 9, // (event, target, challenger)
  PLAYER_EVENT_ON_DUEL_START = 10, // (event, player1, player2)
  PLAYER_EVENT_ON_DUEL_END = 11, // (event, winner, loser, type)
  PLAYER_EVENT_ON_GIVE_XP = 12, // (event, player, amount, victim) - Can return new XP amount
  PLAYER_EVENT_ON_LEVEL_CHANGE = 13, // (event, player, oldLevel)
  PLAYER_EVENT_ON_MONEY_CHANGE = 14, // (event, player, amount) - Can return new money amount
  PLAYER_EVENT_ON_REPUTATION_CHANGE = 15, // (event, player, factionId, standing, incremental) - Can return new standing
  PLAYER_EVENT_ON_TALENTS_CHANGE = 16, // (event, player, points)
  PLAYER_EVENT_ON_TALENTS_RESET = 17, // (event, player, noCost)
  PLAYER_EVENT_ON_CHAT = 18, // (event, player, msg, Type, lang) - Can return false, newMessage
  PLAYER_EVENT_ON_WHISPER = 19, // (event, player, msg, Type, lang, receiver) - Can return false, newMessage
  PLAYER_EVENT_ON_GROUP_CHAT = 20, // (event, player, msg, Type, lang, group) - Can return false, newMessage
  PLAYER_EVENT_ON_GUILD_CHAT = 21, // (event, player, msg, Type, lang, guild) - Can return false, newMessage
  PLAYER_EVENT_ON_CHANNEL_CHAT = 22, // (event, player, msg, Type, lang, channel) - Can return false, newMessage
  PLAYER_EVENT_ON_EMOTE = 23, // (event, player, emote) - Not triggered on any known emote
  PLAYER_EVENT_ON_TEXT_EMOTE = 24, // (event, player, textEmote, emoteNum, guid)
  PLAYER_EVENT_ON_SAVE = 25, // (event, player)
  PLAYER_EVENT_ON_BIND_TO_INSTANCE = 26, // (event, player, difficulty, mapid, permanent)
  PLAYER_EVENT_ON_UPDATE_ZONE = 27, // (event, player, newZone, newArea)
  PLAYER_EVENT_ON_MAP_CHANGE = 28, // (event, player)

  // Custom
  PLAYER_EVENT_ON_EQUIP = 29, // (event, player, item, bag, slot)
  PLAYER_EVENT_ON_FIRST_LOGIN = 30, // (event, player)
  PLAYER_EVENT_ON_CAN_USE_ITEM = 31, // (event, player, itemEntry) - Can return InventoryResult enum value
  PLAYER_EVENT_ON_LOOT_ITEM = 32, // (event, player, item, count)
  PLAYER_EVENT_ON_ENTER_COMBAT = 33, // (event, player, enemy)
  PLAYER_EVENT_ON_LEAVE_COMBAT = 34, // (event, player)
  PLAYER_EVENT_ON_REPOP = 35, // (event, player)
  PLAYER_EVENT_ON_RESURRECT = 36, // (event, player)
  PLAYER_EVENT_ON_LOOT_MONEY = 37, // (event, player, amount)
  PLAYER_EVENT_ON_QUEST_ABANDON = 38, // (event, player, questId)
  PLAYER_EVENT_ON_LEARN_TALENTS = 39, // (event, player, talentId, talentRank, spellid)
  // UNUSED                               =     40,       // (event, player)
  // UNUSED                               =     41,       // (event, player)
  PLAYER_EVENT_ON_COMMAND = 42, // (event, player, command) - player is nil if command used from console. Can return false
}
declare const enum ServerEvents {
  // Server
  SERVER_EVENT_ON_NETWORK_START = 1, // Not Implemented
  SERVER_EVENT_ON_NETWORK_STOP = 2, // Not Implemented
  SERVER_EVENT_ON_SOCKET_OPEN = 3, // Not Implemented
  SERVER_EVENT_ON_SOCKET_CLOSE = 4, // Not Implemented
  SERVER_EVENT_ON_PACKET_RECEIVE = 5, // (event, packet, player) - Player only if accessible. Can return false, newPacket
  SERVER_EVENT_ON_PACKET_RECEIVE_UNKNOWN = 6, // Not Implemented
  SERVER_EVENT_ON_PACKET_SEND = 7, // (event, packet, player) - Player only if accessible. Can return false, newPacket

  // World
  WORLD_EVENT_ON_OPEN_STATE_CHANGE = 8, // (event, open) - Needs core support on Mangos
  WORLD_EVENT_ON_CONFIG_LOAD = 9, // (event, reload)
  // UNUSED                               =     10,
  WORLD_EVENT_ON_SHUTDOWN_INIT = 11, // (event, code, mask)
  WORLD_EVENT_ON_SHUTDOWN_CANCEL = 12, // (event)
  WORLD_EVENT_ON_UPDATE = 13, // (event, diff)
  WORLD_EVENT_ON_STARTUP = 14, // (event)
  WORLD_EVENT_ON_SHUTDOWN = 15, // (event)

  // Eluna
  ELUNA_EVENT_ON_LUA_STATE_CLOSE = 16, // (event) - triggers just before shutting down eluna (on shutdown and restart)

  // Map
  MAP_EVENT_ON_CREATE = 17, // (event, map)
  MAP_EVENT_ON_DESTROY = 18, // (event, map)
  MAP_EVENT_ON_GRID_LOAD = 19, // Not Implemented
  MAP_EVENT_ON_GRID_UNLOAD = 20, // Not Implemented
  MAP_EVENT_ON_PLAYER_ENTER = 21, // (event, map, player)
  MAP_EVENT_ON_PLAYER_LEAVE = 22, // (event, map, player)
  MAP_EVENT_ON_UPDATE = 23, // (event, map, diff)

  // Area trigger
  TRIGGER_EVENT_ON_TRIGGER = 24, // (event, player, triggerId) - Can return true

  // Weather
  WEATHER_EVENT_ON_CHANGE = 25, // (event, zoneId, state, grade)

  // Auction house
  AUCTION_EVENT_ON_ADD = 26, // (event, auctionId, owner, item, expireTime, buyout, startBid, currentBid, bidderGUIDLow)
  AUCTION_EVENT_ON_REMOVE = 27, // (event, auctionId, owner, item, expireTime, buyout, startBid, currentBid, bidderGUIDLow)
  AUCTION_EVENT_ON_SUCCESSFUL = 28, // (event, auctionId, owner, item, expireTime, buyout, startBid, currentBid, bidderGUIDLow)
  AUCTION_EVENT_ON_EXPIRE = 29, // (event, auctionId, owner, item, expireTime, buyout, startBid, currentBid, bidderGUIDLow)

  // AddOns
  ADDON_EVENT_ON_MESSAGE = 30, // (event, sender, type, prefix, msg, target) - target can be nil/whisper_target/guild/group/channel. Can return false

  WORLD_EVENT_ON_DELETE_CREATURE = 31, // (event, creature)
  WORLD_EVENT_ON_DELETE_GAMEOBJECT = 32, // (event, gameobject)

  // Eluna
  ELUNA_EVENT_ON_LUA_STATE_OPEN = 33, // (event) - triggers after all scripts are loaded

  GAME_EVENT_START = 34, // (event, gameeventid)
  GAME_EVENT_STOP = 35, // (event, gameeventid)
}
declare const enum MailStationery {
  MAIL_STATIONERY_TEST = 1,
  MAIL_STATIONERY_DEFAULT = 41,
  MAIL_STATIONERY_GM = 61,
  MAIL_STATIONERY_AUCTION = 62,
  MAIL_STATIONERY_VAL = 64, // Valentine
  MAIL_STATIONERY_CHR = 65, // Christmas
  MAIL_STATIONERY_ORP = 67, // Orphan
}
declare const enum RemoveMethod {
  GROUP_REMOVEMETHOD_DEFAULT = 0,
  GROUP_REMOVEMETHOD_KICK = 1,
  GROUP_REMOVEMETHOD_LEAVE = 2,
  GROUP_REMOVEMETHOD_KICK_LFG = 3,
}
declare const enum WeatherType {
  WEATHER_TYPE_FINE = 0,
  WEATHER_TYPE_RAIN = 1,
  WEATHER_TYPE_SNOW = 2,
  WEATHER_TYPE_STORM = 3,
  WEATHER_TYPE_THUNDERS = 86,
  WEATHER_TYPE_BLACKRAIN = 90,
}
declare const enum TypeID {
  TYPEID_OBJECT = 0,
  TYPEID_ITEM = 1,
  TYPEID_CONTAINER = 2,
  TYPEID_UNIT = 3,
  TYPEID_PLAYER = 4,
  TYPEID_GAMEOBJECT = 5,
  TYPEID_DYNAMICOBJECT = 6,
  TYPEID_CORPSE = 7,
}
declare const enum EquipmentSlots // 19 slots
 {
  EQUIPMENT_SLOT_START = 0,
  EQUIPMENT_SLOT_HEAD = 0,
  EQUIPMENT_SLOT_NECK = 1,
  EQUIPMENT_SLOT_SHOULDERS = 2,
  EQUIPMENT_SLOT_BODY = 3,
  EQUIPMENT_SLOT_CHEST = 4,
  EQUIPMENT_SLOT_WAIST = 5,
  EQUIPMENT_SLOT_LEGS = 6,
  EQUIPMENT_SLOT_FEET = 7,
  EQUIPMENT_SLOT_WRISTS = 8,
  EQUIPMENT_SLOT_HANDS = 9,
  EQUIPMENT_SLOT_FINGER1 = 10,
  EQUIPMENT_SLOT_FINGER2 = 11,
  EQUIPMENT_SLOT_TRINKET1 = 12,
  EQUIPMENT_SLOT_TRINKET2 = 13,
  EQUIPMENT_SLOT_BACK = 14,
  EQUIPMENT_SLOT_MAINHAND = 15,
  EQUIPMENT_SLOT_OFFHAND = 16,
  EQUIPMENT_SLOT_RANGED = 17,
  EQUIPMENT_SLOT_TABARD = 18,
  EQUIPMENT_SLOT_END = 19,
}
declare const enum InventorySlots // 4 slots
 {
  INVENTORY_SLOT_BAG_START = 19,
  INVENTORY_SLOT_BAG_END = 23,
}
declare const enum QuestFlags {
  // Flags used at server and sent to client
  QUEST_FLAGS_NONE = 0x0,
  QUEST_FLAGS_STAY_ALIVE = 0x1, // Not used currently
  QUEST_FLAGS_PARTY_ACCEPT = 0x2, // Not used currently. If player in party, all players that can accept this quest will receive confirmation box to accept quest CMSG_QUEST_CONFIRM_ACCEPT/SMSG_QUEST_CONFIRM_ACCEPT
  QUEST_FLAGS_EXPLORATION = 0x4, // Not used currently
  QUEST_FLAGS_SHARABLE = 0x8, // Can be shared: Player::CanShareQuest()
  QUEST_FLAGS_HAS_CONDITION = 0x10, // Not used currently
  QUEST_FLAGS_HIDE_REWARD_POI = 0x20, // Not used currently: Unsure of content
  QUEST_FLAGS_RAID = 0x40, // Not used currently
  QUEST_FLAGS_TBC = 0x80, // Not used currently: Available if TBC expansion enabled only
  QUEST_FLAGS_NO_MONEY_FROM_XP = 0x100, // Not used currently: Experience is not converted to gold at max level
  QUEST_FLAGS_HIDDEN_REWARDS = 0x200, // Items and money rewarded only sent in SMSG_QUESTGIVER_OFFER_REWARD (not in SMSG_QUESTGIVER_QUEST_DETAILS or in client quest log(SMSG_QUEST_QUERY_RESPONSE))
  QUEST_FLAGS_TRACKING = 0x400, // These quests are automatically rewarded on quest complete and they will never appear in quest log client side.
  QUEST_FLAGS_DEPRECATE_REPUTATION = 0x800, // Not used currently
  QUEST_FLAGS_DAILY = 0x1000, // Used to know quest is Daily one
  QUEST_FLAGS_FLAGS_PVP = 0x2000, // Having this quest in log forces PvP flag
  QUEST_FLAGS_UNAVAILABLE = 0x4000, // Used on quests that are not generically available
  QUEST_FLAGS_WEEKLY = 0x8000,
  QUEST_FLAGS_AUTOCOMPLETE = 0x10000, // auto complete
  QUEST_FLAGS_DISPLAY_ITEM_IN_TRACKER = 0x20000, // Displays usable item in quest tracker
  QUEST_FLAGS_OBJ_TEXT = 0x40000, // use Objective text as Complete text
  QUEST_FLAGS_AUTO_ACCEPT = 0x80000, // The client recognizes this flag as auto-accept. However, NONE of the current quests (3.3.5a) have this flag. Maybe blizz used to use it, or will use it in the future.
  // ... 4.x added flags up to 0x80000000 - all unknown for now
}
declare const enum SpellSchoolMask {
  SPELL_SCHOOL_MASK_NONE = 0,
  SPELL_SCHOOL_MASK_NORMAL = 1,
  SPELL_SCHOOL_MASK_HOLY = 2,
  SPELL_SCHOOL_MASK_FIRE = 4,
  SPELL_SCHOOL_MASK_NATURE = 8,
  SPELL_SCHOOL_MASK_FROST = 16,
  SPELL_SCHOOL_MASK_SHADOW = 32,
  SPELL_SCHOOL_MASK_ARCANE = 64,
}
declare const enum SpellSchools {
  SPELL_SCHOOL_NORMAL = 0,
  SPELL_SCHOOL_HOLY = 1,
  SPELL_SCHOOL_FIRE = 2,
  SPELL_SCHOOL_NATURE = 3,
  SPELL_SCHOOL_FROST = 4,
  SPELL_SCHOOL_SHADOW = 5,
  SPELL_SCHOOL_ARCANE = 6,
  MAX_SPELL_SCHOOL = 7,
}
declare const enum CreatureType {
  CREATURE_TYPE_BEAST = 1,
  CREATURE_TYPE_DRAGONKIN = 2,
  CREATURE_TYPE_DEMON = 3,
  CREATURE_TYPE_ELEMENTAL = 4,
  CREATURE_TYPE_GIANT = 5,
  CREATURE_TYPE_UNDEAD = 6,
  CREATURE_TYPE_HUMANOID = 7,
  CREATURE_TYPE_CRITTER = 8,
  CREATURE_TYPE_MECHANICAL = 9,
  CREATURE_TYPE_NOT_SPECIFIED = 10,
  CREATURE_TYPE_TOTEM = 11,
  CREATURE_TYPE_NON_COMBAT_PET = 12, // This and below is TBC+
  CREATURE_TYPE_GAS_CLOUD = 13,
}
declare const enum CurrentSpellTypes {
  CURRENT_MELEE_SPELL = 0,
  CURRENT_GENERIC_SPELL = 1,
  CURRENT_CHANNELED_SPELL = 2,
  CURRENT_AUTOREPEAT_SPELL = 3,
}
declare const enum Powers {
  POWER_MANA = 0,
  POWER_RAGE = 1,
  POWER_FOCUS = 2,
  POWER_ENERGY = 3,
  POWER_HAPPINESS = 4,
  POWER_RUNE = 5,
  POWER_RUNIC_POWER = 6,
  MAX_POWERS = 7,
  POWER_ALL = 127, // default for class?
  POWER_HEALTH = 0xFFFFFFFE, // (-2 as signed value)
}
declare const enum MovementGeneratorType {
  IDLE_MOTION_TYPE = 0,
  RANDOM_MOTION_TYPE = 1,
  WAYPOINT_MOTION_TYPE = 2,
  MAX_DB_MOTION_TYPE = 3,
  ANIMAL_RANDOM_MOTION_TYPE = 3, // TC

  CONFUSED_MOTION_TYPE = 4,
  CHASE_MOTION_TYPE = 5,
  HOME_MOTION_TYPE = 6,
  FLIGHT_MOTION_TYPE = 7,
  POINT_MOTION_TYPE = 8,
  FLEEING_MOTION_TYPE = 9,
  DISTRACT_MOTION_TYPE = 10,
  ASSISTANCE_MOTION_TYPE = 11,
  ASSISTANCE_DISTRACT_MOTION_TYPE = 12,
  TIMED_FLEEING_MOTION_TYPE = 13,
  FOLLOW_MOTION_TYPE = 14,
  EFFECT_MOTION_TYPE = 15, // mangos
  ROTATE_MOTION_TYPE = 15, // TC
  EFFECT_MOTION_TYPE_TC = 16, // TC
  NULL_MOTION_TYPE = 17, // TC
}
declare const enum UnitMoveType {
  MOVE_WALK = 0,
  MOVE_RUN = 1,
  MOVE_RUN_BACK = 2,
  MOVE_SWIM = 3,
  MOVE_SWIM_BACK = 4,
  MOVE_TURN_RATE = 5,
  MOVE_FLIGHT = 6,
  MOVE_FLIGHT_BACK = 7,
  MOVE_PITCH_RATE = 8,
}
declare const enum SheathState {
  SHEATH_STATE_UNARMED = 0, // non prepared weapon
  SHEATH_STATE_MELEE = 1, // prepared melee weapon
  SHEATH_STATE_RANGED = 2, // prepared ranged weapon
}
declare const enum TempSummonType {
  TEMPSUMMON_TIMED_OR_DEAD_DESPAWN = 1, // despawns after a specified time OR when the creature disappears
  TEMPSUMMON_TIMED_OR_CORPSE_DESPAWN = 2, // despawns after a specified time OR when the creature dies
  TEMPSUMMON_TIMED_DESPAWN = 3, // despawns after a specified time
  TEMPSUMMON_TIMED_DESPAWN_OUT_OF_COMBAT = 4, // despawns after a specified time after the creature is out of combat
  TEMPSUMMON_CORPSE_DESPAWN = 5, // despawns instantly after death
  TEMPSUMMON_CORPSE_TIMED_DESPAWN = 6, // despawns after a specified time after death
  TEMPSUMMON_DEAD_DESPAWN = 7, // despawns when the creature disappears
  TEMPSUMMON_MANUAL_DESPAWN = 8, // despawns when UnSummon() is called
  TEMPSUMMON_TIMED_OOC_OR_CORPSE_DESPAWN = 9, // despawns after a specified time (OOC) OR when the creature dies
  TEMPSUMMON_TIMED_OOC_OR_DEAD_DESPAWN = 10, // despawns after a specified time (OOC) OR when the creature disappears
}

/**
The persistent effect of a Spell that remains on a Unit after the Spell has been cast.

As an example, if you cast a damage-over-time spell on a target, an Aura is put on the target that deals damage continuously.

Auras on your player are displayed in-game as a series of icons to the left of the mini-map.

 */
declare class Aura {
  /**
     * Returns the ID of the [Spell] that caused this [Aura] to be applied.
     */
  GetAuraId(): number;

  /**
     * Returns the [Unit] that casted the [Spell] that caused this [Aura] to be applied.
     */
  GetCaster(): Unit;

  /**
     * Returns the GUID of the [Unit] that casted the [Spell] that caused this [Aura] to be applied.
     */
  GetCasterGUID(): string;

  /**
     * Returns the level of the [Unit] that casted the [Spell] that caused this [Aura] to be applied.
     */
  GetCasterLevel(): number;

  /**
     * Returns the amount of time left until the [Aura] expires.
     */
  GetDuration(): number;

  /**
     * Returns the amount of time this [Aura] lasts when applied.
     * To determine how much time has passed since this Aura was applied,
     *   subtract the result of [Aura]:GetDuration from the result of this method.
     */
  GetMaxDuration(): number;

  /**
     * Returns the [Unit] that the [Aura] has been applied to.
     */
  GetOwner(): Unit;

  /**
     * Returns the number of times the [Aura] has "stacked".
     * This is the same as the number displayed on the [Aura]'s icon in-game.
     */
  GetStackAmount(): number;

  /**
     * Remove this [Aura] from the [Unit] it is applied to.
     */
  Remove(): void;

  /**
     * Change the amount of time before the [Aura] expires.
     */
  SetDuration(duration: number): void;

  /**
     * Change the maximum amount of time before the [Aura] expires.
     * This does not affect the current duration of the [Aura], but if the [Aura]
     *   is reset to the maximum duration, it will instead change to `duration`.
     */
  SetMaxDuration(duration: number): void;

  /**
     * Change the amount of times the [Aura] has "stacked" on the [Unit].
     * If `amount` is greater than or equal to the current number of stacks,
     *   then the [Aura] has its duration reset to the maximum duration.
     */
  SetStackAmount(amount: number): void;
}

/**
Contains the state of a battleground, e.g. Warsong Gulch, Arathi Basin, etc.

 */
declare class BattleGround {
  /**
     * Returns the amount of alive players in the [BattleGround] by the team ID.
     */
  GetAlivePlayersCountByTeam(team: Team): number;

  /**
     * Returns the bonus honor given by amount of kills in the specific [BattleGround].
     */
  GetBonusHonorFromKillCount(kills: number): number;

  /**
     * Returns the bracket ID of the specific [BattleGround].
     */
  GetBracketId(): number;

  /**
     * Returns the end time of the [BattleGround].
     */
  GetEndTime(): number;

  /**
     * Returns the amount of free slots for the selected team in the specific [BattleGround].
     */
  GetFreeSlotsForTeam(team: Team): number;

  /**
     * Returns the instance ID of the [BattleGround].
     */
  GetInstanceId(): number;

  /**
     * Returns the [Map] of the [BattleGround].
     */
  GetMap(): EMap;

  /**
     * Returns the map ID of the [BattleGround].
     */
  GetMapId(): number;

  /**
     * Returns the max allowed [Player] level of the specific [BattleGround].
     */
  GetMaxLevel(): number;

  /**
     * Returns the maximum allowed [Player] count of the specific [BattleGround].
     */
  GetMaxPlayers(): number;

  /**
     * Returns the maximum allowed [Player] count per team of the specific [BattleGround].
     */
  GetMaxPlayersPerTeam(): number;

  /**
     * Returns the minimum allowed [Player] level of the specific [BattleGround].
     */
  GetMinLevel(): number;

  /**
     * Returns the minimum allowed [Player] count of the specific [BattleGround].
     */
  GetMinPlayers(): number;

  /**
     * Returns the minimum allowed [Player] count per team of the specific [BattleGround].
     */
  GetMinPlayersPerTeam(): number;

  /**
     * Returns the name of the [BattleGround].
     */
  GetName(): string;

  /**
     * Returns the status of the specific [BattleGround].
     */
  GetStatus(): number;

  /**
     * Returns the type ID of the [BattleGround].
     */
  GetTypeId(): BattleGroundTypeId;

  /**
     * Returns the winning team of the specific [BattleGround].
     */
  GetWinner(): Team;
}

/**
The remains of a Player that has died.
 */
declare class Corpse extends WorldObject {
  /**
     * Returns the time when the [Player] became a ghost and spawned this [Corpse].
     */
  GetGhostTime(): number;

  /**
     * Returns the GUID of the [Player] that left the [Corpse] behind.
     */
  GetOwnerGUID(): number;

  /**
     * Returns the [CorpseType] of a [Corpse].
     *     enum CorpseType
     *     {
     *         CORPSE_BONES             = 0,
     *         CORPSE_RESURRECTABLE_PVE = 1,
     *         CORPSE_RESURRECTABLE_PVP = 2
     *     };
     */
  GetType(): CorpseType;

  /**
     * Sets the "ghost time" to the current time.
     * See [Corpse:GetGhostTime].
     */
  ResetGhostTime(): void;

  /**
     * Saves the [Corpse] to the database.
     */
  SaveToDB(): void;
}

/**
Non-Player controlled Units (i.e. NPCs).
 */
declare class Creature extends Unit {
  /**
     * Adds a loot mode to the [Creature]
     */
  AddLootMode(lootMode: number): void;

  /**
     * Make the [Creature] attack `target`.
     */
  AttackStart(target: Unit): void;

  /**
     * Make the [Creature] call for assistance in combat from other nearby [Creature]s.
     */
  CallAssistance(): void;

  /**
     * Make the [Creature] call for help in combat from friendly [Creature]s within `radius`.
     */
  CallForHelp(radius: number): void;

  /**
     * Returns `true` if the [Creature] can start attacking nearby hostile [Unit]s,
     *   and returns `false` otherwise.
     */
  CanAggro(): boolean;

  /**
     * Returns `true` if the [Creature] can assist `friend` in combat against `enemy`,
     *   and returns `false` otherwise.
     */
  CanAssistTo(friend: Unit, enemy: Unit, checkFaction?: boolean): boolean;

  /**
     * Returns `true` if the [Creature] completes the [Quest] with the ID `questID`,
     *   and returns `false` otherwise.
     */
  CanCompleteQuest(questID: number): boolean;

  /**
     * Returns `true` if the [Creature] can fly,
     *   and returns `false` otherwise.
     */
  CanFly(): boolean;

  /**
     * Returns true if the [Creature] can start attacking specified target
     * Does not work on most targets
     */
  CanStartAttack(target: Unit, force?: boolean): void;

  /**
     * Returns `true` if the [Creature] can move through deep water,
     *   and returns `false` otherwise.
     */
  CanSwim(): boolean;

  /**
     * Returns `true` if the [Creature] can move on land,
     *   and returns `false` otherwise.
     */
  CanWalk(): boolean;

  /**
     * Despawn this [Creature].
     */
  DespawnOrUnsummon(delay?: number): void;

  /**
     * Make the [Creature] flee combat to get assistance from a nearby friendly [Creature].
     */
  FleeToGetAssistance(): void;

  /**
     * Returns the [Creature]'s AI name.
     * This is used by the core to assign the Creature's default AI.
     * If the Creature is scripted by Eluna, the AI is overriden.
     */
  GetAIName(): string;

  /**
     * Returns a target from the [Creature]'s threat list based on the
     *   supplied arguments.
     *     enum SelectAggroTarget
     *     {
     *         SELECT_TARGET_RANDOM = 0,  //Just selects a random target
     *         SELECT_TARGET_TOPAGGRO,    //Selects targets from top aggro to bottom
     *         SELECT_TARGET_BOTTOMAGGRO, //Selects targets from bottom aggro to top
     *         SELECT_TARGET_NEAREST,
     *         SELECT_TARGET_FARTHEST
     *     };
     * For example, if you wanted to select the third-farthest [Player]
     *   within 50 yards that has the [Aura] "Corrupted Blood" (ID 24328),
     *   you could use this function like so:
     *     target = creature:GetAITarget(4, true, 3, 50, 24328)
     */
  GetAITarget(
    targetType: SelectAggroTarget,
    playerOnly?: boolean,
    position?: number,
    distance?: number,
    aura?: number,
  ): Unit;

  /**
     * Returns all [Unit]s in the [Creature]'s threat list.
     */
  GetAITargets(): number;

  /**
     * Returns the number of [Unit]s in this [Creature]'s threat list.
     */
  GetAITargetsCount(): number;

  /**
     * Returns the aggro range of the [Creature] for `target`.
     */
  GetAggroRange(target: Unit): number;

  /**
     * Returns the effective aggro range of the [Creature] for `target`.
     * If this is smaller than the minimum aggro range set in the config file,
     *   that is used as the aggro range instead.
     */
  GetAttackDistance(target: Unit): number;

  /**
     * Returns the delay between when the [Creature] dies and when its body despawns.
     */
  GetCorpseDelay(): number;

  /**
     * Returns the [Creature]'s creature family ID (enumerated in CreatureFamily.dbc).
     * ```typescript
     * enum CreatureFamily
     * {
     *     CREATURE_FAMILY_NONE                = 0,    // TrinityCore only
     *     CREATURE_FAMILY_WOLF                = 1,
     *     CREATURE_FAMILY_CAT                 = 2,
     *     CREATURE_FAMILY_SPIDER              = 3,
     *     CREATURE_FAMILY_BEAR                = 4,
     *     CREATURE_FAMILY_BOAR                = 5,
     *     CREATURE_FAMILY_CROCOLISK           = 6,
     *     CREATURE_FAMILY_CARRION_BIRD        = 7,
     *     CREATURE_FAMILY_CRAB                = 8,
     *     CREATURE_FAMILY_GORILLA             = 9,
     *     CREATURE_FAMILY_HORSE_CUSTOM        = 10,   // Does not exist in DBC but used for horse like beasts in DB
     *     CREATURE_FAMILY_RAPTOR              = 11,
     *     CREATURE_FAMILY_TALLSTRIDER         = 12,
     *     CREATURE_FAMILY_FELHUNTER           = 15,
     *     CREATURE_FAMILY_VOIDWALKER          = 16,
     *     CREATURE_FAMILY_SUCCUBUS            = 17,
     *     CREATURE_FAMILY_DOOMGUARD           = 19,
     *     CREATURE_FAMILY_SCORPID             = 20,
     *     CREATURE_FAMILY_TURTLE              = 21,
     *     CREATURE_FAMILY_IMP                 = 23,
     *     CREATURE_FAMILY_BAT                 = 24,
     *     CREATURE_FAMILY_HYENA               = 25,
     *     CREATURE_FAMILY_BIRD_OF_PREY        = 26,   // Named CREATURE_FAMILY_OWL in Mangos
     *     CREATURE_FAMILY_WIND_SERPENT        = 27,
     *     CREATURE_FAMILY_REMOTE_CONTROL      = 28,
     *     CREATURE_FAMILY_FELGUARD            = 29,   // This and below is TBC+
     *     CREATURE_FAMILY_DRAGONHAWK          = 30,
     *     CREATURE_FAMILY_RAVAGER             = 31,
     *     CREATURE_FAMILY_WARP_STALKER        = 32,
     *     CREATURE_FAMILY_SPOREBAT            = 33,
     *     CREATURE_FAMILY_NETHER_RAY          = 34,
     *     CREATURE_FAMILY_SERPENT             = 35,
     *     CREATURE_FAMILY_SEA_LION            = 36,   // TBC only
     *     CREATURE_FAMILY_MOTH                = 37,   // This and below is WotLK+
     *     CREATURE_FAMILY_CHIMAERA            = 38,
     *     CREATURE_FAMILY_DEVILSAUR           = 39,
     *     CREATURE_FAMILY_GHOUL               = 40,
     *     CREATURE_FAMILY_SILITHID            = 41,
     *     CREATURE_FAMILY_WORM                = 42,
     *     CREATURE_FAMILY_RHINO               = 43,
     *     CREATURE_FAMILY_WASP                = 44,
     *     CREATURE_FAMILY_CORE_HOUND          = 45,
     *     CREATURE_FAMILY_SPIRIT_BEAST        = 46
     * };
     * ```
     */
  GetCreatureFamily(): CreatureFamily;

  /**
     * Returns the [Creature]'s cooldown for `spellID`.
     */
  GetCreatureSpellCooldownDelay(spellID: number): number;

  /**
     * Returns the current waypoint ID of the [Creature].
     */
  GetCurrentWaypointId(): number;

  /**
     * Returns the guid of the [Creature] that is used as the ID in the database
     */
  GetDBTableGUIDLow(): number;

  /**
     * Returns the default movement type for this [Creature].
     */
  GetDefaultMovementType(): MovementGeneratorType;

  /**
     * Returns the [Creature]'s Extra flags.
     * These are used to control whether the NPC is a civilian, uses pathfinding,
     *   if it's a guard, etc.
     */
  GetExtraFlags(): number;

  /**
     * Returns position the [Creature] returns to when evading from combat
     *   or respawning.
     */
  GetHomePosition(): [number, number, number, number];

  /**

     */
  GetLootMode(): void;

  /**
     * Returns the [Player] that can loot this [Creature].
     */
  GetLootRecipient(): Player;

  /**
     * Returns the [Group] that can loot this [Creature].
     */
  GetLootRecipientGroup(): Group;

  /**
     * Returns the [Creature]'s NPC flags.
     * These are used to control whether the NPC is a vendor, can repair items,
     *   can give quests, etc.
     */
  GetNPCFlags(): number;

  /**
     * Returns the time it takes for this [Creature] to respawn once killed.
     * This value does not usually change over a [Creature]'s lifespan,
     *   but can be modified by [Creature:SetRespawnDelay].
     */
  GetRespawnDelay(): number;

  /**
     * Returns the [Creature]'s script ID.
     * Every C++ script name is assigned a unique ID by the core.
     *   This returns the ID for this [Creature]'s script name.
     */
  GetScriptId(): number;

  /**
     * Returns the [Creature]'s script name.
     * This is used by the core to apply C++ scripts to the Creature.
     * It is not used by Eluna. Eluna will override AI scripts.
     */
  GetScriptName(): string;

  /**
     * Returns the [Creature]'s shield block value.
     */
  GetShieldBlockValue(): number;

  /**
     * Returns the radius the [Creature] is permitted to wander from its
     *   respawn point.
     */
  GetWanderRadius(): number;

  /**
     * Returns the current waypoint path ID of the [Creature].
     */
  GetWaypointPath(): number;

  /**
     * Returns `true` if the [Creature] cannot cast `spellId` due to a category cooldown,
     *   and returns `false` otherwise.
     */
  HasCategoryCooldown(spellId: number): boolean;

  /**
     * Returns true if [Creature] has the specified loot mode
     */
  HasLootMode(lootMode: number): boolean;

  /**
     * Returns `true` if the [Creature] will give its loot to a [Player] or [Group],
     *   and returns `false` otherwise.
     */
  HasLootRecipient(): boolean;

  /**
     * Returns `true` if the [Creature] starts the [Quest] `questId`,
     *   and returns `false` otherwise.
     */
  HasQuest(questId: number): boolean;

  /**
     * Returns `true` if the [Creature] has searched for combat assistance already,
     *   and returns `false` otherwise.
     */
  HasSearchedAssistance(): boolean;

  /**
     * Returns `true` if the [Creature] can cast `spellId` when mind-controlled,
     *   and returns `false` otherwise.
     */
  HasSpell(spellId: number): boolean;

  /**
     * Returns `true` if the [Creature] has `spellId` on cooldown,
     *   and returns `false` otherwise.
     */
  HasSpellCooldown(spellId: number): boolean;

  /**
     * Returns `true` if the [Creature] is a civilian,
     *   and returns `false` otherwise.
     */
  IsCivilian(): boolean;

  /**
     * Returns true if the [Creature] is damaged enough for looting
     */
  IsDamageEnoughForLootingAndReward(): boolean;

  /**

     */
  IsDungeonBoss(): void;

  /**
     * Returns `true` if the [Creature]'s rank is Elite or Rare Elite,
     *   and returns `false` otherwise.
     */
  IsElite(): boolean;

  /**
     * Returns `true` if the [Creature] is a city guard,
     *   and returns `false` otherwise.
     */
  IsGuard(): boolean;

  /**
     * Returns `true` if the [Creature] is returning to its spawn position from combat,
     *   and returns `false` otherwise.
     */
  IsInEvadeMode(): boolean;

  /**
     * Returns `true` if the [Creature] is the leader of a player faction,
     *   and returns `false` otherwise.
     */
  IsRacialLeader(): boolean;

  /**
     * Returns `true` if the [Creature] is set to not give reputation when killed,
     *   and returns `false` otherwise.
     */
  IsReputationGainDisabled(): boolean;

  /**
     * Returns `true` if the [Creature] will give its loot to `player`,
     *   and returns `false` otherwise.
     */
  IsTappedBy(): boolean;

  /**
     * Returns `true` if the [Creature] can be targeted for attack,
     *   and returns `false` otherwise.
     */
  IsTargetableForAttack(mustBeDead?: boolean): boolean;

  /**
     * Returns `true` if the [Creature] is an invisible trigger,
     *   and returns `false` otherwise.
     */
  IsTrigger(): boolean;

  /**
     * Returns `true` if the [Creature]'s rank is Boss,
     *   and returns `false` otherwise.
     */
  IsWorldBoss(): boolean;

  /**
     * Make the [Creature] start following its waypoint path.
     */
  MoveWaypoint(): void;

  /**
     * Remove this [Creature]'s corpse.
     */
  RemoveCorpse(): void;

  /**
     * Removes specified loot mode from [Creature]
     */
  RemoveLootMode(lootMode: number): void;

  /**
     * Resets [Creature]'s loot mode to default
     */
  ResetLootMode(): void;

  /**
     * Respawn this [Creature].
     */
  Respawn(): void;

  /**
     * Save the [Creature] in the database.
     */
  SaveToDB(): void;

  /**
     * Make the [Creature] try to find a new target.
     * This should be called every update cycle for the Creature's AI.
     */
  SelectVictim(): void;

  /**
     * Sets whether the [Creature] can be aggroed.
     */
  SetAggroEnabled(allow?: boolean): void;

  /**
     * Sets the [Creature]'s death state to `deathState`.
     */
  SetDeathState(deathState: number): void;

  /**
     * Sets the default movement type of the [Creature].
     */
  SetDefaultMovementType(type: MovementGeneratorType): void;

  /**
     * Makes the [Creature] able to fly if enabled.
     */
  SetDisableGravity(disable: boolean): void;

  /**
     * Sets whether the [Creature] gives reputation or not.
     */
  SetDisableReputationGain(disable?: boolean): void;

  /**
     * Equips given [Item]s to the [Unit]. Using 0 removes the equipped [Item]
     */
  SetEquipmentSlots(main_hand: number, off_hand: number, ranged: number): void;

  /**
     * Sets the position the [Creature] returns to when evading from combat
     *   or respawning.
     */
  SetHomePosition(x: number, y: number, z: number, o: number): void;

  /**
     * Sets whether the creature is hovering / levitating or not.
     */
  SetHover(enable?: boolean): void;

  /**
     * Sets the [Creature] as in combat with all [Player]s in the dungeon instance.
     * This is used by raid bosses to prevent Players from using out-of-combat
     *   actions once the encounter has begun.
     */
  SetInCombatWithZone(): void;

  /**

     */
  SetLootMode(): void;

  /**
     * Sets the [Creature]'s NPC flags to `flags`.
     */
  SetNPCFlags(flags: number): void;

  /**
     * Sets whether the [Creature] can call nearby enemies for help in combat or not.
     */
  SetNoCallAssistance(enable?: boolean): void;

  /**
     * Sets whether the [Creature] can search for assistance at low health or not.
     */
  SetNoSearchAssistance(enable?: boolean): void;

  /**
     * Sets the time it takes for the [Creature] to respawn when killed.
     */
  SetRespawnDelay(delay: number): void;

  /**
     * Sets whether the [Creature] is currently walking or running.
     */
  SetWalk(enable?: boolean): void;

  /**
     * Sets the distance the [Creature] can wander from it's spawn point.
     */
  SetWanderRadius(distance: number): void;

  /**
     * Transform the [Creature] into another Creature.
     */
  UpdateEntry(entry: number, dataGUIDLow?: number): void;
}

/**
The result of a database query.

E.g. the return value of Global:WorldDBQuery.
 */
declare class ElunaQuery {
  /**
     * Returns the data in the specified column of the current row, casted to a boolean.
     */
  GetBool(column: number): boolean;

  /**
     * Returns the number of columns in the result set.
     */
  GetColumnCount(): number;

  /**
     * Returns the data in the specified column of the current row, casted to a 64-bit floating point value.
     */
  GetDouble(column: number): number;

  /**
     * Returns the data in the specified column of the current row, casted to a 32-bit floating point value.
     */
  GetFloat(column: number): number;

  /**
     * Returns the data in the specified column of the current row, casted to a signed 16-bit integer.
     */
  GetInt16(column: number): number;

  /**
     * Returns the data in the specified column of the current row, casted to a signed 32-bit integer.
     */
  GetInt32(column: number): number;

  /**
     * Returns the data in the specified column of the current row, casted to a signed 64-bit integer.
     */
  GetInt64(column: number): number;

  /**
     * Returns the data in the specified column of the current row, casted to a signed 8-bit integer.
     */
  GetInt8(column: number): number;

  /**
     * Returns a table from the current row where keys are field names and values are the row's values.
     * All numerical values will be numbers and everything else is returned as a string.
     * **For example,** the query:
     *     SELECT entry, name FROM creature_template
     * would result in a table like:
     *     { entry = 123, name = "some creature name" }
     * To move to next row use [ElunaQuery:NextRow].
     */
  GetRow(): number;

  /**
     * Returns the number of rows in the result set.
     */
  GetRowCount(): number;

  /**
     * Returns the data in the specified column of the current row, casted to a string.
     */
  GetString(column: number): string;

  /**
     * Returns the data in the specified column of the current row, casted to an unsigned 16-bit integer.
     */
  GetUInt16(column: number): number;

  /**
     * Returns the data in the specified column of the current row, casted to an unsigned 32-bit integer.
     */
  GetUInt32(column: number): number;

  /**
     * Returns the data in the specified column of the current row, casted to an unsigned 64-bit integer.
     */
  GetUInt64(column: number): number;

  /**
     * Returns the data in the specified column of the current row, casted to an unsigned 8-bit integer.
     */
  GetUInt8(column: number): number;

  /**
     * Returns `true` if the specified column of the current row is `NULL`, otherwise `false`.
     */
  IsNull(column: number): boolean;

  /**
     * Advances the [ElunaQuery] to the next row in the result set.
     * *Do not* call this immediately after a query, or you'll skip the first row.
     * Returns `false` if there was no new row, otherwise `true`.
     */
  NextRow(): boolean;
}

declare class GameObject extends WorldObject {
  /**
     * Despawns a [GameObject]
     * The gameobject may be automatically respawned by the core
     */
  Despawn(): void;

  /**
     * Returns the guid of the [GameObject] that is used as the ID in the database
     */
  GetDBTableGUIDLow(): number;

  /**
     * Returns display ID of the [GameObject]
     */
  GetDisplayId(): number;

  /**
     * Returns the state of a [GameObject]
     * Below are client side [GOState]s off of 3.3.5a
     * ```typescript
     * enum GOState
     * {
     *     GO_STATE_ACTIVE             = 0,                        // show in world as used and not reset (closed door open)
     *     GO_STATE_READY              = 1,                        // show in world as ready (closed door close)
     *     GO_STATE_ACTIVE_ALTERNATIVE = 2                         // show in world as used in alt way and not reset (closed door open by cannon fire)
     * };
     * ```
     */
  GetGoState(): GOState;

  /**
     * Returns the [Player] that can loot the [GameObject]
     * Not the original looter and may be nil.
     */
  GetLootRecipient(): Player;

  /**
     * Returns the [Group] that can loot the [GameObject]
     * Not the original looter and may be nil.
     */
  GetLootRecipientGroup(): Group;

  /**
     * Returns the [LootState] of a [GameObject]
     * Below are [LootState]s off of 3.3.5a
     * ```typescript
     * enum LootState
     * {
     *     GO_NOT_READY = 0,
     *     GO_READY,                                               // can be ready but despawned, and then not possible activate until spawn
     *     GO_ACTIVATED,
     *     GO_JUST_DEACTIVATED
     * };
     * ```
     */
  GetLootState(): LootState;

  /**
     * Returns 'true' if the [GameObject] can give the specified [Quest]
     */
  HasQuest(questId: number): boolean;

  /**
     * Returns 'true' if the [GameObject] is active
     */
  IsActive(): boolean;

  /**
     * Returns 'true' if the [GameObject] is spawned
     */
  IsSpawned(): boolean;

  /**
     * Returns 'true' if the [GameObject] is a transport
     */
  IsTransport(): boolean;

  /**
     * Removes [GameObject] from the world
     * The object is no longer reachable after this and it is not respawned.
     */
  RemoveFromWorld(deleteFromDB: boolean): void;

  /**
     * Respawns a [GameObject]
     */
  Respawn(): void;

  /**
     * Saves [GameObject] to the database
     */
  SaveToDB(): void;

  /**
     * Sets the state of a [GameObject]
     * ```typescript
     * enum GOState
     * {
     *     GO_STATE_ACTIVE             = 0,                        // show in world as used and not reset (closed door open)
     *     GO_STATE_READY              = 1,                        // show in world as ready (closed door close)
     *     GO_STATE_ACTIVE_ALTERNATIVE = 2                         // show in world as used in alt way and not reset (closed door open by cannon fire)
     * };
     * ```
     */
  SetGoState(state: GOState): void;

  /**
     * Sets the [LootState] of a [GameObject]
     * Below are [LootState]s off of 3.3.5a
     * ```typescript
     * enum LootState
     * {
     *     GO_NOT_READY = 0,
     *     GO_READY,                                               // can be ready but despawned, and then not possible activate until spawn
     *     GO_ACTIVATED,
     *     GO_JUST_DEACTIVATED
     * };
     * ```
     */
  SetLootState(state: LootState): void;

  /**
     * Sets the respawn or despawn time for the gameobject.
     * Respawn time is also used as despawn time depending on gameobject settings
     */
  SetRespawnTime(delay?: number): void;

  /**
     * Activates a door or a button/lever
     */
  UseDoorOrButton(delay?: number): void;
}

// Global functions
// These functions can be used anywhere at any time, including at start-up.

/**
 * Adds a taxi path to a specified map, returns the used pathId.
 * Note that the first taxi point needs to be near the player when he starts the taxi path.
 * The function should also be used only **once** per path added so use it on server startup for example.
 * Related function: [Player:StartTaxi]
 *     -- Execute on startup
 *     local pathTable = {{mapid, x, y, z}, {mapid, x, y, z}}
 *     local path = AddTaxiPath(pathTable, 28135, 28135)
 *     -- Execute when the player should fly
 *     player:StartTaxi(path)
 */
declare function AddTaxiPath(
  waypoints: number,
  mountA: number,
  mountH: number,
  price?: number,
  pathId?: number,
): number;

/**
 * Adds an [Item] to a vendor and updates the world database.
 */
declare function AddVendorItem(
  entry: number,
  item: number,
  maxcount: number,
  incrtime: number,
  extendedcost: number,
): void;

/**
 * Executes a SQL query on the login database.
 * The query may be executed *asynchronously* (at a later, unpredictable time).
 * If you need to execute the query synchronously, use [Global:AuthDBQuery] instead.
 * Any results produced are ignored.
 * If you need results from the query, use [Global:AuthDBQuery] instead.
 *     AuthDBExecute("DELETE FROM my_table")
 */
declare function AuthDBExecute(sql: string): void;

/**
 * Executes a SQL query on the login database and returns an [ElunaQuery].
 * The query is always executed synchronously
 *   (i.e. execution halts until the query has finished and then results are returned).
 * For an example see [Global:WorldDBQuery].
 */
declare function AuthDBQuery(sql: string): ElunaQuery;

/**
 * Ban's a [Player]'s account, character or IP
 *     enum BanMode
 *     {
 *         BAN_ACCOUNT = 0,
 *         BAN_CHARACTER = 1,
 *         BAN_IP = 2
 *     };
 */
declare function Ban(
  banMode: BanMode,
  nameOrIP: string,
  duration: number,
  reason: string,
  whoBanned: string,
): number;

/**
 * Executes a SQL query on the character database.
 * The query may be executed *asynchronously* (at a later, unpredictable time).
 * If you need to execute the query synchronously, use [Global:CharDBQuery] instead.
 * Any results produced are ignored.
 * If you need results from the query, use [Global:CharDBQuery] instead.
 *     CharDBExecute("DELETE FROM my_table")
 */
declare function CharDBExecute(sql: string): void;

/**
 * Executes a SQL query on the character database and returns an [ElunaQuery].
 * The query is always executed synchronously
 *   (i.e. execution halts until the query has finished and then results are returned).
 * For an example see [Global:WorldDBQuery].
 */
declare function CharDBQuery(sql: string): ElunaQuery;

/**
 * Unbinds event handlers for either all [BattleGround] events, or one type of event.
 * If `event_type` is `nil`, all [BattleGround] event handlers are cleared.
 * Otherwise, only event handlers for `event_type` are cleared.
 */
declare function ClearBattleGroundEvents(event_type: number): void;

/**
 * Unbinds event handlers for either all of a [Creature]'s events, or one type of event.
 * If `event_type` is `nil`, all the [Creature]'s event handlers are cleared.
 * Otherwise, only event handlers for `event_type` are cleared.
 * **NOTE:** this will affect all instances of the [Creature], not just one.
 * To bind and unbind events to a single [Creature], see [Global:RegisterUniqueCreatureEvent] and [Global:ClearUniqueCreatureEvents].
 */
declare function ClearCreatureEvents(entry: number, event_type: number): void;

/**
 * Unbinds event handlers for either all of a [Creature]'s gossip events, or one type of event.
 * If `event_type` is `nil`, all the [Creature]'s gossip event handlers are cleared.
 * Otherwise, only event handlers for `event_type` are cleared.
 * **NOTE:** this will affect all instances of the [Creature], not just one.
 * To bind and unbind gossip events to a single [Creature], tell the Eluna developers to implement that.
 */
declare function ClearCreatureGossipEvents(
  entry: number,
  event_type: number,
): void;

/**
 * Unbinds event handlers for either all of a [GameObject]'s events, or one type of event.
 * If `event_type` is `nil`, all the [GameObject]'s event handlers are cleared.
 * Otherwise, only event handlers for `event_type` are cleared.
 * **NOTE:** this will affect all instances of the [GameObject], not just one.
 * To bind and unbind events to a single [GameObject], tell the Eluna developers to implement that.
 */
declare function ClearGameObjectEvents(entry: number, event_type: number): void;

/**
 * Unbinds event handlers for either all of a [GameObject]'s gossip events, or one type of event.
 * If `event_type` is `nil`, all the [GameObject]'s gossip event handlers are cleared.
 * Otherwise, only event handlers for `event_type` are cleared.
 * **NOTE:** this will affect all instances of the [GameObject], not just one.
 * To bind and unbind gossip events to a single [GameObject], tell the Eluna developers to implement that.
 */
declare function ClearGameObjectGossipEvents(
  entry: number,
  event_type: number,
): void;

/**
 * Unbinds event handlers for either all [Group] events, or one type of [Group] event.
 * If `event_type` is `nil`, all [Group] event handlers are cleared.
 * Otherwise, only event handlers for `event_type` are cleared.
 */
declare function ClearGroupEvents(event_type: number): void;

/**
 * Unbinds event handlers for either all [Guild] events, or one type of [Guild] event.
 * If `event_type` is `nil`, all [Guild] event handlers are cleared.
 * Otherwise, only event handlers for `event_type` are cleared.
 */
declare function ClearGuildEvents(event_type: number): void;

/**
 * Unbinds event handlers for either all of an instanced [Map]'s events, or one type of event.
 * If `event_type` is `nil`, all the instanced [Map]'s event handlers are cleared.
 * Otherwise, only event handlers for `event_type` are cleared.
 */
declare function ClearInstanceEvents(entry: number, event_type: number): void;

/**
 * Unbinds event handlers for either all of an [Item]'s events, or one type of event.
 * If `event_type` is `nil`, all the [Item]'s event handlers are cleared.
 * Otherwise, only event handlers for `event_type` are cleared.
 * **NOTE:** this will affect all instances of the [Item], not just one.
 * To bind and unbind events to a single [Item], tell the Eluna developers to implement that.
 */
declare function ClearItemEvents(entry: number, event_type: number): void;

/**
 * Unbinds event handlers for either all of an [Item]'s gossip events, or one type of event.
 * If `event_type` is `nil`, all the [Item]'s gossip event handlers are cleared.
 * Otherwise, only event handlers for `event_type` are cleared.
 * **NOTE:** this will affect all instances of the [Item], not just one.
 * To bind and unbind gossip events to a single [Item], tell the Eluna developers to implement that.
 */
declare function ClearItemGossipEvents(entry: number, event_type: number): void;

/**
 * Unbinds event handlers for either all of a non-instanced [Map]'s events, or one type of event.
 * If `event_type` is `nil`, all the non-instanced [Map]'s event handlers are cleared.
 * Otherwise, only event handlers for `event_type` are cleared.
 */
declare function ClearMapEvents(map_id: number, event_type: number): void;

/**
 * Unbinds event handlers for either all of a [WorldPacket] opcode's events, or one type of event.
 * If `event_type` is `nil`, all the [WorldPacket] opcode's event handlers are cleared.
 * Otherwise, only event handlers for `event_type` are cleared.
 */
declare function ClearPacketEvents(opcode: number, event_type: number): void;

/**
 * Unbinds event handlers for either all [Player] events, or one type of [Player] event.
 * If `event_type` is `nil`, all [Player] event handlers are cleared.
 * Otherwise, only event handlers for `event_type` are cleared.
 */
declare function ClearPlayerEvents(event_type: number): void;

/**
 * Unbinds event handlers for either all of a [Player]'s gossip events, or one type of event.
 * If `event_type` is `nil`, all the [Player]'s gossip event handlers are cleared.
 * Otherwise, only event handlers for `event_type` are cleared.
 */
declare function ClearPlayerGossipEvents(
  entry: number,
  event_type: number,
): void;

/**
 * Unbinds event handlers for either all server events, or one type of event.
 * If `event_type` is `nil`, all server event handlers are cleared.
 * Otherwise, only event handlers for `event_type` are cleared.
 */
declare function ClearServerEvents(event_type: number): void;

/**
 * Unbinds event handlers for either all of a [Creature]'s events, or one type of event.
 * If `event_type` is `nil`, all the [Creature]'s event handlers are cleared.
 * Otherwise, only event handlers for `event_type` are cleared.
 * **NOTE:** this will affect only a single [Creature].
 * To bind and unbind events to all instances of a [Creature], see [Global:RegisterCreatureEvent] and [Global:ClearCreatureEvent].
 */
declare function ClearUniqueCreatureEvents(
  guid: number,
  instance_id: number,
  event_type: number,
): void;

/**
 * Returns an object representing a `long long` (64-bit) value.
 * The value by default is 0, but can be initialized to a value by passing a number or long long as a string.
 */
declare function CreateLongLong(n: number, n_ll: number, n_str: string): number;

/**
 * Registers a global timed event.
 * When the passed function is called, the parameters `(eventId, delay, repeats)` are passed to it.
 * Repeats will decrease on each call if the event does not repeat indefinitely
 */
declare function CreateLuaEvent(
  func: (...args: any[]) => any,
  delay: number,
  delaytable: number,
  repeats?: number,
): number;

/**
 * Creates a [WorldPacket].
 */
declare function CreatePacket(opcode: number, size: number): WorldPacket;

/**
 * Returns an object representing an `unsigned long long` (64-bit) value.
 * The value by default is 0, but can be initialized to a value by passing a number or unsigned long long as a string.
 */
declare function CreateULongLong(
  n: number,
  n_ull: number,
  n_str: string,
): number;

/**
 * Returns the currently active game events.
 */
declare function GetActiveGameEvents(): number;

/**
 * Returns the area or zone's name.
 *     enum LocaleConstant
 *     {
 *         LOCALE_enUS = 0,
 *         LOCALE_koKR = 1,
 *         LOCALE_frFR = 2,
 *         LOCALE_deDE = 3,
 *         LOCALE_zhCN = 4,
 *         LOCALE_zhTW = 5,
 *         LOCALE_esES = 6,
 *         LOCALE_esMX = 7,
 *         LOCALE_ruRU = 8
 *     };
 */
declare function GetAreaName(
  areaOrZoneId: number,
  locale?: LocaleConstant,
): string;

/**
 * Returns emulator's supported expansion.
 * Expansion is 0 for pre-TBC, 1 for TBC, 2 for WotLK, and 3 for Cataclysm.
 */
declare function GetCoreExpansion(): number;

/**
 * Returns emulator's name.
 * The result will be either `MaNGOS`, `cMaNGOS`, or `TrinityCore`.
 */
declare function GetCoreName(): string;

/**
 * Returns emulator version
 * - For TrinityCore returns the date of the last revision, e.g. `2015-08-26 22:53:12 +0300`
 * - For cMaNGOS returns the date and time of the last revision, e.g. `2015-09-06 13:18:50`
 * - for MaNGOS returns the version number as string, e.g. `21000`
 */
declare function GetCoreVersion(): string;

/**
 * Returns the server's current time.
 */
declare function GetCurrTime(): number;

/**
 * Returns the entry ID from a GUID.
 * GUID consist of entry ID, low GUID, and type ID.
 */
declare function GetGUIDEntry(guid: number): number;

/**
 * Returns the low GUID from a GUID.
 * A GUID consists of a low GUID, type ID, and possibly an entry ID depending on the type ID.
 * Low GUID is an ID to distinct the objects of the same type.
 * [Player] and [Creature] for example can have the same low GUID but not GUID.
 * On TrinityCore all low GUIDs are different for all objects of the same type.
 * For example creatures in instances are assigned new GUIDs when the Map is created.
 * On MaNGOS and cMaNGOS low GUIDs are unique only on the same map.
 * For example creatures in instances use the same low GUID assigned for that spawn in the database.
 * This is why to identify a creature you have to know the instanceId and low GUID. See [Map:GetIntstanceId]
 */
declare function GetGUIDLow(guid: number): number;

/**
 * Returns the type ID from a GUID.
 * Type ID is different for each type ([Player], [Creature], [GameObject], etc.).
 * GUID consist of entry ID, low GUID, and type ID.
 */
declare function GetGUIDType(guid: number): number;

/**
 * Returns game time in seconds
 */
declare function GetGameTime(): number;

/**
 * Returns [Guild] by the leader's GUID
 */
declare function GetGuildByLeaderGUID(guid: number): Guild;

/**
 * Returns a [Guild] by name.
 */
declare function GetGuildByName(name: string): Guild;

/**
 * Builds an [Item]'s GUID.
 * [Item] GUID consist of low GUID and type ID
 * [Player] and [Item] for example can have the same low GUID but not GUID.
 */
declare function GetItemGUID(lowguid: number): number;

/**
 * Returns an chat link for an [Item].
 *     enum LocaleConstant
 *     {
 *         LOCALE_enUS = 0,
 *         LOCALE_koKR = 1,
 *         LOCALE_frFR = 2,
 *         LOCALE_deDE = 3,
 *         LOCALE_zhCN = 4,
 *         LOCALE_zhTW = 5,
 *         LOCALE_esES = 6,
 *         LOCALE_esMX = 7,
 *         LOCALE_ruRU = 8
 *     };
 */
declare function GetItemLink(entry: number, locale?: LocaleConstant): string;

/**
 * Returns Lua engine's name.
 * Always returns "ElunaEngine" on Eluna.
 */
declare function GetLuaEngine(): string;

/**
 * Returns a [Map] by ID.
 */
declare function GetMapById(mapId: number, instanceId?: number): EMap;

/**
 * Builds a [GameObject]'s GUID.
 * A GameObject's GUID consist of entry ID, low GUID and type ID
 * A [Player] and GameObject for example can have the same low GUID but not GUID.
 */
declare function GetObjectGUID(lowguid: number, entry: number): number;

/**
 * Finds and Returns [Player] by guid if found
 */
declare function GetPlayerByGUID(guid: number): Player;

/**
 * Finds and Returns [Player] by name if found
 */
declare function GetPlayerByName(name: string): Player;

/**
 * Returns the amount of [Player]s in the world.
 */
declare function GetPlayerCount(): number;

/**
 * Builds a [Player]'s GUID
 * [Player] GUID consist of low GUID and type ID
 * [Player] and [Creature] for example can have the same low GUID but not GUID.
 */
declare function GetPlayerGUID(lowguid: number): number;

/**
 * Returns a table with all the current [Player]s in the world
 * Does not return players that may be teleporting or otherwise not on any map.
 *     enum TeamId
 *     {
 *         TEAM_ALLIANCE = 0,
 *         TEAM_HORDE = 1,
 *         TEAM_NEUTRAL = 2
 *     };
 */
declare function GetPlayersInWorld(team?: TeamId, onlyGM?: boolean): number;

/**
 * Returns [Quest] template
 */
declare function GetQuest(questId: number): Quest;

/**

 */
declare function GetRealmID(): void;

/**
 * Returns the difference between an old timestamp and the current time.
 */
declare function GetTimeDiff(oldTime: number): number;

/**
 * Builds a [Creature]'s GUID.
 * [Creature] GUID consist of entry ID, low GUID and type ID
 * [Player] and [Creature] for example can have the same low GUID but not GUID.
 */
declare function GetUnitGUID(lowguid: number, entry: number): number;

/**
 * Returns `true` if the bag and slot is a valid bag position, otherwise `false`.
 * See [Global:IsInventoryPos] for bag/slot combination examples.
 */
declare function IsBagPos(bag: number, slot: number): boolean;

/**
 * Returns `true` if the bag and slot is a valid bank position, otherwise `false`.
 * See [Global:IsInventoryPos] for bag/slot combination examples.
 */
declare function IsBankPos(bag: number, slot: number): boolean;

/**
 * Returns `true` if the bag and slot is a valid equipment position, otherwise `false`.
 * See [Global:IsInventoryPos] for bag/slot combination examples.
 */
declare function IsEquipmentPos(bag: number, slot: number): boolean;

/**
 * Returns `true` if the event is currently active, otherwise `false`.
 */
declare function IsGameEventActive(eventId: number): boolean;

/**
 * Returns `true` if the bag and slot is a valid inventory position, otherwise `false`.
 * Some commonly used combinations:
 * *Bag 255 (common character inventory)*
 * - Slots 0-18: equipment
 * - Slots 19-22: bag slots
 * - Slots 23-38: backpack
 * - Slots 39-66: bank main slots
 * - Slots 67-74: bank bag slots
 * - Slots 86-117: keyring
 * *Bags 19-22 (equipped bags)*
 * - Slots 0-35
 * *Bags 67-74 (bank bags)*
 * - Slots 0-35
 */
declare function IsInventoryPos(bag: number, slot: number): boolean;

/**
 * Kicks a [Player] from the server.
 */
declare function Kick(player: Player): void;

/**
 * Performs an in-game spawn and returns the [Creature] or [GameObject] spawned.
 */
declare function PerformIngameSpawn(
  spawnType: number,
  entry: number,
  mapId: number,
  instanceId: number,
  x: number,
  y: number,
  z: number,
  o: number,
  save?: boolean,
  durorresptime?: number,
  phase?: number,
): WorldObject;

/**
 * Prints given parameters to the debug log.
 */
declare function PrintDebug(...args: number[]): void;

/**
 * Prints given parameters to the error log.
 */
declare function PrintError(...args: number[]): void;

/**
 * Prints given parameters to the info log.
 */
declare function PrintInfo(...args: number[]): void;

/**
 * Reloads the Lua engine.
 */
declare function ReloadEluna(): void;

/**
 * Removes a global timed event specified by ID.
 */
declare function RemoveEventById(eventId: number, all_Events?: boolean): void;

/**
 * Removes all global timed events.
 */
declare function RemoveEvents(all_Events?: boolean): void;

/**
 * Saves all [Player]s.
 */
declare function SaveAllPlayers(): void;

/**
 * Sends mail to a [Player].
 * There can be several item entry-amount pairs at the end of the function.
 * There can be maximum of 12 different items.
 *     enum MailStationery
 *     {
 *         MAIL_STATIONERY_TEST = 1,
 *         MAIL_STATIONERY_DEFAULT = 41,
 *         MAIL_STATIONERY_GM = 61,
 *         MAIL_STATIONERY_AUCTION = 62,
 *         MAIL_STATIONERY_VAL = 64, // Valentine
 *         MAIL_STATIONERY_CHR = 65, // Christmas
 *         MAIL_STATIONERY_ORP = 67 // Orphan
 *     };
 */
declare function SendMail(
  subject: string,
  text: string,
  receiverGUIDLow: number,
  senderGUIDLow?: number,
  stationary?: MailStationery,
  delay?: number,
  money?: number,
  cod?: number,
  entry?: number,
  amount?: number,
): number;

/**
 * Sends a message to all [Player]s online.
 */
declare function SendWorldMessage(message: string): void;

/**
 * Starts the event by eventId, if force is set, the event will force start regardless of previous event state.
 */
declare function StartGameEvent(eventId: number, force?: boolean): void;

/**
 * Stops the event by eventId, if force is set, the event will force stop regardless of previous event state.
 */
declare function StopGameEvent(eventId: number, force?: boolean): void;

/**
 * Removes all [Item]s from a vendor and updates the database.
 */
declare function VendorRemoveAllItems(entry: number): void;

/**
 * Removes an [Item] from a vendor and updates the database.
 */
declare function VendorRemoveItem(entry: number, item: number): void;

/**
 * Executes a SQL query on the world database.
 * The query may be executed *asynchronously* (at a later, unpredictable time).
 * If you need to execute the query synchronously, use [Global:WorldDBQuery] instead.
 * Any results produced are ignored.
 * If you need results from the query, use [Global:WorldDBQuery] instead.
 *     WorldDBExecute("DELETE FROM my_table")
 */
declare function WorldDBExecute(sql: string): void;

/**
 * Executes a SQL query on the world database and returns an [ElunaQuery].
 * The query is always executed synchronously
 *   (i.e. execution halts until the query has finished and then results are returned).
 *     local Q = WorldDBQuery("SELECT entry, name FROM creature_template LIMIT 10")
 *     if Q then
 *         repeat
 *             local entry, name = Q:GetUInt32(0), Q:GetString(1)
 *             print(entry, name)
 *         until not Q:NextRow()
 *     end
 */
declare function WorldDBQuery(sql: string): ElunaQuery;

/**
 * Performs a bitwise AND (a & b).
 */
declare function bit_and(a: number, b: number): number;

/**
 * Performs a bitwise left-shift (a << b).
 */
declare function bit_lshift(a: number, b: number): number;

/**
 * Performs a bitwise NOT (~a).
 */
declare function bit_not(a: number): number;

/**
 * Performs a bitwise OR (a | b).
 */
declare function bit_or(a: number, b: number): number;

/**
 * Performs a bitwise right-shift (a >> b).
 */
declare function bit_rshift(a: number, b: number): number;

/**
 * Performs a bitwise XOR (a ^ b).
 */
declare function bit_xor(a: number, b: number): number;

declare class Group {
  /**
     * Adds a new member to the [Group]
     */
  AddMember(player: Player): boolean;

  /**
     * Converts this [Group] to a raid [Group]
     */
  ConvertToRaid(): void;

  /**
     * Disbands this [Group]
     */
  Disband(): void;

  /**
     * Returns the [Group]'s GUID
     */
  GetGUID(): number;

  /**
     * Returns [Group] leader GUID
     */
  GetLeaderGUID(): number;

  /**
     * Returns a [Group] member's GUID by their name
     */
  GetMemberGUID(name: string): number;

  /**
     * Returns the [Player]'s subgroup ID of this [Group]
     */
  GetMemberGroup(guid: number): number;

  /**
     * Returns a table with the [Player]s in this [Group]
     */
  GetMembers(): number;

  /**
     * Returns the member count of this [Group]
     */
  GetMembersCount(): number;

  /**
     * Returns 'true' if the subgroup has free slots in this [Group]
     */
  HasFreeSlotSubGroup(subGroup: number): boolean;

  /**
     * Returns 'true' if the [Player] is an assistant of this [Group]
     */
  IsAssistant(guid: number): boolean;

  /**
     * Returns 'true' if the [Group] is a battleground [Group]
     */
  IsBGGroup(): boolean;

  /**
     * Returns 'true' if the [Group] is full
     */
  IsFull(): boolean;

  /**
     * Returns 'true' if the [Player] is the [Group] leader
     */
  IsLeader(guid: number): boolean;

  /**
     * Returns 'true' if the [Player] is a member of this [Group]
     */
  IsMember(guid: number): boolean;

  /**
     * Returns 'true' if the [Group] is a raid [Group]
     */
  IsRaidGroup(): boolean;

  /**
     * Removes a [Player] from this [Group] and returns 'true' if successful
     * ```typescript
     * enum RemoveMethod
     * {
     *     GROUP_REMOVEMETHOD_DEFAULT  = 0,
     *     GROUP_REMOVEMETHOD_KICK     = 1,
     *     GROUP_REMOVEMETHOD_LEAVE    = 2,
     *     GROUP_REMOVEMETHOD_KICK_LFG = 3
     * };
     * ```
     */
  RemoveMember(guid: number, method: RemoveMethod): boolean;

  /**
     * Returns 'true' if the [Player]s are in the same subgroup in this [Group]
     */
  SameSubGroup(player1: Player, player2: Player): boolean;

  /**
     * Sends a specified [WorldPacket] to this [Group]
     */
  SendPacket(
    packet: WorldPacket,
    ignorePlayersInBg: boolean,
    ignore: number,
  ): void;

  /**
     * Sets the leader of this [Group]
     */
  SetLeader(guid: number): void;

  /**
     * Sets the member's subGroup
     */
  SetMembersGroup(guid: number, groupID: number): void;

  /**
     * Sets the target icon of an object for the [Group]
     */
  SetTargetIcon(icon: number, target: number, setter: number): void;
}

declare class Guild {
  /**
     * Adds the specified [Player] to the [Guild] at the specified rank.
     * If no rank is specified, defaults to none.
     */
  AddMember(player: Player, rankId: number): void;

  /**
     * Removes the specified [Player] from the [Guild].
     */
  DeleteMember(player: Player, isDisbanding: boolean): void;

  /**
     * Disbands the [Guild]
     */
  Disband(): void;

  /**
     * Returns the [Guild]s entry ID
     */
  GetId(): number;

  /**
     * Returns the [Guild]s current info
     */
  GetInfo(): string;

  /**
     * Finds and returns the [Guild] leader by their GUID if logged in
     */
  GetLeader(): Player;

  /**
     * Returns [Guild] leader GUID
     */
  GetLeaderGUID(): number;

  /**
     * Returns the [Guild]s current Message Of The Day
     */
  GetMOTD(): string;

  /**
     * Returns the member count of this [Guild]
     */
  GetMemberCount(): number;

  /**
     * Returns a table with the [Player]s in this [Guild]
     * Only the players that are online and on some map.
     */
  GetMembers(): number;

  /**
     * Returns the [Guild]s name
     */
  GetName(): string;

  /**
     * Sends a [WorldPacket] to all the [Player]s in the [Guild]
     */
  SendPacket(packet: WorldPacket): void;

  /**
     * Sends a [WorldPacket] to all the [Player]s at the specified rank in the [Guild]
     */
  SendPacketToRanked(packet: WorldPacket, rankId: number): void;

  /**
     * Sets the information of the bank tab specified
     */
  SetBankTabText(tabId: number, info: string): void;

  /**
     * Sets the leader of this [Guild]
     */
  SetLeader(leader: Player): void;

  /**
     * Promotes/demotes the [Player] to the specified rank.
     */
  SetMemberRank(player: Player, rankId: number): void;
}

declare class Item extends EObject {
  /**
     * Returns 'true' if the [Item] can be traded, 'false' otherwise
     */
  CanBeTraded(): boolean;

  /**
     * Removes an enchant from the [Item] by the specified slot
     */
  ClearEnchantment(enchantSlot: number): boolean;

  /**
     * Returns the [Player] classes allowed to use this [Item]
     */
  GetAllowableClass(): number;

  /**
     * Returns the [Player] races allowed to use this [Item]
     */
  GetAllowableRace(): number;

  /**
     * Returns the bag size of this [Item], 0 if [Item] is not a bag
     */
  GetBagSize(): number;

  /**
     * Returns the [Item]s current bag slot
     */
  GetBagSlot(): number;

  /**
     * Returns the default purchase count of the [Item]
     */
  GetBuyCount(): number;

  /**
     * Returns the purchase price of the [Item]
     */
  GetBuyPrice(): number;

  /**
     * Returns class of the [Item]
     */
  GetClass(): number;

  /**
     * Returns the [Item]s stack count
     */
  GetCount(): number;

  /**
     * Returns the display ID of the [Item]
     */
  GetDisplayId(): number;

  /**
     * Returns the [Item]s enchantment ID by enchant slot specified
     */
  GetEnchantmentId(enchantSlot: number): number;

  /**
     * Returns the inventory type of the [Item]
     */
  GetInventoryType(): number;

  /**
     * Returns the [Item]s level
     */
  GetItemLevel(): number;

  /**
     * Returns the chat link of the [Item]
     * ```typescript
     * enum LocaleConstant
     * {
     *     LOCALE_enUS = 0,
     *     LOCALE_koKR = 1,
     *     LOCALE_frFR = 2,
     *     LOCALE_deDE = 3,
     *     LOCALE_zhCN = 4,
     *     LOCALE_zhTW = 5,
     *     LOCALE_esES = 6,
     *     LOCALE_esMX = 7,
     *     LOCALE_ruRU = 8
     * };
     * ```
     */
  GetItemLink(locale?: LocaleConstant): string;

  /**
     * Returns the item set ID of this [Item]
     */
  GetItemSet(): number;

  /**
     * Returns the [Item]s max stack count
     */
  GetMaxStackCount(): number;

  /**
     * Returns the name of the [Item]
     */
  GetName(): string;

  /**
     * Returns the [Player] who currently owns the [Item]
     */
  GetOwner(): Player;

  /**

     */
  GetOwnerGUID(): void;

  /**
     * Returns the quality of the [Item]
     */
  GetQuality(): number;

  /**
     * Returns the random property ID of this [Item]
     */
  GetRandomProperty(): number;

  /**

     */
  GetRandomSuffix(): void;

  /**
     * Returns the minimum level required to use this [Item]
     */
  GetRequiredLevel(): number;

  /**
     * Returns the sell price of the [Item]
     */
  GetSellPrice(): number;

  /**
     * Returns the [Item]s current slot
     */
  GetSlot(): number;

  /**
     * Returns the spell ID tied to the [Item] by spell index
     */
  GetSpellId(spellIndex: number): number;

  /**
     * Returns the spell trigger tied to the [Item] by spell index
     */
  GetSpellTrigger(spellIndex: number): number;

  /**

     */
  GetStatsCount(): void;

  /**
     * Returns subclass of the [Item]
     */
  GetSubClass(): number;

  /**
     * Returns 'true' if the [Item] has the [Quest] specified tied to it, 'false' otherwise
     */
  HasQuest(questId: number): boolean;

  /**
     * Returns 'true' if the [Item] is an armor vellum, 'false' otherwise
     */
  IsArmorVellum(): boolean;

  /**
     * Returns 'true' if the [Item] is a bag, 'false' otherwise
     */
  IsBag(): boolean;

  /**
     * Returns 'true' if the [Item] is account bound, 'false' otherwise
     */
  IsBoundAccountWide(): boolean;

  /**
     * Returns 'true' if the [Item] is bound to a [Player] by an enchant, 'false' otehrwise
     */
  IsBoundByEnchant(): boolean;

  /**
     * Returns 'true' if the [Item] is broken, 'false' otherwise
     */
  IsBroken(): boolean;

  /**
     * Returns 'true' if the [Item] is a conjured consumable, 'false' otherwise
     */
  IsConjuredConsumable(): boolean;

  /**
     * Returns 'true' if the [Item] is a currency token, 'false' otherwise
     */
  IsCurrencyToken(): boolean;

  /**
     * Returns 'true' if the [Item] is currently equipped, 'false' otherwise
     */
  IsEquipped(): boolean;

  /**
     * Returns 'true' if the [Item] is currently in a bag, 'false' otherwise
     */
  IsInBag(): boolean;

  /**
     * Returns 'true' if the [Item] is currently in a trade window, 'false' otherwise
     */
  IsInTrade(): boolean;

  /**
     * Returns 'true' if the [Item] is locked, 'false' otherwise
     */
  IsLocked(): boolean;

  /**
     * Returns 'true' if the [Item] is not bound to the [Player] specified, 'false' otherwise
     */
  IsNotBoundToPlayer(player: Player): boolean;

  /**
     * Returns 'true' if the [Item] is a not an empty bag, 'false' otherwise
     */
  IsNotEmptyBag(): boolean;

  /**
     * Returns 'true' if the [Item] is a potion, 'false' otherwise
     */
  IsPotion(): boolean;

  /**
     * Returns 'true' if the [Item] is soulbound, 'false' otherwise
     */
  IsSoulBound(): boolean;

  /**
     * Returns 'true' if the [Item] is a weapon vellum, 'false' otherwise
     */
  IsWeaponVellum(): boolean;

  /**
     * Saves the [Item] to the database
     */
  SaveToDB(): void;

  /**
     * Sets the binding of the [Item] to 'true' or 'false'
     */
  SetBinding(setBinding: boolean): void;

  /**
     * Sets the stack count of the [Item]
     */
  SetCount(count: number): void;

  /**
     * Sets the specified enchantment of the [Item] to the specified slot
     */
  SetEnchantment(enchantId: number, enchantSlot: number): boolean;

  /**
     * Sets the [Player] specified as the owner of the [Item]
     */
  SetOwner(player: Player): void;
}

/**
A game map, e.g. Azeroth, Eastern Kingdoms, the Molten Core, etc.

NOTE: The prefix E (Entity) is needed to avoid collision with the typescript Map keyword
 */
declare class EMap {
  /**
     * Returns the area ID of the [Map] at the specified X, Y, and Z coordinates.
     */
  GetAreaId(x: number, y: number, z: number, phasemask?: number): number;

  /**
     * Returns the difficulty of the [Map].
     * Always returns 0 if the expansion is pre-TBC.
     */
  GetDifficulty(): number;

  /**
     * Returns the height of the [Map] at the given X and Y coordinates.
     * In case of no height found nil is returned
     */
  GetHeight(x: number, y: number): number;

  /**
     * Gets the instance data table for the [Map], if it exists.
     * The instance must be scripted using Eluna for this to succeed.
     * If the instance is scripted in C++ this will return `nil`.
     */
  GetInstanceData(): number;

  /**
     * Returns the instance ID of the [Map].
     */
  GetInstanceId(): number;

  /**
     * Returns the ID of the [Map].
     */
  GetMapId(): number;

  /**
     * Returns the name of the [Map].
     */
  GetName(): string;

  /**
     * Returns the player count currently on the [Map] (excluding GMs).
     */
  GetPlayerCount(): number;

  /**
     * Returns a table with all the current [Player]s in the map
     *     enum TeamId
     *     {
     *         TEAM_ALLIANCE = 0,
     *         TEAM_HORDE = 1,
     *         TEAM_NEUTRAL = 2
     *     };
     */
  GetPlayers(team: TeamId): number;

  /**
     * Returns a [WorldObject] by its GUID from the map if it is spawned.
     */
  GetWorldObject(guid: number): void;

  /**
     * Returns `true` if the [Map] is an arena [BattleGround], `false` otherwise.
     */
  IsArena(): boolean;

  /**
     * Returns `true` if the [Map] is a non-arena [BattleGround], `false` otherwise.
     */
  IsBattleground(): boolean;

  /**
     * Returns `true` if the [Map] is a dungeon, `false` otherwise.
     */
  IsDungeon(): boolean;

  /**
     * Returns `true` if the [Map] has no [Player]s, `false` otherwise.
     */
  IsEmpty(): boolean;

  /**
     * Returns `true` if the [Map] is a heroic, `false` otherwise.
     */
  IsHeroic(): boolean;

  /**
     * Returns `true` if the [Map] is a raid, `false` otherwise.
     */
  IsRaid(): boolean;

  /**
     * Saves the [Map]'s instance data to the database.
     */
  SaveInstanceData(): void;

  /**
     * Sets the [Weather] type based on [WeatherType] and grade supplied.
     *     enum WeatherType
     *     {
     *         WEATHER_TYPE_FINE       = 0,
     *         WEATHER_TYPE_RAIN       = 1,
     *         WEATHER_TYPE_SNOW       = 2,
     *         WEATHER_TYPE_STORM      = 3,
     *         WEATHER_TYPE_THUNDERS   = 86,
     *         WEATHER_TYPE_BLACKRAIN  = 90
     *     };
     */
  SetWeather(zone: number, type: WeatherType, grade: number): void;
}

/**
A basic game object (either an Item or a WorldObject).

Objects in MaNGOS/Trinity are stored an a giant block of "values". Subclasses of Object, like WorldObject, extend the block with more data specific to that subclass. Further subclasses, like Player, extend it even further.

A detailed map of all the fields in this data block can be found in the UpdateFields.h file of your emulator (it varies depending on the expansion supported).

The GetValue methods in this class (e.g. Object:GetInt32Value) provide low-level access to the data block. Other methods, like Object:HasFlag and Object:GetScale, merely wrap the GetValue methods and provide a simpler interface.

 */
declare class EObject {
  /**
     * Returns the data at the specified index and offset, casted to an unsigned 8-bit integer.
     * E.g. if you want the second byte at index 10, you would pass in 1 as the offset.
     */
  GetByteValue(index: number, offset: number): number;

  /**
     * Returns the entry of the [Object].
     * [Player]s do not have an "entry".
     */
  GetEntry(): number;

  /**
     * Returns the data at the specified index, casted to a single-precision floating point value.
     */
  GetFloatValue(index: number): number;

  /**
     * Returns the GUID of the [Object].
     * GUID is an unique identifier for the object.
     * However on MaNGOS and cMangos creatures and gameobjects inside different maps can share
     * the same GUID but not on the same map.
     * On TrinityCore this value is unique across all maps
     */
  GetGUID(): number;

  /**
     * Returns the low-part of the [Object]'s GUID.
     * On TrinityCore all low GUIDs are different for all objects of the same type.
     * For example creatures in instances are assigned new GUIDs when the Map is created.
     * On MaNGOS and cMaNGOS low GUIDs are unique only on the same map.
     * For example creatures in instances use the same low GUID assigned for that spawn in the database.
     * This is why to identify a creature you have to know the instanceId and low GUID. See [Map:GetIntstanceId]
     */
  GetGUIDLow(): number;

  /**
     * Returns the data at the specified index, casted to a signed 32-bit integer.
     */
  GetInt32Value(index: number): number;

  /**
     * Returns the scale/size of the [Object].
     * This affects the size of a [WorldObject] in-game, but [Item]s don't have a "scale".
     */
  GetScale(): number;

  /**
     * Returns the TypeId of the [Object].
     *     enum TypeID
     *     {
     *         TYPEID_OBJECT        = 0,
     *         TYPEID_ITEM          = 1,
     *         TYPEID_CONTAINER     = 2,
     *         TYPEID_UNIT          = 3,
     *         TYPEID_PLAYER        = 4,
     *         TYPEID_GAMEOBJECT    = 5,
     *         TYPEID_DYNAMICOBJECT = 6,
     *         TYPEID_CORPSE        = 7
     *     };
     */
  GetTypeId(): number;

  /**
     * Returns the data at the specified index and offset, casted to a signed 16-bit integer.
     * E.g. if you want the second half-word at index 10, you would pass in 1 as the offset.
     */
  GetUInt16Value(index: number, offset: number): number;

  /**
     * Returns the data at the specified index, casted to a unsigned 32-bit integer.
     */
  GetUInt32Value(index: number): number;

  /**
     * Returns the data at the specified index, casted to an unsigned 64-bit integer.
     */
  GetUInt64Value(index: number): number;

  /**
     * Returns `true` if the specified flag is set, otherwise `false`.
     */
  HasFlag(index: number, flag: number): boolean;

  /**
     * Returns `true` if the [Object] has been added to its [Map], otherwise `false`.
     */
  IsInWorld(): boolean;

  /**
     * Removes a flag from the value at the specified index.
     */
  RemoveFlag(index: number, flag: number): void;

  /**
     * Sets the data at the specified index and offset to the given value, converted to an unsigned 8-bit integer.
     */
  SetByteValue(index: number, offset: number, value: number): void;

  /**
     * Sets the specified flag in the data value at the specified index.
     * If the flag was already set, it remains set.
     * To remove a flag, use [Object:RemoveFlag].
     */
  SetFlag(index: number, value: number): void;

  /**
     * Sets the data at the specified index to the given value, converted to a single-precision floating point value.
     */
  SetFloatValue(index: number, value: number): void;

  /**
     * Sets the data at the specified index to the given value, converted to a signed 16-bit integer.
     */
  SetInt16Value(index: number, offset: number, value: number): void;

  /**
     * Sets the data at the specified index to the given value, converted to a signed 32-bit integer.
     */
  SetInt32Value(index: number, value: number): void;

  /**
     * Sets the [Object]'s scale/size to the given value.
     */
  SetScale(scale: number): void;

  /**
     * Sets the data at the specified index to the given value, converted to an unsigned 16-bit integer.
     */
  SetUInt16Value(index: number, offset: number, value: number): void;

  /**
     * Sets the data at the specified index to the given value, converted to an unsigned 32-bit integer.
     */
  SetUInt32Value(index: number, value: number): void;

  /**
     * Sets the data at the specified index to the given value, converted to an unsigned 64-bit integer.
     */
  SetUInt64Value(index: number, value: number): void;

  /**
     * Attempts to convert the [Object] to a [Corpse].
     * If the [Object] is not a [Corpse], returns `nil`.
     */
  ToCorpse(): Corpse;

  /**
     * Attempts to convert the [Object] to a [Creature].
     * If the [Object] is not a [Creature], returns `nil`.
     */
  ToCreature(): Creature;

  /**
     * Attempts to convert the [Object] to a [GameObject].
     * If the [Object] is not a [GameObject], returns `nil`.
     */
  ToGameObject(): GameObject;

  /**
     * Attempts to convert the [Object] to a [Player].
     * If the [Object] is not a [Player], returns `nil`.
     */
  ToPlayer(): Player;

  /**
     * Attempts to convert the [Object] to a [Unit].
     * If the [Object] is not a [Unit], returns `nil`.
     */
  ToUnit(): Unit;

  /**
     * Sets the data at the specified index to the given value, converted to an unsigned 32-bit integer.
     */
  UpdateUInt32Value(index: number, value: number): void;
}

declare class Player extends Unit {
  /**
     * Adds combo points to the [Player]
     */
  AddComboPoints(target: Unit, count: number): void;

  /**
     * Adds the given amount of the specified item entry to the player.
     */
  AddItem(entry: number, itemCount?: number): Item;

  /**

     */
  AddLifetimeKills(): void;

  /**
     * Tries to add the given quest entry for the [Player].
     */
  AddQuest(entry: number): void;

  /**
     * Advances all of the [Player]s skills to the amount specified
     */
  AdvanceAllSkills(skillStep: number): void;

  /**
     * Advances a [Player]s specific skill to the amount specified
     */
  AdvanceSkill(skillId: number, skillStep: number): void;

  /**
     * Advances all of the [Player]s weapon skills to the maximum amount available
     */
  AdvanceSkillsToMax(): void;

  /**
     * Completes the [Quest] if a [Quest] area is explored, or completes the [Quest]
     */
  AreaExploredOrEventHappens(quest: number): void;

  /**
     * Returns 'true' if the [Player] can block incomming attacks, 'false' otherwise.
     */
  CanBlock(): boolean;

  /**
     * Returns 'true' if the [Player] satisfies all requirements to complete the quest entry.
     */
  CanCompleteQuest(entry: number): boolean;

  /**
     * Returns true if the player can equip the given [Item] or item entry to the given slot, false otherwise.
     */
  CanEquipItem(item: Item, entry: number, slot: number): boolean;

  /**
     * Returns 'true' if the [Player] can fly, 'false' otherwise.
     */
  CanFly(): boolean;

  /**
     * Returns 'true' if the [Player] can parry incomming attacks, 'false' otherwise.
     */
  CanParry(): boolean;

  /**
     * Returns 'true' if the [Player] can share [Quest] specified by ID, 'false' otherwise.
     */
  CanShareQuest(entryId: number): boolean;

  /**
     * Returns 'true' if the [Player] can currently communicate through chat, 'false' otherwise.
     */
  CanSpeak(): boolean;

  /**
     * Returns 'true' if the [Player] can Titan Grip, 'false' otherwise.
     */
  CanTitanGrip(): boolean;

  /**
     * Returns 'true' if the [Player] has permission to uninvite others from the current group, 'false' otherwise.
     */
  CanUninviteFromGroup(): boolean;

  /**
     * Returns 'true' if the [Player] can use the item or item entry specified, 'false' otherwise.
     */
  CanUseItem(item: Item, entry: number): boolean;

  /**
     * Clears the [Player]s combo points
     */
  ClearComboPoints(): void;

  /**
     * Clears all of [Player]s weekly honor status
     */
  ClearHonorInfo(): void;

  /**
     * Completes the given quest entry for the [Player] and tries to satisfy all quest requirements.
     * The player should have the quest to complete it.
     */
  CompleteQuest(entry: number): void;

  /**
     * Damages specified [Item]
     */
  DurabilityLoss(item: Item, percent: number): void;

  /**
     * Damages all [Item]s equipped. If inventory is true, damages [Item]s in bags
     */
  DurabilityLossAll(percent: number, inventory?: boolean): void;

  /**
     * Sets durability loss for an [Item] in the specified slot
     */
  DurabilityPointLossForEquipSlot(slot: number): void;

  /**
     * Sets durability loss for the specified [Item]
     */
  DurabilityPointsLoss(item: Item, points: number): void;

  /**
     * Sets durability loss on all [Item]s equipped
     * If inventory is true, sets durability loss for [Item]s in bags
     */
  DurabilityPointsLossAll(points: number, inventory?: boolean): void;

  /**
     * Repairs [Item] at specified position. Returns total repair cost
     */
  DurabilityRepair(
    position: number,
    cost: boolean,
    discountMod: number,
    guildBank?: boolean,
  ): number;

  /**
     * Repairs all [Item]s. Returns total repair cost
     */
  DurabilityRepairAll(
    cost?: boolean,
    discountMod?: number,
    guidBank?: boolean,
  ): number;

  /**
     * Equips the given item or item entry to the given slot. Returns the equipped item or nil.
     *     enum EquipmentSlots // 19 slots
     *     {
     *         EQUIPMENT_SLOT_START        = 0,
     *         EQUIPMENT_SLOT_HEAD         = 0,
     *         EQUIPMENT_SLOT_NECK         = 1,
     *         EQUIPMENT_SLOT_SHOULDERS    = 2,
     *         EQUIPMENT_SLOT_BODY         = 3,
     *         EQUIPMENT_SLOT_CHEST        = 4,
     *         EQUIPMENT_SLOT_WAIST        = 5,
     *         EQUIPMENT_SLOT_LEGS         = 6,
     *         EQUIPMENT_SLOT_FEET         = 7,
     *         EQUIPMENT_SLOT_WRISTS       = 8,
     *         EQUIPMENT_SLOT_HANDS        = 9,
     *         EQUIPMENT_SLOT_FINGER1      = 10,
     *         EQUIPMENT_SLOT_FINGER2      = 11,
     *         EQUIPMENT_SLOT_TRINKET1     = 12,
     *         EQUIPMENT_SLOT_TRINKET2     = 13,
     *         EQUIPMENT_SLOT_BACK         = 14,
     *         EQUIPMENT_SLOT_MAINHAND     = 15,
     *         EQUIPMENT_SLOT_OFFHAND      = 16,
     *         EQUIPMENT_SLOT_RANGED       = 17,
     *         EQUIPMENT_SLOT_TABARD       = 18,
     *         EQUIPMENT_SLOT_END          = 19
     *     };
     *     enum InventorySlots // 4 slots
     *     {
     *         INVENTORY_SLOT_BAG_START    = 19,
     *         INVENTORY_SLOT_BAG_END      = 23
     *     };
     */
  EquipItem(item: Item, entry: number, slot: number): Item;

  /**
     * Sets the given [Quest] entry failed for the [Player].
     */
  FailQuest(entry: number): void;

  /**
     * Returns the [Player]s account ID
     */
  GetAccountId(): number;

  /**
     * Returns the [Player]s account name
     */
  GetAccountName(): string;

  /**
     * Returns the [Player]s active spec ID
     */
  GetActiveSpec(): number;

  /**
     * Returns the [Player]s current amount of Arena Points
     */
  GetArenaPoints(): number;

  /**
     * Returns base skill value
     */
  GetBaseSkillValue(skill: number): number;

  /**
     * Returns the [Player]s current [BattleGround] ID
     */
  GetBattlegroundId(): number;

  /**
     * Returns the [Player]s current [BattleGround] type ID
     */
  GetBattlegroundTypeId(): BattleGroundTypeId;

  /**
     * Returns the faction ID the [Player] is currently flagged as champion for
     */
  GetChampioningFaction(): number;

  /**
     * Returns active GM chat tag
     */
  GetChatTag(): number;

  /**
     * Returns the [Player]s amount of money in copper
     */
  GetCoinage(): number;

  /**
     * Returns [Player]'s combo points
     */
  GetComboPoints(): number;

  /**
     * Returns [Unit] target combo points are on
     */
  GetComboTarget(): Unit;

  /**
     * Returns the [Player]s [Corpse] object
     */
  GetCorpse(): Corpse;

  /**
     * Returns the [Player]s database locale index
     */
  GetDbLocaleIndex(): number;

  /**
     * Returns the [Player]s game client locale
     */
  GetDbcLocale(): LocaleConstant;

  /**
     * Returns raid or dungeon difficulty
     */
  GetDifficulty(isRaid?: boolean): number;

  /**
     * Returns the [Player]s current level of intoxication
     */
  GetDrunkValue(): number;

  /**
     * Returns a [Player]s [Item] object by gear slot specified
     */
  GetEquippedItemBySlot(slot: number): Item;

  /**
     * Returns the [Player]s free talent point amount
     */
  GetFreeTalentPoints(): number;

  /**
     * Returns the [Player]s GM Rank
     */
  GetGMRank(): number;

  /**
     * Returns the database textID of the [WorldObject]'s gossip header text for the [Player]
     */
  GetGossipTextId(): number;

  /**
     * Returns the [Player]s [Group] object
     */
  GetGroup(): Group;

  /**
     * Returns [Group] invitation
     */
  GetGroupInvite(): Group;

  /**
     * Returns the [Player]s [Guild] object
     */
  GetGuild(): Guild;

  /**
     * Returns the [Player]s current [Guild] ID
     */
  GetGuildId(): number;

  /**
     * Returns the name of the [Player]s current [Guild]
     */
  GetGuildName(): string;

  /**
     * Returns the [Player]s current guild rank
     */
  GetGuildRank(): number;

  /**
     * Returns health bonus from amount of stamina
     */
  GetHealthBonusFromStamina(): number;

  /**
     * Returns last week's standing position
     */
  GetHonorLastWeekStandingPos(): number;

  /**
     * Returns the [Player]s current amount of Honor Points
     */
  GetHonorPoints(): number;

  /**
     * Returns [Player] kills
     */
  GetHonorStoredKills(honorable?: boolean): number;

  /**
     * Returns the amount of time the [Player] has spent ingame
     */
  GetInGameTime(): number;

  /**
     * Returns an [Item] from the player by entry.
     * The item can be equipped, in bags or in bank.
     */
  GetItemByEntry(entryId: number): Item;

  /**
     * Returns an [Item] from the player by guid.
     * The item can be equipped, in bags or in bank.
     */
  GetItemByGUID(guid: number): Item;

  /**
     * Returns an item in given bag on given slot.
     * ```typescript
     * Possible and most commonly used combinations:
     * bag = 255
     * slots 0-18 equipment
     * slots 19-22 equipped bag slots
     * slots 23-38 backpack
     * slots 39-66 bank main slots
     * slots 67-74 bank bag slots
     * slots 86-117 keyring
     * bag = 19-22
     * slots 0-35 for equipped bags
     * bag = 67-74
     * slots 0-35 for bank bags
     * ```
     */
  GetItemByPos(bag: number, slot: number): Item;

  /**
     * Returns amount of the specified [Item] the [Player] has.
     */
  GetItemCount(entry: number, checkinBank?: boolean): number;

  /**
     * Returns the [Player]s current latency in MS
     */
  GetLatency(): number;

  /**
     * Returns the [Player]s time played at current level
     */
  GetLevelPlayedTime(): number;

  /**
     * Returns the [Player]s lifetime Honorable Kills
     */
  GetLifetimeKills(): number;

  /**
     * Returns mana bonus from amount of intellect
     */
  GetManaBonusFromIntellect(): number;

  /**
     * Returns max value of specified skill
     */
  GetMaxSkillValue(skill: number): number;

  /**
     * Returns a random Raid Member [Player] object within radius specified of [Player]
     */
  GetNextRandomRaidMember(radius: number): Player;

  /**
     * Returns [Player]s original [Group] object
     */
  GetOriginalGroup(): Group;

  /**
     * Returns [Player]s original sub group
     */
  GetOriginalSubGroup(): number;

  /**
     * Returns the normal phase of the player instead of the actual phase possibly containing GM phase
     */
  GetPhaseMaskForSpawn(): number;

  /**
     * Returns the [Player]s IP address
     */
  GetPlayerIP(): string;

  /**
     * Returns max value of specified skill without bonus'
     */
  GetPureMaxSkillValue(skill: number): number;

  /**
     * Returns skill value without bonus'
     */
  GetPureSkillValue(skill: number): number;

  /**
     * Returns the quest level of the [Player]s [Quest] specified by object
     */
  GetQuestLevel(questId: number): number;

  /**
     * Returns 'true' if the [Player]s [Quest] specified by entry ID has been rewarded, 'false' otherwise.
     */
  GetQuestRewardStatus(questId: number): boolean;

  /**
     * Returns the status of the [Player]s [Quest] specified by entry ID
     */
  GetQuestStatus(questId: number): number;

  /**
     * Returns rank points
     */
  GetRankPoints(): number;

  /**
     * Returns the amount of reputation the [Player] has with the faction specified
     */
  GetReputation(faction: number): number;

  /**
     * Returns the [Player]s reputation rank of faction specified
     */
  GetReputationRank(faction: number): number;

  /**
     * Returns [Quest] required [Creature] or [GameObject] count
     */
  GetReqKillOrCastCurrentCount(quest: number, entry: number): number;

  /**
     * Returns the [Player]s current resting bonus
     */
  GetRestBonus(): number;

  /**
     * Returns the [Player]s currently selected [Unit] object
     */
  GetSelection(): Unit;

  /**
     * Returns the [Player]s current shield block value
     */
  GetShieldBlockValue(): number;

  /**
     * Returns skill permanent bonus value
     */
  GetSkillPermBonusValue(skill: number, bonusVal: number): void;

  /**
     * Returns skill temporary bonus value
     */
  GetSkillTempBonusValue(skill: number, bonusVal: number): void;

  /**
     * Returns skill value
     */
  GetSkillValue(skill: number): number;

  /**
     * Returns the amount of available specs the [Player] currently has
     */
  GetSpecsCount(): number;

  /**
     * Returns the [Player]s cooldown delay by specified [Spell] ID
     */
  GetSpellCooldownDelay(spellId: number): number;

  /**
     * Returns [Player]s current sub group
     */
  GetSubGroup(): number;

  /**
     * Returns the [Player]s [TeamId]
     */
  GetTeam(): TeamId;

  /**
     * Returns the [Player]s total time played
     */
  GetTotalPlayedTime(): number;

  /**
     * Returns rested experience bonus
     */
  GetXPRestBonus(xp: number): number;

  /**
     * Gives the [Player] experience
     */
  GiveXP(xp: number, victim?: Unit): void;

  /**
     * Adds the gossip items to the [Player]'s gossip for the quests the given [WorldObject] can offer to the player.
     */
  GossipAddQuests(source: WorldObject): void;

  /**
     * Clears the [Player]s current gossip item list.
     * See also: [Player:GossipMenuAddItem], [Player:GossipSendMenu], [Player:GossipAddQuests], [Player:GossipComplete]
     *     Note: This is needed when you show a gossip menu without using gossip hello or select hooks which do this automatically.
     *     Usually this is needed when using [Player] is the sender of a Gossip Menu.
     */
  GossipClearMenu(): void;

  /**
     * Closes the [Player]s currently open Gossip Menu.
     * See also: [Player:GossipMenuAddItem], [Player:GossipAddQuests], [Player:GossipSendMenu], [Player:GossipClearMenu]
     */
  GossipComplete(): void;

  /**
     * Adds a new item to the gossip menu shown to the [Player] on next call to [Player:GossipSendMenu].
     * sender and intid are numbers which are passed directly to the gossip selection handler. Internally they are partly used for the database gossip handling.
     * code specifies whether to show a box to insert text to. The player inserted text is passed to the gossip selection handler.
     * money specifies an amount of money the player needs to have to click the option. An error message is shown if the player doesn't have enough money.
     * Note that the money amount is only checked client side and is not removed from the player either. You will need to check again in your code before taking action.
     * See also: [Player:GossipSendMenu], [Player:GossipAddQuests], [Player:GossipComplete], [Player:GossipClearMenu]
     */
  GossipMenuAddItem(
    icon: number,
    msg: string,
    sender: number,
    intid: number,
    code?: boolean,
    popup?: string,
    money?: number,
  ): void;

  /**
     * Sends the current gossip items of the player to him as a gossip menu with header text from the given textId.
     * If sender is a [Player] then menu_id is mandatory, otherwise it is not used for anything.
     * menu_id is the ID used to trigger the OnGossipSelect registered for players. See [Global:RegisterPlayerGossipEvent]
     * See also: [Player:GossipMenuAddItem], [Player:GossipAddQuests], [Player:GossipComplete], [Player:GossipClearMenu]
     */
  GossipSendMenu(npc_text: number, sender: EObject, menu_id: number): void;

  /**
     * Sends POI to the location on your map
     */
  GossipSendPOI(
    x: number,
    y: number,
    icon: number,
    flags: number,
    data: number,
    iconText: string,
  ): void;

  /**
     * Creates a new [Group] with the creator [Player] as leader.
     */
  GroupCreate(invited: Player): Group;

  /**
     * Completes a [Quest] if in a [Group]
     */
  GroupEventHappens(quest: number, obj: WorldObject): void;

  /**
     * Makes the [Player] invite another player to a group.
     */
  GroupInvite(invited: Player): boolean;

  /**
     * Returns 'true' if the [Player] has completed the specified achievement, 'false' otherwise.
     */
  HasAchieved(achievementId: number): boolean;

  /**
     * Returns true if [Player] has specified login flag
     */
  HasAtLoginFlag(flag: number): boolean;

  /**
     * Returns 'true' if the [Player] has the given amount of item entry specified, 'false' otherwise.
     */
  HasItem(itemId: number, count?: number, check_bank?: boolean): boolean;

  /**
     * Returns 'true' if the [Player] has an active [Quest] by specific ID, 'false' otherwise.
     */
  HasQuest(questId: number): boolean;

  /**
     * Returns true if [Player] has [Quest] for [GameObject]
     */
  HasQuestForGO(entry: number): boolean;

  /**
     * Returns 'true' if the [Player] has a quest for the item entry specified, 'false' otherwise.
     */
  HasQuestForItem(entry: number): boolean;

  /**
     * Returns 'true' if the [Player] has a skill by specific ID, 'false' otherwise.
     */
  HasSkill(skill: number): boolean;

  /**
     * Returns 'true' if the [Player] has a [Spell] by specific ID, 'false' otherwise.
     */
  HasSpell(spellId: number): boolean;

  /**
     * Returns 'true' if the [Spell] specified by ID is currently on cooldown for the [Player], 'false' otherwise.
     */
  HasSpellCooldown(spellId: number): boolean;

  /**
     * Returns 'true' if the [Player] has a talent by ID in specified spec, 'false' otherwise.
     */
  HasTalent(spellId: number, spec: number): boolean;

  /**
     * Returns 'true' if the [Player] has a title by specific ID, 'false' otherwise.
     */
  HasTitle(titleId: number): boolean;

  /**
     * Returns 'true' if the [Player] is currently in an arena, 'false' otherwise.
     */
  InArena(): boolean;

  /**
     * Returns 'true' if the [Player] is currently in a [BattleGround], 'false' otherwise.
     */
  InBattleground(): boolean;

  /**
     * Returns 'true' if the [Player] is currently in a [BattleGround] queue, 'false' otherwise.
     */
  InBattlegroundQueue(): boolean;

  /**
     * Sets the given quest entry incomplete for the [Player].
     */
  IncompleteQuest(entry: number): void;

  /**
     * Returns 'true' if the [Player] is 'Away From Keyboard' flagged, 'false' otherwise.
     */
  IsAFK(): boolean;

  /**
     * Returns 'true' if the [Player] is accepting whispers, 'false' otherwise.
     */
  IsAcceptingWhispers(): boolean;

  /**
     * Returns 'true' if the [Player] is a part of the Alliance faction, 'false' otherwise.
     */
  IsAlliance(): boolean;

  /**
     * Returns 'true' if the [Player] is 'Do Not Disturb' flagged, 'false' otherwise.
     */
  IsDND(): boolean;

  /**
     * Returns 'true' if the [Player] is currently falling, 'false' otherwise.
     */
  IsFalling(): boolean;

  /**
     * Returns 'true' if the [Player] is currently flying, 'false' otherwise.
     */
  IsFlying(): boolean;

  /**
     * Returns 'true' if the [Player] is a Game Master, 'false' otherwise.
     * Note: This is only true when GM tag is activated! For alternative see [Player:GetGMRank]
     */
  IsGM(): boolean;

  /**

     */
  IsGMChat(): void;

  /**

     */
  IsGMVisible(): void;

  /**

     */
  IsGroupVisibleFor(): void;

  /**
     * Returns 'true' if the [Player] is eligible for Honor or XP gain by [Unit] specified, 'false' otherwise.
     */
  IsHonorOrXPTarget(unit: Unit): boolean;

  /**
     * Returns 'true' if the [Player] is a part of the Horde faction, 'false' otherwise.
     */
  IsHorde(): boolean;

  /**
     * Returns 'true' if the [Player] is immune to everything.
     */
  IsImmuneToDamage(): boolean;

  /**
     * Returns 'true' if the [Player] is in an arena team specified by type, 'false' otherwise.
     */
  IsInArenaTeam(type: number): boolean;

  /**
     * Returns 'true' if the [Player] is in a [Group], 'false' otherwise.
     */
  IsInGroup(): boolean;

  /**
     * Returns 'true' if the [Player] is in a [Guild], 'false' otherwise.
     */
  IsInGuild(): boolean;

  /**
     * Returns 'true' if the [Player] is currently in the same [Group] as another [Player] by object, 'false' otherwise.
     */
  IsInSameGroupWith(player: Player): boolean;

  /**
     * Returns 'true' if the [Player] is currently in the same raid as another [Player] by object, 'false' otherwise.
     */
  IsInSameRaidWith(player: Player): boolean;

  /**
     * Returns 'true' if the [Player] is currently in water, 'false' otherwise.
     */
  IsInWater(): boolean;

  /**
     * Returns 'true' if the [Player] is currently moving, 'false' otherwise.
     */
  IsMoving(): boolean;

  /**
     * Returns 'true' if the [Player] is currently rested, 'false' otherwise.
     */
  IsRested(): boolean;

  /**
     * Returns 'true' if the [Player] has taxi cheat activated, 'false' otherwise.
     */
  IsTaxiCheater(): boolean;

  /**
     * Returns 'true' if the [Player] can see anoter [Player] specified by object, 'false' otherwise.
     */
  IsVisibleForPlayer(player: Player): boolean;

  /**
     * Kicks the [Player] from the server
     */
  KickPlayer(): void;

  /**
     * Kills the [Player]
     */
  KillPlayer(): void;

  /**
     * Gives [Quest] monster killed credit
     */
  KilledMonsterCredit(entry: number): void;

  /**
     * Teaches the [Player] the [Spell] specified by entry ID
     */
  LearnSpell(spellId: number): void;

  /**
     * Learn the [Player] the talent specified by talent_id and talentRank
     */
  LearnTalent(talent_id: number, talentRank: number): void;

  /**
     * Forces the [Player] to leave a [BattleGround]
     */
  LeaveBattleground(teleToEntry?: boolean): void;

  /**
     * Forces the [Player] to log out
     */
  LogoutPlayer(saveToDb?: boolean): void;

  /**
     * Adds or detracts from the [Player]s current Arena Points
     */
  ModifyArenaPoints(amount: number): void;

  /**
     * Adds or detracts from the [Player]s current Honor Points
     */
  ModifyHonorPoints(amount: number): void;

  /**
     * Adds or subtracts from the [Player]s money in copper
     */
  ModifyMoney(copperAmt: number): void;

  /**
     * Mutes the [Player] for the amount of seconds specified
     */
  Mute(muteTime: number): void;

  /**
     * Forcefully removes the [Player] from a [BattleGround] raid group
     */
  RemoveFromBattlegroundRaid(): void;

  /**
     * Forces the [Player] to leave a [Group]
     */
  RemoveFromGroup(): void;

  /**
     * Removes the given amount of the specified [Item] from the player.
     */
  RemoveItem(item: Item, entry: number, itemCount?: number): void;

  /**
     * Removes specified amount of lifetime kills
     */
  RemoveLifetimeKills(val: number): void;

  /**
     * Removes the given quest entry from the [Player].
     */
  RemoveQuest(entry: number): void;

  /**
     * Removes the [Spell] from the [Player]
     */
  RemoveSpell(entry: number): void;

  /**
     * Loots [Player]'s bones for insignia
     */
  RemovedInsignia(looter: Player): void;

  /**
     * Reset the [Player]s completed achievements
     */
  ResetAchievements(): void;

  /**
     * Resets all of the [Player]'s cooldowns
     */
  ResetAllCooldowns(): void;

  /**
     * Resets the [Player]s weekly honor status
     */
  ResetHonor(): void;

  /**
     * Resets the [Player]s pets talent points
     */
  ResetPetTalents(): void;

  /**
     * Resets cooldown of the specified spell
     */
  ResetSpellCooldown(spellId: number, update?: boolean): void;

  /**
     * Resets the [Player]s talents
     */
  ResetTalents(noCost?: boolean): void;

  /**
     * Returns the [Player]s accumulated talent reset cost
     */
  ResetTalentsCost(): number;

  /**
     * Resets cooldown of the specified category
     */
  ResetTypeCooldowns(category: number, update?: boolean): void;

  /**
     * Resurrects the [Player].
     */
  ResurrectPlayer(healthPercent?: number, ressSickness?: boolean): void;

  /**
     * Rewards the given quest entry for the [Player] if he has completed it.
     */
  RewardQuest(entry: number): void;

  /**
     * Saves the [Player] to the database
     */
  SaveToDB(): void;

  /**
     * Sends say text from the [Player]
     */
  Say(text: string, lang: Language): void;

  /**
     * Sends addon message to the [Player] receiver
     */
  SendAddonMessage(
    prefix: string,
    message: string,
    channel: number,
    receiver: Player,
  ): void;

  /**
     * Sends an Area Trigger Message to the [Player]
     */
  SendAreaTriggerMessage(message: string): void;

  /**
     * Sends an auction house window to the [Player] from the [Unit] specified
     */
  SendAuctionMenu(sender: Unit): void;

  /**
     * Sends a Broadcast Message to the [Player]
     */
  SendBroadcastMessage(message: string): void;

  /**
     * Starts a cinematic for the [Player]
     */
  SendCinematicStart(CinematicSequenceId: number): void;

  /**
     * Sends a guild invitation from the [Player]s [Guild] to the [Player] object specified
     */
  SendGuildInvite(invitee: Player): void;

  /**
     * Sends a vendor window to the [Player] from the [WorldObject] specified.
     */
  SendListInventory(sender: WorldObject): void;

  /**
     * Starts a movie for the [Player]
     */
  SendMovieStart(MovieId: number): void;

  /**
     * Sends a Notification to the [Player]
     */
  SendNotification(message: string): void;

  /**
     * Sends a [WorldPacket] to the [Player]
     */
  SendPacket(packet: WorldPacket, selfOnly?: boolean): void;

  /**
     * Shows a quest accepting window to the [Player] for the given quest.
     */
  SendQuestTemplate(questId: number, activateAccept?: boolean): void;

  /**
     * Sends a bank window to the [Player] from the [WorldObject] specified.
     */
  SendShowBank(sender: WorldObject): void;

  /**
     * Shows the mailbox window to the player from specified guid.
     */
  SendShowMailBox(guid?: number): void;

  /**
     * Sends a spirit resurrection request to the [Player]
     */
  SendSpiritResurrect(): void;

  /**
     * Sends a tabard vendor window to the [Player] from the [WorldObject] specified
     */
  SendTabardVendorActivate(sender: WorldObject): void;

  /**
     * Sends a flightmaster window to the [Player] from the [Creature] specified
     */
  SendTaxiMenu(sender: Creature): void;

  /**
     * Sends a trainer window to the [Player] from the [Creature] specified
     */
  SendTrainerList(sender: Creature): void;

  /**
     * Toggles whether the [Player] accepts whispers or not
     */
  SetAcceptWhispers(acceptWhispers?: boolean): void;

  /**
     * Adds the specified achievement to the [Player]s
     */
  SetAchievement(achievementid: number): void;

  /**
     * Sets the [Player]s Arena Points to the amount specified
     */
  SetArenaPoints(arenaPoints: number): void;

  /**
     * Sets the [Player]s login flag to the flag specified
     */
  SetAtLoginFlag(flag: number): void;

  /**
     * Sets the [Player]s home location to the location specified
     */
  SetBindPoint(
    x: number,
    y: number,
    z: number,
    mapId: number,
    areaId: number,
  ): void;

  /**
     * Sets the [Player]s amount of money to copper specified
     */
  SetCoinage(copperAmt: number): void;

  /**
     * Sets the [Player]s intoxication level to the level specified
     */
  SetDrunkValue(drunkValue: number): void;

  /**
     * Toggle the [Player]s FFA flag
     */
  SetFFA(applyFFA?: boolean): void;

  /**
     * Sets the [Player]s faction standing to that of the race specified
     */
  SetFactionForRace(raceId: number): void;

  /**
     * Sets the [Player]s free talent points to the amount specified for the current spec
     */
  SetFreeTalentPoints(talentPointAmt: number): void;

  /**
     * Toggle Blizz (GM) tag
     */
  SetGMChat(on?: boolean): void;

  /**
     * Toggles whether the [Player] has GM visibility on or off
     */
  SetGMVisible(gmVisible?: boolean): void;

  /**
     * Toggles the [Player]s GM mode on or off
     */
  SetGameMaster(setGmMode?: boolean): void;

  /**
     * Sets the [Player]s gender to gender specified
     * - GENDER_MALE    = 0
     * - GENDER_FEMALE  = 1
     */
  SetGender(gender: number): void;

  /**
     * Sets the [Player]s guild rank to the rank specified
     */
  SetGuildRank(rank: number): void;

  /**
     * Sets last week's honor standing position
     */
  SetHonorLastWeekStandingPos(standingPos: number): void;

  /**
     * Sets the [Player]s Honor Points to the amount specified
     */
  SetHonorPoints(honorPoints: number): void;

  /**
     * Sets kills
     */
  SetHonorStoredKills(kills: number, honorable?: boolean): void;

  /**
     * Adds the specified title to the [Player]s list of known titles
     */
  SetKnownTitle(titleId: number): void;

  /**
     * Sets the [Player]s amount of Lifetime Honorable Kills to the value specified
     */
  SetLifetimeKills(honorableKills: number): void;

  /**
     * Locks the player controls and disallows all movement and casting.
     */
  SetPlayerLock(apply?: boolean): void;

  /**
     * Toggles PvP Death
     */
  SetPvPDeath(on?: boolean): void;

  /**
     * Sets [Quest] state
     */
  SetQuestStatus(entry: number, status: number): void;

  /**
     * Sets rank points
     */
  SetRankPoints(rankPoints: number): void;

  /**
     * Sets the [Player]s reputation amount for the faction specified
     */
  SetReputation(factionId: number, reputationValue: number): void;

  /**
     * Sets the [Player]s rest bonus to the amount specified
     */
  SetRestBonus(restBonus: number): void;

  /**
     * Sets the [Player]s sheathe state to the state specified
     */
  SetSheath(sheatheState: number): void;

  /**
     * Sets (increases) skill of the [Player]
     */
  SetSkill(id: number, step: number, currVal: number, maxVal: number): void;

  /**
     * Toggles whether the [Player] has taxi cheat enabled or not
     */
  SetTaxiCheat(taxiCheat?: boolean): void;

  /**
     * Converts [Player]'s corpse to bones
     */
  SpawnBones(): void;

  /**
     * Attempts to start the taxi/flying to the given pathID
     */
  StartTaxi(pathId: number): void;

  /**
     * Sends a summon request to the player from the given summoner
     */
  SummonPlayer(summoner: Unit): void;

  /**
     * Gives [Quest] monster talked to credit
     */
  TalkedToCreature(entry: number, creature: Creature): void;

  /**
     * Teleports a [Player] to the location specified
     */
  Teleport(
    mappId: number,
    xCoord: number,
    yCoord: number,
    zCoord: number,
    orientation: number,
  ): void;

  /**
     * Sends a text emote from the [Player]
     */
  TextEmote(emoteText: string): void;

  /**
     * Toggle the [Player]s 'Away From Keyboard' flag
     */
  ToggleAFK(): void;

  /**
     * Toggle the [Player]s 'Do Not Disturb' flag
     */
  ToggleDND(): void;

  /**
     * Unbinds the [Player] from his instances except the one he currently is in.
     */
  UnbindAllInstances(): void;

  /**
     * Unbinds the [Player] from his instances except the one he currently is in.
     * Difficulty is not used on classic.
     */
  UnbindInstance(map?: number, difficulty?: number): void;

  /**
     * Removes a title by ID from the [Player]s list of known titles
     */
  UnsetKnownTitle(titleId: number): void;

  /**
     * Updates the [Player]s weekly honor status
     */
  UpdateHonor(): void;

  /**
     * Sends whisper text from the [Player]
     */
  Whisper(text: string, lang: number, receiver: Player, guid: number): void;

  /**
     * Sends yell text from the [Player]
     */
  Yell(text: string, lang: Language): void;
}

declare class Quest {
  /**
     * Returns the [Quest]'s flags.
     */
  GetFlags(): QuestFlags;

  /**
     * Returns entry ID of the [Quest].
     */
  GetId(): number;

  /**
     * Returns the [Quest]'s level.
     */
  GetLevel(): number;

  /**
     * Returns the minimum level required to pick up the [Quest].
     */
  GetMinLevel(): number;

  /**
     * Returns the next [Quest] entry ID.
     */
  GetNextQuestId(): number;

  /**
     * Returns the next [Quest] entry ID in the specific [Quest] chain.
     */
  GetNextQuestInChain(): number;

  /**
     * Returns the previous [Quest] entry ID.
     */
  GetPrevQuestId(): number;

  /**
     * Returns the [Quest]'s type.
     * TODO: Document types available.
     */
  GetType(): number;

  /**
     * Returns 'true' if the [Quest] has the specified flag, false otherwise.
     * Below flags are based off of 3.3.5a. Subject to change.
     * ```typescript
     * enum QuestFlags
     * {
     *     // Flags used at server and sent to client
     *     QUEST_FLAGS_NONE                    = 0x0,
     *     QUEST_FLAGS_STAY_ALIVE              = 0x1,       // Not used currently
     *     QUEST_FLAGS_PARTY_ACCEPT            = 0x2,       // Not used currently. If player in party, all players that can accept this quest will receive confirmation box to accept quest CMSG_QUEST_CONFIRM_ACCEPT/SMSG_QUEST_CONFIRM_ACCEPT
     *     QUEST_FLAGS_EXPLORATION             = 0x4,       // Not used currently
     *     QUEST_FLAGS_SHARABLE                = 0x8,       // Can be shared: Player::CanShareQuest()
     *     QUEST_FLAGS_HAS_CONDITION           = 0x10,      // Not used currently
     *     QUEST_FLAGS_HIDE_REWARD_POI         = 0x20,      // Not used currently: Unsure of content
     *     QUEST_FLAGS_RAID                    = 0x40,      // Not used currently
     *     QUEST_FLAGS_TBC                     = 0x80,      // Not used currently: Available if TBC expansion enabled only
     *     QUEST_FLAGS_NO_MONEY_FROM_XP        = 0x100,     // Not used currently: Experience is not converted to gold at max level
     *     QUEST_FLAGS_HIDDEN_REWARDS          = 0x200,     // Items and money rewarded only sent in SMSG_QUESTGIVER_OFFER_REWARD (not in SMSG_QUESTGIVER_QUEST_DETAILS or in client quest log(SMSG_QUEST_QUERY_RESPONSE))
     *     QUEST_FLAGS_TRACKING                = 0x400,     // These quests are automatically rewarded on quest complete and they will never appear in quest log client side.
     *     QUEST_FLAGS_DEPRECATE_REPUTATION    = 0x800,     // Not used currently
     *     QUEST_FLAGS_DAILY                   = 0x1000,    // Used to know quest is Daily one
     *     QUEST_FLAGS_FLAGS_PVP               = 0x2000,    // Having this quest in log forces PvP flag
     *     QUEST_FLAGS_UNAVAILABLE             = 0x4000,    // Used on quests that are not generically available
     *     QUEST_FLAGS_WEEKLY                  = 0x8000,
     *     QUEST_FLAGS_AUTOCOMPLETE            = 0x10000,   // auto complete
     *     QUEST_FLAGS_DISPLAY_ITEM_IN_TRACKER = 0x20000,   // Displays usable item in quest tracker
     *     QUEST_FLAGS_OBJ_TEXT                = 0x40000,   // use Objective text as Complete text
     *     QUEST_FLAGS_AUTO_ACCEPT             = 0x80000,   // The client recognizes this flag as auto-accept. However, NONE of the current quests (3.3.5a) have this flag. Maybe blizz used to use it, or will use it in the future.
     *     // ... 4.x added flags up to 0x80000000 - all unknown for now
     * };
     * ```
     */
  HasFlag(flag: QuestFlags): boolean;

  /**
     * Returns 'true' if the [Quest] is a daily quest, false otherwise.
     */
  IsDaily(): boolean;

  /**
     * Returns 'true' if the [Quest] is repeatable, false otherwise.
     */
  IsRepeatable(): boolean;
}

/**
An instance of a spell, created when the spell is cast by a Unit.
 */
declare class Spell {
  /**
     * Cancels the [Spell].
     */
  Cancel(): void;

  /**
     * Casts the [Spell].
     */
  Cast(skipCheck?: boolean): void;

  /**
     * Finishes the [Spell].
     */
  Finish(): void;

  /**
     * Returns the cast time of the [Spell].
     */
  GetCastTime(): number;

  /**
     * Returns the [Unit] that casted the [Spell].
     */
  GetCaster(): Unit;

  /**
     * Returns the spell duration of the [Spell].
     */
  GetDuration(): number;

  /**
     * Returns the entry ID of the [Spell].
     */
  GetEntry(): number;

  /**
     * Returns the power cost of the [Spell].
     */
  GetPowerCost(): number;

  /**
     * Returns the target [Object] of the [Spell].
     * The target can be any of the following [Object] types:
     * - [Player]
     * - [Creature]
     * - [GameObject]
     * - [Item]
     * - [Corpse]
     */
  GetTarget(): EObject;

  /**
     * Returns the target destination coordinates of the [Spell].
     */
  GetTargetDest(): [number, number, number];

  /**
     * Returns `true` if the [Spell] is automatically repeating, `false` otherwise.
     */
  IsAutoRepeat(): boolean;

  /**
     * Sets the [Spell] to automatically repeat.
     */
  SetAutoRepeat(repeat: boolean): void;
}

declare class Unit extends WorldObject {
  /**
     * Adds the [Aura] of the given spell entry on the given target from the [Unit].
     */
  AddAura(spell: number, target: Unit): Aura;

  /**
     * Adds threat to the [Unit] from the victim.
     * ```typescript
     * enum SpellSchoolMask
     * {
     *     SPELL_SCHOOL_MASK_NONE    = 0,
     *     SPELL_SCHOOL_MASK_NORMAL  = 1,
     *     SPELL_SCHOOL_MASK_HOLY    = 2,
     *     SPELL_SCHOOL_MASK_FIRE    = 4,
     *     SPELL_SCHOOL_MASK_NATURE  = 8,
     *     SPELL_SCHOOL_MASK_FROST   = 16,
     *     SPELL_SCHOOL_MASK_SHADOW  = 32,
     *     SPELL_SCHOOL_MASK_ARCANE  = 64,
     * }
     * ```
     */
  AddThreat(
    victim: Unit,
    threat: number,
    schoolMask?: SpellSchoolMask,
    spell?: number,
  ): void;

  /**
     * Adds the given unit state for the [Unit].
     */
  AddUnitState(state: number): void;

  /**
     * The [Unit] tries to attack a given target
     * @return didAttack : if the [Unit] did not attack
     */
  Attack(who: Unit, meleeAttack?: boolean): void;

  /**
     * The [Unit] stops attacking its target
     */
  AttackStop(): boolean;

  /**
     * Casts the [Spell] at target [Unit] with custom basepoints or casters.
     * See also [Unit:CastSpell].
     */
  CastCustomSpell(
    target: Unit,
    spell: number,
    triggered?: boolean,
    bp0?: number,
    bp1?: number,
    bp2?: number,
    castItem?: Item,
    originalCaster?: number,
  ): void;

  /**
     * Makes the [Unit] cast the spell on the target.
     */
  CastSpell(target: Unit, spell: number, triggered?: boolean): void;

  /**
     * Makes the [Unit] cast the spell to the given coordinates, used for area effect spells.
     */
  CastSpellAoF(
    x: number,
    y: number,
    z: number,
    spell: number,
    triggered?: boolean,
  ): void;

  /**
     * Clears the [Unit]'s combat
     */
  ClearInCombat(): void;

  /**
     * Clears the [Unit]'s threat list.
     */
  ClearThreatList(): void;

  /**
     * Removes the given unit state from the [Unit].
     */
  ClearUnitState(state: number): void;

  /**
     * Returns calculated percentage from Health
     */
  CountPctFromCurHealth(): number;

  /**
     * Returns calculated percentage from Max Health
     */
  CountPctFromMaxHealth(): number;

  /**
     * Unmorphs the [Unit] setting it's display ID back to the native display ID.
     */
  DeMorph(): void;

  /**
     * Makes the [Unit] damage the target [Unit]
     * ```typescript
     * enum SpellSchools
     * {
     *     SPELL_SCHOOL_NORMAL  = 0,
     *     SPELL_SCHOOL_HOLY    = 1,
     *     SPELL_SCHOOL_FIRE    = 2,
     *     SPELL_SCHOOL_NATURE  = 3,
     *     SPELL_SCHOOL_FROST   = 4,
     *     SPELL_SCHOOL_SHADOW  = 5,
     *     SPELL_SCHOOL_ARCANE  = 6,
     *     MAX_SPELL_SCHOOL     = 7
     * };
     * ```
     */
  DealDamage(
    target: Unit,
    damage: number,
    durabilityloss?: boolean,
    school?: SpellSchools,
    spell?: number,
  ): void;

  /**
     * Makes the [Unit] heal the target [Unit] with given spell
     */
  DealHeal(
    target: Unit,
    spell: number,
    amount: number,
    critical?: boolean,
  ): void;

  /**
     * Dismounts the [Unit].
     */
  Dismount(): void;

  /**
     * Makes the [Unit] perform the given emote continuously.
     */
  EmoteState(emoteId: number): void;

  /**
     * Returns the [Aura] of the given spell entry on the [Unit] or nil.
     */
  GetAura(spellID: number): Aura;

  /**
     * Returns the [Unit]'s base spell power
     */
  GetBaseSpellPower(spellSchool: number): number;

  /**
     * Returns the GUID of the [Unit]'s charmed entity.
     */
  GetCharmGUID(): number;

  /**
     * Returns the [Unit]'s charmer's GUID.
     */
  GetCharmerGUID(): number;

  /**
     * Returns the [Unit]'s class ID.
     */
  GetClass(): number;

  /**
     * Returns the [Unit]'s class' name in given or default locale or nil.
     * ```typescript
     * enum LocaleConstant
     * {
     *     LOCALE_enUS = 0,
     *     LOCALE_koKR = 1,
     *     LOCALE_frFR = 2,
     *     LOCALE_deDE = 3,
     *     LOCALE_zhCN = 4,
     *     LOCALE_zhTW = 5,
     *     LOCALE_esES = 6,
     *     LOCALE_esMX = 7,
     *     LOCALE_ruRU = 8
     * };
     * ```
     */
  GetClassAsString(locale?: LocaleConstant): string;

  /**
     * Returns the class mask
     */
  GetClassMask(): number;

  /**
     * Returns the GUID of the [Unit]'s charmer or owner.
     */
  GetControllerGUID(): number;

  /**
     * Returns the GUID of the [Unit]'s charmer or owner or its own GUID.
     */
  GetControllerGUIDS(): number;

  /**
     * Returns the [Unit]'s creator's GUID.
     */
  GetCreatorGUID(): number;

  /**
     * Returns the [Unit]'s creature type ID (enumerated in CreatureType.dbc).
     * ```typescript
     * enum CreatureType
     * {
     *     CREATURE_TYPE_BEAST            = 1,
     *     CREATURE_TYPE_DRAGONKIN        = 2,
     *     CREATURE_TYPE_DEMON            = 3,
     *     CREATURE_TYPE_ELEMENTAL        = 4,
     *     CREATURE_TYPE_GIANT            = 5,
     *     CREATURE_TYPE_UNDEAD           = 6,
     *     CREATURE_TYPE_HUMANOID         = 7,
     *     CREATURE_TYPE_CRITTER          = 8,
     *     CREATURE_TYPE_MECHANICAL       = 9,
     *     CREATURE_TYPE_NOT_SPECIFIED    = 10,
     *     CREATURE_TYPE_TOTEM            = 11,
     *     CREATURE_TYPE_NON_COMBAT_PET   = 12,     // This and below is TBC+
     *     CREATURE_TYPE_GAS_CLOUD        = 13
     * };
     * ```
     */
  GetCreatureType(): CreatureType;

  /**
     * Returns the Critter Guid
     */
  GetCritterGUID(): number;

  /**
     * Returns the currently casted [Spell] of given type or nil.
     * ```typescript
     * enum CurrentSpellTypes
     * {
     *     CURRENT_MELEE_SPELL             = 0,
     *     CURRENT_GENERIC_SPELL           = 1,
     *     CURRENT_CHANNELED_SPELL         = 2,
     *     CURRENT_AUTOREPEAT_SPELL        = 3
     * };
     * ```
     */
  GetCurrentSpell(spellType: CurrentSpellTypes): Spell;

  /**
     * Returns the [Unit]'s current display ID.
     */
  GetDisplayId(): number;

  /**
     * Returns the [Unit]'s faction ID.
     */
  GetFaction(): number;

  /**
     * Returns a table containing friendly [Unit]'s within given range of the [Unit].
     */
  GetFriendlyUnitsInRange(range?: number): number;

  /**
     * Returns the [Unit]'s gender.
     */
  GetGender(): number;

  /**
     * Returns the [Unit]'s health amount.
     */
  GetHealth(): number;

  /**
     * Returns the [Unit]'s health percent.
     */
  GetHealthPct(): number;

  /**
     * Returns the [Unit]'s level.
     */
  GetLevel(): number;

  /**
     * Returns the [Unit]'s max health.
     */
  GetMaxHealth(): number;

  /**
     * Returns the [Unit]'s max power amount for given power type.
     *     enum Powers
     *     {
     *         POWER_MANA        = 0,
     *         POWER_RAGE        = 1,
     *         POWER_FOCUS       = 2,
     *         POWER_ENERGY      = 3,
     *         POWER_HAPPINESS   = 4,
     *         POWER_RUNE        = 5,
     *         POWER_RUNIC_POWER = 6,
     *         MAX_POWERS        = 7,
     *         POWER_ALL         = 127,         // default for class?
     *         POWER_HEALTH      = 0xFFFFFFFE   // (-2 as signed value)
     *     };
     */
  GetMaxPower(type: number): number;

  /**
     * Returns the [Unit]'s mount's modelID.
     */
  GetMountId(): number;

  /**
     * Returns the current movement type for this [Unit].
     * ```typescript
     * enum MovementGeneratorType
     * {
     *     IDLE_MOTION_TYPE                = 0,
     *     RANDOM_MOTION_TYPE              = 1,
     *     WAYPOINT_MOTION_TYPE            = 2,
     *     MAX_DB_MOTION_TYPE              = 3,
     *     ANIMAL_RANDOM_MOTION_TYPE       = 3, // TC
     *     CONFUSED_MOTION_TYPE            = 4,
     *     CHASE_MOTION_TYPE               = 5,
     *     HOME_MOTION_TYPE                = 6,
     *     FLIGHT_MOTION_TYPE              = 7,
     *     POINT_MOTION_TYPE               = 8,
     *     FLEEING_MOTION_TYPE             = 9,
     *     DISTRACT_MOTION_TYPE            = 10,
     *     ASSISTANCE_MOTION_TYPE          = 11,
     *     ASSISTANCE_DISTRACT_MOTION_TYPE = 12,
     *     TIMED_FLEEING_MOTION_TYPE       = 13,
     *     FOLLOW_MOTION_TYPE              = 14,
     *     EFFECT_MOTION_TYPE              = 15, // mangos
     *     ROTATE_MOTION_TYPE              = 15, // TC
     *     EFFECT_MOTION_TYPE              = 16, // TC
     *     NULL_MOTION_TYPE                = 17, // TC
     * };
     * ```
     */
  GetMovementType(): MovementGeneratorType;

  /**
     * Returns the [Unit]'s native/original display ID.
     */
  GetNativeDisplayId(): number;

  /**
     * Returns the [Unit]'s owner.
     */
  GetOwner(): Unit;

  /**
     * Returns the [Unit]'s owner's GUID.
     */
  GetOwnerGUID(): number;

  /**
     * Returns the GUID of the [Unit]'s pet.
     */
  GetPetGUID(): number;

  /**
     * Returns the [Unit]'s power amount for given power type.
     *     enum Powers
     *     {
     *         POWER_MANA        = 0,
     *         POWER_RAGE        = 1,
     *         POWER_FOCUS       = 2,
     *         POWER_ENERGY      = 3,
     *         POWER_HAPPINESS   = 4,
     *         POWER_RUNE        = 5,
     *         POWER_RUNIC_POWER = 6,
     *         MAX_POWERS        = 7,
     *         POWER_ALL         = 127,         // default for class?
     *         POWER_HEALTH      = 0xFFFFFFFE   // (-2 as signed value)
     *     };
     */
  GetPower(type: number): number;

  /**
     * Returns the [Unit]'s power percent for given power type.
     *     enum Powers
     *     {
     *         POWER_MANA        = 0,
     *         POWER_RAGE        = 1,
     *         POWER_FOCUS       = 2,
     *         POWER_ENERGY      = 3,
     *         POWER_HAPPINESS   = 4,
     *         POWER_RUNE        = 5,
     *         POWER_RUNIC_POWER = 6,
     *         MAX_POWERS        = 7,
     *         POWER_ALL         = 127,         // default for class?
     *         POWER_HEALTH      = 0xFFFFFFFE   // (-2 as signed value)
     *     };
     */
  GetPowerPct(type: number): number;

  /**
     * Returns the [Unit]'s current power type.
     *     enum Powers
     *     {
     *         POWER_MANA        = 0,
     *         POWER_RAGE        = 1,
     *         POWER_FOCUS       = 2,
     *         POWER_ENERGY      = 3,
     *         POWER_HAPPINESS   = 4,
     *         POWER_RUNE        = 5,
     *         POWER_RUNIC_POWER = 6,
     *         MAX_POWERS        = 7,
     *         POWER_ALL         = 127,         // default for class?
     *         POWER_HEALTH      = 0xFFFFFFFE   // (-2 as signed value)
     *     };
     */
  GetPowerType(): Powers;

  /**
     * Returns the [Unit]'s race ID.
     */
  GetRace(): number;

  /**
     * Returns the [Unit]'s race's name in given or default locale or nil.
     * ```typescript
     * enum LocaleConstant
     * {
     *     LOCALE_enUS = 0,
     *     LOCALE_koKR = 1,
     *     LOCALE_frFR = 2,
     *     LOCALE_deDE = 3,
     *     LOCALE_zhCN = 4,
     *     LOCALE_zhTW = 5,
     *     LOCALE_esES = 6,
     *     LOCALE_esMX = 7,
     *     LOCALE_ruRU = 8
     * };
     * ```
     */
  GetRaceAsString(locale?: LocaleConstant): string;

  /**
     * Returns the race mask
     */
  GetRaceMask(): number;

  /**
     * Returns the [Unit]'s speed of given [UnitMoveType].
     * ```typescript
     * enum UnitMoveType
     * {
     *     MOVE_WALK           = 0,
     *     MOVE_RUN            = 1,
     *     MOVE_RUN_BACK       = 2,
     *     MOVE_SWIM           = 3,
     *     MOVE_SWIM_BACK      = 4,
     *     MOVE_TURN_RATE      = 5,
     *     MOVE_FLIGHT         = 6,
     *     MOVE_FLIGHT_BACK    = 7,
     *     MOVE_PITCH_RATE     = 8
     * };
     * ```
     */
  GetSpeed(type: UnitMoveType): number;

  /**
     * Returns the [Unit]'s current stand state.
     */
  GetStandState(): number;

  /**
     * Returns [Unit]'s specified stat
     */
  GetStat(statType: number): number;

  /**
     * Returns a table containing unfriendly [Unit]'s within given range of the [Unit].
     */
  GetUnfriendlyUnitsInRange(range?: number): number;

  /**

     */
  GetVehicle(): void;

  /**
     * Returns [Unit]'s [Vehicle] methods
     */
  GetVehicleKit(): Vehicle;

  /**
     * Returns the [Unit]'s current victim target or nil.
     */
  GetVictim(): Unit;

  /**
     * Returns true if the [Unit] has an aura from the given spell entry.
     */
  HasAura(spell: number): boolean;

  /**
     * Returns true if the [Unit] has the given unit state.
     */
  HasUnitState(state: number): boolean;

  /**
     * Returns true if the [Unit]'s health is above the given percentage.
     */
  HealthAbovePct(healthpct: number): boolean;

  /**
     * Returns true if the [Unit]'s health is below the given percentage.
     */
  HealthBelowPct(healthpct: number): boolean;

  /**
     * Interrupts [Unit]'s spell state, casting, etc.
     * if spell is not interruptible, it will return
     */
  InterruptSpell(spellType: number, delayed?: boolean): void;

  /**
     * Returns true if the [Unit] is alive.
     */
  IsAlive(): boolean;

  /**
     * Returns true if the [Unit] is an armorer and can repair equipment.
     */
  IsArmorer(): boolean;

  /**
     * Returns true if the [Unit] is attacking a player.
     */
  IsAttackingPlayer(): boolean;

  /**
     * Returns true if the [Unit] an auctioneer.
     */
  IsAuctioneer(): boolean;

  /**
     * Returns true if the [Unit] is a banker.
     */
  IsBanker(): boolean;

  /**
     * Returns true if the [Unit] is a battle master.
     */
  IsBattleMaster(): boolean;

  /**
     * Returns true if the [Unit] is casting a spell
     */
  IsCasting(): boolean;

  /**
     * Returns true if the [Unit] is a charmed.
     */
  IsCharmed(): boolean;

  /**
     * Returns true if the [Unit] is dead.
     */
  IsDead(): boolean;

  /**
     * Returns true if the [Unit] is dying.
     */
  IsDying(): boolean;

  /**
     * Returns true if the [Unit] has full health.
     */
  IsFullHealth(): boolean;

  /**
     * Returns true if the [Unit] is able to show a gossip window.
     */
  IsGossip(): boolean;

  /**
     * Returns true if the [Unit] a guild master.
     */
  IsGuildMaster(): boolean;

  /**
     * Returns true if the [Unit] is in an accessible place for the given [Creature].
     */
  IsInAccessiblePlaceFor(obj: WorldObject, radius: number): boolean;

  /**
     * Returns true if the [Unit] is in combat.
     */
  IsInCombat(): boolean;

  /**
     * Returns true if the [Unit] is in water.
     */
  IsInWater(): boolean;

  /**
     * Returns true if the [Unit] an innkeeper.
     */
  IsInnkeeper(): boolean;

  /**
     * Returns true if the [Unit] is mounted.
     */
  IsMounted(): boolean;

  /**
     * Returns true if the [Unit] is on a [Vehicle].
     */
  IsOnVehicle(): boolean;

  /**
     * Returns true if the [Unit] flagged for PvP.
     */
  IsPvPFlagged(): boolean;

  /**
     * Returns true if the [Unit] is a quest giver.
     */
  IsQuestGiver(): boolean;

  /**
     * Returns true if the [Unit] is rooted.
     */
  IsRooted(): boolean;

  /**
     * Returns true if the [Unit] provides services like vendor, training and auction.
     */
  IsServiceProvider(): boolean;

  /**
     * Returns true if the [Unit] is a spirit guide.
     */
  IsSpiritGuide(): boolean;

  /**
     * Returns true if the [Unit] is a spirit healer.
     */
  IsSpiritHealer(): boolean;

  /**
     * Returns true if the [Unit] is a spirit guide or spirit healer.
     */
  IsSpiritService(): boolean;

  /**
     * Returns true if the [Unit] is standing.
     */
  IsStandState(): boolean;

  /**
     * Returns true if the [Unit] is not moving.
     */
  IsStopped(): boolean;

  /**
     * Returns true if the [Unit] is a tabard designer.
     */
  IsTabardDesigner(): boolean;

  /**
     * Returns true if the [Unit] is a taxi master.
     */
  IsTaxi(): boolean;

  /**
     * Returns true if the [Unit] a trainer.
     */
  IsTrainer(): boolean;

  /**
     * Returns true if the [Unit] is under water.
     */
  IsUnderWater(): boolean;

  /**
     * Returns true if the [Unit] is a vendor.
     */
  IsVendor(): boolean;

  /**
     * Makes the [Unit] kill the target [Unit]
     */
  Kill(target: Unit, durLoss?: boolean): void;

  /**
     * modifies the [Unit]'s power amount for the given power type.
     *     enum Powers
     *     {
     *         POWER_MANA        = 0,
     *         POWER_RAGE        = 1,
     *         POWER_FOCUS       = 2,
     *         POWER_ENERGY      = 3,
     *         POWER_HAPPINESS   = 4,
     *         POWER_RUNE        = 5,
     *         POWER_RUNIC_POWER = 6,
     *         MAX_POWERS        = 7,
     *         POWER_ALL         = 127,         // default for class?
     *         POWER_HEALTH      = 0xFFFFFFFE   // (-2 as signed value)
     *     };
     */
  ModifyPower(amount: number, type: number): void;

  /**
     * Mounts the [Unit] on the given displayID/modelID.
     */
  Mount(displayId: number): void;

  /**
     * The [Unit] will chase the target
     */
  MoveChase(target: Unit, dist?: number, angle?: number): void;

  /**
     * Clears the [Unit]'s movement
     */
  MoveClear(reset?: boolean): void;

  /**
     * The [Unit] will move confused
     */
  MoveConfused(): void;

  /**
     * The [Unit]'s movement expires and clears movement
     */
  MoveExpire(reset?: boolean): void;

  /**
     * The [Unit] will flee
     */
  MoveFleeing(target: Unit, time?: number): void;

  /**
     * The [Unit] will follow the target
     */
  MoveFollow(target: Unit, dist?: number, angle?: number): void;

  /**
     * The [Unit] will move to its set home location
     */
  MoveHome(): void;

  /**
     * The [Unit] will be idle
     */
  MoveIdle(): void;

  /**
     * Makes the [Unit] jump to the coordinates
     */
  MoveJump(
    x: number,
    y: number,
    z: number,
    zSpeed: number,
    maxHeight: number,
    id?: number,
  ): void;

  /**
     * The [Unit] will move at random
     */
  MoveRandom(radius: number): void;

  /**
     * Stops the [Unit]'s movement
     */
  MoveStop(): void;

  /**
     * The [Unit] will move to the coordinates
     */
  MoveTo(id: number, x: number, y: number, z: number, genPath?: boolean): void;

  /**
     * Makes the [Unit] teleport to given coordinates within same map.
     */
  NearTeleport(x: number, y: number, z: number, o: number): void;

  /**
     * Makes the [Unit] perform the given emote.
     */
  PerformEmote(emoteId: number): void;

  /**
     * Removes all [Aura]'s from the [Unit].
     *     Note: talents and racials are also auras, use with caution
     */
  RemoveAllAuras(): void;

  /**
     * Removes [Aura] of the given spell entry from the [Unit].
     */
  RemoveAura(spell: number): void;

  /**
     * Sends chat message to [Player]
     */
  SendChatMessageToPlayer(
    type: ChatMsg,
    lang: Language,
    msg: string,
    target: Player,
  ): void;

  /**
     * The [Unit] will emote the message
     */
  SendUnitEmote(msg: string, receiver?: Unit, bossEmote?: boolean): void;

  /**
     * The [Unit] will say the message
     */
  SendUnitSay(msg: string, language: Language): void;

  /**
     * The [Unit] will whisper the message to a [Player]
     */
  SendUnitWhisper(
    msg: string,
    lang: number,
    receiver: Player,
    bossWhisper?: boolean,
  ): void;

  /**
     * The [Unit] will yell the message
     */
  SendUnitYell(msg: string, language: Language): void;

  /**
     * Confuses the [Unit], if 'false' specified, the [Unit] is no longer confused.
     */
  SetConfused(apply?: boolean): void;

  /**
     * Sets creator GUID
     */
  SetCreatorGUID(guid: number): void;

  /**

     */
  SetCritterGUID(): void;

  /**
     * Sets the [Unit]'s modelID.
     */
  SetDisplayId(displayId: number): void;

  /**
     * Sets the [Unit]'s FFA flag on or off.
     */
  SetFFA(apply?: boolean): void;

  /**
     * Sets the [Unit]'s facing/orientation.
     */
  SetFacing(orientation: number): void;

  /**
     * Sets the [Unit] to face the given [WorldObject]'s direction.
     */
  SetFacingToObject(target: WorldObject): void;

  /**
     * Sets the [Unit]'s faction.
     */
  SetFaction(faction: number): void;

  /**
     * Fears the [Unit], if 'false' specified, the [Unit] is no longer feared.
     */
  SetFeared(apply?: boolean): void;

  /**
     * Sets the [Unit]'s health.
     */
  SetHealth(health: number): void;

  /**
     * Sets the [Unit]'s level.
     */
  SetLevel(level: number): void;

  /**
     * Sets the [Unit]'s max health.
     */
  SetMaxHealth(maxHealth: number): void;

  /**
     * Sets the [Unit]'s max power amount for the given power type.
     *     enum Powers
     *     {
     *         POWER_MANA        = 0,
     *         POWER_RAGE        = 1,
     *         POWER_FOCUS       = 2,
     *         POWER_ENERGY      = 3,
     *         POWER_HAPPINESS   = 4,
     *         POWER_RUNE        = 5,
     *         POWER_RUNIC_POWER = 6,
     *         MAX_POWERS        = 7,
     *         POWER_ALL         = 127,         // default for class?
     *         POWER_HEALTH      = 0xFFFFFFFE   // (-2 as signed value)
     *     };
     */
  SetMaxPower(type: number, maxPower: number): void;

  /**
     * Sets the [Unit]'s name internally.
     */
  SetName(name: string): void;

  /**
     * Sets the [Unit]'s native/default modelID.
     */
  SetNativeDisplayId(displayId: number): void;

  /**
     * Sets the [Unit]'s owner GUID to given GUID.
     */
  SetOwnerGUID(guid: number): void;

  /**
     * Sets pet GUID
     */
  SetPetGUID(guid: number): void;

  /**
     * Sets the [Unit]'s power amount for the given power type.
     *     enum Powers
     *     {
     *         POWER_MANA        = 0,
     *         POWER_RAGE        = 1,
     *         POWER_FOCUS       = 2,
     *         POWER_ENERGY      = 3,
     *         POWER_HAPPINESS   = 4,
     *         POWER_RUNE        = 5,
     *         POWER_RUNIC_POWER = 6,
     *         MAX_POWERS        = 7,
     *         POWER_ALL         = 127,         // default for class?
     *         POWER_HEALTH      = 0xFFFFFFFE   // (-2 as signed value)
     *     };
     */
  SetPower(amount: number, type: number): void;

  /**
     * Sets the [Unit]'s power type.
     *     enum Powers
     *     {
     *         POWER_MANA        = 0,
     *         POWER_RAGE        = 1,
     *         POWER_FOCUS       = 2,
     *         POWER_ENERGY      = 3,
     *         POWER_HAPPINESS   = 4,
     *         POWER_RUNE        = 5,
     *         POWER_RUNIC_POWER = 6,
     *         MAX_POWERS        = 7,
     *         POWER_ALL         = 127,         // default for class?
     *         POWER_HEALTH      = 0xFFFFFFFE   // (-2 as signed value)
     *     };
     */
  SetPowerType(type: Powers): void;

  /**
     * Sets the [Unit]'s PvP on or off.
     */
  SetPvP(apply?: boolean): void;

  /**
     * Roots the [Unit] to the ground, if 'false' specified, unroots the [Unit].
     */
  SetRooted(apply?: boolean): void;

  /**
     * Sets the [Unit]'s sanctuary flag on or off.
     */
  SetSanctuary(apply?: boolean): void;

  /**
     * Sets the [Unit]'s sheath state.
     *     enum SheathState
     *     {
     *         SHEATH_STATE_UNARMED  = 0, // non prepared weapon
     *         SHEATH_STATE_MELEE    = 1, // prepared melee weapon
     *         SHEATH_STATE_RANGED   = 2  // prepared ranged weapon
     *     };
     */
  SetSheath(sheathState: SheathState): void;

  /**
     * Sets the [Unit]'s speed of given [UnitMoveType] to given rate.
     * If forced, packets sent to clients forcing the visual change.
     * ```typescript
     * enum UnitMoveType
     * {
     *     MOVE_WALK           = 0,
     *     MOVE_RUN            = 1,
     *     MOVE_RUN_BACK       = 2,
     *     MOVE_SWIM           = 3,
     *     MOVE_SWIM_BACK      = 4,
     *     MOVE_TURN_RATE      = 5,
     *     MOVE_FLIGHT         = 6,
     *     MOVE_FLIGHT_BACK    = 7,
     *     MOVE_PITCH_RATE     = 8
     * };
     * ```
     */
  SetSpeed(type: UnitMoveType, rate: number, forced?: boolean): void;

  /**
     * Sets the [Unit]'s stand state
     */
  SetStandState(state: number): void;

  /**
     * Toggles (Sets) [Unit]'s water walking
     */
  SetWaterWalk(enable?: boolean): void;

  /**
     * Stops the [Unit]'s current spell cast
     */
  StopSpellCast(spell?: number): void;
}

declare class Vehicle {
  /**
     * Adds [Unit] passenger to a specified seat in the [Vehicle]
     */
  AddPassenger(passenger: Unit, seat: number): void;

  /**
     * Returns the [Vehicle]'s entry
     */
  GetEntry(): number;

  /**
     * Returns the [Vehicle]'s owner
     */
  GetOwner(): Unit;

  /**
     * Returns the [Vehicle]'s passenger in the specified seat
     */
  GetPassenger(seat: number): Unit;

  /**
     * Returns true if the [Unit] passenger is on board
     */
  IsOnBoard(passenger: Unit): boolean;

  /**
     * Removes [Unit] passenger from the [Vehicle]
     */
  RemovePassenger(passenger: Unit): void;
}

declare class WorldObject extends EObject {
  /**
     * Returns the angle between this [WorldObject] and another [WorldObject] or a point.
     * The angle is the angle between two points and orientation will be ignored.
     */
  GetAngle(object: WorldObject, x: number, y: number): number;

  /**
     * Returns the current area ID of the [WorldObject]
     */
  GetAreaId(): number;

  /**
     * Returns a table of [Creature] objects in sight of the [WorldObject] or within the given range and/or with a specific entry ID
     */
  GetCreaturesInRange(
    range?: number,
    entryId?: number,
    hostile?: number,
    dead?: number,
  ): number;

  /**
     * Returns the distance from this [WorldObject] to another [WorldObject], or from this [WorldObject] to a point in 3d space.
     * The function takes into account the given object sizes. See also [WorldObject:GetExactDistance], [WorldObject:GetDistance2d]
     */
  GetDistance(obj: WorldObject, x: number, y: number, z: number): number;

  /**
     * Returns the distance from this [WorldObject] to another [WorldObject], or from this [WorldObject] to a point in 2d space.
     * The function takes into account the given object sizes. See also [WorldObject:GetDistance], [WorldObject:GetExactDistance2d]
     */
  GetDistance2d(obj: WorldObject, x: number, y: number): number;

  /**
     * Returns the distance from this [WorldObject] to another [WorldObject], or from this [WorldObject] to a point in 3d space.
     * The function does not take into account the given object sizes, which means only the object coordinates are compared. See also [WorldObject:GetDistance], [WorldObject:GetDistance2d]
     */
  GetExactDistance(obj: WorldObject, x: number, y: number, z: number): number;

  /**
     * Returns the distance from this [WorldObject] to another [WorldObject], or from this [WorldObject] to a point in 2d space.
     * The function does not take into account the given object sizes, which means only the object coordinates are compared. See also [WorldObject:GetDistance], [WorldObject:GetDistance2d]
     */
  GetExactDistance2d(obj: WorldObject, x: number, y: number): number;

  /**
     * Returns a table of [GameObject] objects in sight of the [WorldObject] or within the given range and/or with a specific entry ID
     */
  GetGameObjectsInRange(
    range?: number,
    entryId?: number,
    hostile?: number,
  ): number;

  /**
     * Returns the current instance ID of the [WorldObject]
     */
  GetInstanceId(): number;

  /**
     * Returns the coordinates and orientation of the [WorldObject]
     */
  GetLocation(): [number, number, number, number];

  /**
     * Returns the current [Map] object of the [WorldObject]
     */
  GetMap(): EMap;

  /**
     * Returns the current map ID of the [WorldObject]
     */
  GetMapId(): number;

  /**
     * Returns the name of the [WorldObject]
     */
  GetName(): string;

  /**
     * Returns nearest [WorldObject] in sight of the [WorldObject].
     * The distance, type, entry and hostility requirements the [WorldObject] must match can be passed.
     */
  GetNearObject(
    range?: number,
    type?: number,
    entry?: number,
    hostile?: number,
    dead?: number,
  ): WorldObject;

  /**
     * Returns a table of [WorldObject]s in sight of the [WorldObject].
     * The distance, type, entry and hostility requirements the [WorldObject] must match can be passed.
     */
  GetNearObjects(
    range?: number,
    type?: number,
    entry?: number,
    hostile?: number,
    dead?: number,
  ): number;

  /**
     * Returns the nearest [Creature] object in sight of the [WorldObject] or within the given range and/or with a specific entry ID
     */
  GetNearestCreature(
    range?: number,
    entryId?: number,
    hostile?: number,
    dead?: number,
  ): Creature;

  /**
     * Returns the nearest [GameObject] object in sight of the [WorldObject] or within the given range and/or with a specific entry ID
     */
  GetNearestGameObject(
    range?: number,
    entryId?: number,
    hostile?: number,
  ): GameObject;

  /**
     * Returns the nearest [Player] object in sight of the [WorldObject] or within the given range
     */
  GetNearestPlayer(range?: number, hostile?: number, dead?: number): Player;

  /**
     * Returns the current orientation of the [WorldObject]
     */
  GetO(): number;

  /**
     * Returns the current phase of the [WorldObject]
     */
  GetPhaseMask(): number;

  /**
     * Returns a table of [Player] objects in sight of the [WorldObject] or within the given range
     */
  GetPlayersInRange(range?: number, hostile?: number, dead?: number): number;

  /**
     * Returns the x, y and z of a point dist away from the [WorldObject].
     */
  GetRelativePoint(distance: number, angle: number): [number, number, number];

  /**
     * Returns the current X coordinate of the [WorldObject]
     */
  GetX(): number;

  /**
     * Returns the current Y coordinate of the [WorldObject]
     */
  GetY(): number;

  /**
     * Returns the current Z coordinate of the [WorldObject]
     */
  GetZ(): number;

  /**
     * Returns the current zone ID of the [WorldObject]
     */
  GetZoneId(): number;

  /**
     * Returns true if the target is in the given arc behind the [WorldObject]
     */
  IsInBack(target: WorldObject, arc?: number): boolean;

  /**
     * Returns true if the target is in the given arc in front of the [WorldObject]
     */
  IsInFront(target: WorldObject, arc?: number): boolean;

  /**
     * Returns true if the [WorldObject]s are on the same map
     */
  IsInMap(worldobject: WorldObject): boolean;

  /**
     * Returns true if the target is within given range
     * Notice that the distance is measured from the edge of the [WorldObject]s.
     */
  IsInRange(
    target: WorldObject,
    minrange: number,
    maxrange: number,
    is3D?: boolean,
  ): boolean;

  /**
     * Returns true if the point is within given range
     * Notice that the distance is measured from the edge of the [WorldObject].
     */
  IsInRange2d(
    x: number,
    y: number,
    minrange: number,
    maxrange: number,
  ): boolean;

  /**
     * Returns true if the point is within given range
     * Notice that the distance is measured from the edge of the [WorldObject].
     */
  IsInRange3d(
    x: number,
    y: number,
    z: number,
    minrange: number,
    maxrange: number,
  ): boolean;

  /**
     * Returns true if the target is in the given distance of the [WorldObject]
     * Notice that the distance is measured from the edge of the [WorldObject]s.
     */
  IsWithinDist(target: WorldObject, distance: number, is3D?: boolean): boolean;

  /**
     * Returns true if the point is in the given distance of the [WorldObject]
     * The distance is measured only in x,y coordinates.
     * Notice that the distance is measured from the edge of the [WorldObject].
     */
  IsWithinDist2d(x: number, y: number, distance: number): boolean;

  /**
     * Returns true if the point is in the given distance of the [WorldObject]
     * Notice that the distance is measured from the edge of the [WorldObject].
     */
  IsWithinDist3d(x: number, y: number, z: number, distance: number): boolean;

  /**
     * Returns true if the [WorldObject] is on the same map and within given distance
     * Notice that the distance is measured from the edge of the [WorldObject]s.
     */
  IsWithinDistInMap(
    target: WorldObject,
    distance: number,
    is3D?: boolean,
  ): boolean;

  /**
     * Returns true if the given [WorldObject] or coordinates are in the [WorldObject]'s line of sight
     */
  IsWithinLoS(
    worldobject: WorldObject,
    x: number,
    y: number,
    z: number,
  ): boolean;

  /**
     * The [WorldObject] plays a sound to a [Player]
     * If no [Player] provided it will play the sound to everyone near.
     * This method will play sound and does not interrupt prvious sound.
     * See also [WorldObject:PlayDistanceSound], [WorldObject:PlayMusic]
     */
  PlayDirectSound(sound: number, player?: Player): void;

  /**
     * The [WorldObject] plays a sound to a [Player]
     * If no [Player] it will play the sound to everyone near.
     * Sound will fade the further you are from the [WorldObject].
     * This method interrupts previously playing sound.
     * See also [WorldObject:PlayDirectSound], [WorldObject:PlayMusic]
     */
  PlayDistanceSound(sound: number, player?: Player): void;

  /**
     * The [WorldObject] plays music to a [Player]
     * If no [Player] provided it will play the music to everyone near.
     * This method does not interrupt previously played music.
     * See also [WorldObject:PlayDistanceSound], [WorldObject:PlayDirectSound]
     */
  PlayMusic(music: number, player?: Player): void;

  /**
     * Registers a timed event to the [WorldObject]
     * When the passed function is called, the parameters `(eventId, delay, repeats, worldobject)` are passed to it.
     * Repeats will decrease on each call if the event does not repeat indefinitely
     * Note that for [Creature] and [GameObject] the timed event timer ticks only if the creature is in sight of someone
     * For all [WorldObject]s the timed events are removed when the object is destoryed. This means that for example a [Player]'s events are removed on logout.
     *     local function Timed(eventid, delay, repeats, worldobject)
     *         print(worldobject:GetName())
     *     end
     *     worldobject:RegisterEvent(Timed, 1000, 5) -- do it after 1 second 5 times
     *     worldobject:RegisterEvent(Timed, {1000, 10000}, 0) -- do it after 1 to 10 seconds forever
     */
  RegisterEvent(
    func: (...args: any[]) => any,
    delay: number,
    delaytable: number,
    repeats?: number,
  ): number;

  /**
     * Removes the timed event from a [WorldObject] by the specified event ID
     */
  RemoveEventById(eventId: number): void;

  /**
     * Removes all timed events from a [WorldObject]
     */
  RemoveEvents(): void;

  /**
     * Sends a [WorldPacket] to [Player]s in sight of the [WorldObject].
     */
  SendPacket(packet: WorldPacket): void;

  /**
     * Sets the [WorldObject]'s phase mask.
     */
  SetPhaseMask(phaseMask: number, update?: boolean): void;

  /**
     * Spawns the creature at specified location.
     *     enum TempSummonType
     *     {
     *         TEMPSUMMON_TIMED_OR_DEAD_DESPAWN       = 1, // despawns after a specified time OR when the creature disappears
     *         TEMPSUMMON_TIMED_OR_CORPSE_DESPAWN     = 2, // despawns after a specified time OR when the creature dies
     *         TEMPSUMMON_TIMED_DESPAWN               = 3, // despawns after a specified time
     *         TEMPSUMMON_TIMED_DESPAWN_OUT_OF_COMBAT = 4, // despawns after a specified time after the creature is out of combat
     *         TEMPSUMMON_CORPSE_DESPAWN              = 5, // despawns instantly after death
     *         TEMPSUMMON_CORPSE_TIMED_DESPAWN        = 6, // despawns after a specified time after death
     *         TEMPSUMMON_DEAD_DESPAWN                = 7, // despawns when the creature disappears
     *         TEMPSUMMON_MANUAL_DESPAWN              = 8, // despawns when UnSummon() is called
     *         TEMPSUMMON_TIMED_OOC_OR_CORPSE_DESPAWN = 9, // despawns after a specified time (OOC) OR when the creature dies
     *         TEMPSUMMON_TIMED_OOC_OR_DEAD_DESPAWN   = 10 // despawns after a specified time (OOC) OR when the creature disappears
     *     };
     */
  SpawnCreature(
    entry: number,
    x: number,
    y: number,
    z: number,
    o: number,
    spawnType?: TempSummonType,
    despawnTimer?: number,
  ): Creature;

  /**
     * Spawns a [GameObject] at specified location.
     */
  SummonGameObject(
    entry: number,
    x: number,
    y: number,
    z: number,
    o: number,
    respawnDelay?: number,
  ): GameObject;
}

/**
A packet used to pass messages between the server and a client.

Each packet has an opcode that determines the type of message being sent, e.g. if a CMSG_LOGOUT_REQUEST packet is sent to the server, the client has sent a message that its Player wants to logout.

The packet can contain further data, the format of which depends on the opcode.
 */
declare class WorldPacket {
  /**
     * Returns the opcode of the [WorldPacket].
     */
  GetOpcode(): number;

  /**
     * Returns the size of the [WorldPacket].
     */
  GetSize(): number;

  /**
     * Reads and returns a signed 8-bit integer value from the [WorldPacket].
     */
  ReadByte(): number;

  /**
     * Reads and returns a double-precision floating-point value from the [WorldPacket].
     */
  ReadDouble(): number;

  /**
     * Reads and returns a single-precision floating-point value from the [WorldPacket].
     */
  ReadFloat(): number;

  /**
     * Reads and returns an unsigned 64-bit integer value from the [WorldPacket].
     */
  ReadGUID(): number;

  /**
     * Reads and returns a signed 32-bit integer value from the [WorldPacket].
     */
  ReadLong(): number;

  /**
     * Reads and returns a signed 16-bit integer value from the [WorldPacket].
     */
  ReadShort(): number;

  /**
     * Reads and returns a string value from the [WorldPacket].
     */
  ReadString(): string;

  /**
     * Reads and returns an unsigned 8-bit integer value from the [WorldPacket].
     */
  ReadUByte(): number;

  /**
     * Reads and returns an unsigned 32-bit integer value from the [WorldPacket].
     */
  ReadULong(): number;

  /**
     * Reads and returns an unsigned 16-bit integer value from the [WorldPacket].
     */
  ReadUShort(): number;

  /**
     * Sets the opcode of the [WorldPacket] to the specified opcode.
     */
  SetOpcode(opcode: number): void;

  /**
     * Writes a signed 8-bit integer value to the [WorldPacket].
     */
  WriteByte(value: number): void;

  /**
     * Writes a 64-bit floating-point value to the [WorldPacket].
     */
  WriteDouble(value: number): void;

  /**
     * Writes a 32-bit floating-point value to the [WorldPacket].
     */
  WriteFloat(value: number): void;

  /**
     * Writes an unsigned 64-bit integer value to the [WorldPacket].
     */
  WriteGUID(value: number): void;

  /**
     * Writes a signed 32-bit integer value to the [WorldPacket].
     */
  WriteLong(value: number): void;

  /**
     * Writes a signed 16-bit integer value to the [WorldPacket].
     */
  WriteShort(value: number): void;

  /**
     * Writes a string to the [WorldPacket].
     */
  WriteString(value: string): void;

  /**
     * Writes an unsigned 8-bit integer value to the [WorldPacket].
     */
  WriteUByte(value: number): void;

  /**
     * Writes an unsigned 32-bit integer value to the [WorldPacket].
     */
  WriteULong(value: number): void;

  /**
     * Writes an unsigned 16-bit integer value to the [WorldPacket].
     */
  WriteUShort(value: number): void;
}
