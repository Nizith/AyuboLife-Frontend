import React, { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegChessQueen } from "react-icons/fa6";
import { LiaUserPlusSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";

export default function Sidebar() {
    const [isOrgOpen, setIsOrgOpen] = useState(false);
    const [isChallengesOpen, setIsChallengesOpen] = useState(false);

    return (
        <div className="bg-white w-[270px] h-screen fixed top-0 left-0 p-5">
            {/* Logo */}
            <div className="flex justify-center mb-10">
                <img
                    src="/logo.png"
                    alt="Ayubo Life"
                    className="w-24"
                />
            </div>

            {/* Navigation */}
            <nav className="space-y-4">
                <div className="flex items-center space-x-3 p-2 hover:bg-black hover:text-white rounded-md cursor-pointer">
                    <LuLayoutDashboard />
                    <span>Dashboard</span>
                </div>

                {/* Organizations Dropdown */}
                <div>
                    <div
                        className="flex items-center justify-between space-x-3 p-2 hover:bg-black hover:text-white  rounded-md cursor-pointer"
                        onClick={() => setIsOrgOpen(!isOrgOpen)}
                    >
                        <div className="flex items-center space-x-3">
                            <LiaUserPlusSolid />
                            <span>Organizations</span>
                        </div>
                        <IoIosArrowDown className={`${isOrgOpen ? "rotate-180" : ""} transition-transform`} />
                    </div>
                    {isOrgOpen && (
                        <div className="ml-6 space-y-2">
                            <div className="p-1.5 hover:bg-black hover:text-white rounded-md cursor-pointer flex items-center space-x-2">
                                <span className="text-lg">•</span>
                                <span>All Organizations</span>
                            </div>
                            <div className="p-1.5 hover:bg-black hover:text-white rounded-md cursor-pointer flex items-center space-x-2">
                                <span className="text-lg">•</span>
                                <span>Disable Organizations</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Challenges Dropdown */}
                <div>
                    <div
                        className="flex items-center justify-between space-x-3 p-2 hover:bg-black hover:text-white rounded-md cursor-pointer"
                        onClick={() => setIsChallengesOpen(!isChallengesOpen)}
                    >
                        <div className="flex items-center space-x-3">
                            <FaRegChessQueen />
                            <span>Challenges</span>
                        </div>
                        <IoIosArrowDown className={`${isChallengesOpen ? "rotate-180" : ""} transition-transform`} />
                    </div>
                    {isChallengesOpen && (
                        <div className="ml-6 space-y-2">
                            <div className="p-1.5 hover:bg-black hover:text-white rounded-md cursor-pointer flex items-center space-x-2">
                                <span className="text-lg">•</span>
                                <span>All Organizations</span>
                            </div>
                            <div className="p-1.5 hover:bg-black hover:text-white rounded-md cursor-pointer flex items-center space-x-2">
                                <span className="text-lg">•</span>
                                <span>Ongoing Organizations</span>
                            </div>
                            <div className="p-1.5 hover:bg-black hover:text-white rounded-md cursor-pointer flex items-center space-x-2">
                                <span className="text-lg">•</span>
                                <span>Disable Organizations</span>
                            </div>
                            <div className="p-1.5 hover:bg-black hover:text-white rounded-md cursor-pointer flex items-center space-x-2">
                                <span className="text-lg">•</span>
                                <span>Complete Organizations</span>
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex items-center space-x-3 p-2 hover:bg-black hover:text-white rounded-md cursor-pointer">
                    <FaRegStar />
                    <span>Reviews</span>
                </div>
            </nav>
        </div>
    );
}
