
const Header = () => {
    return (
        <header >
            <nav className="flex flex-col md:flex-row space-y-4 justify-between items-center my-12">
                <h2 className="text-3xl font-semibold">Recipe Calories</h2>
                <ul className="flex items-center gap-3">
                    <li><a href="">Home</a></li>
                    <li><a href="">Recipes</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Blog</a></li>
                </ul>
                <div className="flex items-center gap-3">
                    <label className="input bg-slate-200 rounded-full flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 ">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                        <input type="text" className="grow placeholder:text-black" placeholder="Search" />
                    </label>
                    <div className="avatar">
                        <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                </div>
            </nav>
            {/* banner  */}
            <div className="rounded-3xl" style={{
                background: ' linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), URL(https://wtm-assets-2.imgix.net/uploads/post/image/632/how_to_become_a_chef_in_melbourne.png?auto=format%2Cenhance&fit=crop&crop=entropy&w=994&h=520&fm=jpg&q=10&s=f4ebc451aa32c9f9ed02edc2c562703b)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'

            }}>
                <div className="max-w-screen-md w-10/12 text-center mx-auto py-32">
                    <h1 className="lg:text-5xl text-2xl md:text-3xl text-white font-semibold">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="text-white mt-6 mb-9">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                    <div className="space-x-4">
                        <button className="btn btn-accent rounded-full">Explore Now</button>
                        <button className="btn bg-transparent text-white rounded-full">Explore Now</button>
                    </div>
                </div>
            </div>

        </header>
    );
};

export default Header;