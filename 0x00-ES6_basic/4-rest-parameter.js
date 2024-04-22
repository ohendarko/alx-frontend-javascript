export default function returnHowManyArguments(...args) {
  let numofargs = 0;
  for (let i = 0; i < args.length; i += 1) {
    numofargs += 1;
  }
  return numofargs;
}
