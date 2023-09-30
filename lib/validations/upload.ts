import * as z from 'zod'

const uploadSchema = z.object({
	title: z.string().min(1),
	description: z.string().max(500),
	image: z.any(),
})

export { uploadSchema }

export type TypeUploadSchema = z.infer<typeof uploadSchema>
