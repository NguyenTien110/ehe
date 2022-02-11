import { GAS } from "../config";
import { fusionContract } from "../web3";

export async function fusionRune(address: string, token: number, buff: 0 | 1 | 2) {
    try {
        let buffArray: number[] = []

        for (let i = 0; i < buff; i++) {
            buffArray.push(0)
        }

        const res = await fusionContract.methods.fusion(token, buffArray).send({ from: address, gas: GAS })
        return {
            buff: buffArray,
            result: res
        }
    } catch (error) {
        
    }
}