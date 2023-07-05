const fs = require('fs').promises;
const path = require('path');

const talkersPath = path.resolve(__dirname, '../talker.json');

const readFile = async () => {
  try {
    const data = await fs.readFile(talkersPath);
    return JSON.parse(data);
  } catch (error) {
    console.error(`Arquivo não pôde ser lido: ${error}`);
  }
};

const writeFile = async (objeto) => {
  try {
    const jsonObject = JSON.stringify(objeto);
    await fs.writeFile(talkersPath, jsonObject);
  } catch (error) {
    console.error(`Arquivo não pôde ser editado: ${error}`);
  }
};

module.exports = {
  readFile,
  writeFile,
};