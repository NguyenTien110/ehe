import { config } from "dotenv"

config()

if (!process.env.PORT) throw new Error('PORT must be provided')
export const PORT = process.env.PORT

if (!process.env.MONGO_URI) throw new Error('MONGO_URI must be provided')
export const MONGO_URI = process.env.MONGO_URI

if (!process.env.REDIS_URI) throw new Error('REDIS_URI must be provided')
export const REDIS_URI = process.env.REDIS_URI

if (!process.env.REDIS_PREFIX) throw new Error('REDIS_PREFIX must be provided')
export const REDIS_PREFIX = process.env.REDIS_PREFIX

if (!process.env.API_USER_SERVER) throw new Error('API_USER_SERVER must be provided')
export let API_USER_SERVER = process.env.API_USER_SERVER

if (!process.env.WEB3_PROVIDER) throw new Error('WEB3_PROVIDER must be provided')
export const WEB3_PROVIDER = process.env.WEB3_PROVIDER

if (!process.env.BOX) throw new Error('BOX must be provided')
export const BOX = process.env.BOX

if (!process.env.FUSION) throw new Error('FUSION must be provided')
export const FUSION = process.env.FUSION

if (!process.env.CLAIM_PRIZE) throw new Error('CLAIM_PRIZE must be provided')
export const CLAIM_PRIZE = process.env.CLAIM_PRIZE

export const DEFAULT_ADDRESS = '0x0000000000000000000000000000000000000000'
export const GAS = 500000
export const GAS_PRICE = 2000000000000