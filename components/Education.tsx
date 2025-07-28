import React from "react";
import TimelineDemo from "./TimelineDemo";

const Education = () => {
  return (
    <section id="education" className="py-20">
      <h1 className="heading">
        Educational <span className="text-purple">Journey</span>
      </h1>

      {/* <div className="flex flex-col items-center max-lg:mt-10">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10"> */}
      <TimelineDemo />
      {/* </div>
      </div> */}
    </section>

    // <div id="work-experience" className="py-20 w-full">
    //   <h1 className="heading">
    //     Educational <span className="text-purple">Journey</span>
    //   </h1>

    //   <TimelineDemo />
    // </div>
  );
};

export default Education;
