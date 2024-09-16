import React from 'react'
import '../App.css'
function Video() {
  return (
    <div className="container">
    <div className="container-fluid p-10">
        <nav className="navbar">
            <ul className="menu">
                <li>
                    <a href="/overview">Overview</a>
                </li>
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                        <b>News & Events</b> <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu">
                        <li><a href="/corporatemedia">Corporate News</a></li>
                        <li><a href="/press">Press Release</a></li>
                        <li><a href="/corporatemedia">Goverments news</a></li>
                    </ul>
                </li>
                <li>
                    <a href="/csr">CSR</a>
                </li>
            </ul>
            <div className="login-logout">
                <button type="button" className="btn btn-primary">
                <a href="/login">Login</a> / <a href="/signup">Sign Up</a>
                </button>
            </div>
            <div className="offcanvas offcanvas-start" id="demo1">
                <div className="offcanvas-header">
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="row">
                        <div className="col-lg-6">
                            <h4><b>Sign-in</b></h4>
                            <img src="./images/fafa icon/usericon.png" alt="userlogin image" style={{ width: '40px', float: 'right' }} />
                        </div>
                    </div>
                    <p><i className="fa fa-language"></i> English</p>
                    <p><i className="fa fa-user"></i> Customer Service</p>
                    <p><i className="fa fa-line-chart"></i> List Your Busimess</p>
                    <p><i className="fa fa-bullhorn"></i> Advertise</p>
                    <p><i className="fa fa-vcard-o"></i> My Transactions</p>
                    <p><i className="fa fa-users"></i> Manage Quotes</p>
                    <p><i className="fa fa-laptop"></i> We are hiring</p>
                    <p><i className="fa fa-cog"></i> Settings</p>
                    <p><i className="fa fa-universal-access"></i> Privacy Policy</p>
                    <p><i className="fa fa-slideshare"></i> Investor Relations</p>
                    <p><i className="fa fa-plus-square"></i> What's New</p>
                    <p><i className="fa fa-paperclip"></i> Others</p>
                    <p><i className="fa fa-user-times"></i> Sign Out</p>
                </div>
            </div>
            <li data-bs-toggle="offcanvas" data-bs-target="#demo1" className="hide">
                <img src="./images/fafa icon/usericon.png" alt="userlogin image" style={{ width: '25px' }} />
            </li>
        </nav>
        <hr />
        <div style={{ padding: '2px' }}></div>
        <div className="banner48">
            <div style={{ padding: '10px' }}></div>
        </div>
        <div style={{ padding: '5px' }}></div>
        <div className="media">
            <div className="container mt-3">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link" href="corporatemedia.html">Media(all)</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="press.html">Press</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="video.html">Videos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link hide1" href="report.html">Consumers Reports</a>
                        <a className="nav-link hide" href="report.html">Reports</a>
                    </li>
                </ul>
                <div style={{ padding: '15px' }}></div>
                <div className="row mt-3">
                    <div className="col-lg-8 p-4 mt-2 media10 mx-3 ">
                        <iframe className="currentvideo" src="https://www.youtube.com/embed/Xn9HRJYas8s?si=kM-VyBqcvV21T915" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="col-lg-4 media110 mx-3 p-2 m-2">
                        <b>More Videos</b>
                        <iframe className="morevideo" src="https://www.youtube.com/embed/Xn9HRJYas8s?si=kM-VyBqcvV21T915" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe className="morevideo" src="https://www.youtube.com/embed/Xn9HRJYas8s?si=kM-VyBqcvV21T915" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe className="morevideo" src="https://www.youtube.com/embed/Xn9HRJYas8s?si=kM-VyBqcvV21T915" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe className="morevideo" src="https://www.youtube.com/embed/Xn9HRJYas8s?si=kM-VyBqcvV21T915" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
        <div style={{ padding: '5px' }}></div>
        <footer>
            <div className="row">
                <div className="col-lg-4">
                    <p><strong>Our Links:</strong></p>
                    <p><strong><a href="index.html" style={{ textDecoration: 'none', color: 'black' }}>Home</a></strong></p>
                    <p><strong><a href="advertise.html" style={{ textDecoration: 'none', color: 'black' }}>Advertise</a></strong></p>
                    <p><strong><a href="about.html" style={{ textDecoration: 'none', color: 'black' }}>About Us</a></strong></p>
                    <p><strong><a href="listing.html" style={{ textDecoration: 'none', color: 'black' }}>Free Listing</a></strong></p>
                </div>
                <div className="col-lg-4">
                    <p><strong>Contact Us:</strong></p>
                    <p>Phone: +91-123456789</p>
                    <p>E-mail: example@email.com</p>
                </div>
                <div className="col-lg-4">
                    <div className="social-media">
                        <p><strong>Follow us on:</strong></p>
                        <a href="#"><i className="fa fa-facebook-square" style={{ fontSize: '30px', color: 'blue' }}></i></a>
                        <a href="#"><i className="fa fa-instagram" style={{ fontSize: '30px', color: 'red' }}></i></a>
                        <a href="#"><i className="fa fa-linkedin-square" style={{ fontSize: '30px', color: 'blue' }}></i></a>
                        <a href="#"><i className="fa fa-youtube-square" style={{ fontSize: '30px', color: 'red' }}></i></a>
                    </div>
                </div>
            </div>
        </footer>
        <hr />
        <div>
            <p className="copyright">
                <center>
                    <strong>Copyright © 2024</strong>
                </center>
            </p>
        </div>
    </div>
</div>
  )
}

export default Video
