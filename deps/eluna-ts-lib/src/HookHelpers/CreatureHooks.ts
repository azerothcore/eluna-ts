export function RegisterCreatureOnDummyEffect(
  entry: number,
  hook: creature_event_on_dummy_effect,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterCreatureEvent(
    entry,
    CreatureEvents.CREATURE_EVENT_ON_DUMMY_EFFECT,
    (
      event: CreatureEvents.CREATURE_EVENT_ON_DUMMY_EFFECT,
      pCaster: WorldObject,
      spellId: number,
      effIndex: SpellEffIndex,
      pTarget: Creature,
    ) => hook(event, pCaster, spellId, effIndex, pTarget),
    shots,
  );
}

export function RegisterCreatureOnQuestAccept(
  entry: number,
  hook: creature_event_on_quest_accept,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterCreatureEvent(
    entry,
    CreatureEvents.CREATURE_EVENT_ON_QUEST_ACCEPT,
    (
      event: CreatureEvents.CREATURE_EVENT_ON_QUEST_ACCEPT,
      pPlayer: Player,
      pCreature: Creature,
      pQuest: Quest,
    ) => hook(event, pPlayer, pCreature, pQuest),
    shots,
  );
}

export function RegisterCreatureOnQuestReward(
  entry: number,
  hook: creature_event_on_quest_reward,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterCreatureEvent(
    entry,
    CreatureEvents.CREATURE_EVENT_ON_QUEST_REWARD,
    (
      event: CreatureEvents.CREATURE_EVENT_ON_QUEST_REWARD,
      pPlayer: Player,
      pCreature: Creature,
      pQuest: Quest,
      opt: number,
    ) => hook(event, pPlayer, pCreature, pQuest, opt),
    shots,
  );
}

export function RegisterCreatureGetDialogStatus(
  entry: number,
  hook: creature_event_on_dialog_status,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterCreatureEvent(
    entry,
    CreatureEvents.CREATURE_EVENT_ON_DIALOG_STATUS,
    (
      event: CreatureEvents.CREATURE_EVENT_ON_DIALOG_STATUS,
      pPlayer: Player,
      pCreature: Creature,
    ) => hook(event, pPlayer, pCreature),
    shots,
  );
}

export function RegisterCreatureOnAddToWorld(
  entry: number,
  hook: creature_event_on_add,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterCreatureEvent(
    entry,
    CreatureEvents.CREATURE_EVENT_ON_ADD,
    (event: CreatureEvents.CREATURE_EVENT_ON_ADD, pCreature: Creature) =>
      hook(event, pCreature),
    shots,
  );
}

export function RegisterCreatureOnRemoveFromWorld(
  entry: number,
  hook: creature_event_on_remove,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterCreatureEvent(
    entry,
    CreatureEvents.CREATURE_EVENT_ON_REMOVE,
    (event: CreatureEvents.CREATURE_EVENT_ON_REMOVE, pCreature: Creature) =>
      hook(event, pCreature),
    shots,
  );
}

export function RegisterCreatureOnSummoned(
  entry: number,
  hook: creature_event_on_summoned,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterCreatureEvent(
    entry,
    CreatureEvents.CREATURE_EVENT_ON_SUMMONED,
    (
      event: CreatureEvents.CREATURE_EVENT_ON_SUMMONED,
      pCreature: Creature,
      pSummoner: Unit,
    ) => hook(event, pCreature, pSummoner),
    shots,
  );
}

export function RegisterCreatureUpdateAI(
  entry: number,
  hook: creature_event_on_aiupdate,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterCreatureEvent(
    entry,
    CreatureEvents.CREATURE_EVENT_ON_AIUPDATE,
    (
      event: CreatureEvents.CREATURE_EVENT_ON_AIUPDATE,
      me: Creature,
      diff: number,
    ) => hook(event, me, diff),
    shots,
  );
}

export function RegisterCreatureEnterCombat(
  entry: number,
  hook: creature_event_on_enter_combat,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterCreatureEvent(
    entry,
    CreatureEvents.CREATURE_EVENT_ON_ENTER_COMBAT,
    (
      event: CreatureEvents.CREATURE_EVENT_ON_ENTER_COMBAT,
      me: Creature,
      target: Unit,
    ) => hook(event, me, target),
    shots,
  );
}

export function RegisterCreatureDamageTaken(
  entry: number,
  hook: creature_event_on_damage_taken,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterCreatureEvent(
    entry,
    CreatureEvents.CREATURE_EVENT_ON_DAMAGE_TAKEN,
    (
      event: CreatureEvents.CREATURE_EVENT_ON_DAMAGE_TAKEN,
      me: Creature,
      attacker: Unit,
      damage: number,
    ) => hook(event, me, attacker, damage),
    shots,
  );
}

export function RegisterCreatureJustDied(
  entry: number,
  hook: creature_event_on_died,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterCreatureEvent(
    entry,
    CreatureEvents.CREATURE_EVENT_ON_DIED,
    (
      event: CreatureEvents.CREATURE_EVENT_ON_DIED,
      me: Creature,
      killer: Unit,
    ) => hook(event, me, killer),
    shots,
  );
}

export function RegisterCreatureKilledUnit(
  entry: number,
  hook: creature_event_on_target_died,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterCreatureEvent(
    entry,
    CreatureEvents.CREATURE_EVENT_ON_TARGET_DIED,
    (
      event: CreatureEvents.CREATURE_EVENT_ON_TARGET_DIED,
      me: Creature,
      victim: Unit,
    ) => hook(event, me, victim),
    shots,
  );
}

export function RegisterCreatureJustSummoned(
  entry: number,
  hook: creature_event_on_just_summoned_creature,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterCreatureEvent(
    entry,
    CreatureEvents.CREATURE_EVENT_ON_JUST_SUMMONED_CREATURE,
    (
      event: CreatureEvents.CREATURE_EVENT_ON_JUST_SUMMONED_CREATURE,
      me: Creature,
      summon: Creature,
    ) => hook(event, me, summon),
    shots,
  );
}

export function RegisterCreatureSummonedCreatureDespawn(
  entry: number,
  hook: creature_event_on_summoned_creature_despawn,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterCreatureEvent(
    entry,
    CreatureEvents.CREATURE_EVENT_ON_SUMMONED_CREATURE_DESPAWN,
    (
      event: CreatureEvents.CREATURE_EVENT_ON_SUMMONED_CREATURE_DESPAWN,
      me: Creature,
      summon: Creature,
    ) => hook(event, me, summon),
    shots,
  );
}

export function RegisterCreatureMovementInform(
  entry: number,
  hook: creature_event_on_reach_wp,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterCreatureEvent(
    entry,
    CreatureEvents.CREATURE_EVENT_ON_REACH_WP,
    (
      event: CreatureEvents.CREATURE_EVENT_ON_REACH_WP,
      me: Creature,
      type: number,
      id: number,
    ) => hook(event, me, type, id),
    shots,
  );
}

export function RegisterCreatureAttackStart(
  entry: number,
  hook: creature_event_on_pre_combat,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterCreatureEvent(
    entry,
    CreatureEvents.CREATURE_EVENT_ON_PRE_COMBAT,
    (
      event: CreatureEvents.CREATURE_EVENT_ON_PRE_COMBAT,
      me: Creature,
      target: Unit,
    ) => hook(event, me, target),
    shots,
  );
}

export function RegisterCreatureEnterEvadeMode(
  entry: number,
  hook: creature_event_on_leave_combat,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterCreatureEvent(
    entry,
    CreatureEvents.CREATURE_EVENT_ON_LEAVE_COMBAT,
    (event: CreatureEvents.CREATURE_EVENT_ON_LEAVE_COMBAT, me: Creature) =>
      hook(event, me),
    shots,
  );
}

export function RegisterCreatureJustRespawned(
  entry: number,
  hook: creature_event_on_spawn,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterCreatureEvent(
    entry,
    CreatureEvents.CREATURE_EVENT_ON_SPAWN,
    (event: CreatureEvents.CREATURE_EVENT_ON_SPAWN, me: Creature) =>
      hook(event, me),
    shots,
  );
}

export function RegisterCreatureJustReachedHome(
  entry: number,
  hook: creature_event_on_reach_home,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterCreatureEvent(
    entry,
    CreatureEvents.CREATURE_EVENT_ON_REACH_HOME,
    (event: CreatureEvents.CREATURE_EVENT_ON_REACH_HOME, me: Creature) =>
      hook(event, me),
    shots,
  );
}

export function RegisterCreatureReceiveEmote(
  entry: number,
  hook: creature_event_on_receive_emote,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterCreatureEvent(
    entry,
    CreatureEvents.CREATURE_EVENT_ON_RECEIVE_EMOTE,
    (
      event: CreatureEvents.CREATURE_EVENT_ON_RECEIVE_EMOTE,
      me: Creature,
      player: Player,
      emoteId: number,
    ) => hook(event, me, player, emoteId),
    shots,
  );
}

export function RegisterCreatureCorpseRemoved(
  entry: number,
  hook: creature_event_on_corpse_removed,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterCreatureEvent(
    entry,
    CreatureEvents.CREATURE_EVENT_ON_CORPSE_REMOVED,
    (
      event: CreatureEvents.CREATURE_EVENT_ON_CORPSE_REMOVED,
      me: Creature,
      respawnDelay: number,
    ) => hook(event, me, respawnDelay),
    shots,
  );
}

export function RegisterCreatureMoveInLineOfSight(
  entry: number,
  hook: creature_event_on_move_in_los,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterCreatureEvent(
    entry,
    CreatureEvents.CREATURE_EVENT_ON_MOVE_IN_LOS,
    (
      event: CreatureEvents.CREATURE_EVENT_ON_MOVE_IN_LOS,
      me: Creature,
      who: Unit,
    ) => hook(event, me, who),
    shots,
  );
}

export function RegisterCreatureSpellHit(
  entry: number,
  hook: creature_event_on_hit_by_spell,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterCreatureEvent(
    entry,
    CreatureEvents.CREATURE_EVENT_ON_HIT_BY_SPELL,
    (
      event: CreatureEvents.CREATURE_EVENT_ON_HIT_BY_SPELL,
      me: Creature,
      caster: WorldObject,
      spell: number,
    ) => hook(event, me, caster, spell),
    shots,
  );
}

export function RegisterCreatureSpellHitTarget(
  entry: number,
  hook: creature_event_on_spell_hit_target,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterCreatureEvent(
    entry,
    CreatureEvents.CREATURE_EVENT_ON_SPELL_HIT_TARGET,
    (
      event: CreatureEvents.CREATURE_EVENT_ON_SPELL_HIT_TARGET,
      me: Creature,
      target: WorldObject,
      spell: number,
    ) => hook(event, me, target, spell),
    shots,
  );
}

export function RegisterCreatureSummonedCreatureDies(
  entry: number,
  hook: creature_event_on_summoned_creature_died,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterCreatureEvent(
    entry,
    CreatureEvents.CREATURE_EVENT_ON_SUMMONED_CREATURE_DIED,
    (
      event: CreatureEvents.CREATURE_EVENT_ON_SUMMONED_CREATURE_DIED,
      me: Creature,
      summon: Creature,
      killer: Unit,
    ) => hook(event, me, summon, killer),
    shots,
  );
}

export function RegisterCreatureOwnerAttackedBy(
  entry: number,
  hook: creature_event_on_owner_attacked_at,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterCreatureEvent(
    entry,
    CreatureEvents.CREATURE_EVENT_ON_OWNER_ATTACKED_AT,
    (
      event: CreatureEvents.CREATURE_EVENT_ON_OWNER_ATTACKED_AT,
      me: Creature,
      attacker: Unit,
    ) => hook(event, me, attacker),
    shots,
  );
}

export function RegisterCreatureOwnerAttacked(
  entry: number,
  hook: creature_event_on_owner_attacked,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterCreatureEvent(
    entry,
    CreatureEvents.CREATURE_EVENT_ON_OWNER_ATTACKED,
    (
      event: CreatureEvents.CREATURE_EVENT_ON_OWNER_ATTACKED,
      me: Creature,
      target: Unit,
    ) => hook(event, me, target),
    shots,
  );
}
