export function RegisterPlayerGossipOnGossipHello(
  menuId: number,
  hook: gossip_event_on_hello,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPlayerGossipEvent(
    menuId,
    GossipEvents.GOSSIP_EVENT_ON_HELLO,
    (
      event: GossipEvents.GOSSIP_EVENT_ON_HELLO,
      player: Player,
      object: GameObject | Creature | Item,
    ) => hook(event, player, object),
    shots,
  );
}

export function RegisterPlayerGossipOnGossipSelect(
  menuId: number,
  hook: gossip_event_on_select,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPlayerGossipEvent(
    menuId,
    GossipEvents.GOSSIP_EVENT_ON_SELECT,
    (
      event: GossipEvents.GOSSIP_EVENT_ON_SELECT,
      player: Player,
      object: GameObject | Creature | Item,
      sender: number,
      action: number,
      code: string,
    ) => hook(event, player, object, sender, action, code, menuId),
    shots,
  );
}

export function RegisterGameObjectGossipOnGossipHello(
  entry: number,
  hook: gossip_event_on_hello,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterGameObjectGossipEvent(
    entry,
    GossipEvents.GOSSIP_EVENT_ON_HELLO,
    (
      event: GossipEvents.GOSSIP_EVENT_ON_HELLO,
      player: Player,
      object: GameObject | Creature | Item,
    ) => hook(event, player, object),
    shots,
  );
}

export function RegisterGameObjectGossipOnGossipSelect(
  entry: number,
  hook: gossip_event_on_select,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterGameObjectGossipEvent(
    entry,
    GossipEvents.GOSSIP_EVENT_ON_SELECT,
    (
      event: GossipEvents.GOSSIP_EVENT_ON_SELECT,
      player: Player,
      object: GameObject | Creature | Item,
      sender: number,
      action: number,
      code: string,
    ) => hook(event, player, object, sender, action, code),
    shots,
  );
}

export function RegisterCreatureGossipOnGossipHello(
  entry: number,
  hook: gossip_event_on_hello,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterCreatureGossipEvent(
    entry,
    GossipEvents.GOSSIP_EVENT_ON_HELLO,
    (
      event: GossipEvents.GOSSIP_EVENT_ON_HELLO,
      player: Player,
      object: GameObject | Creature | Item,
    ) => hook(event, player, object),
    shots,
  );
}

export function RegisterCreatureGossipOnGossipSelect(
  entry: number,
  hook: gossip_event_on_select,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterCreatureGossipEvent(
    entry,
    GossipEvents.GOSSIP_EVENT_ON_SELECT,
    (
      event: GossipEvents.GOSSIP_EVENT_ON_SELECT,
      player: Player,
      object: GameObject | Creature | Item,
      sender: number,
      action: number,
      code: string,
    ) => hook(event, player, object, sender, action, code),
    shots,
  );
}

export function RegisterItemGossipOnGossipHello(
  entry: number,
  hook: gossip_event_on_hello,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterItemGossipEvent(
    entry,
    GossipEvents.GOSSIP_EVENT_ON_HELLO,
    (
      event: GossipEvents.GOSSIP_EVENT_ON_HELLO,
      player: Player,
      object: GameObject | Creature | Item,
    ) => hook(event, player, object),
    shots,
  );
}

export function RegisterItemGossipOnGossipSelect(
  entry: number,
  hook: gossip_event_on_select,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterItemGossipEvent(
    entry,
    GossipEvents.GOSSIP_EVENT_ON_SELECT,
    (
      event: GossipEvents.GOSSIP_EVENT_ON_SELECT,
      player: Player,
      object: GameObject | Creature | Item,
      sender: number,
      action: number,
      code: string,
    ) => hook(event, player, object, sender, action, code),
    shots,
  );
}
