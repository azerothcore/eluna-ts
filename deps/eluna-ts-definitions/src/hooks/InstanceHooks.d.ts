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
