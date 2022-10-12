import { getUserById } from "~/server/database/repositories/userRepository"
import { getSubscribeUrl } from "~/server/services/stripeSevices"
import { updateStripeCustomerId } from "~/server/database/repositories/userRepository"

export default defineEventHandler(async (event) => {
 const body = await useBody(event)
 const lookupKey = body.lookup_key
 const userId = body.user_id

 const user = await getUserById(parseInt(userId))

 

}