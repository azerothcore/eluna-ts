/**
 * @noSelf
 */
export function RegisterCreatureOnDummyEffect(
  entry: number,
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterCreatureOnQuestAccept(
  entry: number,
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterCreatureOnQuestReward(
  entry: number,
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterCreatureGetDialogStatus(
  entry: number,
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterCreatureOnAddToWorld(
  entry: number,
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterCreatureOnRemoveFromWorld(
  entry: number,
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterCreatureOnSummoned(
  entry: number,
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterCreatureUpdateAI(
  entry: number,
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterCreatureEnterCombat(
  entry: number,
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterCreatureDamageTaken(
  entry: number,
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterCreatureJustDied(
  entry: number,
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterCreatureKilledUnit(
  entry: number,
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterCreatureJustSummoned(
  entry: number,
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterCreatureSummonedCreatureDespawn(
  entry: number,
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterCreatureMovementInform(
  entry: number,
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterCreatureAttackStart(
  entry: number,
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterCreatureEnterEvadeMode(
  entry: number,
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterCreatureJustRespawned(
  entry: number,
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterCreatureJustReachedHome(
  entry: number,
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterCreatureReceiveEmote(
  entry: number,
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterCreatureCorpseRemoved(
  entry: number,
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterCreatureMoveInLineOfSight(
  entry: number,
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterCreatureSpellHit(
  entry: number,
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterCreatureSpellHitTarget(
  entry: number,
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterCreatureSummonedCreatureDies(
  entry: number,
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterCreatureOwnerAttackedBy(
  entry: number,
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterCreatureOwnerAttacked(
  entry: number,
  /** @noSelf **/
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
