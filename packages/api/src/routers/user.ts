import { z } from "zod";
import { protectedProcedure, publicProcedure, router } from "../trpc";

export const userRouter = router({
  userHello: publicProcedure.input(z.string()).query(async (props) => {
    return `Hello, ${props.input}`;
  }),
  protect: protectedProcedure.query(() => {
    return "This is protected";
  }),
});
