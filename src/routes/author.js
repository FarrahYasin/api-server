'use strict';

const express = require('express');
const router = express.Router();
const { authorCollection, bookCollection } = require('../models/index')
router.get('/author', getAuthor);
router.get('/author/:id', getOneAuthor);
router.put('/author/:id', updateAuthor);
router.delete('/author/:id', deleteAuthor);
router.post('/author', createAuthor);

router.get('/authorbook/:id', getAllAuthorBooks)

async function getAuthor(req, res) {
  const allAuthor = await authorCollection.read();
  res.status(200).json(allAuthor);
}

async function getOneAuthor(req, res) {
  const id = req.params.id;
  const author = await authorCollection.read(id);

  res.status(200).json(author)
}

async function updateAuthor(req, res) {
  const id = req.params.id;
  const obj = req.body;
  const updatedAuthor = await authorCollection.update(id, obj)
  res.status(202).json(updatedAuthor);

}

async function deleteAuthor(req, res) {
  const id = req.params.id;
  const deletedAuthor = await authorCollection.delete(id);
  res.status(204).json(deletedAuthor);
}

async function createAuthor(req, res) {
    const obj = req.body;
  const author = await authorCollection.create(obj)
    res.status(201).json(author)
  }

 
  async function getAllAuthorBooks(req, res) {
    const id = req.params.id;
    const readAuthBooksById = await authorCollection.readAuthorBook(id, bookCollection.model);
    res.status(200).json(readAuthBooksById)
  }
  

module.exports = router;