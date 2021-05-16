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

/**
 * Registers a [GameObject] event handler.
 * ```typescript
 * enum GameObjectEvents
 * {
 *     GAMEOBJECT_EVENT_ON_AIUPDATE                    = 1,    // (event, go, diff)
 *     GAMEOBJECT_EVENT_ON_SPAWN                       = 2,    // (event, go)
 *     GAMEOBJECT_EVENT_ON_DUMMY_EFFECT                = 3,    // (event, caster, spellid, effindex, go) - Can return true to stop normal action
 *     GAMEOBJECT_EVENT_ON_QUEST_ACCEPT                = 4,    // (event, player, go, quest) - Can return true to stop normal action
 *     GAMEOBJECT_EVENT_ON_QUEST_REWARD                = 5,    // (event, player, go, quest, opt) - Can return true to stop normal action
 *     GAMEOBJECT_EVENT_ON_DIALOG_STATUS               = 6,    // (event, player, go)
 *     GAMEOBJECT_EVENT_ON_DESTROYED                   = 7,    // (event, go, attacker)
 *     GAMEOBJECT_EVENT_ON_DAMAGED                     = 8,    // (event, go, attacker)
 *     GAMEOBJECT_EVENT_ON_LOOT_STATE_CHANGE           = 9,    // (event, go, state)
 *     GAMEOBJECT_EVENT_ON_GO_STATE_CHANGED            = 10,   // (event, go, state)
 *     // UNUSED                                       = 11,   // (event, gameobject)
 *     GAMEOBJECT_EVENT_ON_ADD                         = 12,   // (event, gameobject)
 *     GAMEOBJECT_EVENT_ON_REMOVE                      = 13,   // (event, gameobject)
 *     GAMEOBJECT_EVENT_ON_USE                         = 14,   // (event, go, player) - Can return true to stop normal action
 *     GAMEOBJECT_EVENT_COUNT
 * };
 * ```
 */
 declare function RegisterGameObjectEvent(
  this: void,
  entry: number,
  event: GameObjectEvents.GAMEOBJECT_EVENT_ON_AIUPDATE,
  func: HookFunctionNoSelf<gameobject_event_on_aiupdate>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterGameObjectEvent(
  this: void,
  entry: number,
  event: GameObjectEvents.GAMEOBJECT_EVENT_ON_SPAWN,
  func: HookFunctionNoSelf<gameobject_event_on_spawn>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterGameObjectEvent(
  this: void,
  entry: number,
  event: GameObjectEvents.GAMEOBJECT_EVENT_ON_DUMMY_EFFECT,
  func: HookFunctionNoSelf<gameobject_event_on_dummy_effect>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterGameObjectEvent(
  this: void,
  entry: number,
  event: GameObjectEvents.GAMEOBJECT_EVENT_ON_QUEST_ACCEPT,
  func: HookFunctionNoSelf<gameobject_event_on_quest_accept>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterGameObjectEvent(
  this: void,
  entry: number,
  event: GameObjectEvents.GAMEOBJECT_EVENT_ON_QUEST_REWARD,
  func: HookFunctionNoSelf<gameobject_event_on_quest_reward>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterGameObjectEvent(
  this: void,
  entry: number,
  event: GameObjectEvents.GAMEOBJECT_EVENT_ON_DIALOG_STATUS,
  func: HookFunctionNoSelf<gameobject_event_on_dialog_status>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterGameObjectEvent(
  this: void,
  entry: number,
  event: GameObjectEvents.GAMEOBJECT_EVENT_ON_DESTROYED,
  func: HookFunctionNoSelf<gameobject_event_on_destroyed>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterGameObjectEvent(
  this: void,
  entry: number,
  event: GameObjectEvents.GAMEOBJECT_EVENT_ON_DAMAGED,
  func: HookFunctionNoSelf<gameobject_event_on_damaged>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterGameObjectEvent(
  this: void,
  entry: number,
  event: GameObjectEvents.GAMEOBJECT_EVENT_ON_LOOT_STATE_CHANGE,
  func: HookFunctionNoSelf<gameobject_event_on_loot_state_change>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterGameObjectEvent(
  this: void,
  entry: number,
  event: GameObjectEvents.GAMEOBJECT_EVENT_ON_GO_STATE_CHANGED,
  func: HookFunctionNoSelf<gameobject_event_on_go_state_changed>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterGameObjectEvent(
  this: void,
  entry: number,
  event: GameObjectEvents.GAMEOBJECT_EVENT_ON_ADD,
  func: HookFunctionNoSelf<gameobject_event_on_add>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterGameObjectEvent(
  this: void,
  entry: number,
  event: GameObjectEvents.GAMEOBJECT_EVENT_ON_REMOVE,
  func: HookFunctionNoSelf<gameobject_event_on_remove>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterGameObjectEvent(
  this: void,
  entry: number,
  event: GameObjectEvents.GAMEOBJECT_EVENT_ON_USE,
  func: HookFunctionNoSelf<gameobject_event_on_use>,
  shots?: number,
): (...args: any[]) => any;
