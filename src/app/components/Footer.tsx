import { Cloud, CloudRain, CloudSnow, CloudStorm, Sun, Wind } from "./icons";

export function Footer() {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:items-end mb-6 mx-8">
      <div className="flex mt-10 md:mt-0 bg-slate-300 rounded-full py-1 pr-5 pl-1 gap-2 h-14">
        <div className="bg-red-400 rounded-full p-1 border-2 border-red-500">
          <div className="w-9 h-9">
            <Wind />
          </div>
        </div>
        <div className="">
          <p className="text-xs text-gray-400">10 MIN AVG 8 MPH</p>
          <p className="text-xs text-gray-900">WIND GUST 14MPH SSE</p>
          <p className="text-xs text-gray-400">WIND SPEED 2.5sec</p>
        </div>
      </div>
      <div className="mt-10 md:mt-0">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right">
            <tbody>
              <tr>
                <th scope="row" className="px-6 py-1 font-bold">
                  Mon
                </th>
                <td className="px-6 py-1">30°</td>
                <td className="px-6 py-1">
                  <div className="w-8 h-8 text-slate-100 rounded-md">
                    <Sun />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row" className="px-6 py-1 font-bold">
                  Tue
                </th>
                <td className="px-6 py-1">23°</td>
                <td className="px-6 py-1">
                  <div className="w-8 h-8 text-slate-100 rounded-md">
                    <Cloud />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row" className="px-6 py-1 font-bold">
                  Wed
                </th>
                <td className="px-6 py-1">25°</td>
                <td className="px-6 py-1">
                  <div className="w-8 h-8 text-slate-100 rounded-md">
                    <CloudRain />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row" className="px-6 py-1 font-bold">
                  Thu
                </th>
                <td className="px-6 py-1">10°</td>
                <td className="px-6 py-1">
                  <div className="w-8 h-8 text-slate-100 rounded-md">
                    <CloudSnow />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row" className="px-6 py-1 font-bold">
                  Fri
                </th>
                <td className="px-6 py-1">30°</td>
                <td className="px-6 py-1">
                  <div className="w-8 h-8 text-slate-100 rounded-md">
                    <CloudStorm />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
