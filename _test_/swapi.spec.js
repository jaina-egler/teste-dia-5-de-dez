const request  = require('supertest')

it('Deve retornar as informações do cadastro, quando buscar por uma pessoa existente', async() => {
    const resposta = await request('https://swapi.dev/api/').get('people/1');
    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('Luke Skywalker');
    expect(resposta.body.vehicles.length).toBeGreaterThan(0);
    expect(resposta.body.films).toBeDefined();
})

it('Deve retornar mensagem de erro quando buscar uma pessoa inexistente', async() => {
    const resposta = await request('https://swapi.dev/api/').get('people/666');
    expect(resposta.status).toBe(404);
    expect(resposta.body).toMatchObject({ detail: 'Not found' })
})

it('Deve retornar as informações do cadastro, quando buscar por um planeta existente', async() => {
    const resposta = await request('https://swapi.dev/api/').get('planets/1');
    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('Tatooine');
    expect(resposta.body.residents.length).toBeGreaterThan(0);
    expect(resposta.body.films).toBeDefined();
})

it('Deve retornar mensagem de erro quando buscar um planeta inexistente', async() => {
    const resposta = await request('https://swapi.dev/api/').get('planets/666');
    expect(resposta.status).toBe(404);
    expect(resposta.body).toMatchObject({ detail: 'Not found' })
})
