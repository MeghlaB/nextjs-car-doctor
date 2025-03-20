import dbcollection, { collectionGroup } from "@/lib/dbConnect";
import Image from "next/image";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import SectionTitle from "../Sectiontitle/Sectiontitle";
import Link from "next/link";

export default async function Services() {
  // database thake data.....................
  const serviceCollection = dbcollection(collectionGroup.servicesCollection);
  const data = await serviceCollection.find({}).toArray();
  console.log(data);

  return (
    <div>
      <SectionTitle
        title={"services"}
        subHeadings={"Our Service Area"}
        headings={
          "The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable"
        }
      ></SectionTitle>
      <div className="grid grid-cols-12 gap-4 container mx-auto  ">
        {data.map((item) => {
          return (
            <div
              className="col-span-12 md:col-span-6 lg:col-span-4 p-4 h-full border border-gray-300 mx-auto rounded-[10px]"
              key={item._id}
            >
              {/* iamage */}
              <Image
                src={item?.img}
                width={314}
                height={208}
                alt="car-doctor"
                className="rounded-[9px]"
              ></Image>
              {/* titile */}
              <div className="py-8">
                <h1 className=" text-2xl lg:text-3xl font-bold">
                  {item?.title}
                </h1>
                <div className="text-2xl font-bold text-red-500 flex items-center justify-between pt-3">
                  <p className="text-xl font-bold text-red-500">
                    <span>Price :</span>
                    {item?.price}
                  </p>
                  <Link href={`/services/${item?._id}`}>
                    <AiOutlineArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
