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
