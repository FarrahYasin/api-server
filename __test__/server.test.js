'use strict';

require('dotenv').config();

const supertest = require('supertest');
const {app} = require('../src/server');
const request = supertest(app);

const mockServer = supertest(app);
const { db } = require('../src/models/index');

beforeAll(async () => {
    // Open the connection before the test case start testing
    await db.sync();
  })
  
  afterAll(async () => {
    // Close the connection after the test case finsh testing
    await db.drop();
  })

describe('Server test', () => {
    //test// error handler
    it('PAGE NOT FOUND', async () => {
      const res = await request.get('/new');
      expect(res.status).toEqual(404);
    })

    it('PAGE NOT FOUND', async () => {
      const res = await request.put('/new');
      expect(res.status).toEqual(404);
    })
    
    
//   it('should handle server error and return 500', async () => {
//     const response = await request.get('/bad');
//     expect(response.status).toEqual(500);
//     expect(response.body.route).toEqual('/bad');
//   });

//test// food
it('can add new Food', async () => {
    const res = await mockServer.post('/food').send({
      foodType: 'meat',
      price: '6 $'
    });
    const createdFood = JSON.parse(res.text);
    // console.log(JSON.parse(res.text))
    expect(res.status).toBe(201);
    expect(createdFood.foodType).toEqual('meat')
  });
  
  it('Can read all Food', async () => {
    const res = await mockServer.get('/food');
    expect(res.status).toBe(200);
  })

  it('Update read all Food by id', async () => {
    const res = await mockServer.put('/food/2');
    expect(res.status).toBe(202);
  })

  it('Delete read all food by id', async () => {
    const res = await mockServer.delete('/food/2');
    expect(res.status).toBe(204);
  })

  //test //clothes
  it('can add new Clothes', async () => {
    const res = await mockServer.post('/clothes').send({
      clothesType: 'jacket',
      price: '6 $'
    });
    const createdClothes = JSON.parse(res.text);
    // console.log(JSON.parse(res.text))
    expect(res.status).toBe(201);
    expect(createdClothes.clothesType).toEqual('jacket')
  });
  
  it('Can read all Clothes', async () => {
    const res = await mockServer.get('/clothes');
    expect(res.status).toBe(200);
  })

  it('Update read all Clothes by id', async () => {
    const res = await mockServer.put('/clothes/2');
    expect(res.status).toBe(202);
  })

  it('Delete read all clothes by id', async () => {
    const res = await mockServer.delete('/clothes/2');
    expect(res.status).toBe(204);
  })


 //test //book
 it('can add new Book', async () => {
  const res = await mockServer.post('/book').send({
    name: 'life',
    authorId:1
  });
  const createdBook = JSON.parse(res.text);
  expect(res.status).toBe(201);
  expect(createdBook.name).toEqual('life')
});


it('Can read all book', async () => {
  const res = await mockServer.get('/book');
  expect(res.status).toBe(200);
})

it('Update read all book by id', async () => {
  const res = await mockServer.put('/book/2');
  expect(res.status).toBe(202);
})

it('Delete read all book by id', async () => {
  const res = await mockServer.delete('/book/2');
  expect(res.status).toBe(204);
})



//test //author
it('can add new author', async () => {
  const res = await mockServer.post('/author').send({
    name: 'farah'
  });
  const createdAuthor = JSON.parse(res.text);
  expect(res.status).toBe(201);
  expect(createdAuthor.name).toEqual('farah')
});

it('Can read all author', async () => {
  const res = await mockServer.get('/author');
  expect(res.status).toBe(200);
})

it('Update read all author by id', async () => {
  const res = await mockServer.put('/author/2');
  expect(res.status).toBe(202);
})

it('Delete read all author by id', async () => {
  const res = await mockServer.delete('/author/2');
  expect(res.status).toBe(204);
})

});

