import {Link} from "react-router";

const Navbar = (): React.ReactElement => {
    return (
        <nav className="navbar">
            <Link to="/">
                <p className="text-2xl font-bond text-graid">RESUMIND</p>
            </Link>
            <Link to="/upload" className="primary-button w-fit">
                Upload Resume
            </Link>



        </nav>
)
};

export default Navbar;
