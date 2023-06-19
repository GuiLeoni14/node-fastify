import fastify from 'fastify'
import { knex } from './database'
import { env } from './env'

const app = fastify()

app.get('/hello', async () => {
  const teste = await knex('sqlite_schema').select('*')

  return teste
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => console.log('server is running'))
