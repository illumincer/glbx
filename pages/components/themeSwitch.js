import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'
import { MoonIcon } from './moonIcon';
import { SunIcon } from './sunIcon';

const Themeswitch = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <div>
      <Switch
        bordered size="xl"
        shadow color="primary"
        iconOn={<SunIcon filled />}
        iconOff={<MoonIcon filled />}
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      />
    </div>
  )
}

export default Themeswitch;