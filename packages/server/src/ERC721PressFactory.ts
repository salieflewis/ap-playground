import { ponder } from "@/generated";

ponder.on("ERC721PressFactory:Create721Press", async ({ event, context }) => {
  console.log(event.params);
});

ponder.on(
  "ERC721PressFactory:DatabaseImplementationSet",
  async ({ event, context }) => {
    console.log(event.params);
  }
);
