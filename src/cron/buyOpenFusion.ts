import { buyDiamondBox } from "../services/buybox"
import { unbox } from "../services/unbox"
import { getUserBoxes } from "../utils/getUserBoxes"

let stop = false

export async function buyOpenFusion(address: string) {
    try {
        // Buy box 5 times
        for (let i = 0; i < 5; i++) {
            await buyDiamondBox(address)
        }

        // Open all boxes
        const res = await getUserBoxes(address)
        
        console.log(res)
        
        const boxesId = res.boxes.map(b => b.tokenId)
        
        for (let i = 0; i < boxesId.length; i++) {
            await unbox(boxesId[i], address)
        }

        return
    } catch (e) {
        stop = true
        throw e
    } finally {
        if (!stop) {
            setTimeout(buyOpenFusion, 3000)
        }
    }
}