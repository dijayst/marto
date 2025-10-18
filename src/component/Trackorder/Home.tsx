"use client";

import { Controller, useForm } from "react-hook-form";
import { useQuoteStore } from "./useTrackorder";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuthStoree } from "../Ustestore";
import PhoneInput from "react-phone-input-2";
import { useEffect, useState } from "react";

interface FormValues {
  weight: number;
  length: number;
  width: number;
  height: number;
  Receivernumber: string;
  Sendernumber: string;
Quantity:number
  Receivername: string;
  Receiveraddress: string;
  Sendername: string;
  Senderaddress: string;
  Content: string;
  Deliverydate: string;
}

export default function Home() {
  const router = useRouter();

  const { isLoggedIn, currentUser } = useAuthStoree.getState();

  const [defaultCountry, setDefaultCountry] = useState("us");

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => setDefaultCountry(data.country_code.toLowerCase()));
  }, []);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      weight: 0,
      length: 0,
      width: 0,
      height: 0,
      Quantity:0,
      Sendernumber: "",
      Receivernumber:"",
      Receivername: "",
      Receiveraddress: "",
      Sendername: "",
      Senderaddress: "",
      Deliverydate: "",
      Content: "",
    },
  });

  const { setData } = useQuoteStore();

  const onSubmit = async (data: FormValues) => {
    if (!isLoggedIn || !currentUser?.email) {
      localStorage.setItem("redirectAfterLogin", "/getaquote");
      router.push("/login");
      return;
    }

    setData(data);
    console.log("Form Data:", data);

    try {
      const res = await fetch("/api/users/update-parcel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: currentUser.email,
          parcel: data,
        }),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Update failed");

      alert("Parcel info saved successfully ✅");
      router.push("/trackorder");
    } catch (error: any) {
      console.error(error);
      alert("Failed to update parcel info ❌");
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 py-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-white bg-[#445370] border-2 shadow-lg rounded-md p-8 w-full md:max-w-5xl"
      >
        <p className="text-sm text-[#A1AFC9] mb-4">
          Do you have a discount on your account?
          <Link
            href={"/login"}
            className="text-white cursor-pointer hover:underline"
          >
            Log in
          </Link>
        </p>

        {/* FROM + TO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 ">
          <div>
            {" "}
            <label className="block text-sm font-semibold mb-1 text-white">
              Sender Address*
            </label>
            <input
              {...register("Senderaddress", {
                required: "Please enter the Senderaddres location.",
              })}
              placeholder="5672 Stoneridge Dr Suite 100,Pleasanton, CA 94588"
              className={`border rounded-md p-2 w-full  text-white ${
                errors.Senderaddress
                  ? "border-white focus:ring-red-400"
                  : "border-white "
              }`}
            />
            {errors.Senderaddress && (
              <p className="text-red-500 text-sm mt-1">
                {errors.Senderaddress.message}
              </p>
            )}
          </div>
          <div>
            {" "}
            <label className="block text-sm font-semibold mb-1 text-white">
              Receiveraddress*
            </label>
            <input
              {...register("Receiveraddress", {
                required: "Please enter the Receiveraddress location.",
              })}
              placeholder="11131 ViOLETA StREET VENTURA CA 93004"
              className={`border rounded-md p-2 w-full  text-white ${
                errors.Receiveraddress
                  ? "border-white focus:ring-red-400"
                  : "border-white "
              }`}
            />
            {errors.Receiveraddress && (
              <p className="text-red-500 text-sm mt-1">
                {errors.Receiveraddress.message}
              </p>
            )}{" "}
          </div>

          <div>
            {" "}
            <label className="block text-sm font-semibold mb-1 text-white">
              Sender name*
            </label>
            <input
              {...register("Sendername", {
                required: "Please enter the Sendername.",
              })}
              placeholder="Laborers trustfunds"
              className={`border rounded-md p-2 w-full  text-white ${
                errors.Sendername
                  ? "border-white focus:ring-red-400"
                  : "border-white "
              }`}
            />
            {errors.Sendername && (
              <p className="text-red-500 text-sm mt-1">
                {errors.Sendername.message}
              </p>
            )}
          </div>
          <div>
            {" "}
            <label className="block text-sm font-semibold mb-1 text-white">
              Receiver name*
            </label>
            <input
              {...register("Receivername", {
                required: "Please enter the Receivername.",
              })}
              placeholder="Patricia Hairston"
              className={`border rounded-md p-2 w-full  text-white ${
                errors.Receivername
                  ? "border-white focus:ring-red-400"
                  : "border-white "
              }`}
            />{" "}
            {errors.Receivername && (
              <p className="text-red-500 text-sm mt-1">
                {errors.Receivername.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1 text-white">
              Content*
            </label>
            <input
              {...register("Content", {
                required: "Please enter the Content of your package.",
              })}
              placeholder=" Trustfund Authorize License Claiming  Key"
              className={`border rounded-md p-2 w-full  text-white ${
                errors.Content
                  ? "border-white focus:ring-red-400"
                  : "border-white "
              }`}
            />
            {errors.Content && (
              <p className="text-red-500 text-sm mt-1">
                {errors.Content.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-white">
              Sender number*
            </label>
            <Controller
              name="Sendernumber"
              control={control}
              rules={{
                required: "Phone number is required",

                pattern: {
                  value: /^[0-9]+$/,
                  message: "Phone number must contain only digits",
                },
                minLength: {
                  value: 10,
                  message: "Phone number must be at least 10 digits",
                },
                maxLength: {
                  value: 15,
                  message: "Phone number cannot exceed 15 digits",
                },
              }}
              render={({ field: { onChange, value } }) => (
                <PhoneInput
                  onChange={(phone) => onChange(phone)}
                  country={defaultCountry}
                  enableSearch={true}
                  inputStyle={{
                    width: "100%",
                    borderRadius: "8px",
                    padding: "12px 48px 12px 58px",
                    border: "1px solid #ccc",

                    color: "#000",
                  }}
                  buttonStyle={{
                    border: "none",
                  }}
                  dropdownStyle={{
                    background: "red",
                    color: "#fff",
                  }}
                />
              )}
            />

            {errors.Sendernumber && (
              <p className="text-red-500 text-sm mt-1">
                {errors.Sendernumber.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-white">
              Receiver number
            </label>
            <Controller
              name="Receivernumber"
              control={control}
              rules={{
                required: "Receiver Phone number is required",

                pattern: {
                  value: /^[0-9]+$/,
                  message: "Phone number must contain only digits",
                },
                minLength: {
                  value: 10,
                  message: "Phone number must be at least 10 digits",
                },
                maxLength: {
                  value: 15,
                  message: "Phone number cannot exceed 15 digits",
                },
              }}
              render={({ field: { onChange, value } }) => (
                <PhoneInput
                  onChange={(phone) => onChange(phone)}
                  country={defaultCountry}
                  enableSearch={true}
                  inputStyle={{
                    width: "100%",
                    borderRadius: "8px",
                    padding: "12px 48px 12px 58px",
                    border: "1px solid #ccc",

                    color: "#000",
                  }}
                  buttonStyle={{
                    border: "none",
                  }}
                  dropdownStyle={{
                    background: "red",
                    color: "#fff",
                  }}
                />
              )}
            />

            {errors.Receivernumber && (
              <p className="text-red-500 text-sm mt-1">
                {errors.Receivernumber.message}
              </p>
            )}
          </div>
           <div>
            <label className="block text-sm font-semibold mb-1 text-white">
              Quantity *
            </label>
            <input
              type="number"
              {...register("Quantity", {
                required: "quantity is required.",
                min: { value: 1, message: "Quantity must be greater than 0." },
              })}
              className={`border rounded-md p-2 w-full text-white ${
                errors.Quantity
                  ? "border-white focus:ring-red-400"
                  : "border-white focus:ring-yellow-500"
              }`}
            />
            {errors.Quantity && (
              <p className="text-red-500 text-sm mt-1">
                {errors.Quantity.message}
              </p>
            )}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold mb-1 text-white">
            Delivery Date*
          </label>
          <input
            type="date"
            {...register("Deliverydate", { required: true })}
            placeholder="06-06-2024"
            className="border border-white rounded-md p-2 w-full text-white"
          />
          {errors.Deliverydate && (
            <p className="text-red-500 text-sm mt-1">Date is required</p>
          )}
        </div>

        {/* CHECKBOX */}

        <h3 className="text-white font-semibold mb-4">Parcel Information</h3>

        {/* PARCEL INFO */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div>
            <label className="block text-sm font-semibold mb-1 text-white">
              Weight (kg).*
            </label>
            <input
              type="number"
              {...register("weight", {
                required: "Weight is required.",
                min: { value: 1, message: "Weight must be greater than 0." },
              })}
              className={`border rounded-md p-2 w-full text-white ${
                errors.weight
                  ? "border-white focus:ring-red-400"
                  : "border-white focus:ring-yellow-500"
              }`}
            />
            {errors.weight && (
              <p className="text-red-500 text-sm mt-1">
                {errors.weight.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1 text-white">
              Length (cm).*
            </label>
            <input
              type="number"
              {...register("length", {
                required: "Length is required.",
                min: { value: 1, message: "Length must be greater than 0." },
              })}
              className={`border rounded-md p-2 w-full text-white ${
                errors.length
                  ? "border-white focus:ring-red-400"
                  : "border-white focus:ring-yellow-500"
              }`}
            />
            {errors.length && (
              <p className="text-red-500 text-sm mt-1">
                {errors.length.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1 text-white">
              Width (cm).*
            </label>
            <input
              type="number"
              {...register("width", {
                required: "Width is required.",
                min: { value: 1, message: "Width must be greater than 0." },
              })}
              className={`border rounded-md p-2 w-full text-white ${
                errors.width
                  ? "border-white focus:ring-red-400"
                  : "border-white focus:ring-yellow-500"
              }`}
            />
            {errors.width && (
              <p className="text-red-500 text-sm mt-1">
                {errors.width.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1 text-white">
              Height (cm).*
            </label>
            <input
              type="number"
              {...register("height", {
                required: "Height is required.",
                min: { value: 1, message: "Height must be greater than 0." },
              })}
              className={`border rounded-md p-2 w-full text-white ${
                errors.height
                  ? "border-white focus:ring-red-400"
                  : "border-white focus:ring-yellow-500"
              }`}
            />
            {errors.height && (
              <p className="text-red-500 text-sm mt-1">
                {errors.height.message}
              </p>
            )}
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="bg-[#33accc] text-white font-semibold px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2"
        >
          Get Quotes →
        </button>
      </form>
    </main>
  );
}
