import { create } from 'zustand'

interface IModalStore {
	isOpen: boolean
	onClose: () => void
	onOpen: () => void
}

const useModal = create<IModalStore>(set => ({
	isOpen: false,
	onClose: () => set({ isOpen: false }),
	onOpen: () => set({ isOpen: true }),
}))

export { useModal }
