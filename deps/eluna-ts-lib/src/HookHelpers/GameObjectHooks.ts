/**
 * @noSelf
 */
export function RegisterGameObjectOnDummyEffect(
  entry: number,
  /** @noSelf **/
  hook: gameobject_event_on_dummy_effect,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterGameObjectEvent(
    entry,
    GameObjectEvents.GAMEOBJECT_EVENT_ON_DUMMY_EFFECT,
    (
      event: GameObjectEvents.GAMEOBJECT_EVENT_ON_DUMMY_EFFECT,
      pCaster: WorldObject,
      spellId: number,
      effIndex: SpellEffIndex,
      pTarget: GameObject,
    ) => hook(event, pCaster, spellId, effIndex, pTarget),
    shots,
  );
}

/**
 * @noSelf
 */
export function RegisterGameObjectUpdateAI(
  entry: number,
  /** @noSelf **/
  hook: gameobject_event_on_aiupdate,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterGameObjectEvent(
    entry,
    GameObjectEvents.GAMEOBJECT_EVENT_ON_AIUPDATE,
    (
      event: GameObjectEvents.GAMEOBJECT_EVENT_ON_AIUPDATE,
      pGameObject: GameObject,
      diff: number,
    ) => hook(event, pGameObject, diff),
    shots,
  );
}

/**
 * @noSelf
 */
export function RegisterGameObjectOnQuestAccept(
  entry: number,
  /** @noSelf **/
  hook: gameobject_event_on_quest_accept,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterGameObjectEvent(
    entry,
    GameObjectEvents.GAMEOBJECT_EVENT_ON_QUEST_ACCEPT,
    (
      event: GameObjectEvents.GAMEOBJECT_EVENT_ON_QUEST_ACCEPT,
      pPlayer: Player,
      pGameObject: GameObject,
      pQuest: Quest,
    ) => hook(event, pPlayer, pGameObject, pQuest),
    shots,
  );
}

/**
 * @noSelf
 */
export function RegisterGameObjectOnQuestReward(
  entry: number,
  /** @noSelf **/
  hook: gameobject_event_on_quest_reward,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterGameObjectEvent(
    entry,
    GameObjectEvents.GAMEOBJECT_EVENT_ON_QUEST_REWARD,
    (
      event: GameObjectEvents.GAMEOBJECT_EVENT_ON_QUEST_REWARD,
      pPlayer: Player,
      pGameObject: GameObject,
      pQuest: Quest,
      opt: number,
    ) => hook(event, pPlayer, pGameObject, pQuest, opt),
    shots,
  );
}

/**
 * @noSelf
 */
export function RegisterGameObjectGetDialogStatus(
  entry: number,
  /** @noSelf **/
  hook: gameobject_event_on_dialog_status,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterGameObjectEvent(
    entry,
    GameObjectEvents.GAMEOBJECT_EVENT_ON_DIALOG_STATUS,
    (
      event: GameObjectEvents.GAMEOBJECT_EVENT_ON_DIALOG_STATUS,
      pPlayer: Player,
      pGameObject: GameObject,
    ) => hook(event, pPlayer, pGameObject),
    shots,
  );
}

/**
 * @noSelf
 */
export function RegisterGameObjectOnDestroyed(
  entry: number,
  /** @noSelf **/
  hook: gameobject_event_on_destroyed,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterGameObjectEvent(
    entry,
    GameObjectEvents.GAMEOBJECT_EVENT_ON_DESTROYED,
    (
      event: GameObjectEvents.GAMEOBJECT_EVENT_ON_DESTROYED,
      pGameObject: GameObject,
      attacker: WorldObject,
    ) => hook(event, pGameObject, attacker),
    shots,
  );
}

/**
 * @noSelf
 */
export function RegisterGameObjectOnDamaged(
  entry: number,
  /** @noSelf **/
  hook: gameobject_event_on_damaged,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterGameObjectEvent(
    entry,
    GameObjectEvents.GAMEOBJECT_EVENT_ON_DAMAGED,
    (
      event: GameObjectEvents.GAMEOBJECT_EVENT_ON_DAMAGED,
      pGameObject: GameObject,
      attacker: WorldObject,
    ) => hook(event, pGameObject, attacker),
    shots,
  );
}

/**
 * @noSelf
 */
export function RegisterGameObjectOnLootStateChanged(
  entry: number,
  /** @noSelf **/
  hook: gameobject_event_on_loot_state_change,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterGameObjectEvent(
    entry,
    GameObjectEvents.GAMEOBJECT_EVENT_ON_LOOT_STATE_CHANGE,
    (
      event: GameObjectEvents.GAMEOBJECT_EVENT_ON_LOOT_STATE_CHANGE,
      pGameObject: GameObject,
      state: number,
    ) => hook(event, pGameObject, state),
    shots,
  );
}

/**
 * @noSelf
 */
export function RegisterGameObjectOnGameObjectStateChanged(
  entry: number,
  /** @noSelf **/
  hook: gameobject_event_on_go_state_changed,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterGameObjectEvent(
    entry,
    GameObjectEvents.GAMEOBJECT_EVENT_ON_GO_STATE_CHANGED,
    (
      event: GameObjectEvents.GAMEOBJECT_EVENT_ON_GO_STATE_CHANGED,
      pGameObject: GameObject,
      state: number,
    ) => hook(event, pGameObject, state),
    shots,
  );
}

/**
 * @noSelf
 */
export function RegisterGameObjectOnSpawn(
  entry: number,
  /** @noSelf **/
  hook: gameobject_event_on_spawn,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterGameObjectEvent(
    entry,
    GameObjectEvents.GAMEOBJECT_EVENT_ON_SPAWN,
    (
      event: GameObjectEvents.GAMEOBJECT_EVENT_ON_SPAWN,
      pGameObject: GameObject,
    ) => hook(event, pGameObject),
    shots,
  );
}

/**
 * @noSelf
 */
export function RegisterGameObjectOnAddToWorld(
  entry: number,
  /** @noSelf **/
  hook: gameobject_event_on_add,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterGameObjectEvent(
    entry,
    GameObjectEvents.GAMEOBJECT_EVENT_ON_ADD,
    (
      event: GameObjectEvents.GAMEOBJECT_EVENT_ON_ADD,
      pGameObject: GameObject,
    ) => hook(event, pGameObject),
    shots,
  );
}

/**
 * @noSelf
 */
export function RegisterGameObjectOnRemoveFromWorld(
  entry: number,
  /** @noSelf **/
  hook: gameobject_event_on_remove,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterGameObjectEvent(
    entry,
    GameObjectEvents.GAMEOBJECT_EVENT_ON_REMOVE,
    (
      event: GameObjectEvents.GAMEOBJECT_EVENT_ON_REMOVE,
      pGameObject: GameObject,
    ) => hook(event, pGameObject),
    shots,
  );
}

/**
 * @noSelf
 */
export function RegisterGameObjectOnGameObjectUse(
  entry: number,
  /** @noSelf **/
  hook: gameobject_event_on_use,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterGameObjectEvent(
    entry,
    GameObjectEvents.GAMEOBJECT_EVENT_ON_USE,
    (
      event: GameObjectEvents.GAMEOBJECT_EVENT_ON_USE,
      pPlayer: Player,
      pGameObject: GameObject,
    ) => hook(event, pPlayer, pGameObject),
    shots,
  );
}
