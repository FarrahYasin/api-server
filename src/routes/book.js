'use strict';

const express = require('express');
const router = express.Router();
const { bookCollection } = require('../models/index')

router.get('/book', getBook);
router.get('/book/:id', getOneBook);
router.put('/book/:id', updateBook);
router.delete('/book/:id', deleteBook);
router.post('/book', createBook);


async function getBook(req, res) {
  const allBook = await bookCollection.read();
  res.status(200).json(allBook);
}

async function getOneBook(req, res) {
  const id = req.params.id;
  const book = await bookCollection.read(id);

  res.status(200).json(book)
}

async function updateBook(req, res) {
  const id = req.params.id;
  const obj = req.body;
  const updatedBook = await bookCollection.update(id, obj)
  res.status(202).json(updatedBook);

}

async function deleteBook(req, res) {
  const id = req.params.id;
  const deletedBook = await bookCollection.delete(id);
  res.status(204).json(deletedBook);
}

async function createBook(req, res) {
    const obj = req.body;
  const book = await bookCollection.create(obj)
    res.status(201).json(book)
  }


module.exports = router;