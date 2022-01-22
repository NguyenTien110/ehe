import { IndexDescription, ObjectId } from "mongodb";

export interface EventStore {
    _id?: ObjectId
    blockNumber: number
    transactionHash: string
    transactionIndex: number
    data: any
}

export const EventStoreIndexes: IndexDescription[] = [
    { key: { blockNumber: 1 } },
    { key: { transactionHash: 1, transactionIndex: 1 }, unique: true },
    { key: { event: 1 } }
]