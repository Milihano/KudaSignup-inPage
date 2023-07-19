import Kudalogo from '../Images/Logo.svg'
import secondimg from '../Images/secondimg.svg'

function Kudasign( ) {
    
    return (
        <main>
            <nav className='drop-shadow-2xl flex justify-between px-[4rem] py-2 mt-5 items-center'>
                <div>
                    <img className='w-[6rem]' src={Kudalogo} alt="Kudalogo" />
                </div>
                <div>
                    <button className='hover:-translate-y-1 duration-700 border rounded-[12px] border-purple-400 bg-[rgb(239,241,255)] text-[rgb(91,79,145)] font-bold py-2 px-4'>Open an Account</button>
                </div>
            </nav>
            <div className='mx-[5rem] flex  justify-between'>
                <div className='p-[3rem]'>
                    <div className='text-[0.9rem] border mt-3 bg-[rgb(239,241,255)] rounded-lg'>
                        <p>Please check that you are visiting the correct URL<br/> <a className='text-green-400' href="https://app.kuda.com">https://app.kuda.com</a></p>
                    </div>
                    <div className='border drop-shadow-lg mt-3 w-[26rem] rounded-lg'>
                        <div className='m-5 p-4 rounded mt-3'>
                            <div className='font-bold text-[1.5rem]'>
                                Sign In to Kuda
                            </div>
                            <div className='mt-2 text-[0.8rem]'>
                                To sign in, please type in the email address linked to your Kuda account.
                            </div>
                            <form action="" className='mt-3'>
                                <div className='mt-2'>
                                    <label htmlFor="Email Address">Email Address</label><br/>
                                    <input className='drop-shadow-lg rounded w-full h-[3rem] mt-2' type="text"  placeholder='example@gmail.com'/>
                                </div>
                                <div className='mt-2'>
                                    <label htmlFor="password">Password</label><br/>
                                    <input className='drop-shadow-lg rounded w-full h-[3rem] mt-2' type="text" placeholder='password'/>
                                </div>
                            </form>
                            <div className='my-3 text-[0.7rem]'>
                                Forgot Password? <a href="https://app.kuda.com/reset" className='text-purple-600'>Reset it</a>
                            </div>
                            <button className='hover:-translate-y-1 duration-700 rounded-[1rem] py-2 px-[4rem] font-bold border text-white bg-purple-900'>
                                Sign In 
                            </button>
                            <div className='text-[0.8rem]'>
                            If you don't have a Kuda account, download the app <br/><a className='text-purple-600' href="https://kuda.com/">here</a> and open an account in a few minutes.
                            </div>
                        </div>
                    </div>
                </div>
                <img className='w-[35rem] ' src={secondimg} alt="SecondImg" />
            </div>

        </main>
    )

}





export default Kudasign