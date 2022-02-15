import Web3 from "web3"
import { Contract } from "web3-eth-contract"
import { BOX, CRYSTAL, FUSION, PLASTIC, RUBBER, SOIL, STONE, WOOD } from "./config"

const boxAbi = require('../contract_abi/box.json')
const fusionAbi = require('../contract_abi/fusion.json')
const ERC20Abi = require('../contract_abi/ERC20.json')

export let web3: Web3

export let boxContract: Contract
export let fusionContract: Contract

export let soilContract: Contract
export let stoneContract: Contract
export let woodContract: Contract
export let rubberContract: Contract
export let plasticContract: Contract
export let crystalContract: Contract


export const connectWeb3 = async (provider: string) => {
    try {
        console.log(`🌎  Web3 provider --- ${provider}`)

        web3 = new Web3(new Web3.providers.HttpProvider(provider));

        boxContract = new web3.eth.Contract(boxAbi, BOX)
        fusionContract = new web3.eth.Contract(fusionAbi, FUSION)
        
        soilContract = new web3.eth.Contract(ERC20Abi, SOIL)
        stoneContract = new web3.eth.Contract(ERC20Abi, STONE)
        woodContract = new web3.eth.Contract(ERC20Abi, WOOD)
        rubberContract = new web3.eth.Contract(ERC20Abi, RUBBER)
        plasticContract = new web3.eth.Contract(ERC20Abi, PLASTIC)
        crystalContract = new web3.eth.Contract(ERC20Abi, CRYSTAL)

    } catch (e) {
        throw e
    }
}

export const getAccountFromPrivateKey = (privateKey: string) => web3.eth.accounts.wallet.add(privateKey)