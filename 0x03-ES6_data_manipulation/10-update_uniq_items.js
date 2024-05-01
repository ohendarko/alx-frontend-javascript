export default function updateUniqueItems(grocery) {
  for (const [key, value] of grocery.entries()) {
    if (value === 1) {
      grocery.set(key, 100);
    }
  }
}
