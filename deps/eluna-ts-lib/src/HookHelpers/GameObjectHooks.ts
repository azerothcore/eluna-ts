export function RegisterGameObjectOnDummyEffect(
  entry: number,
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

export function RegisterGameObjectUpdateAI(
  entry: number,
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

export function RegisterGameObjectOnQuestAccept(
  entry: number,
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

export function RegisterGameObjectOnQuestReward(
  entry: number,
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

export function RegisterGameObjectGetDialogStatus(
  entry: number,
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

export function RegisterGameObjectOnDestroyed(
  entry: number,
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

export function RegisterGameObjectOnDamaged(
  entry: number,
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

export function RegisterGameObjectOnLootStateChanged(
  entry: number,
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

export function RegisterGameObjectOnGameObjectStateChanged(
  entry: number,
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

export function RegisterGameObjectOnSpawn(
  entry: number,
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

export function RegisterGameObjectOnAddToWorld(
  entry: number,
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

export function RegisterGameObjectOnRemoveFromWorld(
  entry: number,
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

export function RegisterGameObjectOnGameObjectUse(
  entry: number,
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
