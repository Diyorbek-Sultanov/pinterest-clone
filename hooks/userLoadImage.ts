import { useSupabaseClient } from '@supabase/auth-helpers-react'

import { IPins } from '@/types/pins.types'

const useLoadImage = (pin: IPins | undefined) => {
	const supabaseClient = useSupabaseClient()

	if (!pin) return null

	const { data: imageData } = supabaseClient.storage
		.from('pins')
		.getPublicUrl(pin.image_path)

	return imageData.publicUrl
}

export { useLoadImage }
