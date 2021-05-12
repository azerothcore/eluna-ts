/**
 * @noSelf
 */
export function RegisterItemOnDummyEffect(
  entry: number,
  /** @noSelf **/
  hook: item_event_on_dummy_effect,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterItemEvent(
    entry,
    ItemEvents.ITEM_EVENT_ON_DUMMY_EFFECT,
    (
      event: ItemEvents.ITEM_EVENT_ON_DUMMY_EFFECT,
      pCaster: WorldObject,
      spellId: number,
      effIndex: SpellEffIndex,
      pTarget: Item,
    ) => hook(event, pCaster, spellId, effIndex, pTarget),
    shots,
  );
}

/**
 * @noSelf
 */
export function RegisterItemOnQuestAccept(
  entry: number,
  /** @noSelf **/
  hook: item_event_on_quest_accept,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterItemEvent(
    entry,
    ItemEvents.ITEM_EVENT_ON_QUEST_ACCEPT,
    (
      event: ItemEvents.ITEM_EVENT_ON_QUEST_ACCEPT,
      pPlayer: Player,
      pItem: Item,
      pQuest: Quest,
    ) => hook(event, pPlayer, pItem, pQuest),
    shots,
  );
}

/**
 * @noSelf
 */
export function RegisterItemOnItemUse(
  entry: number,
  /** @noSelf **/
  hook: item_event_on_use,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterItemEvent(
    entry,
    ItemEvents.ITEM_EVENT_ON_USE,
    (
      event: ItemEvents.ITEM_EVENT_ON_USE,
      player: Player,
      item: Item,
      target: GameObject | Item | Corpse | Unit | WorldObject,
    ) => hook(event, player, item, target),
    shots,
  );
}

/**
 * @noSelf
 */
export function RegisterItemOnExpire(
  entry: number,
  /** @noSelf **/
  hook: item_event_on_expire,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterItemEvent(
    entry,
    ItemEvents.ITEM_EVENT_ON_EXPIRE,
    (event: ItemEvents.ITEM_EVENT_ON_EXPIRE, player: Player, itemdId: number) =>
      hook(event, player, itemdId),
    shots,
  );
}

/**
 * @noSelf
 */
export function RegisterItemOnRemove(
  entry: number,
  /** @noSelf **/
  hook: item_event_on_remove,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterItemEvent(
    entry,
    ItemEvents.ITEM_EVENT_ON_REMOVE,
    (event: ItemEvents.ITEM_EVENT_ON_REMOVE, pPlayer: Player, pItem: Item) =>
      hook(event, pPlayer, pItem),
    shots,
  );
}
