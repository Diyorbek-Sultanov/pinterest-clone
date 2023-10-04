import * as z from 'zod'

const commenSchema = z.object({
	comment: z.string().min(1),
})

export { commenSchema }

export type TypecommenSchema = z.infer<typeof commenSchema>
