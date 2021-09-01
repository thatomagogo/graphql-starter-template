const { graphql, buildSchema } = require('graphql')

const schema = buildSchema(`
    type Video {
        id: ID,
        title: String,
        duration: Int,
        watched: Boolean
    }

    type Query {
        video: Video
    }

    type Schema {
        query: Query
    }
`)

const resolver = {
    video: () => ({
        id: '101',
        title: "Avengers Assemble",
        duration: 120,
        watched: true
    })
    
}

const query = `
    query firstQuery {
        video {
            id
            title
            duration
            watched
        }
    }
`

graphql(schema, query, resolver).then(
    (result) => console.log(result)
).catch(
    (error) => console.log(error)
)