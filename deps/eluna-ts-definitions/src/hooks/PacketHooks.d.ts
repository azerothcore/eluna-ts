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
