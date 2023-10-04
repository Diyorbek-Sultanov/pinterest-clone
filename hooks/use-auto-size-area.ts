import { useEffect } from 'react'

const useAutoSizeArea = (ref: HTMLTextAreaElement | null, value: string) => {
	useEffect(() => {
		if (ref) {
			ref.style.height = '0px'

			const scrollHeight = ref.scrollHeight

			ref.style.height = scrollHeight + 'px'
		}
	}, [value, ref])
}

export { useAutoSizeArea }
