import logoGithub from '../assets/logoGithub.svg';
import logoGmail from '../assets/logoGmail.svg'

export function Footer() {
    return (
        <div className='flex flex-row bg-slate-500 justify-around items-center'>
            <div>Copyright © 2023 Storm GPS</div>
            <div className='flex flex-col justify-center m-2 gap-2 cursor-pointer'>
                <div className="flex flex-row cu">
                    <img src={logoGithub} className='w-16 h-8' />
                    <label htmlFor="">Git Hub</label>
                </div>
                <div className="flex flex-row">
                    <img src={logoGmail} className='w-16 h-8' />
                    <label htmlFor="">Gmail</label>
                </div>
            </div>
        </div>
    );
}