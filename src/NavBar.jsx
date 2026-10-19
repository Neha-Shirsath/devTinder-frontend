const NavBar = () => {

    return(

        <div className="navbar bg-base-300 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl ">
        <img className="w-56" src="/DevTinderLogo.png" alt="devtinder-logo" />
    </a>
  </div>
  <div className="flex gap-2">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mr-5">
        <div className="w-12 rounded-full">
          <img
            alt="dev-user"
            src="https://cdn-icons-png.flaticon.com/512/6998/6998058.png" />
        </div>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between mr-10">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>

)
}

export default NavBar;