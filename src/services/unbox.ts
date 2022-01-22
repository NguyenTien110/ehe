import { GAS } from "../config"
import { boxContract } from "../web3"


export async function unbox(id: number, address: string) {
    try {
        return await boxContract.methods.unbox(id).send({ from: address, gas: GAS }) 
    } catch (e) {
        throw e
    }
}