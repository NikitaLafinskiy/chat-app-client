import { setupServer } from "msw/node";
import { handlers } from "./handlers";

export const server = setupServer(...handlers);
beforeAll(() => {
  server.listen({
    onUnhandledRequest: "error",
  });
});
beforeEach(() => {
  server.resetHandlers();
});
afterAll(() => {
  server.close();
});
