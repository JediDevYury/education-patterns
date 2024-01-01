// https://learn.javascript.ru/iterable

export const iterator = {
  collection: Collection,
  getNext() {},

  hasMore() {},
};

const Collection = {};

while (iterator.hasMore()) {
  const currentItem = iterator.getNext();
}
