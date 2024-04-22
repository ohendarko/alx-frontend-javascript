export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  let iteratorResult = reportWithIterator.next();
  while (!iteratorResult.done) {
    result += `${iteratorResult.value} | `;
    iteratorResult = reportWithIterator.next();
  }
  result = result.slice(0, -3);
  return result;
}
