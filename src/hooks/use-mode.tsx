import { setClassName } from "libs";
import {
  createContext,
  ProviderProps,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import useMedia from "./use-media";

const types = {
  toggle: "toggle",
  set: "set",
} as const;
const is = {
  light: "light",
  dark: "dark",
} as const;
const initialState = {
  is: is.light,
  dispatch: () => {},
};

export type Is = typeof is[keyof typeof is];
type Action =
  | {
      type: typeof types.toggle;
    }
  | {
      type: typeof types.set;
      props: Is;
    };
type State = {
  is: Is;
  dispatch(_action: Action): void;
};

const Context = createContext<State>(initialState);

function reducer(state: Is, action: Action): Is {
  switch (action.type) {
    case types.toggle:
      return state === initialState.is ? is.dark : is.light;
    case types.set:
      return action.props;
    default:
      throw new Error("Action not found.");
  }
}
function Provider(props: Omit<ProviderProps<State>, "value">) {
  const storedMode = (localStorage.getItem("mode") as Is) || is.light;
  const [state, dispatch] = useReducer(reducer, storedMode);
  const value: State = useMemo(
    () => ({
      is: state,
      dispatch,
    }),
    [state],
  );

  return <Context.Provider value={value} {...props} />;
}
function useMode(): State {
  const prefersDark = useMedia("(prefers-color-scheme: dark)");
  const mode = useContext(Context);
  const storedMode = localStorage.getItem("mode");

  useEffect(() => {
    const { documentElement, body } = document;

    if (mode.is === "light") {
      setClassName("fs-a")("fs-sa", "fs-g")(documentElement);
      setClassName("bg-w100%", "c-b100%")("bg-b100%", "c-w100%")(body);
    } else {
      setClassName("fs-sa", "fs-g")("fs-a")(documentElement);
      setClassName("bg-b100%", "c-w100%")("bg-w100%", "c-b100%")(body);
    }
  }, [mode.is]);
  useEffect(() => {
    if (!storedMode) {
      mode.dispatch({ type: "set", props: prefersDark ? "dark" : "light" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return mode;
}

Context.displayName = "Modes";
export default Object.assign(useMode, { Provider, types });
