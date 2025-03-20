import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <>
    {/* services Banner */}
      <section className="flex justify-center pt-[50px]  ">
      <figure className="relative ">
        <Image
          src={"/assets/images/checkout/checkout.png"}
          alt="checkout"
          width={1137}
          height={300}
          className=" border  rounded-2xl"
        ></Image>
        <div className="transparent-layer overlay_bg absolute   w-full h-full top-0">
          <div className="w-full h-full text-2xl font-semibold text-white flex items-center ps-24">
            <div>
              <h1 className="">Service Details</h1>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Link
              href={"/"}
              className=" absolute -bottom-0 bg-[#FF2E00] text-white text-[12px] font-bold px-[14px] py-[6px] rounded shadow-md uppercase hover:bg-[#D92A00] hover:scale-105 transition "
            >
              Home/Service Details
            </Link>
          </div>
        </div>
      </figure>
    </section>
   
    </>
  );
}
