import * as sut from "./model";
import db from "./db";
jest.mock("./db", () => ({
  get: jest.fn(),
  set: jest.fn()
}));

afterEach(() => {
  jest.resetAllMocks();
});

describe("Adding todo", () => {
  it("adds a todo if it does not exist", async () => {
    const result = await sut.addTodo([], "plop");
    expect(result).toEqual(["plop"]);
  });

  it("does not add a todo if it exists", async () => {
    expect(db.set).not.toBeCalled();
    const result = await sut.addTodo(["plop"], "plop");
    expect(db.set).not.toBeCalled();
    expect(result).toEqual(["plop"]);
  });
});

describe("Removing todos", () => {
  it("removes a todo if it exists", async () => {
    const result = await sut.removeTodo(["plop"], "plop");
    expect(result).toEqual([]);
  });

  it("does nothing if todo does not exist", async () => {
    expect(db.set).not.toBeCalled();
    const result = await sut.removeTodo(["plop"], "plip");
    expect(db.set).not.toBeCalled();
    expect(result).toEqual(["plop"]);
  });
});
