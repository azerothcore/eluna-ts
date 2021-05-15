export function RegisterGroupOnAddMember(
  hook: group_event_on_member_add,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterGroupEvent(
    GroupEvents.GROUP_EVENT_ON_MEMBER_ADD,
    (
      event: GroupEvents.GROUP_EVENT_ON_MEMBER_ADD,
      group: Group,
      guid: number,
    ) => hook(event, group, guid),
    shots,
  );
}

export function RegisterGroupOnInviteMember(
  hook: group_event_on_member_invite,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterGroupEvent(
    GroupEvents.GROUP_EVENT_ON_MEMBER_INVITE,
    (
      event: GroupEvents.GROUP_EVENT_ON_MEMBER_INVITE,
      group: Group,
      guid: number,
    ) => hook(event, group, guid),
    shots,
  );
}

export function RegisterGroupOnRemoveMember(
  hook: group_event_on_member_remove,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterGroupEvent(
    GroupEvents.GROUP_EVENT_ON_MEMBER_REMOVE,
    (
      event: GroupEvents.GROUP_EVENT_ON_MEMBER_REMOVE,
      group: Group,
      guid: number,
      method: number,
    ) => hook(event, group, guid, method),
    shots,
  );
}

export function RegisterGroupOnChangeLeader(
  hook: group_event_on_leader_change,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterGroupEvent(
    GroupEvents.GROUP_EVENT_ON_LEADER_CHANGE,
    (
      event: GroupEvents.GROUP_EVENT_ON_LEADER_CHANGE,
      group: Group,
      newLeaderGuid: number,
      oldLeaderGuid: number,
    ) => hook(event, group, newLeaderGuid, oldLeaderGuid),
    shots,
  );
}

export function RegisterGroupOnDisband(
  hook: group_event_on_disband,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterGroupEvent(
    GroupEvents.GROUP_EVENT_ON_DISBAND,
    (event: GroupEvents.GROUP_EVENT_ON_DISBAND, group: Group) =>
      hook(event, group),
    shots,
  );
}

export function RegisterGroupOnCreate(
  hook: group_event_on_create,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterGroupEvent(
    GroupEvents.GROUP_EVENT_ON_CREATE,
    (
      event: GroupEvents.GROUP_EVENT_ON_CREATE,
      group: Group,
      leaderGuid: number,
      groupType: GroupType,
    ) => hook(event, group, leaderGuid, groupType),
    shots,
  );
}
