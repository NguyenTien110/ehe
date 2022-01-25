import { fusion } from "./mutations/fusion"
import { open_boxes } from "./mutations/open_boxes"
import { my_boxes } from "./queries/my_boxes"

export const resolvers = {
    Query: {
        hi_there: () => { return 'hello traveler' },
        my_boxes
    },

    Mutation: {
        open_boxes,
        fusion
    }
    
}
