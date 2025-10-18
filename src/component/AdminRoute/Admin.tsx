"use client";
import { useEffect, useState } from "react";
interface Parcel {
  weight: number;
  length: number;
  width: number;
  height: number;
  Quantity:number;
  Receivernumber: string;
  Sendernumber: string;
  Receivername: string;
  Receiveraddress: string;
  Sendername: string;
  Senderaddress: string;
  Content: string;
  Deliverydate: string;
}
interface User {
  _id: string;
  email: string;
  trackingId: string;
  role: string;
  status: string;
  parcels?: Parcel[];
  createdAt: number;
}
export default function Admin() {
  const [activeTab, setActiveTab] = useState("USERS");

  //const [users, setUsers] = useState<any[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("/api/admin/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  const [selectedStatus, setSelectedStatus] = useState<string>("None");

  const handleStatusChange = async (userId: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/users/${userId}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (res.ok) {
        setUsers((prev) =>
          prev.map((u) => (u._id === userId ? { ...u, status: newStatus } : u))
        );
        setSelectedStatus(newStatus); //
        localStorage.setItem(`status-${userId}`, newStatus);
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const [showSelectFor, setShowSelectFor] = useState<string | null>(null);

  return (
    <div className="bg-[#445370] rounded-md p-5  min-h-screen">
      <div className=" text-white justify-center text-center">
        <h1 className="text-3xl font-bold">Welcome, Admin 🚀</h1>
      </div>
      <div className="flex gap-5 md:flex-row flex-col ">
        {/* Tabs */}

        <div className="flex flex-wrap gap-4 border-b  border-gray-200 mb-6   md:flex-col flex-row ">
          {["USERS", "Security"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-base font-semibold cursor-pointer ${
                activeTab === tab
                  ? "border-b-2 border-[#343C6A] text-[#232323] "
                  : "text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="absolute left-1/9 transform -translate-x-1/2 hidden md:flex  h-[20rem] mb-100   ">
          <div className="flex flex-col h-[28rem] gap-70 w-[1px] bg-black justify-center items-center "></div>
        </div>

        <div className="px-5">
          {activeTab === "USERS" && (
            <div className="flex flex-col  gap-5 text-white">
              <p className="font-bold text-[[#343C6A]]">USERS THAT SIGNUP</p>

              <div className="overflow-x-auto mt-6">
                <table className="min-w-full border border-gray-300 rounded-lg">
                  <thead className="bg-white text-black">
                    <tr>
                      <th className="px-4 py-2 border">Email</th>
                      <th className="px-4 py-2 border">Role</th>
                      <th className="px-4 py-2 border">Tracking Numbers</th>
                      <th className="px-4 py-2 border">SHOW TRACKING</th>
                      <th className="border p-2">Parcels</th>
                      <th className="px-4 py-2 border">Signup Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, i) => (
                      <tr key={i} className="hover:bg-white hover:text-black">
                        <td className="px-4 py-2 border">{user.email}</td>
                        <td className="px-4 py-2 border">{user.role}</td>

                        <td className="px-4 py-2 border">
                          {user.trackingId ? (
                            <span>{user.trackingId}</span>
                          ) : (
                            <span className="text-gray-400">
                              No tracking yet
                            </span>
                          )}
                        </td>

                        <td className="px-4 py-2 border ">
                          {showSelectFor === user._id ? (
                            <select
                              value={user.status || "None"}
                              onChange={(e) => {
                                handleStatusChange(user._id, e.target.value);
                                setShowSelectFor(null);
                              }}
                              className="border px-2 py-1 rounded"
                              autoFocus
                            >
                              {[
                                "None",
                                "Placed",
                                "Packed",
                                "Hold",
                                "Shipped",
                                "Delivered",
                              ].map((step) => (
                                <option key={step} value={step}>
                                  {step}
                                </option>
                              ))}
                            </select>
                          ) : user.status ? (
                            <span
                              className="px-2 py-1 bg-green-100 text-green-800 rounded cursor-pointer"
                              onClick={() => setShowSelectFor(user._id)}
                            >
                              {user.status}
                            </span>
                          ) : (
                            <button
                              onClick={() => setShowSelectFor(user._id)}
                              className="bg-blue-500 text-white px-3 py-1 rounded"
                            >
                              Change Status
                            </button>
                          )}
                        </td>
                        <td className="border p-2">
                          {user.parcels && user.parcels.length > 0 ? (
                            <ul className="list-disc pl-4">
                              {user.parcels.map((parcel, idx) => (
                                <li key={idx}>
                                  Receiveraddress: {parcel.Receiveraddress}
                                  <br />→ Content: {parcel.Content}
                                  <br /> → Receivername: {parcel.Receivername}
                                  <br /> → Senderaddress: {parcel.Senderaddress}
                                  <br /> → Sendername: {parcel.Sendername}
                                  <br /> → Sendernumber: {parcel.Sendernumber}
                                  <br /> → Receivernumber: {parcel.Receivernumber}
                                  <br /> → Content: {parcel.Content}
                                  <br /> → weight: ({parcel.weight}kg)
                                  <br /> → width: ({parcel.width}kg)
                                  <br /> →length:({parcel.length}kg)
                                  <br /> → height:({parcel.height}kg)
                                  <br /> → Quantity:({parcel.Quantity})
                                  <br /> → deliveryDate:({
                                    parcel.Deliverydate
                                  }) <br />
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <span>No parcels yet</span>
                          )}
                        </td>
                        <td className="px-4 py-2 border">
                          {new Date(user.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "Security" && (
            <div className="text-[#343C6A]"> Security coming soon ...</div>
          )}
        </div>
      </div>
    </div>
  );
}
