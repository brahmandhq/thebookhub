"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { IoIosTimer } from "react-icons/io";
const AboutBook = ({ data }: { data: any }) => {
  const [time, setTime] = useState<string>("");

  const formatTime = (duration: string) => {
    const val = duration.split(":");
    const hours = val[0];
    const minutes = val[1];
    const seconds = val[2];

    let formattedTime = "";

    if (hours !== "00") {
      formattedTime += `${hours} ${Number(hours) > 1 ? "hours" : "hour"} `;
    }

    if (minutes !== "00" || hours !== "00") {
      formattedTime += `${minutes} ${
        Number(minutes) > 1 ? "minutes" : "minute"
      } `;
    }

    formattedTime += `${seconds} ${Number(seconds) > 1 ? "seconds" : "second"}`;

    return formattedTime.trim();
  };

  return (
    <motion.div className="flex flex-col items-center md:flex-row md:items-stretch gap-8 p-6">
      <div className="h-52 w-52 flex-none">
        <img
          src={data.imageLink ? data.imageLink : "/images/book1.jpg"}
          className="object-cover h-full w-full shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]"
        />
      </div>
      <div className="flex flex-col justify-between">
        <p className="flex flex-1 justify-center md:justify-start  items-end ">
          Chapters
        </p>
        <h1 className="md:text-5xl text-center md:text-left text-3xl font-bold block mt-2">
          {data.name}
        </h1>

        <p className="text-center  md:text-left mt-3">
          {data.author.firstName + " " + data.author.lastName}
        </p>
        <p
          dangerouslySetInnerHTML={{ __html: data.description }}
          className="text-center mt-5 md:text-left text-sm"
        />

        <div className="text-center mt-2 md:text-left md:justify-start flex gap-2 justify-center items-center">
          <div className="flex gap-2">
            {data.copyright_year !== 0 && (
              <>
                <span className="font-bold">Year of Publication:</span>{" "}
                {data.copyright_year}
              </>
            )}
            <span className="font-bold">Genres:</span>{" "}
            <span className="flex gap-1">
              {" "}
              {data.genres.map((genre: any, index: any) => (
                <span>
                  {" "}
                  {genre.name} {index !== data.genres.length - 1 ? "," : null}
                </span>
              ))}
            </span>
          </div>
          <div></div>
        </div>
        <div className="text-center mt-2 md:text-left md:justify-start flex gap-2 justify-center items-center">
          <span className="font-bold"> Running Time: </span>{" "}
          {formatTime(data.duration)}
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(AboutBook);
