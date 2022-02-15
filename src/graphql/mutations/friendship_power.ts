import { GAS } from "../../config"
import { fusionRune } from "../../services/fusion"
import { crystalContract, getAccountFromPrivateKey, plasticContract, rubberContract, soilContract, stoneContract, woodContract } from "../../web3"

export async function friendship_power(root: any, args: any, ctx: any) {
    try {
        const { receiver, privateKeys } = args as { receiver: string, privateKeys: string[] }
        
        let totalSoils = 0
        let totalStones = 0
        let totalWoods = 0
        let totalRubbers = 0
        let totalPlastics = 0
        let totalCrystals = 0
        
        for (const privateKey of privateKeys) {
            
           const { address } = getAccountFromPrivateKey(privateKey)
                
           const soils = Number(await soilContract.methods.balanceOf(address).call())
           totalSoils += soils
           const stones = Number(await stoneContract.methods.balanceOf(address).call())
           totalStones += stones
           const woods = Number(await woodContract.methods.balanceOf(address).call())
           totalWoods += woods
           const rubbers = Number(await rubberContract.methods.balanceOf(address).call())
           totalRubbers += rubbers
           const plastics = Number(await plasticContract.methods.balanceOf(address).call())
           totalPlastics += plastics
           const crystals = Number(await crystalContract.methods.balanceOf(address).call())
           totalCrystals += crystals

           if (soils > 0) await soilContract.methods.transfer(receiver, soils).send({ from: address, gas: GAS })
           if (stones > 0) await stoneContract.methods.transfer(receiver, stones).send({ from: address, gas: GAS })
           if (woods > 0) await woodContract.methods.transfer(receiver, woods).send({ from: address, gas: GAS })
           if (rubbers > 0) await rubberContract.methods.transfer(receiver, rubbers).send({ from: address, gas: GAS })
           if (plastics > 0) await plasticContract.methods.transfer(receiver, plastics).send({ from: address, gas: GAS })
           if (crystals > 0) await crystalContract.methods.transfer(receiver, crystals).send({ from: address, gas: GAS })
        }

        return {
            totalSoils,
            totalStones,
            totalWoods,
            totalRubbers,
            totalPlastics,
            totalCrystals
        }
    }
    catch (e) {
        throw e
    }
}