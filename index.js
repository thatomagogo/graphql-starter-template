const { graphql, buildSchema } = require('graphql')

const schema = buildSchema(`
    type Query {
        id: ID,
        title: String,
        duration: Int,
        watched: Boolean
    }

    type Schema {
        query: Query
    }
`)

const resolver = {
    id: () => '101',
    title: () => "Avengers Assemble",
    duration: () => 120,
    watched: () => true
}

const query = `
    query firstQuery {
        id
        title
        duration
        watched
    }
`

graphql(schema, query, resolver).then(
    (result) => console.log(result)
).catch(
    (error) => console.log(error)
)