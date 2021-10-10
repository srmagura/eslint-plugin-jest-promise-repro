it("handles an error", async () => {
  const p = Promise.reject(new Error("test error")).then(undefined, (e) => {
    expect(e).toBeInstanceOf(Error);
    return "handled";
  });

  expect(await p).toBe("handled");
});
