// import { useState, useEffect } from "react";

// function useDebounce(value: string, delay: number) {
//   const [debouncedValue, setDebouncedValue] = useState<string>(value);

//   useEffect(() => {
//     if (value.length < 0) return;
//     const handler = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay);

//     return () => {
//       clearTimeout(handler);
//     };
//   }, [value, delay]);

//   return debouncedValue;
// }

// export default useDebounce;
