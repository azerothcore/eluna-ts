/**
 * @noSelf
 */
export function RegisterServerOnPacketSendAny(
  /** opcode */
  entry: number,
  /** @noSelf **/
  hook: server_event_on_packet_send_any,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPacketEvent(
    entry,
    ServerEvents.SERVER_EVENT_ON_PACKET_SEND,
    (
      event: ServerEvents.SERVER_EVENT_ON_PACKET_SEND,
      packet: WorldPacket,
      player: Player,
    ) => hook(event, packet, player),
    shots,
  );
}

/**
 * @noSelf
 */
export function RegisterPacketOnPacketSendOne(
  /** opcode */
  entry: number,
  /** @noSelf **/
  hook: packet_event_on_packet_send_one,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPacketEvent(
    entry,
    PacketEvents.PACKET_EVENT_ON_PACKET_SEND,
    (
      event: PacketEvents.PACKET_EVENT_ON_PACKET_SEND,
      player: Player,
      packet: WorldPacket,
      result: boolean,
    ) => hook(event, packet, player),
    shots,
  );
}

/**
 * @noSelf
 */
export function RegisterServerOnPacketReceiveAny(
  /** opcode */
  entry: number,
  /** @noSelf **/
  hook: server_event_on_packet_receive_any,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPacketEvent(
    entry,
    ServerEvents.SERVER_EVENT_ON_PACKET_RECEIVE,
    (
      event: ServerEvents.SERVER_EVENT_ON_PACKET_RECEIVE,
      packet: WorldPacket,
      player: Player,
    ) => hook(event, packet, player),
    shots,
  );
}

/**
 * @noSelf
 */
export function RegisterPacketOnPacketReceiveOne(
  /** opcode */
  entry: number,
  /** @noSelf **/
  hook: packet_event_on_packet_receive_one,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots = 0,
) {
  RegisterPacketEvent(
    entry,
    PacketEvents.PACKET_EVENT_ON_PACKET_RECEIVE,
    (
      event: PacketEvents.PACKET_EVENT_ON_PACKET_RECEIVE,
      packet: WorldPacket,
      player: Player,
    ) => hook(event, packet, player),
    shots,
  );
}
