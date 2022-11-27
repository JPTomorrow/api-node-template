interface AsyncCache<T> {
  items: T[];
}

const stringCache: AsyncCache<string> = {
  items: ["c", "b", "c"],
};

/**
 * get the cache
 * @returns {Promise<AsyncCache<string>>}
 */
const getCache = async (): Promise<AsyncCache<string>> =>
  new Promise(async (resolve, reject) => {
    try {
      resolve(stringCache);
    } catch (error) {
      reject(error);
    }
  });

/**
 * add an item to the cache
 * @param item
 */
const add = async (item: string) => {
  const cache = await getCache();
  cache.items.push(item);
};

/**
 * remove an item from the cache
 * @param item
 */
const remove = async (item: string) => {
  const cache = await getCache();
  const index = cache.items.indexOf(item, 0);
  if (index > -1) {
    cache.items.splice(index, 1);
  }
};

export { AsyncCache, getCache, add, remove };

/* USAGE

type GatedParameter = 1 | 2 | 3;

function gatedFunction(param: GatedParameter) {
  console.log(param);
}

///
/// ASYNC PRACTICE
///

const randomNumberPromise = async (): Promise<number> =>
  new Promise(async (resolve, reject) => {
    try {
      resolve(Math.random() + 100);
    } catch (error) {
      reject(error);
    }
  });

// you can use a promise mutiple times to get the result because it has a pending, error, and result state.
// async promises can be used to preserve state
const promise = randomNumberPromise();

(async function () {
  const r1 = await promise;
  const r2 = await promise;
  console.log(`r1: ${r1}, r2: ${r2}`);
})();

// async cache
import { getCache, add, remove } from "./AsyncCache";

(async function () {
  const ref1 = await getCache();
  const ref2 = await getCache();
  await add("d");
  await add("e");
  await remove("f");
  console.log(`${ref1.items}, ${ref2.items}`);
})();
*/
