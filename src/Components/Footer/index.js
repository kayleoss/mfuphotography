
export default function Footer(){
    return (
        <>
        <div className="bg-dark text-light p-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <ul className="list-unstyled">
                            <li className="pt-2"><a className="text-light text-decoration-none fs-5" href="https://instagram.com/fu.molly" rel="noreferrer" target="_blank"><i className="fa fa-instagram"></i> fu.molly</a></li>
                            <li className="pt-2"><a className="text-light text-decoration-none fs-5" href="https://1x.com/mfuphotography" rel="noreferrer" target="_blank"><i className="fa fa-image"></i> mfuphotography</a></li>
                            <li className="pt-2"><a className="text-light text-decoration-none fs-5" href="#" rel="noreferrer" target="_blank"><i className="fa fa-dollar"></i> molly.fu</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                        <ul className="list-unstyled">
                            <li className="pt-2"><a className="text-light text-decoration-none fs-5" href="/#featured">Featured</a></li>
                            <li className="pt-2"><a className="text-light text-decoration-none fs-5" href="#categories">Categories</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-black text-light text-end p-2">
            Molly Fu Photography &copy; All Rights Reserved {new Date().getFullYear()}
        </div>
        </>
    )
};