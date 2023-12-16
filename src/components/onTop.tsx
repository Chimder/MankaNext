import { useEffect } from "react";
import { useRouter } from "next/router";

function ScrollToTopOnRouteChange() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (url !== router.asPath) {
        window.scrollTo(0, 0);
      }
    };

    router.events.on("beforeHistoryChange", handleRouteChange);

    return () => {
      router.events.off("beforeHistoryChange", handleRouteChange);
    };
  }, [router]);

  return null;
}

export default ScrollToTopOnRouteChange;
