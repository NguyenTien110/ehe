import { buyOpenFusion } from "../../cron/buyOpenFusion"
import { getAccountFromPrivateKey } from "../../web3"

export let autoList: Array<{address: string, isAuto: boolean}> = []

export async function too_lazy(root: any, args: any, ctx: any) {
    try {
        const { privateKey, turn } = args

        const { address } = getAccountFromPrivateKey(privateKey)

        const foundAuto = autoList.find(al => al.address === address)

        if (foundAuto && foundAuto.isAuto === true && turn === 'on') {
            return 'Address auto is running'
        } else {
            if (turn === 'on') {
                autoList.push({ address: address, isAuto: true })
                await buyOpenFusion(privateKey)
                return 'Done, address is running auto buy box - open all box'
            } else {
                changeAutoStatus(address, false)
                return 'Done, turned off auto buy box - open all box'
            }
        }
    } catch (e) {
        throw e
    }
}

export function changeAutoStatus(address: string, status: boolean) {
    const foundAddressIndex = autoList.findIndex(al => al.address === address)

    if (foundAddressIndex !== -1) {
        autoList[foundAddressIndex].isAuto = status
    }
}