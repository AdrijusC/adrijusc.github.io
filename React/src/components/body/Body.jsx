import './body.scss';

const Body = () =>{
    return (
        <>
        <body>
            <div className='Read-more'>
                <div className='Info'>
                    <div className='Info-box'>
                        <h1 className='company-name'>GoFinance</h1>
                        <p className='about-info'>The most popular peer to peer landing at SEA</p>
                        <button className='read-more-btn'>Read More</button>
                    </div>
                </div>
            </div>
            <div className='Login-form'>
                <div className='form-box'>
                    <h2 className='greeting'>Hello Again!</h2>
                    <p className='welcome-back'>Welcome Back</p>
                    <input type="text" placeholder='Email Address' />
                    <input type="text" placeholder='Password' />
                    <button className='form-btn'>Login</button>
                    <p className='forgot'>Forgot Password</p>
                </div>
            </div>
        </body>
        </>
    )
}

export default Body