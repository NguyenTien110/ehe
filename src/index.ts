import { MONGO_URI, WEB3_PROVIDER } from './config'
import { initGraphQLServer } from './graphql'
import { connectMongo } from './mongodb'
import { unbox } from './services/unbox'
import { getUserBoxes } from './utils/getUserBoxes'
import { connectWeb3, web3 } from './web3'

(async () => {
    try {
        await connectMongo(MONGO_URI)
        await connectWeb3(WEB3_PROVIDER)
        await initGraphQLServer()

        // await unbox(494)
        // await getUserBoxes() 
    } catch (e) {
        throw e
    }
})()
