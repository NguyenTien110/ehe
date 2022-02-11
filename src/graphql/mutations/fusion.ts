import { fusionRune } from "../../services/fusion"
import { getAccountFromPrivateKey } from "../../web3"

export async function fusion(root: any, args: any, ctx: any) {
    try {
        const { runeType, times, buff, privateKey } = args

        const { address } = getAccountFromPrivateKey(privateKey)

        if (buff !== 1 && buff !== 2 && buff !== 0) {
            throw new Error('Buff must be equal to 0, 1 or 2')
        }

        let successTimes = 0
        let failedTimes = 0
        let buffArray: any

        for (let i = 0; i < times; i++) {
            let res = await fusionRune(address, buff, runeType)
            console.log(res)
            if (res?.result) {
                buffArray = res.buff
                successTimes++
            } else {
                failedTimes++
            }
        }

        return {
            runeType,
            successTimes,
            failedTimes,
            buff: buffArray
        }
    } catch (e) {
        throw e
    }
}