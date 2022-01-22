import { MongoClient, Db, Collection } from 'mongodb'
import { EventStore, EventStoreIndexes } from './models/EventStore'

let mongo: MongoClient

export let EventsStore: Collection<EventStore>

const collections = {
    events_store: 'events_store',
}

const connectMongo = async (MONGO_URI: string) => {
    try {
        mongo = new MongoClient(MONGO_URI)

        await mongo.connect()

        mongo.on('error', async (e) => {
            try {
                await mongo.close()
                await connectMongo(MONGO_URI)
            } catch (e) {
                setTimeout(connectMongo, 1000)
                throw e
            }
        })

        mongo.on('timeout', async () => {
            try {
                await mongo.close()
                await connectMongo(MONGO_URI)
            } catch (e) {
                setTimeout(connectMongo, 1000)
                throw e
            }
        })

        // mongo.on('close', async () => {
        //     try {
        //         await connectMongo(MONGO_URI)
        //     } catch (e) {
        //         throw e
        //     }
        // })
        
        const db = mongo.db()

        console.log(`📦  Database name --- ${db.databaseName}`)
        
        EventsStore = db.collection(collections.events_store)

        await Promise.all([
            EventsStore.createIndexes(EventStoreIndexes),
        ])

        console.log(`🚀  Mongodb connected`)
    } catch (e) {
        console.error(`Mongodb disconnected`)
        await mongo?.close(true)
        setTimeout(connectMongo, 1000)
        throw e
    }
}

export { mongo, connectMongo, collections }


