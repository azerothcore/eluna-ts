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
