/**
 * @noSelf
 */
export function RegisterBattleGroundOnBGStart(
  /** @noSelf **/
  hook: bg_event_on_start,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterBGEvent(
    BGEvents.BG_EVENT_ON_START,
    (
      event: BGEvents.BG_EVENT_ON_START,
      bg: BattleGround,
      bgId: BattleGroundTypeId,
      instanceId: number,
    ) => hook(event, bg, bgId, instanceId),
    shots,
  );
}

/**
 * @noSelf
 */
export function RegisterBattleGroundOnBGCreate(
  /** @noSelf **/
  hook: bg_event_on_create,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterBGEvent(
    BGEvents.BG_EVENT_ON_CREATE,
    (
      event: BGEvents.BG_EVENT_ON_CREATE,
      bg: BattleGround,
      bgId: BattleGroundTypeId,
      instanceId: number,
    ) => hook(event, bg, bgId, instanceId),
    shots,
  );
}

/**
 * @noSelf
 */
export function RegisterBattleGroundOnBGDestroy(
  /** @noSelf **/
  hook: bg_event_on_pre_destroy,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterBGEvent(
    BGEvents.BG_EVENT_ON_PRE_DESTROY,
    (
      event: BGEvents.BG_EVENT_ON_PRE_DESTROY,
      bg: BattleGround,
      bgId: BattleGroundTypeId,
      instanceId: number,
    ) => hook(event, bg, bgId, instanceId),
    shots,
  );
}
