export declare function RegisterServerOnAddonMessage(hook: addon_event_on_message, 
/** the number of times the function will be called, 0 means "always call this function" */
shots?: number): void;
export declare function RegisterServerOnGameEventStart(hook: game_event_start, 
/** the number of times the function will be called, 0 means "always call this function" */
shots?: number): void;
export declare function RegisterServerOnGameEventStop(hook: game_event_stop, 
/** the number of times the function will be called, 0 means "always call this function" */
shots?: number): void;
export declare function RegisterServerOnLuaStateClose(hook: eluna_event_on_lua_state_close, 
/** the number of times the function will be called, 0 means "always call this function" */
shots?: number): void;
export declare function RegisterServerOnLuaStateOpen(hook: eluna_event_on_lua_state_open, 
/** the number of times the function will be called, 0 means "always call this function" */
shots?: number): void;
export declare function RegisterServerOnAreaTrigger(hook: trigger_event_on_trigger, 
/** the number of times the function will be called, 0 means "always call this function" */
shots?: number): void;
export declare function RegisterServerOnWheatherChange(hook: weather_event_on_change, 
/** the number of times the function will be called, 0 means "always call this function" */
shots?: number): void;
export declare function RegisterServerOnAuctionAdd(hook: auction_event_on_add, 
/** the number of times the function will be called, 0 means "always call this function" */
shots?: number): void;
export declare function RegisterServerOnAuctionRemove(hook: auction_event_on_remove, 
/** the number of times the function will be called, 0 means "always call this function" */
shots?: number): void;
export declare function RegisterServerOnAuctionSuccessful(hook: auction_event_on_successful, 
/** the number of times the function will be called, 0 means "always call this function" */
shots?: number): void;
export declare function RegisterServerOnAuctionExpire(hook: auction_event_on_expire, 
/** the number of times the function will be called, 0 means "always call this function" */
shots?: number): void;
export declare function RegisterServerOnOpenStateChange(hook: world_event_on_open_state_change, 
/** the number of times the function will be called, 0 means "always call this function" */
shots?: number): void;
export declare function RegisterServerOnShutdownInitiate(hook: world_event_on_shutdown_init, 
/** the number of times the function will be called, 0 means "always call this function" */
shots?: number): void;
export declare function RegisterServerOnShutdownCancel(hook: world_event_on_shutdown_cancel, 
/** the number of times the function will be called, 0 means "always call this function" */
shots?: number): void;
export declare function RegisterServerOnStartup(hook: world_event_on_startup, 
/** the number of times the function will be called, 0 means "always call this function" */
shots?: number): void;
export declare function RegisterServerOnShutdown(hook: world_event_on_shutdown, 
/** the number of times the function will be called, 0 means "always call this function" */
shots?: number): void;
export declare function RegisterServerOnMapCreate(hook: map_event_on_create, 
/** the number of times the function will be called, 0 means "always call this function" */
shots?: number): void;
export declare function RegisterServerOnMapDestroy(hook: map_event_on_destroy, 
/** the number of times the function will be called, 0 means "always call this function" */
shots?: number): void;
export declare function RegisterServerOnMapPlayerEnter(hook: map_event_on_player_enter, 
/** the number of times the function will be called, 0 means "always call this function" */
shots?: number): void;
export declare function RegisterServerOnMapPlayerLeave(hook: map_event_on_player_leave, 
/** the number of times the function will be called, 0 means "always call this function" */
shots?: number): void;
export declare function RegisterServerOnMapUpdate(hook: map_event_on_update, 
/** the number of times the function will be called, 0 means "always call this function" */
shots?: number): void;
export declare function RegisterServerOnDeleteGameObject(hook: world_event_on_delete_gameobject, 
/** the number of times the function will be called, 0 means "always call this function" */
shots?: number): void;
export declare function RegisterServerOnDeleteCreature(hook: world_event_on_delete_creature, 
/** the number of times the function will be called, 0 means "always call this function" */
shots?: number): void;
