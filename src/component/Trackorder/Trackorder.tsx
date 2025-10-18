"use client";

import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import Home from "./Home";
import Link from "next/link";

type Userr = {
  status?: string;
  // add other fields if needed
};

const userr: Userr | null = {
  status: "Packed",
};

interface Parcel {
  weight: number;
  length: number;
  width: number;
  height: number;
  Quantity: number;
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
  parcels?: Parcel[];
}
export default function Trackorder() {
  const [activeTab, setActiveTab] = useState("Trackorder");

  const [trackingId, setTrackingId] = useState<string>("");

  useEffect(() => {
    const fetchId = async () => {
      const res = await fetch("/api/tracking");
      const data = await res.json();
      setTrackingId(data.trackingId);
    };
    fetchId();
  }, []);

  const [user, setUser] = useState<any[]>([]);

  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      setUserEmail(email);
    }
  }, []);

  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (!email) return;

    const fetchStatus = async () => {
      try {
        const res = await fetch(`/api/users/${encodeURIComponent(email)}`);
        const data = await res.json();
        setStatus(data.status);
      } catch (err) {
        console.error("Error fetching status:", err);
      }
    };

    fetchStatus();
  }, []);

  const visibleStatuses = ["Placed", "Packed", "Hold", "Delivered", "Shipped"];

  const [userData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!userEmail) return;

      try {
        setLoading(true);
        const res = await fetch(`/api/users/get-user?email=${userEmail}`);
        if (!res.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await res.json();
        setUserData(data.user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userEmail]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 md:p-6">
      <div className="px-0 py-10 md:px-10 h-full">
        <div className="bg-[#445370] rounded-md p-6 md:p-10 flex md:flex-row flex-col gap-5 min-h-screen">
          {/* Tabs */}

          <div className="flex flex-wrap gap-4 border-b  border-gray-200 mb-6  md:flex-col flex-row ">
            {["Trackorder"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 text-base font-semibold cursor-pointer ${
                  activeTab === tab
                    ? "border-b-2 border-[#343C6A] text-white "
                    : "text-[#718EBF]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="absolute left-1/6 transform -translate-x-1/2 hidden md:flex  h-[20rem] mb-100   ">
            <div className="flex flex-col h-[28rem] gap-70 w-[1px] bg-black justify-center items-center "></div>
          </div>

          <div className="md:px-5  ">
            {activeTab === "Trackorder" && (
              <div className="text-[#343C6A]">
                <div className="max-w-4xl mx-auto  p-6">
                  {/* Track Order */}
                  <h2 className="text-lg font-semibold mb-4 text-white">
                    Track your Order
                  </h2>

                  <div className="mt-6 text-black">
                    {userData ? (
                      <>
                        <h2 className="text-4xl flex md:flex-row flex-col font-medium text-white">
                          Welcome {userData.email}
                        </h2>

                        <p className="text-xl text-[#33accc]">
                          <span className="text-white font-medium">
                            Your Tracking order is :{" "}
                            {userData.trackingId?.slice(0, 13)}
                          </span>
                        </p>

                        {userData.parcels && userData.parcels.length > 0 ? (
                          <div className="mt-6 ">
                            {visibleStatuses.includes(status || "") ? (
                              <div className="flex flex-col items-center justify-between mb-4">
                                {[
                                  "Order Placed",
                                  "Shipped",
                                  "Hold",
                                  "Available for pickup",
                                  "Delivered",
                                ].map((step, index) => {
                                  const stepsOrder = [
                                    "Placed",
                                    "Packed",
                                    "Hold",
                                    "Shipped",
                                    "Delivered",
                                  ];
                                  const currentStepIndex = stepsOrder.indexOf(
                                    status || "None"
                                  );
                                  const isActive = index <= currentStepIndex;

                                  return (
                                    <div
                                      key={step}
                                      className="flex flex-col items-center mx-4"
                                    >
                                      {/* round div */}
                                      <div
                                        className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                                          isActive
                                            ? "bg-[#33accc]"
                                            : "bg-gray-300"
                                        }`}
                                      >
                                        {isActive ? "✓" : ""}
                                      </div>

                                      {/* label */}
                                      <span className="mt-2 text-sm text-black">
                                        {step}
                                      </span>

                                      {/* connecting line (optional) */}
                                      {index < stepsOrder.length - 1 && (
                                        <div
                                          className={`h-12 w-1 ${
                                            index < currentStepIndex
                                              ? "bg-[#33accc]"
                                              : "bg-gray-300"
                                          }`}
                                        ></div>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            ) : (
                              <div className="flex flex-col items-center justify-center mt-4">
                                <div className="loading-spinner border-4 border-t-[#33accc] border-gray-300 rounded-full w-8 h-8 animate-spin"></div>
                                <p className="mt-3 text-black text-xl font-medium">
                                  Processing your order...
                                </p>
                              </div>
                            )}
                          </div>
                        ) : (
                          <>
                            <p className="text-red-400 text-2xl">
                              No parcels found
                            </p>
                            <Link
                              href={"/getaquote"}
                              className="text-white cursor-pointer hover:underline"
                            >
                              Do you want to ship a parcel
                            </Link>
                          </>
                        )}
                      </>
                    ) : (
                      <p>No user data available</p>
                    )}
                  </div>
                </div>
              </div>
            )}
            {activeTab === "Security" && (
              <div className="text-[#343C6A] ml-4">
                Security coming soon ...
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
