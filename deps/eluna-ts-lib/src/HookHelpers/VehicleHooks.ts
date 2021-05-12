// /**
//  * @noSelf
//  */
// export function RegisterVehicleOnInstall(
//   /** @noSelf **/
//   hook: vehicle_event_on_install,
//   /** the number of times the function will be called, 0 means "always call this function" */
//   shots = 0,
// ) {
//   RegisterVehicleEvent(
//     VehicleEvents.VEHICLE_EVENT_ON_INSTALL,
//     (event: VehicleEvents.VEHICLE_EVENT_ON_INSTALL, vehicle: Vehicle) =>
//       hook(event, vehicle),
//     shots,
//   );
// }/**
//  * @noSelf
//  */

// export function RegisterVehicleOnUninstall(
//   /** @noSelf **/
//   hook: vehicle_event_on_uninstall,
//   /** the number of times the function will be called, 0 means "always call this function" */
//   shots = 0,
// ) {
//   RegisterVehicleEvent(
//     VehicleEvents.VEHICLE_EVENT_ON_UNINSTALL,
//     (event: VehicleEvents.VEHICLE_EVENT_ON_UNINSTALL, vehicle: Vehicle) =>
//       hook(event, vehicle),
//     shots,
//   );
// }/**
//  * @noSelf
//  */

// export function RegisterVehicleOnInstallAccessory(
//   /** @noSelf **/
//   hook: vehicle_event_on_install_accessory,
//   /** the number of times the function will be called, 0 means "always call this function" */
//   shots = 0,
// ) {
//   RegisterVehicleEvent(
//     VehicleEvents.VEHICLE_EVENT_ON_INSTALL_ACCESSORY,
//     (
//       event: VehicleEvents.VEHICLE_EVENT_ON_INSTALL_ACCESSORY,
//       vehicle: Vehicle,
//       accessory: Creature,
//     ) => hook(event, vehicle, accessory),
//     shots,
//   );
// }/**
//  * @noSelf
//  */

// export function RegisterVehicleOnAddPassenger(
//   /** @noSelf **/
//   hook: vehicle_event_on_add_passenger,
//   /** the number of times the function will be called, 0 means "always call this function" */
//   shots = 0,
// ) {
//   RegisterVehicleEvent(
//     VehicleEvents.VEHICLE_EVENT_ON_ADD_PASSENGER,
//     (
//       event: VehicleEvents.VEHICLE_EVENT_ON_ADD_PASSENGER,
//       vehicle: Vehicle,
//       passenger: Unit,
//       seatId: number,
//     ) => hook(event, vehicle, passenger, seatId),
//     shots,
//   );
// }/**
//  * @noSelf
//  */

// export function RegisterVehicleOnRemovePassenger(
//   /** @noSelf **/
//   hook: vehicle_event_on_remove_passenger,
//   /** the number of times the function will be called, 0 means "always call this function" */
//   shots = 0,
// ) {
//   RegisterVehicleEvent(
//     VehicleEvents.VEHICLE_EVENT_ON_REMOVE_PASSENGER,
//     (
//       event: VehicleEvents.VEHICLE_EVENT_ON_REMOVE_PASSENGER,
//       vehicle: Vehicle,
//       passenger: Unit,
//     ) => hook(event, vehicle, passenger),
//     shots,
//   );
// }
