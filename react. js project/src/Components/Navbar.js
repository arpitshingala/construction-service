import '../Assets/css/main.css'

function Navbar() {
    const handleClick = ()=> {
        localStorage.clear()
    }
    const token = localStorage.getItem('token')
    
    return (
        <>
            <header id="header" className="header d-flex align-items-center">
                <div className="container container-xl d-flex align-items-center justify-content-between">

                    <a style={{ textDecoration: 'none' }} href="/" className="logo d-flex align-items-center">
                        <h1><a>Construction<span>.</span></a></h1>
                    </a>

                    <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                    <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a style={{ textDecoration: 'none' }} href="/" >Home</a></li>
                            <li><a style={{ textDecoration: 'none' }} href="/About">About</a></li>
                            <li><a style={{ textDecoration: 'none' }} href="/Services">Services</a></li>
                            <li><a style={{ textDecoration: 'none' }} href="/Projects">Projects</a></li>
                            <li><a style={{ textDecoration: 'none' }} href="/Blog">Blog</a></li>
                            <li><a style={{ textDecoration: 'none' }} href="/Contact">Contact</a></li>
                            <li><a style={{ textDecoration: 'none' }} href={token ? '/' : '/Login'}><button onClick={handleClick()} className="ps-3 pe-3" style={{ border: '2px solid orange', borderRadius: '20px', padding: '10px', background: 'none', color: 'white' }}>{token ? 'logout' : 'login'}</button></a></li>
                            <li><a style={{ textDecoration: 'none' }} href="/SignUp"><button className="ps-3 pe-3" style={{ border: 'none', background: 'none'}}></button></a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <br /><br /><br /><br /><br /><br />
        </>
    )
}

export default Navbar
