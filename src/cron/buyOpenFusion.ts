import { autoList, changeAutoStatus } from "../graphql/mutations/too_lazy"
import { buyDiamondBox } from "../services/buybox"
import { unbox } from "../services/unbox"
import { getUserBoxes } from "../utils/getUserBoxes"
import { getAccountFromPrivateKey } from "../web3"


export async function buyOpenFusion(privateKey: string) {
    const { address } = getAccountFromPrivateKey(privateKey)

    const isAuto = autoList.find(al => al.address === address)?.isAuto || false
    try {  
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
        changeAutoStatus(address, false)
        throw e
    } finally {
        if (isAuto) {
            setTimeout(async function () {
                await buyOpenFusion(privateKey)
            }, 500)
        }
    }
}