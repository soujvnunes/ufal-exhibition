import { ThemeMediaQuery } from "utils";
import { mapCols } from "./Col.util";

export type ColKs = "start" | "mid" | "end";

export type Cols = typeof mapCols[number];

export type ColProps = {
  [K in ColKs as `$${K}`]?: Cols | Partial<Record<ThemeMediaQuery, Cols>>;
};
