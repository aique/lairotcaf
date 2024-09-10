import axios from 'axios';

describe('GET /api/store/products', () => {
  it('should return the store products', async () => {
    const expectedResponse = `{
      "products": [
          {
              "id": 1,
              "name": "Bicycle",
              "slug": "bicycle"
          },
          {
              "id": 2,
              "name": "Roller Skate",
              "slug": "roller-skate"
          }
    ]}`

    const res = await axios.get(`/api/store/products`);

    expect(res.status).toBe(200);
    expect(res.data).toEqual(
      JSON.parse(expectedResponse)
    );
  });
});
