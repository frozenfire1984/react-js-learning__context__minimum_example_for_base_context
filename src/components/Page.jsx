import {useContext} from 'react'
import {ThemeContext} from './../contexts/theme-context'

const Page = () => {
	const {theme, toggleTheme} = useContext(ThemeContext)
	
	
	return (
		<div>
			<div className="page" style={{background: theme.background, color: theme.textColor}}>Page</div>
			<button type="button" onClick={toggleTheme}>Toggle</button>
		</div>
	)
}

export default Page;