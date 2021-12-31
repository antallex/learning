import { useState } from 'react';


export default function usePopup() {
	const [value, setValue] = useState('false')

	return [value, setValue]
}