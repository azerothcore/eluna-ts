export declare function RegisterInstanceOnInitialize(instanceId: number, hook: instance_event_on_initialize, 
/** the number of times the function will be called, 0 means "always call this function" */
shots?: number): void;
export declare function RegisterInstanceOnLoad(instanceId: number, hook: instance_event_on_load, 
/** the number of times the function will be called, 0 means "always call this function" */
shots?: number): void;
export declare function RegisterInstanceOnUpdateInstance(instanceId: number, hook: instance_event_on_update, 
/** the number of times the function will be called, 0 means "always call this function" */
shots?: number): void;
export declare function RegisterInstanceOnPlayerEnterInstance(instanceId: number, hook: instance_event_on_player_enter, 
/** the number of times the function will be called, 0 means "always call this function" */
shots?: number): void;
export declare function RegisterInstanceOnCreatureCreate(instanceId: number, hook: instance_event_on_creature_create, 
/** the number of times the function will be called, 0 means "always call this function" */
shots?: number): void;
export declare function RegisterInstanceOnGameObjectCreate(instanceId: number, hook: instance_event_on_gameobject_create, 
/** the number of times the function will be called, 0 means "always call this function" */
shots?: number): void;
export declare function RegisterInstanceOnCheckEncounterInProgress(instanceId: number, hook: instance_event_on_check_encounter_in_progress, 
/** the number of times the function will be called, 0 means "always call this function" */
shots?: number): void;
