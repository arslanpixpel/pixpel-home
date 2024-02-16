import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface HeaderWithPills {
    slug: string;
    title: string;
    tabs: boolean;
}

const HeaderWithPills = ({ slug, title, tabs }: HeaderWithPills) => {
    const navigate = useRouter();
    return (
        <>
            <div className="flex justify-between items-start pt-11">
                <div
                    className="flex py-2 h-12 px-4 items-center bg-app-black-button hover:bg-app-blue rounded-md cursor-pointer"
                    onClick={() => navigate.back()}
                >
                    <svg className="md:h-5 h-4 md:w-5 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 16l-4-4m0 0l4-4m-4 4h18"
                        />
                    </svg>
                </div>
                <div className="2xl:text-[40px] xl:text-3xl lg:text-2xl md:text-xl text-center text-lg -ml-10 mb-5 font-semibold">
                    {title ? title : "Market place"}
                </div>
                <div />
            </div>

            {tabs && (
                <div className="flex flex-col lg:flex-row gap-3 justify-between mx-auto mb-14 mt-5 sm:mt-0">
                    <div className="flex flex-row gap-3 lg:gap-5 flex-wrap justify-center lg:flex-nowrap">
                        <Link
                            href="/launchpad/playerside"
                            className={`${
                                slug === "/launchpad/playerside" ? "bg-app-blue" : "bg-app-black"
                            } +  px-8 py-4 2xl:text-lg font-medium rounded-md hover:bg-app-blue cursor-pointer uppercase`}
                        >
                            ROCKETS
                        </Link>
                        <button className="px-8 py-4 2xl:text-lg font-medium rounded-md bg-app-black hover:bg-app-blue cursor-pointer uppercase">
                            Ships
                        </button>
                        <Link
                            href="/launchpad/playerside/vest"
                            className={`${
                                slug === "/launchpad/playerside/vest" ? "bg-app-blue" : "bg-app-black"
                            } +  px-8 py-4 2xl:text-lg font-medium rounded-md hover:bg-app-blue cursor-pointer uppercase`}
                        >
                            Vest
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};

HeaderWithPills.defaultProps = {
    slug: "",
    title: "Market Place",
    tabs: true,
};

export default HeaderWithPills;
