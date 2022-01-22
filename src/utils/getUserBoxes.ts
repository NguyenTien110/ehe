import axios from "axios"
import { API_USER_SERVER } from "../config"

export async function getUserBoxes(accountAddress) {
    try {
        const body = {
            query: `
            query {
                pr_user_my_boxes_get(page: 0, pageSize: 900, owner: "${accountAddress}") {
                  total
                  boxes {
                    tokenId
                    typeBox
                  }
                }
            }`
        }
        const { data } = await axios.post(API_USER_SERVER, body)
        
        return {
            total: data?.data?.pr_user_my_boxes_get?.total,
            boxes: data?.data?.pr_user_my_boxes_get?.boxes
        }
    } catch (e) {
        throw new Error(`Get data server: ${e}`)
    }
}

