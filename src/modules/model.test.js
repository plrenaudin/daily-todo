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
  it("adds a todo if it does not exist", () => {
    const result = sut.addTodo([], "plop");
    expect(result).toEqual(["plop"]);
  });

  it("does not add a todo if it exists", () => {
    expect(db.set).not.toBeCalled();
    const result = sut.addTodo(["plop"], "plop");
    expect(db.set).not.toBeCalled();
    expect(result).toEqual(["plop"]);
  });
});

describe("Removing todos", () => {
  it("removes a todo if it exists", () => {
    const result = sut.removeTodo(["plop"], "plop");
    expect(result).toEqual([]);
  });

  it("does nothing if todo does not exist", () => {
    expect(db.set).not.toBeCalled();
    const result = sut.removeTodo(["plop"], "plip");
    expect(db.set).not.toBeCalled();
    expect(result).toEqual(["plop"]);
  });
});

describe("Toggling todo", () => {
  it("adds a todo on empty day", () => {
    const result = sut.toggleTodo({}, "hello", "2019-02-24");
    expect(result).toEqual({ "2019-02-24": ["hello"] });
    expect(db.set.mock.calls[0][0]).toEqual("2019-02-24");
    expect(db.set.mock.calls[0][1]).toEqual(["hello"]);
  });
  it("adds a second todo", () => {
    const result = sut.toggleTodo(
      { "2019-02-24": ["hello"] },
      "world",
      "2019-02-24"
    );
    expect(result).toEqual({ "2019-02-24": ["hello", "world"] });
    expect(db.set.mock.calls[0][0]).toEqual("2019-02-24");
    expect(db.set.mock.calls[0][1]).toEqual(["hello", "world"]);
  });
  it("removes a todo", () => {
    const result = sut.toggleTodo(
      { "2019-02-24": ["hello"] },
      "hello",
      "2019-02-24"
    );
    expect(result).toEqual({ "2019-02-24": [] });
    expect(db.set.mock.calls[0][0]).toEqual("2019-02-24");
    expect(db.set.mock.calls[0][1]).toEqual([]);
  });
});
