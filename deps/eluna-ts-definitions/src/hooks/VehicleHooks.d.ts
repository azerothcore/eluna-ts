declare type vehicle_event_on_install = (
  event: VehicleEvents.VEHICLE_EVENT_ON_INSTALL,
  vehicle: Vehicle,
) => void;

declare type vehicle_event_on_uninstall = (
  event: VehicleEvents.VEHICLE_EVENT_ON_UNINSTALL,
  vehicle: Vehicle,
) => void;

declare type vehicle_event_on_install_accessory = (
  event: VehicleEvents.VEHICLE_EVENT_ON_INSTALL_ACCESSORY,
  vehicle: Vehicle,
  accessory: Creature,
) => void;

declare type vehicle_event_on_add_passenger = (
  event: VehicleEvents.VEHICLE_EVENT_ON_ADD_PASSENGER,
  vehicle: Vehicle,
  passenger: Unit,
  seatId: number,
) => void;

declare type vehicle_event_on_remove_passenger = (
  event: VehicleEvents.VEHICLE_EVENT_ON_REMOVE_PASSENGER,
  vehicle: Vehicle,
  passenger: Unit,
) => void;
