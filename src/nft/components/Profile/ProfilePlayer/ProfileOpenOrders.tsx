import React from "react";
import { tableList } from "@nft/pages-components/Profile/datalist";
import CancelButton from "../../Button/CancelButton";

const ProfileOpenOrders = () => {
  return (
    <div>
      <div className="mt-10 font-semibold text-[24px] leading-normal">Open Orders</div>
      <div className="overflow-x-auto relative mt-6 w-full">
        <table className="table-auto text-left">
          <thead>
            <tr>
              <td className="text-app-black-duration text-[16px] leading-normal font-normal pr-6">
                Pair Date
              </td>
              <td className="text-app-black-duration text-[16px] leading-normal font-normal px-6">
                Type Conditions
              </td>
              <td className="text-app-black-duration text-[16px] leading-normal font-normal px-6">
                Price (TUSD)
              </td>
              <td className="text-app-black-duration text-[16px] leading-normal font-normal px-6">
                Total Filled
              </td>
              <td className="text-app-black-duration text-[16px] leading-normal font-normal text-right w-1/12 pl-6">
                Action
              </td>
            </tr>
          </thead>
          <tbody>
            {tableList.map((menu: any, idx: any) => (
              <tr
                key={idx}
                className={idx !== tableList.length - 1 ? "border-b-2 border-app-black" : ""}
              >
                <td className="py-3 pr-6">
                  <p className="text-[16px] leading-normal font-medium uppercase">
                    {menu.title.Pair}
                  </p>
                  <p className="text-app-black-duration font-medium text-[12px] leading-normal">
                    {menu.title.date}
                  </p>
                </td>
                <td className="px-6">
                  <div className="flex items-center">
                    <p className="text-[16px] leading-normal font-medium">{menu.title.Type}</p>
                    <p className="text-[16px] leading-normal font-medium text-red-600">
                      {menu.title.Condition}
                    </p>
                  </div>
                  <p className="text-app-black-duration font-medium text-xs">-</p>
                </td>
                <td className="px-6">
                  <p className="font-medium text-[16px] leading-normal">{menu.title.Price}</p>
                  <p className="text-app-black-duration font-medium leading-normal text-[12px]">
                    {menu.title.Price_under}
                  </p>
                </td>
                <td className="px-6">
                  <p className="font-medium text-[16px] leading-normal">{menu.title.Total}</p>
                  <p className="text-app-black-duration font-medium leading-normal text-[12px]">
                    {menu.title.TotalPercent}
                  </p>
                </td>
                <td className="pl-6">
                  <CancelButton title={menu.title.Action}></CancelButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfileOpenOrders;
