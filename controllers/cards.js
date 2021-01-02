import Card from '../models/Card.js';

export const addCard = async (req, res, next) => {
  try {
    const dbCard = req.body;

    const data = await Card.create(dbCard);

    return res.status(201).send(data);
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
};

export const getCards = async (req, res, next) => {
  try {
    const data = await Card.find();

    return res.status(200).send(data);
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
};
