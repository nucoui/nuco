"use client";

import { defineColorScheme } from "@nuco/variable";
import { useLayoutEffect } from "react";

export const ColorScheme = () => {
  useLayoutEffect(() => {
    defineColorScheme();
  }, []);

  return null;
};
