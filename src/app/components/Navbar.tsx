import { Menu, Sunset, User } from "./icons";

export function Navbar() {
  return (
    <div className="flex justify-between mt-5 mx-8">
      <div className="flex items-center gap-6">
        <div className="w-12 h-12">
          <Sunset />
        </div>
        <h3 className="hidden md:block">Weather App</h3>
        <h3 className="hidden md:block">Home</h3>
      </div>
      <div className="flex items-center gap-6">
        <div className="w-6 h-6">
          <User />
        </div>
        <div className="w-6 h-6">
          <Menu />
        </div>
      </div>
    </div>
  );
}
