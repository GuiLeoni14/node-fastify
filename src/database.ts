import { Knex, knex as setupKnex } from 'knex'
import { env } from './env'

export const config = {
  client: 'sqlite',
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
} satisfies Knex.Config

export const knex = setupKnex(config)
