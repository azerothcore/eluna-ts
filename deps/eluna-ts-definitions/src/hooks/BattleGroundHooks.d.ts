declare type bg_event_on_start = (
  event: BGEvents.BG_EVENT_ON_START,
  bg: BattleGround,
  bgId: BattleGroundTypeId,
  instanceId: number,
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
