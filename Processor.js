class Processor {
  static Process(data) {
    const Array = data.split("\r\n");
    let NewArray = [];
    Array.forEach((row) => {
      const NewRow = row.split(",");
      NewArray.push(NewRow);
    });
    return NewArray;
  }
}
module.exports = Processor;
