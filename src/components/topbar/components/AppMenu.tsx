import AccountMenuDropdown from './AccountMenuDropdown'
import HomeMenuDropdown from './HomeMenuDropdown'
import ListingsMenuDropdown from './ListingsMenuDropdown'
import PagesMenuDropdown from './PagesMenuDropdown'

const AppMenu = () => {
  return (
    <>
      <div id="navbar" className="flex justify-start gap-1 items-center">
        <HomeMenuDropdown />
        <ListingsMenuDropdown />
        <AccountMenuDropdown />
        <PagesMenuDropdown />
      </div>
    </>
  )
}

export default AppMenu
