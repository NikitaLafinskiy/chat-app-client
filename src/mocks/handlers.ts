import { rest } from "msw";
import { API_URL } from "../http";
import { mockMessages } from "./data";

export const handlers = [
  rest.get("*", (req, res, ctx) => {
    return res(ctx.status(500), ctx.json("Add an request handler"));
  }),
];
