import { buyDiamondBox } from "../../services/buybox"
import { getAccountFromPrivateKey } from "../../web3"

export async function buy_box(root: any, args: any, ctx: any) {
    try {
        const { times, privateKey } = args

        const { address } = getAccountFromPrivateKey(privateKey)

        for (let i = 0; i < times; i++) {
            await buyDiamondBox(address)
        }

        return 'Done'
    } catch (e) {
        throw e
    }
}