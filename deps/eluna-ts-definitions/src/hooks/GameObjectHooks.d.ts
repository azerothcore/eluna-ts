declare type gameobject_event_on_dummy_effect = (
  event: GameObjectEvents.GAMEOBJECT_EVENT_ON_DUMMY_EFFECT,
  pCaster: WorldObject,
  spellId: number,
  effIndex: SpellEffIndex,
  pTarget: GameObject,
) => void;

declare type gameobject_event_on_aiupdate = (
  event: GameObjectEvents.GAMEOBJECT_EVENT_ON_AIUPDATE,
  pGameObject: GameObject,
  diff: number,
) => void;

declare type gameobject_event_on_quest_accept = (
  event: GameObjectEvents.GAMEOBJECT_EVENT_ON_QUEST_ACCEPT,
  pPlayer: Player,
  pGameObject: GameObject,
  pQuest: Quest,
) => boolean;

declare type gameobject_event_on_quest_reward = (
  event: GameObjectEvents.GAMEOBJECT_EVENT_ON_QUEST_REWARD,
  pPlayer: Player,
  pGameObject: GameObject,
  pQuest: Quest,
  opt: number,
) => boolean;

declare type gameobject_event_on_dialog_status = (
  event: GameObjectEvents.GAMEOBJECT_EVENT_ON_DIALOG_STATUS,
  pPlayer: Player,
  pGameObject: GameObject,
) => void;

declare type gameobject_event_on_destroyed = (
  event: GameObjectEvents.GAMEOBJECT_EVENT_ON_DESTROYED,
  pGameObject: GameObject,
  attacker: WorldObject,
) => void;

declare type gameobject_event_on_damaged = (
  event: GameObjectEvents.GAMEOBJECT_EVENT_ON_DAMAGED,
  pGameObject: GameObject,
  attacker: WorldObject,
) => void;

declare type gameobject_event_on_loot_state_change = (
  event: GameObjectEvents.GAMEOBJECT_EVENT_ON_LOOT_STATE_CHANGE,
  pGameObject: GameObject,
  state: number,
) => void;

declare type gameobject_event_on_go_state_changed = (
  event: GameObjectEvents.GAMEOBJECT_EVENT_ON_GO_STATE_CHANGED,
  pGameObject: GameObject,
  state: number,
) => void;

declare type gameobject_event_on_spawn = (
  event: GameObjectEvents.GAMEOBJECT_EVENT_ON_SPAWN,
  pGameObject: GameObject,
) => void;

declare type gameobject_event_on_add = (
  event: GameObjectEvents.GAMEOBJECT_EVENT_ON_ADD,
  pGameObject: GameObject,
) => void;

declare type gameobject_event_on_remove = (
  event: GameObjectEvents.GAMEOBJECT_EVENT_ON_REMOVE,
  pGameObject: GameObject,
) => void;

declare type gameobject_event_on_use = (
  event: GameObjectEvents.GAMEOBJECT_EVENT_ON_USE,
  pPlayer: Player,
  pGameObject: GameObject,
) => boolean;
