import logoGithub from '../assets/logoGithub.svg';
import logoGmail from '../assets/logoGmail.svg'
export function Footer() {
    return (
        <div className='flex flex-row bg-slate-500'>
            <div>Copyright © 2023 Storm GPS</div>
            <div className=''>Github
                <img src={logoGithub} className='w-16' />
            </div>
            <div className=''>Gmail
                <img src={logoGmail} className='w-16' />
            </div>
        </div>
    );
}