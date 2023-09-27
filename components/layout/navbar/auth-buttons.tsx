import { Button } from '@/components/ui/button'

const AuthButtons: React.FC = () => {
	return (
		<>
			<Button className='capitalize' variant={'destructive'}>
				signin
			</Button>
			<Button className='capitalize' variant={'outline'}>
				signup
			</Button>
		</>
	)
}

export default AuthButtons
