import { unbox } from "../../services/unbox"
import { getUserBoxes } from "../../utils/getUserBoxes"
import { getAccountFromPrivateKey } from "../../web3"

export async function open_boxes(root: any, args: any, ctx: any) {
    try {
        const { privateKey, amount } = args
        
        const { address } = getAccountFromPrivateKey(privateKey)

        const res = await getUserBoxes(address)
        
        const boxesId = res.boxes.map(b => b.tokenId)
        
        boxesId.length = amount

        let openedBoxes: number[] = []
        let failedBoxes:  number[] = []

        for (let i = 0; i < boxesId.length; i++) {
            const openResponse = await unbox(boxesId[i], address)

            if (openResponse) {
                openedBoxes.push(boxesId[i])
            } else {
                failedBoxes.push(boxesId[i])
            }
        }

        return {
            openedBoxes,
            failedBoxes
        }
    } catch (e) {
        throw e
    }
}