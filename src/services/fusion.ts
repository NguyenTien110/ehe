import { GAS } from "../config";
import { fusionContract } from "../web3";

export async function fusionRune(address: string, token: number) {
    try {
        const res = await fusionContract.methods.fusion(token, [0]).send({ from: address, gas: GAS })
        return res
    } catch (error) {
        throw error
    }
}