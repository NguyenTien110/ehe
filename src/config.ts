import { config } from "dotenv"

config()

if (!process.env.PORT) throw new Error('PORT must be provided')
export const PORT = process.env.PORT

if (!process.env.API_USER_SERVER) throw new Error('API_USER_SERVER must be provided')
export let API_USER_SERVER = process.env.API_USER_SERVER

if (!process.env.WEB3_PROVIDER) throw new Error('WEB3_PROVIDER must be provided')
export const WEB3_PROVIDER = process.env.WEB3_PROVIDER

if (!process.env.BOX) throw new Error('BOX must be provided')
export const BOX = process.env.BOX

if (!process.env.FUSION) throw new Error('FUSION must be provided')
export const FUSION = process.env.FUSION

if (!process.env.SOIL) throw new Error('SOIL must be provided')
export const SOIL = process.env.SOIL

if (!process.env.STONE) throw new Error('STONE must be provided')
export const STONE = process.env.STONE

if (!process.env.WOOD) throw new Error('WOOD must be provided')
export const WOOD = process.env.WOOD

if (!process.env.RUBBER) throw new Error('RUBBER must be provided')
export const RUBBER = process.env.RUBBER

if (!process.env.PLASTIC) throw new Error('PLASTIC must be provided')
export const PLASTIC = process.env.PLASTIC

if (!process.env.CRYSTAL) throw new Error('CRYSTAL must be provided')
export const CRYSTAL = process.env.CRYSTAL

if (!process.env.CLAIM_PRIZE) throw new Error('CLAIM_PRIZE must be provided')
export const CLAIM_PRIZE = process.env.CLAIM_PRIZE

export const DEFAULT_ADDRESS = '0x0000000000000000000000000000000000000000'
export const GAS = 300000