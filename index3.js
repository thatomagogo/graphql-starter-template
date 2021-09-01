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
        videos: [Video]
    }

    type Schema {
        query: Query
    }
`)

const videoA = {
    id: '102',
    title: 'Loki',
    duration: 180,
    watched: false
}

const videoB = {
    id: '103',
    title: 'WandaVision',
    duration: 135,
    watched: true
}

const videos = [videoA, videoB]

const resolver = {
    video: () => ({
        id: '101',
        title: "Avengers Assemble",
        duration: 120,
        watched: true
    }),
    videos: () => videos
}

const query = `
    query firstQuery {
        videos {
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