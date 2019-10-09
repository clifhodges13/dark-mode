import { useEffect } from 'react'
import { useLocalStorage} from './useLocalStorage'

export function useDarkMode() {
  const [value, setValue] = useLocalStorage('isDarkMode')

  useEffect(() => {
    value ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
  }, [value])

  return [value, setValue]
}