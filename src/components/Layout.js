import { Provider } from 'react-redux'
import store from '../features/store'

export default function Layout({children}) {
  return (
    <Provider store={store}>
        <div className="container mx-auto pt-4">
            {children}
        </div>
    </Provider>
  )
}
