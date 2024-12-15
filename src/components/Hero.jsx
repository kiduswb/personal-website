// Hero.jsx

function Hero()
{
    return (
        <div className="row mb-5" data-aos="fade-up">
            <div className="col-lg-6 mx-auto text-center">
                <h1>Hello! I'm Kidus.</h1>
                <p className="lead">I'm a software developer pursuing a career in tech & IT.</p>
                <div className="d-flex flex-row gap-1 justify-content-center">
                    <a href="mailto:mail@kidus.ca" className="btn btn-sm btn-huwhite rounded-0">
                        <i className="fa fa-envelope me-1"></i>
                        mail@kidus.ca
                    </a>
                    <a href="https://github.com/kiduswb" target="_blank" rel="noopener" className="btn btn-sm btn-huwhite rounded-0">
                        <i className="fab fa-github me-1"></i>
                        @kiduswb
                    </a>
                    <a href="#" download className="btn btn-sm btn-huwhite rounded-0">
                        <i className="fa fa-file-arrow-down me-1"></i>
                        resume.pdf
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;