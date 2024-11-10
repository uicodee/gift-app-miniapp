import { useMemo } from "react";

export const useFormattedNumbers = (values: number[]) => {
  return useMemo(
    () =>
      values.map((value) =>
        new Intl.NumberFormat("en", {
          notation: "compact",
          compactDisplay: "short",
        }).format(value)
      ),
    [values]
  );
};
