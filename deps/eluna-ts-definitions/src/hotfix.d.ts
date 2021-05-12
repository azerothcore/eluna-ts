// Unused in Eluna
declare const enum VehicleEvents {
  VEHICLE_EVENT_ON_INSTALL = 1, // (event, vehicle)
  VEHICLE_EVENT_ON_UNINSTALL = 2, // (event, vehicle)
  // UNUSED                               =     3,    // (event, vehicle)
  VEHICLE_EVENT_ON_INSTALL_ACCESSORY = 4, // (event, vehicle, creature)
  VEHICLE_EVENT_ON_ADD_PASSENGER = 5, // (event, vehicle, unit, seatId)
  VEHICLE_EVENT_ON_REMOVE_PASSENGER = 6, // (event, vehicle, unit)
}
