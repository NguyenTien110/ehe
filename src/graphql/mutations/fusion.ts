import { fusionRune } from "../../services/fusion"
import { getAccountFromPrivateKey } from "../../web3"

export async function fusion(root: any, args: any, ctx: any) {
    try {
        const { runeType, times, privateKey } = args

        const { address } = getAccountFromPrivateKey(privateKey)

        let successTimes = 0
        let failedTimes = 0
        for (let i = 0; i < times; i++) {
            let res = await fusionRune(address, runeType)
            console.log(res)
            if (res) {
                successTimes++
            } else {
                failedTimes++
            }
        }

        return {
            runeType,
            successTimes,
            failedTimes
        }
    } catch (e) {
        throw e
    }
}