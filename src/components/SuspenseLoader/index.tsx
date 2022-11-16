import { useEffect } from "react";
import NProgress from "nprogress";

const SuspenseLoader = () => {
  useEffect(() => {
    NProgress.start();
    return () => {
      NProgress.done();
    };
  }, []);

  return <h1 className="text-lg">Loading...</h1>;
};

export default SuspenseLoader;
