import type { Metadata } from 'next'

import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
	title: 'Home',
	description: '',
}

export default function Page() {
	return (
		<div>
			<Button>button</Button>
		</div>
	)
}
