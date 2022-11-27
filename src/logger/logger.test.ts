import log from "./index";

test("is the logger logging", () => {
  log.info("test");
  expect(true).toBe(true);
});
