/**
 * Function to add item to array. Will deduplicate items and sort by default.
 */
export const addItemToArray = <T>(
  array: T[],
  item: T,
  deduplicate: boolean = true,
  sort: boolean = true,
): T[] => {
  let nextArray = [...array, item];
  if (deduplicate) {
    nextArray = [...new Set(nextArray)];
  }

  if (sort) {
    nextArray.sort();
  }

  return nextArray;
};

/**
 * Function to remove item from array. Will sort items by default.
 * Only use for primitive arrays.
 */
export const removeItemFromArray = <T>(
  array: T[],
  item: T,
  sort: boolean = true,
): T[] => {
  const nextArray = [...array];
  const itemIndex = nextArray.findIndex(
    (arrayItem) => arrayItem === item,
  );
  if (itemIndex === -1) {
    return nextArray;
  }

  nextArray.splice(itemIndex, 1);
  if (sort) {
    nextArray.sort();
  }

  return nextArray;
};
