declare type server_event_on_packet_send_any = (
  event: ServerEvents.SERVER_EVENT_ON_PACKET_SEND,
  packet: WorldPacket,
  player: Player,
) => boolean | WorldPacket;

declare type packet_event_on_packet_send_one = (
  event: PacketEvents.PACKET_EVENT_ON_PACKET_SEND,
  packet: WorldPacket,
  player: Player,
) => boolean | WorldPacket;

declare type server_event_on_packet_receive_any = (
  event: ServerEvents.SERVER_EVENT_ON_PACKET_RECEIVE,
  packet: WorldPacket,
  player: Player,
) => boolean | WorldPacket;

declare type packet_event_on_packet_receive_one = (
  event: PacketEvents.PACKET_EVENT_ON_PACKET_RECEIVE,
  packet: WorldPacket,
  player: Player,
) => boolean | WorldPacket;


/**
 * Registers a [WorldPacket] event handler.
 *
 * @param entry: Opcode ID
 *
 * ```typescript
 * enum PacketEvents
 * {
 *     PACKET_EVENT_ON_PACKET_RECEIVE          =     5,       // (event, packet, player) - Player only if accessible. Can return false, newPacket
 *     PACKET_EVENT_ON_PACKET_RECEIVE_UNKNOWN  =     6,       // Not Implemented
 *     PACKET_EVENT_ON_PACKET_SEND             =     7,       // (event, packet, player) - Player only if accessible. Can return false, newPacket
 *     PACKET_EVENT_COUNT
 * };
 * ```
 */
 declare function RegisterPacketEvent(
  this: void,
  entry: number,
  event: PacketEvents.PACKET_EVENT_ON_PACKET_RECEIVE,
  func: HookFunctionNoSelf<packet_event_on_packet_receive_one>,
  shots?: number,
): (...args: any[]) => any;
declare function RegisterPacketEvent(
  this: void,
  entry: number,
  event: PacketEvents.PACKET_EVENT_ON_PACKET_SEND,
  func: HookFunctionNoSelf<packet_event_on_packet_send_one>,
  shots?: number,
): (...args: any[]) => any;

// declare function RegisterPacketEvent(
//   this: void,
//   entry: number,
//   event: PacketEvents.PACKET_EVENT_ON_PACKET_RECEIVE_UNKNOWN,
//   func: HookFunctionNoSelf<packet_event_on_packet_receive_unknown>,
//   shots?: number,
// ): (...args: any[]) => any;
