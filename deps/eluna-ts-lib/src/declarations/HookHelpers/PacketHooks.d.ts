export declare function RegisterServerOnPacketSendAny(
/** opcode */
entry: number, hook: server_event_on_packet_send_any,
/** the number of times the function will be called, 0 means "always call this function" */
shots?: number): void;
export declare function RegisterPacketOnPacketSendOne(
/** opcode */
entry: number, hook: packet_event_on_packet_send_one,
/** the number of times the function will be called, 0 means "always call this function" */
shots?: number): void;
export declare function RegisterServerOnPacketReceiveAny(
/** opcode */
entry: number, hook: server_event_on_packet_receive_any,
/** the number of times the function will be called, 0 means "always call this function" */
shots?: number): void;
export declare function RegisterPacketOnPacketReceiveOne(
/** opcode */
entry: number, hook: packet_event_on_packet_receive_one,
/** the number of times the function will be called, 0 means "always call this function" */
shots?: number): void;
