import {SearchIcon} from '@heroicons/react/solid'
import {ShoppingCartIcon, UserIcon} from '@heroicons/react/outline'
const Header = () => {
    return (
        <header>
            <nav className='flex items-center justify-between px-8 py-4'>
                <div>
                    <h1 className='font-semibold text-xl'>Freshnesecom</h1>
                </div>

                <div>
                    <div className='flex border-2 items-center px-2'>
                        <input className="border-transparent focus:border-transparent focus:ring-0" type="text" placeholder="Search Products ..." />
                        <SearchIcon className='w-5 h-5' />
                    </div>
                </div>

                <div className='flex justify-between items-center gap-4'>
                    
                        {/* <p>test</p> */}
                        <UserIcon className='w-7 h-7' />
                    <div className='relative px-3 py-1'>
                        <ShoppingCartIcon className='w-7 h-7' />
                        <span className='absolute bottom-0 left-0 rounded-full bg-slate-800 px-[7px] py-[2px] text-white text-xs'>11</span>
                    </div>
                    

                </div>
            </nav>
        </header>
    )
}

export default Header;