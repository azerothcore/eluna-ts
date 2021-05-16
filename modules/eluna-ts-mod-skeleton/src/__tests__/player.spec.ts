import { createMock, DeepMocked } from "@golevelup/ts-jest";
import { OnPlayerLogin, PlayerChat } from "../player";

jest.mock("@azerothcore/eluna-ts-lib", () => ({
  RegisterPlayerOnChat: jest.fn(),
  RegisterPlayerOnLogin: jest.fn(),
}));

describe("Test player file", () => {
  let player: DeepMocked<Player>;

  beforeAll(() => {
    player = createMock<Player>();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Test arrow function", () => {
    OnPlayerLogin(PlayerEvents.PLAYER_EVENT_ON_LOGIN, player);
    expect(player.SendChatMessageToPlayer).toHaveBeenCalledTimes(1);
  });

  it("Test class", () => {
    const playerChat = new PlayerChat("First Message");

    expect(playerChat).toBeDefined();

    playerChat.OnPlayerChat(
      PlayerEvents.PLAYER_EVENT_ON_CHAT,
      player,
      "test",
      ChatMsg.CHAT_MSG_WHISPER,
      Language.LANG_UNIVERSAL,
    );

    expect(player.SendChatMessageToPlayer).toHaveBeenCalledTimes(1);
    expect(playerChat.previousMessage).toEqual("test");
  });
});
