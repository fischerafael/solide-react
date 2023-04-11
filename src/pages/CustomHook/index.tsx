import React from "react";
import { useCustomHook } from "./hooks";
import { CustomHookTemplate } from "./component";

export const CustomHook = () => {
  const props = useCustomHook();

  return <CustomHookTemplate {...props} />;
};
