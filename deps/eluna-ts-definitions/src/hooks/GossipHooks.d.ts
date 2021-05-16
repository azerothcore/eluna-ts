declare type gossip_event_on_hello = (
  event: GossipEvents.GOSSIP_EVENT_ON_HELLO,
  player: Player,
  object: GameObject | Creature | Item,
) => boolean;

/**
 * Can return false to do the default action
 */
declare type gossip_event_on_select = (
  event: GossipEvents.GOSSIP_EVENT_ON_SELECT,
  player: Player,
  object: GameObject | Creature | Item | Player,
  sender: number,
  action: number,
  code: string,
  /** menuId is only for Player Gossip */
  menuId?: number,
) => boolean;


/**
 * Registers a [Creature] gossip event handler.
 * ```typescript
 * enum GossipEvents
 * {
 *     GOSSIP_EVENT_ON_HELLO                           = 1,    // (event, player, object) - Object is the Creature/GameObject/Item. Can return false to do default action. For item gossip can return false to stop spell casting.
 *     GOSSIP_EVENT_ON_SELECT                          = 2,    // (event, player, object, sender, intid, code, menu_id) - Object is the Creature/GameObject/Item/Player, menu_id is only for player gossip. Can return false to do default action.
 *     GOSSIP_EVENT_COUNT
 * };
 * ```
 */
declare function RegisterCreatureGossipEvent(
  this:void,
  entry: number,
  event: GossipEvents.GOSSIP_EVENT_ON_HELLO,
  func: HookFunctionNoSelf<gossip_event_on_hello>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterCreatureGossipEvent(
  this:void,
  entry: number,
  event: GossipEvents.GOSSIP_EVENT_ON_SELECT,
  func: HookFunctionNoSelf<gossip_event_on_select>,
  shots?: number,
): (...args: any[]) => any;


/**
 * Registers a [GameObject] gossip event handler.
 * ```typescript
 * enum GossipEvents
 * {
 *     GOSSIP_EVENT_ON_HELLO                           = 1,    // (event, player, object) - Object is the Creature/GameObject/Item. Can return false to do default action. For item gossip can return false to stop spell casting.
 *     GOSSIP_EVENT_ON_SELECT                          = 2,    // (event, player, object, sender, intid, code, menu_id) - Object is the Creature/GameObject/Item/Player, menu_id is only for player gossip. Can return false to do default action.
 *     GOSSIP_EVENT_COUNT
 * };
 * ```
 */
declare function RegisterGameObjectGossipEvent(
  this:void,
  entry: number,
  event: GossipEvents.GOSSIP_EVENT_ON_HELLO,
  func: HookFunctionNoSelf<gossip_event_on_hello>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterGameObjectGossipEvent(
  this:void,
  entry: number,
  event: GossipEvents.GOSSIP_EVENT_ON_SELECT,
  func: HookFunctionNoSelf<gossip_event_on_select>,
  shots?: number,
): (...args: any[]) => any;

/**
 * Registers an [Item] gossip event handler.
 * ```typescript
 * enum GossipEvents
 * {
 *     GOSSIP_EVENT_ON_HELLO                           = 1,    // (event, player, object) - Object is the Creature/GameObject/Item. Can return false to do default action. For item gossip can return false to stop spell casting.
 *     GOSSIP_EVENT_ON_SELECT                          = 2,    // (event, player, object, sender, intid, code, menu_id) - Object is the Creature/GameObject/Item/Player, menu_id is only for player gossip. Can return false to do default action.
 *     GOSSIP_EVENT_COUNT
 * };
 * ```
 */
declare function RegisterItemGossipEvent(
  this:void,
  id: number,
  event: GossipEvents.GOSSIP_EVENT_ON_HELLO,
  func: HookFunctionNoSelf<gossip_event_on_hello>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterItemGossipEvent(
  this:void,
  id: number,
  event: GossipEvents.GOSSIP_EVENT_ON_SELECT,
  func: HookFunctionNoSelf<gossip_event_on_select>,
  shots?: number,
): (...args: any[]) => any;

/**
 * Registers a [Player] gossip event handler.
 * Note that you can not use `GOSSIP_EVENT_ON_HELLO` with this hook. It does nothing since players dont have an "on hello".
 * ```typescript
 * enum GossipEvents
 * {
 *     GOSSIP_EVENT_ON_HELLO                           = 1,    // (event, player, object) - Object is the Creature/GameObject/Item. Can return false to do default action. For item gossip can return false to stop spell casting.
 *     GOSSIP_EVENT_ON_SELECT                          = 2,    // (event, player, object, sender, intid, code, menu_id) - Object is the Creature/GameObject/Item/Player, menu_id is only for player gossip. Can return false to do default action.
 *     GOSSIP_EVENT_COUNT
 * };
 * ```
 */
 declare function RegisterPlayerGossipEvent(
  this:void,
  menu_id: number,
  event: GossipEvents.GOSSIP_EVENT_ON_HELLO,
  func: HookFunctionNoSelf<gossip_event_on_hello>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterPlayerGossipEvent(
  this:void,
  menu_id: number,
  event: GossipEvents.GOSSIP_EVENT_ON_SELECT,
  func: HookFunctionNoSelf<gossip_event_on_select>,
  shots?: number,
): (...args: any[]) => any;

