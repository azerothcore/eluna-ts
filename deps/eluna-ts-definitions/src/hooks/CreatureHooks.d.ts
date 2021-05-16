declare type creature_event_on_dummy_effect = (
  event: CreatureEvents.CREATURE_EVENT_ON_DUMMY_EFFECT,
  pCaster: WorldObject,
  spellId: number,
  effIndex: SpellEffIndex,
  pTarget: Creature,
) => void;

declare type creature_event_on_quest_accept = (
  event: CreatureEvents.CREATURE_EVENT_ON_QUEST_ACCEPT,
  pPlayer: Player,
  pCreature: Creature,
  pQuest: Quest,
) => boolean;

declare type creature_event_on_quest_reward = (
  event: CreatureEvents.CREATURE_EVENT_ON_QUEST_REWARD,
  pPlayer: Player,
  pCreature: Creature,
  pQuest: Quest,
  opt: number,
) => boolean;

declare type creature_event_on_dialog_status = (
  event: CreatureEvents.CREATURE_EVENT_ON_DIALOG_STATUS,
  pPlayer: Player,
  pCreature: Creature,
) => void;

declare type creature_event_on_add = (
  event: CreatureEvents.CREATURE_EVENT_ON_ADD,
  pCreature: Creature,
) => void;

declare type creature_event_on_remove = (
  event: CreatureEvents.CREATURE_EVENT_ON_REMOVE,
  pCreature: Creature,
) => void;

declare type creature_event_on_summoned = (
  event: CreatureEvents.CREATURE_EVENT_ON_SUMMONED,
  pCreature: Creature,
  pSummoner: Unit,
) => boolean;

/**
 * Called on creature initial spawn, respawn, death, evade (leave combat)
 */
declare type creature_event_on_reset = (
  event: CreatureEvents.CREATURE_EVENT_ON_RESET,
  pCreature: Creature,
) => void;

declare type creature_event_on_aiupdate = (
  event: CreatureEvents.CREATURE_EVENT_ON_AIUPDATE,
  me: Creature,
  diff: number,
) => boolean;

declare type creature_event_on_enter_combat = (
  event: CreatureEvents.CREATURE_EVENT_ON_ENTER_COMBAT,
  me: Creature,
  target: Unit,
) => boolean;

declare type creature_event_on_damage_taken = (
  event: CreatureEvents.CREATURE_EVENT_ON_DAMAGE_TAKEN,
  me: Creature,
  attacker: Unit,
  damage: number,
) => boolean;

declare type creature_event_on_died = (
  event: CreatureEvents.CREATURE_EVENT_ON_DIED,
  me: Creature,
  killer: Unit,
) => boolean;

declare type creature_event_on_target_died = (
  event: CreatureEvents.CREATURE_EVENT_ON_TARGET_DIED,
  me: Creature,
  victim: Unit,
) => boolean;

declare type creature_event_on_just_summoned_creature = (
  event: CreatureEvents.CREATURE_EVENT_ON_JUST_SUMMONED_CREATURE,
  me: Creature,
  summon: Creature,
) => boolean;

declare type creature_event_on_summoned_creature_despawn = (
  event: CreatureEvents.CREATURE_EVENT_ON_SUMMONED_CREATURE_DESPAWN,
  me: Creature,
  summon: Creature,
) => boolean;

declare type creature_event_on_reach_wp = (
  event: CreatureEvents.CREATURE_EVENT_ON_REACH_WP,
  me: Creature,
  type: number,
  id: number,
) => boolean;

declare type creature_event_on_pre_combat = (
  event: CreatureEvents.CREATURE_EVENT_ON_PRE_COMBAT,
  me: Creature,
  target: Unit,
) => boolean;

declare type creature_event_on_leave_combat = (
  event: CreatureEvents.CREATURE_EVENT_ON_LEAVE_COMBAT,
  me: Creature,
) => boolean;

declare type creature_event_on_spawn = (
  event: CreatureEvents.CREATURE_EVENT_ON_SPAWN,
  me: Creature,
) => boolean;

declare type creature_event_on_reach_home = (
  event: CreatureEvents.CREATURE_EVENT_ON_REACH_HOME,
  me: Creature,
) => boolean;

declare type creature_event_on_receive_emote = (
  event: CreatureEvents.CREATURE_EVENT_ON_RECEIVE_EMOTE,
  me: Creature,
  player: Player,
  emoteId: number,
) => boolean;

declare type creature_event_on_corpse_removed = (
  event: CreatureEvents.CREATURE_EVENT_ON_CORPSE_REMOVED,
  me: Creature,
  respawnDelay: number,
) => boolean;

declare type creature_event_on_move_in_los = (
  event: CreatureEvents.CREATURE_EVENT_ON_MOVE_IN_LOS,
  me: Creature,
  who: Unit,
) => boolean;

declare type creature_event_on_hit_by_spell = (
  event: CreatureEvents.CREATURE_EVENT_ON_HIT_BY_SPELL,
  me: Creature,
  caster: WorldObject,
  spell: number,
) => boolean;

declare type creature_event_on_spell_hit_target = (
  event: CreatureEvents.CREATURE_EVENT_ON_SPELL_HIT_TARGET,
  me: Creature,
  target: WorldObject,
  spell: number,
) => boolean;

declare type creature_event_on_summoned_creature_died = (
  event: CreatureEvents.CREATURE_EVENT_ON_SUMMONED_CREATURE_DIED,
  me: Creature,
  summon: Creature,
  killer: Unit,
) => boolean;

declare type creature_event_on_owner_attacked_at = (
  event: CreatureEvents.CREATURE_EVENT_ON_OWNER_ATTACKED_AT,
  me: Creature,
  attacker: Unit,
) => boolean;

declare type creature_event_on_owner_attacked = (
  event: CreatureEvents.CREATURE_EVENT_ON_OWNER_ATTACKED,
  me: Creature,
  target: Unit,
) => boolean;

/**
 * Registers a [Creature] event handler.
 * ```typescript
 * enum CreatureEvents
 * {
 *     CREATURE_EVENT_ON_ENTER_COMBAT                    = 1,  // (event, creature, target) - Can return true to stop normal action
 *     CREATURE_EVENT_ON_LEAVE_COMBAT                    = 2,  // (event, creature) - Can return true to stop normal action
 *     CREATURE_EVENT_ON_TARGET_DIED                     = 3,  // (event, creature, victim) - Can return true to stop normal action
 *     CREATURE_EVENT_ON_DIED                            = 4,  // (event, creature, killer) - Can return true to stop normal action
 *     CREATURE_EVENT_ON_SPAWN                           = 5,  // (event, creature) - Can return true to stop normal action
 *     CREATURE_EVENT_ON_REACH_WP                        = 6,  // (event, creature, type, id) - Can return true to stop normal action
 *     CREATURE_EVENT_ON_AIUPDATE                        = 7,  // (event, creature, diff) - Can return true to stop normal action
 *     CREATURE_EVENT_ON_RECEIVE_EMOTE                   = 8,  // (event, creature, player, emoteid) - Can return true to stop normal action
 *     CREATURE_EVENT_ON_DAMAGE_TAKEN                    = 9,  // (event, creature, attacker, damage) - Can return true to stop normal action, can return new damage as second return value.
 *     CREATURE_EVENT_ON_PRE_COMBAT                      = 10, // (event, creature, target) - Can return true to stop normal action
 *     // UNUSED
 *     CREATURE_EVENT_ON_OWNER_ATTACKED                  = 12, // (event, creature, target) - Can return true to stop normal action            // Not on mangos
 *     CREATURE_EVENT_ON_OWNER_ATTACKED_AT               = 13, // (event, creature, attacker) - Can return true to stop normal action          // Not on mangos
 *     CREATURE_EVENT_ON_HIT_BY_SPELL                    = 14, // (event, creature, caster, spellid) - Can return true to stop normal action
 *     CREATURE_EVENT_ON_SPELL_HIT_TARGET                = 15, // (event, creature, target, spellid) - Can return true to stop normal action
 *     // UNUSED                                         = 16, // (event, creature)
 *     // UNUSED                                         = 17, // (event, creature)
 *     // UNUSED                                         = 18, // (event, creature)
 *     CREATURE_EVENT_ON_JUST_SUMMONED_CREATURE          = 19, // (event, creature, summon) - Can return true to stop normal action
 *     CREATURE_EVENT_ON_SUMMONED_CREATURE_DESPAWN       = 20, // (event, creature, summon) - Can return true to stop normal action
 *     CREATURE_EVENT_ON_SUMMONED_CREATURE_DIED          = 21, // (event, creature, summon, killer) - Can return true to stop normal action    // Not on mangos
 *     CREATURE_EVENT_ON_SUMMONED                        = 22, // (event, creature, summoner) - Can return true to stop normal action
 *     CREATURE_EVENT_ON_RESET                           = 23, // (event, creature)
 *     CREATURE_EVENT_ON_REACH_HOME                      = 24, // (event, creature) - Can return true to stop normal action
 *     // UNUSED                                         = 25, // (event, creature)
 *     CREATURE_EVENT_ON_CORPSE_REMOVED                  = 26, // (event, creature, respawndelay) - Can return true to stop normal action, can return new respawndelay as second return value
 *     CREATURE_EVENT_ON_MOVE_IN_LOS                     = 27, // (event, creature, unit) - Can return true to stop normal action. Does not actually check LOS, just uses the sight range
 *     // UNUSED                                         = 28, // (event, creature)
 *     // UNUSED                                         = 29, // (event, creature)
 *     CREATURE_EVENT_ON_DUMMY_EFFECT                    = 30, // (event, caster, spellid, effindex, creature)
 *     CREATURE_EVENT_ON_QUEST_ACCEPT                    = 31, // (event, player, creature, quest) - Can return true
 *     // UNUSED                                         = 32, // (event, creature)
 *     // UNUSED                                         = 33, // (event, creature)
 *     CREATURE_EVENT_ON_QUEST_REWARD                    = 34, // (event, player, creature, quest, opt) - Can return true
 *     CREATURE_EVENT_ON_DIALOG_STATUS                   = 35, // (event, player, creature)
 *     CREATURE_EVENT_ON_ADD                             = 36, // (event, creature)
 *     CREATURE_EVENT_ON_REMOVE                          = 37, // (event, creature)
 *     CREATURE_EVENT_COUNT
 * };
 * ```
 */
 declare function RegisterCreatureEvent(
  this:void,
  entry: number,
  event: CreatureEvents.CREATURE_EVENT_ON_ENTER_COMBAT,
  func: HookFunctionNoSelf<creature_event_on_enter_combat>,
  shots?: number,
): (...args: any[]) => any;
 declare function RegisterCreatureEvent(
  this:void,
  entry: number,
  event: CreatureEvents.CREATURE_EVENT_ON_LEAVE_COMBAT,
  func: HookFunctionNoSelf<creature_event_on_leave_combat>,
  shots?: number,
): (...args: any[]) => any;
 declare function RegisterCreatureEvent(
  this:void,
  entry: number,
  event: CreatureEvents.CREATURE_EVENT_ON_TARGET_DIED,
  func: HookFunctionNoSelf<creature_event_on_target_died>,
  shots?: number,
): (...args: any[]) => any;
 declare function RegisterCreatureEvent(
  this:void,
  entry: number,
  event: CreatureEvents.CREATURE_EVENT_ON_DIED,
  func: HookFunctionNoSelf<creature_event_on_died>,
  shots?: number,
): (...args: any[]) => any;
 declare function RegisterCreatureEvent(
  this:void,
  entry: number,
  event: CreatureEvents.CREATURE_EVENT_ON_SPAWN,
  func: HookFunctionNoSelf<creature_event_on_spawn>,
  shots?: number,
): (...args: any[]) => any;
 declare function RegisterCreatureEvent(
  this:void,
  entry: number,
  event: CreatureEvents.CREATURE_EVENT_ON_REACH_WP,
  func: HookFunctionNoSelf<creature_event_on_reach_wp>,
  shots?: number,
): (...args: any[]) => any;
 declare function RegisterCreatureEvent(
  this:void,
  entry: number,
  event: CreatureEvents.CREATURE_EVENT_ON_AIUPDATE,
  func: HookFunctionNoSelf<creature_event_on_aiupdate>,
  shots?: number,
): (...args: any[]) => any;
 declare function RegisterCreatureEvent(
  this:void,
  entry: number,
  event: CreatureEvents.CREATURE_EVENT_ON_RECEIVE_EMOTE,
  func: HookFunctionNoSelf<creature_event_on_receive_emote>,
  shots?: number,
): (...args: any[]) => any;
 declare function RegisterCreatureEvent(
  this:void,
  entry: number,
  event: CreatureEvents.CREATURE_EVENT_ON_DAMAGE_TAKEN,
  func: HookFunctionNoSelf<creature_event_on_damage_taken>,
  shots?: number,
): (...args: any[]) => any;
 declare function RegisterCreatureEvent(
  this:void,
  entry: number,
  event: CreatureEvents.CREATURE_EVENT_ON_PRE_COMBAT,
  func: HookFunctionNoSelf<creature_event_on_pre_combat>,
  shots?: number,
): (...args: any[]) => any;
 declare function RegisterCreatureEvent(
  this:void,
  entry: number,
  event: CreatureEvents.CREATURE_EVENT_ON_OWNER_ATTACKED,
  func: HookFunctionNoSelf<creature_event_on_owner_attacked>,
  shots?: number,
): (...args: any[]) => any;
 declare function RegisterCreatureEvent(
  this:void,
  entry: number,
  event: CreatureEvents.CREATURE_EVENT_ON_OWNER_ATTACKED_AT,
  func: HookFunctionNoSelf<creature_event_on_owner_attacked_at>,
  shots?: number,
): (...args: any[]) => any;
 declare function RegisterCreatureEvent(
  this:void,
  entry: number,
  event: CreatureEvents.CREATURE_EVENT_ON_HIT_BY_SPELL,
  func: HookFunctionNoSelf<creature_event_on_hit_by_spell>,
  shots?: number,
): (...args: any[]) => any;
 declare function RegisterCreatureEvent(
  this:void,
  entry: number,
  event: CreatureEvents.CREATURE_EVENT_ON_SPELL_HIT_TARGET,
  func: HookFunctionNoSelf<creature_event_on_spell_hit_target>,
  shots?: number,
): (...args: any[]) => any;
 declare function RegisterCreatureEvent(
  this:void,
  entry: number,
  event: CreatureEvents.CREATURE_EVENT_ON_JUST_SUMMONED_CREATURE,
  func: HookFunctionNoSelf<creature_event_on_just_summoned_creature>,
  shots?: number,
): (...args: any[]) => any;
 declare function RegisterCreatureEvent(
  this:void,
  entry: number,
  event: CreatureEvents.CREATURE_EVENT_ON_SUMMONED_CREATURE_DESPAWN,
  func: HookFunctionNoSelf<creature_event_on_summoned_creature_despawn>,
  shots?: number,
): (...args: any[]) => any;
 declare function RegisterCreatureEvent(
  this:void,
  entry: number,
  event: CreatureEvents.CREATURE_EVENT_ON_SUMMONED_CREATURE_DIED,
  func: HookFunctionNoSelf<creature_event_on_summoned_creature_died>,
  shots?: number,
): (...args: any[]) => any;
 declare function RegisterCreatureEvent(
  this:void,
  entry: number,
  event: CreatureEvents.CREATURE_EVENT_ON_SUMMONED,
  func: HookFunctionNoSelf<creature_event_on_summoned>,
  shots?: number,
): (...args: any[]) => any;
 declare function RegisterCreatureEvent(
  this:void,
  entry: number,
  event: CreatureEvents.CREATURE_EVENT_ON_RESET,
  func: HookFunctionNoSelf<creature_event_on_reset>,
  shots?: number,
): (...args: any[]) => any;
 declare function RegisterCreatureEvent(
  this:void,
  entry: number,
  event: CreatureEvents.CREATURE_EVENT_ON_REACH_HOME,
  func: HookFunctionNoSelf<creature_event_on_reach_home>,
  shots?: number,
): (...args: any[]) => any;
 declare function RegisterCreatureEvent(
  this:void,
  entry: number,
  event: CreatureEvents.CREATURE_EVENT_ON_CORPSE_REMOVED,
  func: HookFunctionNoSelf<creature_event_on_corpse_removed>,
  shots?: number,
): (...args: any[]) => any;
 declare function RegisterCreatureEvent(
  this:void,
  entry: number,
  event: CreatureEvents.CREATURE_EVENT_ON_MOVE_IN_LOS,
  func: HookFunctionNoSelf<creature_event_on_move_in_los>,
  shots?: number,
): (...args: any[]) => any;
 declare function RegisterCreatureEvent(
  this:void,
  entry: number,
  event: CreatureEvents.CREATURE_EVENT_ON_DUMMY_EFFECT,
  func: HookFunctionNoSelf<creature_event_on_dummy_effect>,
  shots?: number,
): (...args: any[]) => any;
 declare function RegisterCreatureEvent(
  this:void,
  entry: number,
  event: CreatureEvents.CREATURE_EVENT_ON_QUEST_ACCEPT,
  func: HookFunctionNoSelf<creature_event_on_quest_accept>,
  shots?: number,
): (...args: any[]) => any;
 declare function RegisterCreatureEvent(
  this:void,
  entry: number,
  event: CreatureEvents.CREATURE_EVENT_ON_QUEST_REWARD,
  func: HookFunctionNoSelf<creature_event_on_quest_reward>,
  shots?: number,
): (...args: any[]) => any;
 declare function RegisterCreatureEvent(
  this:void,
  entry: number,
  event: CreatureEvents.CREATURE_EVENT_ON_DIALOG_STATUS,
  func: HookFunctionNoSelf<creature_event_on_dialog_status>,
  shots?: number,
): (...args: any[]) => any;
 declare function RegisterCreatureEvent(
  this:void,
  entry: number,
  event: CreatureEvents.CREATURE_EVENT_ON_ADD,
  func: HookFunctionNoSelf<creature_event_on_add>,
  shots?: number,
): (...args: any[]) => any;
 declare function RegisterCreatureEvent(
  this:void,
  entry: number,
  event: CreatureEvents.CREATURE_EVENT_ON_REMOVE,
  func: HookFunctionNoSelf<creature_event_on_remove>,
  shots?: number,
): (...args: any[]) => any;

/**
 * Registers a [Creature] event handler for a *single* [Creature].
 * ```typescript
 * enum CreatureEvents
 * {
 *     CREATURE_EVENT_ON_ENTER_COMBAT                    = 1,  // (event, creature, target) - Can return true to stop normal action
 *     CREATURE_EVENT_ON_LEAVE_COMBAT                    = 2,  // (event, creature) - Can return true to stop normal action
 *     CREATURE_EVENT_ON_TARGET_DIED                     = 3,  // (event, creature, victim) - Can return true to stop normal action
 *     CREATURE_EVENT_ON_DIED                            = 4,  // (event, creature, killer) - Can return true to stop normal action
 *     CREATURE_EVENT_ON_SPAWN                           = 5,  // (event, creature) - Can return true to stop normal action
 *     CREATURE_EVENT_ON_REACH_WP                        = 6,  // (event, creature, type, id) - Can return true to stop normal action
 *     CREATURE_EVENT_ON_AIUPDATE                        = 7,  // (event, creature, diff) - Can return true to stop normal action
 *     CREATURE_EVENT_ON_RECEIVE_EMOTE                   = 8,  // (event, creature, player, emoteid) - Can return true to stop normal action
 *     CREATURE_EVENT_ON_DAMAGE_TAKEN                    = 9,  // (event, creature, attacker, damage) - Can return true to stop normal action, can return new damage as second return value.
 *     CREATURE_EVENT_ON_PRE_COMBAT                      = 10, // (event, creature, target) - Can return true to stop normal action
 *     // UNUSED
 *     CREATURE_EVENT_ON_OWNER_ATTACKED                  = 12, // (event, creature, target) - Can return true to stop normal action            // Not on mangos
 *     CREATURE_EVENT_ON_OWNER_ATTACKED_AT               = 13, // (event, creature, attacker) - Can return true to stop normal action          // Not on mangos
 *     CREATURE_EVENT_ON_HIT_BY_SPELL                    = 14, // (event, creature, caster, spellid) - Can return true to stop normal action
 *     CREATURE_EVENT_ON_SPELL_HIT_TARGET                = 15, // (event, creature, target, spellid) - Can return true to stop normal action
 *     // UNUSED                                         = 16, // (event, creature)
 *     // UNUSED                                         = 17, // (event, creature)
 *     // UNUSED                                         = 18, // (event, creature)
 *     CREATURE_EVENT_ON_JUST_SUMMONED_CREATURE          = 19, // (event, creature, summon) - Can return true to stop normal action
 *     CREATURE_EVENT_ON_SUMMONED_CREATURE_DESPAWN       = 20, // (event, creature, summon) - Can return true to stop normal action
 *     CREATURE_EVENT_ON_SUMMONED_CREATURE_DIED          = 21, // (event, creature, summon, killer) - Can return true to stop normal action    // Not on mangos
 *     CREATURE_EVENT_ON_SUMMONED                        = 22, // (event, creature, summoner) - Can return true to stop normal action
 *     CREATURE_EVENT_ON_RESET                           = 23, // (event, creature)
 *     CREATURE_EVENT_ON_REACH_HOME                      = 24, // (event, creature) - Can return true to stop normal action
 *     // UNUSED                                         = 25, // (event, creature)
 *     CREATURE_EVENT_ON_CORPSE_REMOVED                  = 26, // (event, creature, respawndelay) - Can return true to stop normal action, can return new respawndelay as second return value
 *     CREATURE_EVENT_ON_MOVE_IN_LOS                     = 27, // (event, creature, unit) - Can return true to stop normal action. Does not actually check LOS, just uses the sight range
 *     // UNUSED                                         = 28, // (event, creature)
 *     // UNUSED                                         = 29, // (event, creature)
 *     CREATURE_EVENT_ON_DUMMY_EFFECT                    = 30, // (event, caster, spellid, effindex, creature)
 *     CREATURE_EVENT_ON_QUEST_ACCEPT                    = 31, // (event, player, creature, quest) - Can return true
 *     // UNUSED                                         = 32, // (event, creature)
 *     // UNUSED                                         = 33, // (event, creature)
 *     CREATURE_EVENT_ON_QUEST_REWARD                    = 34, // (event, player, creature, quest, opt) - Can return true
 *     CREATURE_EVENT_ON_DIALOG_STATUS                   = 35, // (event, player, creature)
 *     CREATURE_EVENT_ON_ADD                             = 36, // (event, creature)
 *     CREATURE_EVENT_ON_REMOVE                          = 37, // (event, creature)
 *     CREATURE_EVENT_COUNT
 * };
 * ```
 */
 declare function RegisterUniqueCreatureEvent(
  this: void,
  guid: number,
  instance_id: number,
  event: CreatureEvents.CREATURE_EVENT_ON_ENTER_COMBAT,
  func: HookFunctionNoSelf<creature_event_on_enter_combat>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterUniqueCreatureEvent(
  this: void,
  guid: number,
  instance_id: number,
  event: CreatureEvents.CREATURE_EVENT_ON_LEAVE_COMBAT,
  func: HookFunctionNoSelf<creature_event_on_leave_combat>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterUniqueCreatureEvent(
  this: void,
  guid: number,
  instance_id: number,
  event: CreatureEvents.CREATURE_EVENT_ON_TARGET_DIED,
  func: HookFunctionNoSelf<creature_event_on_target_died>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterUniqueCreatureEvent(
  this: void,
  guid: number,
  instance_id: number,
  event: CreatureEvents.CREATURE_EVENT_ON_DIED,
  func: HookFunctionNoSelf<creature_event_on_died>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterUniqueCreatureEvent(
  this: void,
  guid: number,
  instance_id: number,
  event: CreatureEvents.CREATURE_EVENT_ON_SPAWN,
  func: HookFunctionNoSelf<creature_event_on_spawn>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterUniqueCreatureEvent(
  this: void,
  guid: number,
  instance_id: number,
  event: CreatureEvents.CREATURE_EVENT_ON_REACH_WP,
  func: HookFunctionNoSelf<creature_event_on_reach_wp>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterUniqueCreatureEvent(
  this: void,
  guid: number,
  instance_id: number,
  event: CreatureEvents.CREATURE_EVENT_ON_AIUPDATE,
  func: HookFunctionNoSelf<creature_event_on_aiupdate>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterUniqueCreatureEvent(
  this: void,
  guid: number,
  instance_id: number,
  event: CreatureEvents.CREATURE_EVENT_ON_RECEIVE_EMOTE,
  func: HookFunctionNoSelf<creature_event_on_receive_emote>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterUniqueCreatureEvent(
  this: void,
  guid: number,
  instance_id: number,
  event: CreatureEvents.CREATURE_EVENT_ON_DAMAGE_TAKEN,
  func: HookFunctionNoSelf<creature_event_on_damage_taken>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterUniqueCreatureEvent(
  this: void,
  guid: number,
  instance_id: number,
  event: CreatureEvents.CREATURE_EVENT_ON_PRE_COMBAT,
  func: HookFunctionNoSelf<creature_event_on_pre_combat>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterUniqueCreatureEvent(
  this: void,
  guid: number,
  instance_id: number,
  event: CreatureEvents.CREATURE_EVENT_ON_OWNER_ATTACKED,
  func: HookFunctionNoSelf<creature_event_on_owner_attacked>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterUniqueCreatureEvent(
  this: void,
  guid: number,
  instance_id: number,
  event: CreatureEvents.CREATURE_EVENT_ON_OWNER_ATTACKED_AT,
  func: HookFunctionNoSelf<creature_event_on_owner_attacked_at>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterUniqueCreatureEvent(
  this: void,
  guid: number,
  instance_id: number,
  event: CreatureEvents.CREATURE_EVENT_ON_HIT_BY_SPELL,
  func: HookFunctionNoSelf<creature_event_on_hit_by_spell>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterUniqueCreatureEvent(
  this: void,
  guid: number,
  instance_id: number,
  event: CreatureEvents.CREATURE_EVENT_ON_SPELL_HIT_TARGET,
  func: HookFunctionNoSelf<creature_event_on_spell_hit_target>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterUniqueCreatureEvent(
  this: void,
  guid: number,
  instance_id: number,
  event: CreatureEvents.CREATURE_EVENT_ON_JUST_SUMMONED_CREATURE,
  func: HookFunctionNoSelf<creature_event_on_just_summoned_creature>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterUniqueCreatureEvent(
  this: void,
  guid: number,
  instance_id: number,
  event: CreatureEvents.CREATURE_EVENT_ON_SUMMONED_CREATURE_DESPAWN,
  func: HookFunctionNoSelf<creature_event_on_summoned_creature_despawn>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterUniqueCreatureEvent(
  this: void,
  guid: number,
  instance_id: number,
  event: CreatureEvents.CREATURE_EVENT_ON_SUMMONED_CREATURE_DIED,
  func: HookFunctionNoSelf<creature_event_on_summoned_creature_died>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterUniqueCreatureEvent(
  this: void,
  guid: number,
  instance_id: number,
  event: CreatureEvents.CREATURE_EVENT_ON_SUMMONED,
  func: HookFunctionNoSelf<creature_event_on_summoned>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterUniqueCreatureEvent(
  this: void,
  guid: number,
  instance_id: number,
  event: CreatureEvents.CREATURE_EVENT_ON_RESET,
  func: HookFunctionNoSelf<creature_event_on_reset>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterUniqueCreatureEvent(
  this: void,
  guid: number,
  instance_id: number,
  event: CreatureEvents.CREATURE_EVENT_ON_REACH_HOME,
  func: HookFunctionNoSelf<creature_event_on_reach_home>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterUniqueCreatureEvent(
  this: void,
  guid: number,
  instance_id: number,
  event: CreatureEvents.CREATURE_EVENT_ON_CORPSE_REMOVED,
  func: HookFunctionNoSelf<creature_event_on_corpse_removed>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterUniqueCreatureEvent(
  this: void,
  guid: number,
  instance_id: number,
  event: CreatureEvents.CREATURE_EVENT_ON_MOVE_IN_LOS,
  func: HookFunctionNoSelf<creature_event_on_move_in_los>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterUniqueCreatureEvent(
  this: void,
  guid: number,
  instance_id: number,
  event: CreatureEvents.CREATURE_EVENT_ON_DUMMY_EFFECT,
  func: HookFunctionNoSelf<creature_event_on_dummy_effect>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterUniqueCreatureEvent(
  this: void,
  guid: number,
  instance_id: number,
  event: CreatureEvents.CREATURE_EVENT_ON_QUEST_ACCEPT,
  func: HookFunctionNoSelf<creature_event_on_quest_accept>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterUniqueCreatureEvent(
  this: void,
  guid: number,
  instance_id: number,
  event: CreatureEvents.CREATURE_EVENT_ON_QUEST_REWARD,
  func: HookFunctionNoSelf<creature_event_on_quest_reward>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterUniqueCreatureEvent(
  this: void,
  guid: number,
  instance_id: number,
  event: CreatureEvents.CREATURE_EVENT_ON_DIALOG_STATUS,
  func: HookFunctionNoSelf<creature_event_on_dialog_status>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterUniqueCreatureEvent(
  this: void,
  guid: number,
  instance_id: number,
  event: CreatureEvents.CREATURE_EVENT_ON_ADD,
  func: HookFunctionNoSelf<creature_event_on_add>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterUniqueCreatureEvent(
  this: void,
  guid: number,
  instance_id: number,
  event: CreatureEvents.CREATURE_EVENT_ON_REMOVE,
  func: HookFunctionNoSelf<creature_event_on_remove>,
  shots?: number,
): (...args: any[]) => any;
