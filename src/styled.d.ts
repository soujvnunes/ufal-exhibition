import "styled-components";
import { Theme } from "app";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
