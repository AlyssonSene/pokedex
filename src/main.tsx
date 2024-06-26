import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { AppContextProvider } from './context/Provider.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<AppContextProvider>
		<App />
	</AppContextProvider>
)
