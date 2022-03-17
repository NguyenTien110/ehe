import { GAS } from "../config"
import { boxContract } from "../web3"

export async function buyDiamondBox(address) {
    try {
        return await boxContract.methods.buyBox(2, 1).send({ from: address, gas: GAS })
    } catch (e) {
        throw e
    }
}