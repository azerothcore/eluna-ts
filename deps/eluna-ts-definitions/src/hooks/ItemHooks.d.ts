declare type item_event_on_dummy_effect = (
  event: ItemEvents.ITEM_EVENT_ON_DUMMY_EFFECT,
  pCaster: WorldObject,
  spellId: number,
  effIndex: SpellEffIndex,
  pTarget: Item,
) => void;

declare type item_event_on_quest_accept = (
  event: ItemEvents.ITEM_EVENT_ON_QUEST_ACCEPT,
  pPlayer: Player,
  pItem: Item,
  pQuest: Quest,
) => boolean;

declare type item_event_on_use = (
  event: ItemEvents.ITEM_EVENT_ON_USE,
  player: Player,
  item: Item,
  target: GameObject | Item | Corpse | Unit | WorldObject,
) => boolean;

declare type item_event_on_expire = (
  event: ItemEvents.ITEM_EVENT_ON_EXPIRE,
  player: Player,
  itemdId: number,
) => boolean;

declare type item_event_on_remove = (
  event: ItemEvents.ITEM_EVENT_ON_REMOVE,
  pPlayer: Player,
  pItem: Item,
) => boolean;

/**
 * Registers an [Item] event handler.
 * ```typescript
 * enum ItemEvents
 * {
 *     ITEM_EVENT_ON_DUMMY_EFFECT                      = 1,    // (event, caster, spellid, effindex, item)
 *     ITEM_EVENT_ON_USE                               = 2,    // (event, player, item, target) - Can return false to stop the spell casting
 *     ITEM_EVENT_ON_QUEST_ACCEPT                      = 3,    // (event, player, item, quest) - Can return true
 *     ITEM_EVENT_ON_EXPIRE                            = 4,    // (event, player, itemid) - Can return true
 *     ITEM_EVENT_ON_REMOVE                            = 5,    // (event, player, item) - Can return true
 *     ITEM_EVENT_COUNT
 * };
 * ```
 */
 declare function RegisterItemEvent(
  this: void,
  id: number,
  event: ItemEvents.ITEM_EVENT_ON_DUMMY_EFFECT,
  func: HookFunctionNoSelf<item_event_on_dummy_effect>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterItemEvent(
  this: void,
  id: number,
  event: ItemEvents.ITEM_EVENT_ON_USE,
  func: HookFunctionNoSelf<item_event_on_use>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterItemEvent(
  this: void,
  id: number,
  event: ItemEvents.ITEM_EVENT_ON_QUEST_ACCEPT,
  func: HookFunctionNoSelf<item_event_on_quest_accept>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterItemEvent(
  this: void,
  id: number,
  event: ItemEvents.ITEM_EVENT_ON_EXPIRE,
  func: HookFunctionNoSelf<item_event_on_expire>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterItemEvent(
  this: void,
  id: number,
  event: ItemEvents.ITEM_EVENT_ON_REMOVE,
  func: HookFunctionNoSelf<item_event_on_remove>,
  shots?: number,
): (...args: any[]) => any;
