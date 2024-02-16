/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import NFTtable from "./NFTtable";
import Image, { StaticImageData } from "next/image";

interface EachNFT {
    content: {
        game: StaticImageData | string;
        quantity: number | string;
        valuet: string | number;
        startDate: string;
        earning: string;
        expenses: string;
        gameNFTList: {
            NFT: StaticImageData | string;
            purchaseDate: string;
            purchaseValue: string;
            soldDate: string;
            earning: string;
            expenses: string;
        }[];
    };
}
const EachNFT = ({ content }: any) => {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    };
    // console.log(content, "content");
    // return (
    //     <div className="flex flex-col">
    //         <div
    //             className={
    //                 clicked
    //                     ? "flex bg-app-black-button rounded-t-md w-full py-6 items-center cursor-pointer"
    //                     : "flex bg-app-black-button rounded-md w-full py-6 items-center cursor-pointer justify-between"
    //             }
    //             // onClick={handleClick}
    //         >
    //             <div className="flex justify-center px-6 ">{content.id}</div>
    //             <div className=" px-6">
    //                 {/* <Image className="w-10 h-10 rounded" src={content.game} alt="Game"></Image> */}
    //                 <img className="w-10 h-10" src={content.img} alt="Game" />
    //             </div>
    //             <div className="flex justify-center px-6 ">{content.name}</div>
    //             <div className="flex justify-center px-6 ">{content.valuet}</div>
    //             <div className="flex justify-center px-6 ">{content.blockchain}</div>
    //             <div className="flex justify-center px-6 ">{content.kind ? content.kind : "Kind 1"}</div>
    //             <div className="flex justify-center px-6 ">{content.category ? content.category : "Category 1"}</div>
    //             {/* <div className="flex justify-end px-6  w-1/12">
    //                 <div className="flex rounded-md h-10 w-10 bg-app-black-select items-center justify-center">
    //                     {clicked ? (
    //                         <svg
    //                             className="h-6 w-6 text-gray-500"
    //                             fill="none"
    //                             viewBox="0 0 24 24"
    //                             stroke="currentColor"
    //                         >
    //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
    //                         </svg>
    //                     ) : (
    //                         <svg
    //                             className="h-6 w-6 text-gray-500"
    //                             fill="none"
    //                             viewBox="0 0 24 24"
    //                             stroke="currentColor"
    //                         >
    //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    //                         </svg>
    //                     )}
    //                 </div>
    //             </div> */}
    //         </div>
    //         {/* <div className={clicked ? "px-5 bg-app-black rounded-b-lg" : "hidden"}>
    //             <NFTtable table={content.gameNFTList} />
    //         </div> */}
    //     </div>
    // );
    return (
        <table
            className={`w-full ${
                clicked ? "bg-app-black-button rounded-t-md" : "bg-app-black-button rounded-md"
            } justify-between`}
        >
            <tbody>
                <tr className="flex py-6 items-center w-full ml-4">
                    <td className="w-1/6">{content.id}</td>
                    <td className="w-1/6">
                        <img className="w-10 h-10 rounded-lg object-cover" src={content.img} alt="Game" />
                    </td>
                    <td className="w-1/4">{content.name}</td>
                    <td className="w-1/6">{content.valuet}</td>
                    <td className="w-1/3">{content.blockchain}</td>
                    <td className="w-1/6">{content.kind ? content.kind : "Kind 1"}</td>
                    <td className="w-1/6">{content.category ? content.category : "Category 1"}</td>
                    {content.quantity && <td className="w-1/6">{content.quantity ? content.quantity : " 1"}</td>}
                    {!content.quantity && (
                        <td className="w-1/6">{content.supply_quantity ? content.supply_quantity : "1"}</td>
                    )}
                </tr>

                {/* Add the following code if you want to include a toggle button */}
                {/* <tr>
              <td colSpan="7" className="px-6">
                <div className={`flex justify-end w-1/12 ${clicked ? 'visible' : 'hidden'}`}>
                  <div className="flex rounded-md h-10 w-10 bg-app-black-select items-center justify-center">
                    {clicked ? (
                      <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </div>
                </div>
              </td>
            </tr> */}
            </tbody>
        </table>
    );
};

export default EachNFT;
