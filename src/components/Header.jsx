const Header = ({ coins }) => {
  return (
    <div className="flex justify-between mb-6">
      <img className="w-16 h-16" src="https://i.ibb.co/3ycL14Q/logo.png" alt="logo" />
      <div className="flex items-center gap-9">
        <ul className="flex gap-9">
          <li><a href="">Home</a></li>
          <li><a href="">Fixture</a></li>
          <li><a href="">Teams</a></li>
          <li><a href="">Schedules</a></li>
        </ul>
        <button className="flex items-center gap-1 border py-2 px-3 rounded-lg">
          <h1 className="font-semibold">{coins}</h1>
          <p className="font-semibold">Coins</p>
          <img className="w-4" src="https://i.ibb.co/HF9CVxy/Untitled-1.png" alt="coin logo" />
        </button>
      </div>
    </div>
  );
};

export default Header;
