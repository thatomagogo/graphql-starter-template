const { graphql, buildSchema } = require('graphql')

const schema = buildSchema(`
    type Query {
        welcome: String
    }

    type Schema {
        query: Query
    }
`)

const resolver = {
    welcome: () => "Hello, Thato"
}

const query = `
    query firstQuery {
        welcome
    }
`

graphql(schema, query, resolver).then(
    (result) => console.log(result)
).catch(
    (error) => console.log(error)
)