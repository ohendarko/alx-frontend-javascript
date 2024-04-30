export default function getStudentIdsSum(list) {
  const idList = list.map((item) => item.id);
  return idList.reduce((previous, next) => previous + next);
}
