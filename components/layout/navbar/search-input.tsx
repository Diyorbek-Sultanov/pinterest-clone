import Icon from '@/components/ui/icon'
import { Input } from '@/components/ui/input'

const SearchInput: React.FC = () => {
	return (
		<div className='flex-1 relative h-11'>
			<Icon
				name='search'
				className='h-4 w-4 text-gray-500 absolute top-[50%] translate-y-[-50%] left-3'
			/>
			<Input
				placeholder='Search...'
				className='w-full h-full pl-9 rounded-md bg-gray-400/25 focus-visible:ring-purple-400'
			/>
		</div>
	)
}

export default SearchInput
