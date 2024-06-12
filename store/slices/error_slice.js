export default function createErrorSlice(set, get) {
  return {
    newError: (message) => {
      process.stderr.write(`Error: ${message}\n`);
    },
  };
}
