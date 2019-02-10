import { openDb } from "idb";
import { isoFormatDate } from "./date";

const TODOS = "Todos";

const dbPromise = openDb("daily-todo-store", 1, upgradeDB => {
  const store = upgradeDB.createObjectStore("daily-todo");
  store.put([], isoFormatDate());
  store.put([], TODOS);
});

const db = {
  getAll() {
    return dbPromise.then(db =>
      db
        .transaction("daily-todo")
        .objectStore("daily-todo")
        .getAll()
    );
  },
  get(key) {
    return dbPromise.then(db => {
      const transaction = db.transaction("daily-todo");
      if (Array.isArray(key)) {
        return Promise.all(
          key.map(i => transaction.objectStore("daily-todo").get(i))
        );
      } else {
        return transaction.objectStore("daily-todo").get(key);
      }
    });
  },
  set(key, val) {
    return dbPromise.then(db => {
      const tx = db.transaction("daily-todo", "readwrite");
      tx.objectStore("daily-todo").put(val, key);
      return tx.complete;
    });
  },
  import(data) {
    return dbPromise.then(db => {
      const tx = db.transaction("daily-todo", "readwrite");
      data.forEach(item => tx.objectStore("daily-todo").put(item, item.date));
      return tx.complete;
    });
  },
  delete(key) {
    return dbPromise.then(db => {
      const tx = db.transaction("daily-todo", "readwrite");
      tx.objectStore("daily-todo").delete(key);
      return tx.complete;
    });
  }
};

export default db;
export { TODOS };
