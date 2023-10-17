import * as z from 'zod'

const profileSchema = z.object({
	username: z.string().min(1),
	full_name: z.string().min(1),
	website: z.string().url(),
	description: z.string().min(1),
})

export type TypeProfileSchema = z.infer<typeof profileSchema>

export { profileSchema }
