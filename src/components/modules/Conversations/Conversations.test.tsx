import { render, screen } from "@testing-library/react";
import { Conversations, Messages } from "components/modules";
import { renderWithProviders } from "utils/test/TestHelpers";
import user from "@testing-library/user-event";
import { mockConversationsArray, mockMessages } from "mocks/data";
import { server } from "mocks/server";
import "intersection-observer";
import { ChatServices } from "services/chat/ChatServices";
import { rest } from "msw";
import { API_URL } from "../../../http";
import { store } from "store";
import { ChatActions } from "store/chat/ActionCreators";
import { chatSlice } from "store/chat/ChatSlice";

describe("Conversations", () => {
  describe("Conversations do NOT exist", () => {
    it("Renders a message if no conversations exist", () => {
      render(<Conversations conversations={[]} />);

      expect(
        screen.getByText("Add a friend to start chatting!")
      ).toBeInTheDocument();
    });
  });

  describe("Conversations exist", () => {
    beforeEach(async () => {
      renderWithProviders(
        <>
          <Conversations conversations={mockConversationsArray} />
          <Messages />
        </>
      );
      store.dispatch(
        chatSlice.actions.setConversations(mockConversationsArray)
      );
    });

    it("Renders conversations if they exist", () => {
      expect(screen.getByText("mockUsername2")).toBeInTheDocument();
    });

    it("Loads messages when a conversation is clicked", async () => {
      const conv = screen.getByText(/mockUsername2/i);
      server.use(
        rest.post(`${API_URL}/chat/messages/0`, (req, res, ctx) => {
          return res(ctx.json({ messages: mockMessages }));
        })
      );

      // user.click(conv);
      const res = await ChatServices.getMessages("mockID1", 0);

      store.dispatch(
        chatSlice.actions.setCurrentConversation(mockConversationsArray[0])
      );
      store.dispatch(chatSlice.actions.updateManyMessages(res.data.messages));
      console.log(store.getState());
      expect(await screen.findByText("How is your day")).ToBeInTheDocument();
    });
  });
});
