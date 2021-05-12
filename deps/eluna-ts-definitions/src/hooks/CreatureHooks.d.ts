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
