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
