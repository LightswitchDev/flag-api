import { nexusPrismaPlugin } from 'nexus-prisma'
import { idArg, makeSchema, objectType, stringArg, mutationType } from 'nexus'

const Organization = objectType({
  name: 'Organization',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.keys()
  },
})

const Environment = objectType({
  name: 'Environment',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.organization()
  },
})

const Key = objectType({
  name: 'Key',
  definition(t) {
    t.model.id()
    t.model.createdAt()
    t.model.organization()
    t.model.environment()
  },
})

const Variant = objectType({
  name: 'Variant',
  definition(t) {
    t.model.id()
    t.model.value()
  },
})

const Switch = objectType({
  name: 'Switch',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.key()
    t.model.enabled()
    t.model.type()
    t.model.environments()
    t.model.defaultVariant()
    t.model.variants()
    t.model.organization()
    t.model.createdAt()
    t.model.updatedAt()
  },
})

const Query = objectType({
  name: 'Query',
  definition(t) {
    t.crud.organization()
    t.crud.switch()
    t.crud.key()
    t.crud.switches({
      filtering: { organization: true, environments: true, type: true },
      ordering: { name: true },
    })
  },
})

const Mutation = mutationType({
  definition(t) {
    t.crud.createOneOrganization()
    t.crud.updateOneOrganization()

    t.crud.createOneKey()
    t.crud.deleteOneKey()

    t.crud.createOneEnvironment()
    t.crud.deleteOneEnvironment()

    t.crud.createOneSwitch()
    t.crud.updateOneSwitch()
    t.crud.deleteOneSwitch()
  },
})

export const schema = makeSchema({
  types: [Query, Mutation, Organization, Key, Environment, Switch, Variant],
  plugins: [nexusPrismaPlugin()],
  outputs: {
    schema: __dirname + '/generated/schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/photon',
        alias: 'photon',
      },
      {
        source: require.resolve('./context'),
        alias: 'Context',
      },
    ],
  },
})
