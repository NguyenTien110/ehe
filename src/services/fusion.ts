import { GAS } from "../config";
import { fusionContract } from "../web3";

export async function fusionRune(address: string, token: number, buff: 1 | 2) {
    try {
        const buffArray = buff === 1 ? [0] : [0, 0]
        return await fusionContract.methods.fusion(token, buffArray).send({ from: address, gas: GAS })
    } catch (error) {
        
    }
}