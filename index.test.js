const supertest = require('supertest');
const app = require('./index.js');
const request = supertest(app);

it('Hello World!', done => {
  expect(1).toBe(1);
  done();
});

const server = app.listen(3000, function() {
  console.log('running on port 3000!');
});

afterAll(done => {
  server.close();
  done();
});
