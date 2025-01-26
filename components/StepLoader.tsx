import React, { useEffect, useState } from "react";
import { MultiStepLoader } from "./ui/MultiStepLoader";
import { loadingStates } from "@/data";

const StepLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timeout: any;
    if (loading) {
      const totalDuration = loadingStates?.length * 1800;

      timeout = setTimeout(() => {
        setLoading(false);
      }, totalDuration);
    }

    return () => clearTimeout(timeout);
  }, []);
  return (
    <MultiStepLoader
      loadingStates={loadingStates}
      loading={loading}
      duration={2000}
    />
  );
};

export default StepLoader;
