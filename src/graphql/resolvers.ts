import { buy_box } from "./mutations/buy_box"
import { friendship_power } from "./mutations/friendship_power"
import { fusion } from "./mutations/fusion"
import { open_boxes } from "./mutations/open_boxes"
import { too_lazy } from "./mutations/too_lazy"
import { my_boxes } from "./queries/my_boxes"

export const resolvers = {
    Query: {
        hi_there: () => { return 'hello traveler' },
        my_boxes
    },

    Mutation: {
        open_boxes,
        fusion,
        friendship_power,
        buy_box,
        too_lazy
    }
    
}
