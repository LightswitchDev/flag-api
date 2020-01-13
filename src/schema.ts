import { nexusPrismaPlugin } from 'nexus-prisma'
import { idArg, makeSchema, objectType, stringArg, mutationType } from 'nexus'


const Organization = objectType({
    name: 'Organization',
    definition(t) {
        t.model.id()
        t.model.name()
    }
})

const Environment = objectType({
    name: 'Environment',
    definition(t) {
        t.model.id()
        t.model.name()
        t.model.organization()
    }
})

const Switch = objectType({
    name: 'Switch',
    definition(t) {
        t.model.id()
        t.model.name()
        t.model.type()
        t.model.environment()
        t.model.organization()
        t.model.createdAt()
        t.model.updatedAt()
    }
})

const Query = objectType({
    name: 'Query',
    definition(t) {
        t.crud.organization()
        t.crud.switch()
        t.crud.switches({
            filtering: { organization: true, environment: true, type: true }
        })
    }
})

const Mutation = mutationType({
    definition(t) {
        t.crud.createOneOrganization()

        t.crud.createOneEnvironment()
        t.crud.deleteOneEnvironment()

        t.crud.createOneSwitch()
        t.crud.updateOneSwitch()
        t.crud.deleteOneSwitch()

    },
})

export const schema = makeSchema({
    types: [Query, Mutation, Organization, Environment, Switch],
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
