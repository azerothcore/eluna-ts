/**
 * @noSelf
 */
export function RegisterPlayerGossipOnGossipHello(
  menuId: number,
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterPlayerGossipOnGossipSelect(
  menuId: number,
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterGameObjectGossipOnGossipHello(
  entry: number,
  /** @noSelf **/
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

/**
   * @noSelf
   */
export function RegisterGameObjectGossipOnGossipSelect(
  entry: number,
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterCreatureGossipOnGossipHello(
  entry: number,
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterCreatureGossipOnGossipSelect(
  entry: number,
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterItemGossipOnGossipHello(
  entry: number,
  /** @noSelf **/
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

/**
 * @noSelf
 */
export function RegisterItemGossipOnGossipSelect(
  entry: number,
  /** @noSelf **/
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
