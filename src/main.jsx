import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './routes/root'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './error-page'
import Contact from './routes/contact'
import Activites from './routes/activites'
import Index from './routes'
import Apropos from './routes/apropos'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Index />,
			},
			{
				path: 'a-propos',
				element: <Apropos />,
			},

			{
				path: 'activites',
				element: <Activites />,
			},
			{
				path: 'contact',
				element: <Contact />,
			},
		],
	},
])

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
)
