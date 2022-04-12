const request = require('supertest');
const app = require('./index.js');

test('DOM contains hello world', async () => {
  const res = await request(app).get('/test');
  expect(res.text).toEqual('Hello World!');
});

// const server = app.listen(3000, function() {
//   console.log('running on port 3000!');
// });

afterAll(done => {
  server.close();
  done();
});
