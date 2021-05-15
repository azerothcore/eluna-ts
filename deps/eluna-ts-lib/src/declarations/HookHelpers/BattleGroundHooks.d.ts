export declare function RegisterBattleGroundOnBGStart(hook: bg_event_on_start, 
/** the number of times the function will be called, 0 means "always call this function" */
shots?: number): void;
export declare function RegisterBattleGroundOnBGCreate(hook: bg_event_on_create, 
/** the number of times the function will be called, 0 means "always call this function" */
shots?: number): void;
export declare function RegisterBattleGroundOnBGDestroy(hook: bg_event_on_pre_destroy, 
/** the number of times the function will be called, 0 means "always call this function" */
shots?: number): void;
