import { WEB3_PROVIDER } from './config'
import { initGraphQLServer } from './graphql'
import { connectWeb3 } from './web3'

(async () => {
    try {
        await connectWeb3(WEB3_PROVIDER)
        await initGraphQLServer()
    } catch (e) {
        throw e
    }
})()
