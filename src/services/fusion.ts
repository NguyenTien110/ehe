import { GAS } from "../config";
import { fusionContract } from "../web3";

export async function fusionRune(address: string, token: number) {
    try {
        return await fusionContract.methods.fusion(token, [0]).send({ from: address, gas: GAS })
    } catch (error) {
        
    }
}