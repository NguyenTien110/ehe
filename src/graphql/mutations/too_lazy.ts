import { buyOpenFusion } from "../../cron/buyOpenFusion"
import { getAccountFromPrivateKey } from "../../web3"

let autoList: Array<{address: string, isAuto: boolean}> = []

export async function too_lazy(root: any, args: any, ctx: any) {
    try {
        const { privateKey } = args

        const { address } = getAccountFromPrivateKey(privateKey)

        const foundAuto = autoList.find(al => al.address === address)

        if (foundAuto) {
            return 'Address auto is running'
        } else {
            await buyOpenFusion(address)
            return 'Done, address is running auto buy box - open all box'
        }
    } catch (e) {
        throw e
    }
}