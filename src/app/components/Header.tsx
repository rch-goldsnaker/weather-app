
export function Header() {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:mt-8 md:mx-8">
      <div className="flex flex-col mt-10 md:mt-0 text-center md:text-left">
        <h1 className="text-6xl font-bold text-shadow-lg shadow-slate-800">
          Good
        </h1>
        <h1 className="text-6xl font-bold text-shadow-lg shadow-slate-800">
          Morning
        </h1>
        <p className="text-sm mt-3 text-shadow shadow-slate-800">
          Probability of precipitation: 0%
        </p>
        <p className="text-sm text-shadow shadow-slate-800">Humidity: 73%</p>
      </div>
      <div className="flex flex-col text-center mt-48 md:mt-0 md:text-right md:items-end">
        <h1 className="text-8xl text-shadow-lg shadow-slate-800">27°c</h1>
        <p className="text-sm mt-1 text-shadow shadow-slate-800">
          Friday, 8:00 p.m.
        </p>
        <p className="text-sm mt-1 text-shadow shadow-slate-800">Raining</p>
      </div>
    </div>
  );
}
