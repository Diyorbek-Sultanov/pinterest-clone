import { create } from 'zustand'

import { IPins } from '@/types/pins.types'

type TypeModal = 'auth' | 'savePin'

interface IModalStore {
	isOpen: boolean
	onClose: () => void
	onOpen: (type: TypeModal, pinData?: IPins) => void
	type: TypeModal | null
	pinData?: IPins
}

const useModal = create<IModalStore>(set => ({
	pinData: undefined,
	type: null,
	isOpen: false,
	onClose: () => set({ isOpen: false }),
	onOpen: (type: TypeModal, pinData?: IPins) =>
		set({ isOpen: true, type, pinData }),
}))

export { useModal }
