
/**
 * @noSelf
 */
export function RegisterGroupOnAddMember(
    /** @noSelf **/
    hook: group_event_on_member_add,
    /** the number of times the function will be called, 0 means "always call this function" */
    shots = 0,
) {
    RegisterGroupEvent(
        GroupEvents.GROUP_EVENT_ON_MEMBER_ADD,
        (event:GroupEvents.GROUP_EVENT_ON_MEMBER_ADD,group:Group,guid:number) => hook(event,group,guid),
        shots
    )
};

/**
 * @noSelf
 */
export function RegisterGroupOnInviteMember(
    /** @noSelf **/
    hook: group_event_on_member_invite,
    /** the number of times the function will be called, 0 means "always call this function" */
    shots = 0,
) {
    RegisterGroupEvent(
        GroupEvents.GROUP_EVENT_ON_MEMBER_INVITE,
        (event:GroupEvents.GROUP_EVENT_ON_MEMBER_INVITE,group:Group,guid:number) => hook(event,group,guid),
        shots
    )
};

/**
 * @noSelf
 */
export function RegisterGroupOnRemoveMember(
    /** @noSelf **/
    hook: group_event_on_member_remove,
    /** the number of times the function will be called, 0 means "always call this function" */
    shots = 0,
) {
    RegisterGroupEvent(
        GroupEvents.GROUP_EVENT_ON_MEMBER_REMOVE,
        (event:GroupEvents.GROUP_EVENT_ON_MEMBER_REMOVE,group:Group,guid:number,method:number) => hook(event,group,guid,method),
        shots
    )
};

/**
 * @noSelf
 */
export function RegisterGroupOnChangeLeader(
    /** @noSelf **/
    hook: group_event_on_leader_change,
    /** the number of times the function will be called, 0 means "always call this function" */
    shots = 0,
) {
    RegisterGroupEvent(
        GroupEvents.GROUP_EVENT_ON_LEADER_CHANGE,
        (event:GroupEvents.GROUP_EVENT_ON_LEADER_CHANGE,group:Group,newLeaderGuid:number,oldLeaderGuid:number) => hook(event,group,newLeaderGuid,oldLeaderGuid),
        shots
    )
};

/**
 * @noSelf
 */
export function RegisterGroupOnDisband(
    /** @noSelf **/
    hook: group_event_on_disband,
    /** the number of times the function will be called, 0 means "always call this function" */
    shots = 0,
) {
    RegisterGroupEvent(
        GroupEvents.GROUP_EVENT_ON_DISBAND,
        (event:GroupEvents.GROUP_EVENT_ON_DISBAND,group:Group) => hook(event,group),
        shots
    )
};

/**
 * @noSelf
 */
export function RegisterGroupOnCreate(
    /** @noSelf **/
    hook: group_event_on_create,
    /** the number of times the function will be called, 0 means "always call this function" */
    shots = 0,
) {
    RegisterGroupEvent(
        GroupEvents.GROUP_EVENT_ON_CREATE,
        (event:GroupEvents.GROUP_EVENT_ON_CREATE,group:Group,leaderGuid:number,groupType:GroupType) => hook(event,group,leaderGuid,groupType),
        shots
    )
};
