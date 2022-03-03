import { GAS } from "../../config"
import { fusionRune } from "../../services/fusion"
import { crystalContract, getAccountFromPrivateKey, prlContract } from "../../web3"

export async function transfer_prl(root: any, args: any, ctx: any) {
    try {
        const { amount, times, receiver, privateKeys } = args as { receiver: string, privateKeys: string[], amount: number, times: number }
        
        for (let i = 0; i < times; i++) {     
            for (const privateKey of privateKeys) {
                
               const { address } = getAccountFromPrivateKey(privateKey)
                    
               await prlContract.methods.transfer(receiver, amount).send({ from: address, gas: GAS })
            }
        }

        return 'done'
    }
    catch (e) {
        throw e
    }
}