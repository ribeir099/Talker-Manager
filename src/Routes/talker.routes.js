const express = require('express');
const { readFile, writeFile } = require('../utils/file');
const validators = require('../middlewares');

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const talkers = await readFile();
    res.status(200).json(talkers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/search',
  validators.validateToken,
  async (req, res) => {
    try {
      const { q } = req.query;
      const talkers = await readFile();

      if (q) {
        const filteredTalkers = talkers.filter((element) => element.name.includes(q));
        return res.status(200).json(filteredTalkers);
      }
      res.status(200).json(talkers);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  });

router.get('/:id', async (req, res) => {
  try {
    const reqId = req.params.id;
    const talkers = await readFile();
    const talker = talkers.find(({ id }) => id === Number(reqId));

    if (!talker) {
      return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    }

    res.status(200).json(talker);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/',
  validators.validateToken,
  validators.validateTalker,
  async (req, res) => {
    try {
      const { name, age, talk } = req.body;
      const talkers = await readFile();

      const newTalker = {
        id: talkers[talkers.length - 1].id + 1,
        name,
        age,
        talk,
      };

      await writeFile([...talkers, newTalker]);

      res.status(201).json(newTalker);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  });

router.put('/:id',
  validators.validateToken,
  validators.validateTalker,
  async (req, res) => {
    try {
      const { id } = req.params;
      const { name, age, talk } = req.body;
      const talkers = await readFile();
      const index = talkers.findIndex((element) => element.id === Number(id));
      if (index < 0) {
        return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
      }
      talkers[index] = { id: Number(id), name, age, talk };
      await writeFile(talkers);
      res.status(200).json(talkers[index]);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  });

router.delete('/:id',
  validators.validateToken,
  async (req, res) => {
    try {
      const { id } = req.params;
      const talkers = await readFile();

      const filteredTalkers = talkers.filter((talker) => talker.id !== Number(id));
      await writeFile(filteredTalkers);

      res.status(204).end();
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  });

module.exports = router;