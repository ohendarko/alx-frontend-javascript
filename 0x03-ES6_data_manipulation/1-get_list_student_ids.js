export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  const idArray = arr.map((item) => item.id);
  return idArray;
}
