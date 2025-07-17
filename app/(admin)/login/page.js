"use client";
import Link from "next/link";
const login = () => {
    return (
        <>
            <div className="logpg">
                <div className="right">
                    <form className='form1'>
                        <h2>Login</h2>
                        <input type="text" placeholder='username' className='input' required={true} /><br />
                        <input type="email" placeholder='email' className='input' required={true} /><br />
                        <input type="password" placeholder='password' className='input' required={true} /><br />
                        <input type="password" placeholder='confirm password' className='input' required={true} /><br />
                        <Link href="/create"><button className='btn'>Submit</button></Link>
                    </form>
                </div>
            </div>

        </>
    )
}
export default login;