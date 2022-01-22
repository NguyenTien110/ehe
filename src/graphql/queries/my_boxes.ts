import { unbox } from "../../services/unbox"
import { getUserBoxes } from "../../utils/getUserBoxes"
import { getAccountFromPrivateKey } from "../../web3"

export async function my_boxes(root: any, args: any, ctx: any) {
    try {
        const { privateKey } = args
        
        const { index, address } = getAccountFromPrivateKey(privateKey)
        
        const res = await getUserBoxes(address)

        const boxesId = res.boxes.map(b => b.tokenId)

        return {
            address,
            total: res.total,
            boxes: boxesId
        } 
    } catch (e) {
        throw e
    }
}