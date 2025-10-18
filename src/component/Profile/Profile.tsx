import React from 'react'
import { useAuthStoree } from '../Ustestore';
import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';

export default function Profile() {
    
  const { currentUser,  logout } = useAuthStoree();
   
  return (
     <div className="flex justify-center items-center py-18 px-10 p-8 bg-[#f7f7f7]  md:mt-20 mt-20">
    
      <Link
                href="/user-profile"
                className="bg-[#3e80e4] text-white px-6 py-2 rounded hover:bg-white hover:text-[#3e80e4] hover:border hover:border-[#3e80e4]"
              >
                {currentUser?.firstName || (
                          <FaUserCircle size={30} color="#3e80e4" />
                        )}
                UserProfile
              </Link>

              <button className="text-sm px-2 py-1 border border-red-300 text-red-600 hover:bg-red-50" onClick={logout}>
        Sign Out
      </button>

          <div className="flex flex-col text-xs text-gray-600">
      <span> Welcome,{currentUser?.email}</span>
      <span className="capitalize"> Your role:{currentUser?.role}</span>
    </div>

    </div>
  )
}
