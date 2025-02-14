"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { blogs, projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { Meteors } from "./ui/Meteors";

const Blogs = () => {
  return (
    <div id="blogs" className="pt-20 pb-5">
      <h1 className="heading">
        Explore <span className="text-purple">Blogs</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-2">
        {blogs?.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[18rem] flex items-center justify-center  sm:w-96 w-[80vw] "
            key={item.id}
          >
            <PinContainer title="dev.to" href={item.link}>
              <a href={item.link} target={"_blank"}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>
              </a>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
