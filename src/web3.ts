import Web3 from "web3"
import { Contract } from "web3-eth-contract"
import { BOX, FUSION } from "./config"

const boxAbi = require('../contract_abi/box.json')
const fusionAbi = require('../contract_abi/fusion.json')

export let web3: Web3

export let boxContract: Contract
export let rune1Contract: Contract

export const connectWeb3 = async (provider: string) => {
    try {
        console.log(`🌎  Web3 provider --- ${provider}`)

        web3 = new Web3(new Web3.providers.HttpProvider(provider));

        boxContract = new web3.eth.Contract(boxAbi, BOX)
        rune1Contract = new web3.eth.Contract(fusionAbi, FUSION)
    } catch (e) {
        throw e
    }
}

export const getAccountFromPrivateKey = (privateKey: string) => web3.eth.accounts.wallet.add(privateKey)