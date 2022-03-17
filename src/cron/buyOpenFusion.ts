import { buyDiamondBox } from "../services/buybox"
import { unbox } from "../services/unbox"
import { getUserBoxes } from "../utils/getUserBoxes"
import { getAccountFromPrivateKey } from "../web3"

let stop = false

export async function buyOpenFusion(privateKey: string) {
    try {
        const { address } = getAccountFromPrivateKey(privateKey)
        
        // Buy box 5 times
        for (let i = 0; i < 5; i++) {
            await buyDiamondBox(address)
        }

        // Open all boxes
        const res = await getUserBoxes(address)
        
        const boxesId = res.boxes.map(b => b.tokenId)
        
        for (let i = 0; i < boxesId.length; i++) {
            await unbox(boxesId[i], address)
        }
    } catch (e) {
        stop = true
        throw e
    } finally {
        if (!stop) {
            setTimeout(async function () {
                await buyOpenFusion(privateKey)
            }, 3000)
        }
    }
}