export function RegisterInstanceOnInitialize(
  instanceId: number,
  hook: instance_event_on_initialize,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterInstanceEvent(
    instanceId,
    InstanceEvents.INSTANCE_EVENT_ON_INITIALIZE,
    (
      event: InstanceEvents.INSTANCE_EVENT_ON_INITIALIZE,
      instanceData: [],
      map: EMap,
    ) => hook(event, instanceData, map),
    shots,
  );
}
export function RegisterInstanceOnLoad(
  instanceId: number,
  hook: instance_event_on_load,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterInstanceEvent(
    instanceId,
    InstanceEvents.INSTANCE_EVENT_ON_LOAD,
    (
      event: InstanceEvents.INSTANCE_EVENT_ON_LOAD,
      instanceData: [],
      map: EMap,
    ) => hook(event, instanceData, map),
    shots,
  );
}

export function RegisterInstanceOnUpdateInstance(
  instanceId: number,
  hook: instance_event_on_update,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterInstanceEvent(
    instanceId,
    InstanceEvents.INSTANCE_EVENT_ON_UPDATE,
    (
      event: InstanceEvents.INSTANCE_EVENT_ON_UPDATE,
      instanceData: [],
      map: EMap,
      diff: number,
    ) => hook(event, instanceData, map, diff),
    shots,
  );
}

export function RegisterInstanceOnPlayerEnterInstance(
  instanceId: number,
  hook: instance_event_on_player_enter,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterInstanceEvent(
    instanceId,
    InstanceEvents.INSTANCE_EVENT_ON_PLAYER_ENTER,
    (
      event: InstanceEvents.INSTANCE_EVENT_ON_PLAYER_ENTER,
      instanceData: [],
      map: EMap,
      player: Player,
    ) => hook(event, instanceData, map, player),
    shots,
  );
}

export function RegisterInstanceOnCreatureCreate(
  instanceId: number,
  hook: instance_event_on_creature_create,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterInstanceEvent(
    instanceId,
    InstanceEvents.INSTANCE_EVENT_ON_CREATURE_CREATE,
    (
      event: InstanceEvents.INSTANCE_EVENT_ON_CREATURE_CREATE,
      instanceData: [],
      map: EMap,
      creature: Creature,
    ) => hook(event, instanceData, map, creature),
    shots,
  );
}

export function RegisterInstanceOnGameObjectCreate(
  instanceId: number,
  hook: instance_event_on_gameobject_create,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterInstanceEvent(
    instanceId,
    InstanceEvents.INSTANCE_EVENT_ON_GAMEOBJECT_CREATE,
    (
      event: InstanceEvents.INSTANCE_EVENT_ON_GAMEOBJECT_CREATE,
      instanceData: [],
      map: EMap,
      go: GameObject,
    ) => hook(event, instanceData, map, go),
    shots,
  );
}

export function RegisterInstanceOnCheckEncounterInProgress(
  instanceId: number,
  hook: instance_event_on_check_encounter_in_progress,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterInstanceEvent(
    instanceId,
    InstanceEvents.INSTANCE_EVENT_ON_CHECK_ENCOUNTER_IN_PROGRESS,
    (
      event: InstanceEvents.INSTANCE_EVENT_ON_CHECK_ENCOUNTER_IN_PROGRESS,
      instanceData: [],
      map: EMap,
    ) => hook(event, instanceData, map),
    shots,
  );
}
