declare type group_event_on_member_add = (
  event: GroupEvents.GROUP_EVENT_ON_MEMBER_ADD,
  group: Group,
  guid: number,
) => void;

declare type group_event_on_member_invite = (
  event: GroupEvents.GROUP_EVENT_ON_MEMBER_INVITE,
  group: Group,
  guid: number,
) => void;

declare type group_event_on_member_remove = (
  event: GroupEvents.GROUP_EVENT_ON_MEMBER_REMOVE,
  group: Group,
  guid: number,
  method: number,
) => void;

declare type group_event_on_leader_change = (
  event: GroupEvents.GROUP_EVENT_ON_LEADER_CHANGE,
  group: Group,
  newLeaderGuid: number,
  oldLeaderGuid: number,
) => void;

declare type group_event_on_disband = (
  event: GroupEvents.GROUP_EVENT_ON_DISBAND,
  group: Group,
) => void;

declare type group_event_on_create = (
  event: GroupEvents.GROUP_EVENT_ON_CREATE,
  group: Group,
  leaderGuid: number,
  groupType: GroupType,
) => void;


/**
 * Registers a [Group] event handler.
 * ```typescript
 * enum GroupEvents
 * {
 *     // Group
 *     GROUP_EVENT_ON_MEMBER_ADD               =     1,       // (event, group, guid)
 *     GROUP_EVENT_ON_MEMBER_INVITE            =     2,       // (event, group, guid)
 *     GROUP_EVENT_ON_MEMBER_REMOVE            =     3,       // (event, group, guid, method, kicker, reason)
 *     GROUP_EVENT_ON_LEADER_CHANGE            =     4,       // (event, group, newLeaderGuid, oldLeaderGuid)
 *     GROUP_EVENT_ON_DISBAND                  =     5,       // (event, group)
 *     GROUP_EVENT_ON_CREATE                   =     6,       // (event, group, leaderGuid, groupType)
 *     GROUP_EVENT_COUNT
 * };
 * ```
 */
 declare function RegisterGroupEvent(
  this: void,
  event: GroupEvents.GROUP_EVENT_ON_MEMBER_ADD,
  func: HookFunctionNoSelf<group_event_on_member_add>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterGroupEvent(
  this: void,
  event: GroupEvents.GROUP_EVENT_ON_MEMBER_INVITE,
  func: HookFunctionNoSelf<group_event_on_member_invite>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterGroupEvent(
  this: void,
  event: GroupEvents.GROUP_EVENT_ON_MEMBER_REMOVE,
  func: HookFunctionNoSelf<group_event_on_member_remove>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterGroupEvent(
  this: void,
  event: GroupEvents.GROUP_EVENT_ON_LEADER_CHANGE,
  func: HookFunctionNoSelf<group_event_on_leader_change>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterGroupEvent(
  this: void,
  event: GroupEvents.GROUP_EVENT_ON_DISBAND,
  func: HookFunctionNoSelf<group_event_on_disband>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterGroupEvent(
  this: void,
  event: GroupEvents.GROUP_EVENT_ON_CREATE,
  func: HookFunctionNoSelf<group_event_on_create>,
  shots?: number,
): (...args: any[]) => any;
