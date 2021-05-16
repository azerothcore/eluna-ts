declare type instance_event_on_initialize = (
  event: InstanceEvents.INSTANCE_EVENT_ON_INITIALIZE,
  instance_data: number[],
  map: EMap,
) => void;

declare type instance_event_on_load = (
  event: InstanceEvents.INSTANCE_EVENT_ON_LOAD,
  instance_data: number[],
  map: EMap,
) => void;

declare type instance_event_on_update = (
  event: InstanceEvents.INSTANCE_EVENT_ON_UPDATE,
  instance_data: number[],
  map: EMap,
  diff: number,
) => void;

declare type instance_event_on_player_enter = (
  event: InstanceEvents.INSTANCE_EVENT_ON_PLAYER_ENTER,
  instance_data: number[],
  map: EMap,
  player: Player,
) => void;

declare type instance_event_on_creature_create = (
  event: InstanceEvents.INSTANCE_EVENT_ON_CREATURE_CREATE,
  instance_data: number[],
  map: EMap,
  creature: Creature,
) => void;

declare type instance_event_on_gameobject_create = (
  event: InstanceEvents.INSTANCE_EVENT_ON_GAMEOBJECT_CREATE,
  instance_data: number[],
  map: EMap,
  go: GameObject,
) => void;

declare type instance_event_on_check_encounter_in_progress = (
  event: InstanceEvents.INSTANCE_EVENT_ON_CHECK_ENCOUNTER_IN_PROGRESS,
  instance_data: number[],
  map: EMap,
) => boolean;


/**
 * Registers a [Map] event handler for one instance of a [Map].
 * ```typescript
 * enum InstanceEvents
 * {
 *     INSTANCE_EVENT_ON_INITIALIZE                    = 1,    // (event, instance_data, map)
 *     INSTANCE_EVENT_ON_LOAD                          = 2,    // (event, instance_data, map)
 *     INSTANCE_EVENT_ON_UPDATE                        = 3,    // (event, instance_data, map, diff)
 *     INSTANCE_EVENT_ON_PLAYER_ENTER                  = 4,    // (event, instance_data, map, player)
 *     INSTANCE_EVENT_ON_CREATURE_CREATE               = 5,    // (event, instance_data, map, creature)
 *     INSTANCE_EVENT_ON_GAMEOBJECT_CREATE             = 6,    // (event, instance_data, map, go)
 *     INSTANCE_EVENT_ON_CHECK_ENCOUNTER_IN_PROGRESS   = 7,    // (event, instance_data, map)
 *     INSTANCE_EVENT_COUNT
 * };
 * ```
 */
 declare function RegisterInstanceEvent(
  this: void,
  instance_id: number,
  event: InstanceEvents.INSTANCE_EVENT_ON_INITIALIZE,
  func: HookFunctionNoSelf<instance_event_on_initialize>,
  shots?: number,
): void;
declare function RegisterInstanceEvent(
  this: void,
  instance_id: number,
  event: InstanceEvents.INSTANCE_EVENT_ON_LOAD,
  func: HookFunctionNoSelf<instance_event_on_load>,
  shots?: number,
): void;
declare function RegisterInstanceEvent(
  this: void,
  instance_id: number,
  event: InstanceEvents.INSTANCE_EVENT_ON_UPDATE,
  func: HookFunctionNoSelf<instance_event_on_update>,
  shots?: number,
): void;
declare function RegisterInstanceEvent(
  this: void,
  instance_id: number,
  event: InstanceEvents.INSTANCE_EVENT_ON_PLAYER_ENTER,
  func: HookFunctionNoSelf<instance_event_on_player_enter>,
  shots?: number,
): void;
declare function RegisterInstanceEvent(
  this: void,
  instance_id: number,
  event: InstanceEvents.INSTANCE_EVENT_ON_CREATURE_CREATE,
  func: HookFunctionNoSelf<instance_event_on_creature_create>,
  shots?: number,
): void;
declare function RegisterInstanceEvent(
  this: void,
  instance_id: number,
  event: InstanceEvents.INSTANCE_EVENT_ON_GAMEOBJECT_CREATE,
  func: HookFunctionNoSelf<instance_event_on_gameobject_create>,
  shots?: number,
): void;
declare function RegisterInstanceEvent(
  this: void,
  instance_id: number,
  event: InstanceEvents.INSTANCE_EVENT_ON_CHECK_ENCOUNTER_IN_PROGRESS,
  func: HookFunctionNoSelf<instance_event_on_check_encounter_in_progress>,
  shots?: number,
): void;


/**
 * Registers a [Map] event handler for all instance of a [Map].
 * ```typescript
 * enum InstanceEvents
 * {
 *     INSTANCE_EVENT_ON_INITIALIZE                    = 1,    // (event, instance_data, map)
 *     INSTANCE_EVENT_ON_LOAD                          = 2,    // (event, instance_data, map)
 *     INSTANCE_EVENT_ON_UPDATE                        = 3,    // (event, instance_data, map, diff)
 *     INSTANCE_EVENT_ON_PLAYER_ENTER                  = 4,    // (event, instance_data, map, player)
 *     INSTANCE_EVENT_ON_CREATURE_CREATE               = 5,    // (event, instance_data, map, creature)
 *     INSTANCE_EVENT_ON_GAMEOBJECT_CREATE             = 6,    // (event, instance_data, map, go)
 *     INSTANCE_EVENT_ON_CHECK_ENCOUNTER_IN_PROGRESS   = 7,    // (event, instance_data, map)
 *     INSTANCE_EVENT_COUNT
 * };
 * ```
 */
 declare function RegisterMapEvent(
  this: void,
  map_id: number,
  event: InstanceEvents.INSTANCE_EVENT_ON_INITIALIZE,
  func: HookFunctionNoSelf<instance_event_on_initialize>,
  shots?: number,
): void;
declare function RegisterMapEvent(
  this: void,
  map_id: number,
  event: InstanceEvents.INSTANCE_EVENT_ON_LOAD,
  func: HookFunctionNoSelf<instance_event_on_load>,
  shots?: number,
): void;
declare function RegisterMapEvent(
  this: void,
  map_id: number,
  event: InstanceEvents.INSTANCE_EVENT_ON_UPDATE,
  func: HookFunctionNoSelf<instance_event_on_update>,
  shots?: number,
): void;
declare function RegisterMapEvent(
  this: void,
  map_id: number,
  event: InstanceEvents.INSTANCE_EVENT_ON_PLAYER_ENTER,
  func: HookFunctionNoSelf<instance_event_on_player_enter>,
  shots?: number,
): void;
declare function RegisterMapEvent(
  this: void,
  map_id: number,
  event: InstanceEvents.INSTANCE_EVENT_ON_CREATURE_CREATE,
  func: HookFunctionNoSelf<instance_event_on_creature_create>,
  shots?: number,
): void;
declare function RegisterMapEvent(
  this: void,
  map_id: number,
  event: InstanceEvents.INSTANCE_EVENT_ON_GAMEOBJECT_CREATE,
  func: HookFunctionNoSelf<instance_event_on_gameobject_create>,
  shots?: number,
): void;
declare function RegisterMapEvent(
  this: void,
  map_id: number,
  event: InstanceEvents.INSTANCE_EVENT_ON_CHECK_ENCOUNTER_IN_PROGRESS,
  func: HookFunctionNoSelf<instance_event_on_check_encounter_in_progress>,
  shots?: number,
): void;
