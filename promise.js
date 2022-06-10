const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {

  let dataHasil = 0;

  const dataIXX = await promiseTheaterIXX();
  const dataVGC = await promiseTheaterVGC();

  let semuaData = [...dataIXX, ...dataVGC];

  semuaData.forEach(element => {
    if (element.hasil === emosi) {
      dataHasil++;
    }
  });
  return dataHasil;
};

// promiseOutput();
module.exports = {
  promiseOutput,
};
