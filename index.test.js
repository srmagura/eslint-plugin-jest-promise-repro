it("handles an error", async () => {
  jest.useFakeTimers();

  const p = Promise.reject(new Error("test error")).then(undefined, (e) => {
    expect(e).toBeInstanceOf(Error);
    return "handled";
  });
  jest.runAllTimers();

  expect(await p).toBe("handled");
});
