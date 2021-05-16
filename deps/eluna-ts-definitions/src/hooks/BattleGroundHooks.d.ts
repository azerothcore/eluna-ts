declare type bg_event_on_start = (
  event: BGEvents.BG_EVENT_ON_START,
  bg: BattleGround,
  bgId: BattleGroundTypeId,
  instanceId: number,
) => void;

declare type bg_event_on_end = (
  event: BGEvents.BG_EVENT_ON_END,
  bg: BattleGround,
  bgId: BattleGroundTypeId,
  instanceId: number,
  winner: Team,
) => void;

declare type bg_event_on_create = (
  event: BGEvents.BG_EVENT_ON_CREATE,
  bg: BattleGround,
  bgId: BattleGroundTypeId,
  instanceId: number,
) => void;

declare type bg_event_on_pre_destroy = (
  event: BGEvents.BG_EVENT_ON_PRE_DESTROY,
  bg: BattleGround,
  bgId: BattleGroundTypeId,
  instanceId: number,
) => void;


/**
 * Registers a [BattleGround] event handler.
 * ```typescript
 * enum BGEvents
 * {
 *     BG_EVENT_ON_START                               = 1,    // (event, bg, bgId, instanceId) - Needs to be added to TC
 *     BG_EVENT_ON_END                                 = 2,    // (event, bg, bgId, instanceId, winner) - Needs to be added to TC
 *     BG_EVENT_ON_CREATE                              = 3,    // (event, bg, bgId, instanceId) - Needs to be added to TC
 *     BG_EVENT_ON_PRE_DESTROY                         = 4,    // (event, bg, bgId, instanceId) - Needs to be added to TC
 *     BG_EVENT_COUNT
 * };
 * ```
 */
declare function RegisterBGEvent(
  this: void,
  event: BGEvents.BG_EVENT_ON_START,
  func: HookFunctionNoSelf<bg_event_on_start>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterBGEvent(
  this: void,
  event: BGEvents.BG_EVENT_ON_END,
  func: HookFunctionNoSelf<bg_event_on_end>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterBGEvent(
  this: void,
  event: BGEvents.BG_EVENT_ON_CREATE,
  func: HookFunctionNoSelf<bg_event_on_create>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterBGEvent(
  this: void,
  event: BGEvents.BG_EVENT_ON_PRE_DESTROY,
  func: HookFunctionNoSelf<bg_event_on_pre_destroy>,
  shots?: number,
): (...args: any[]) => any;
