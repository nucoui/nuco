"use client";

import { defineColorScheme } from "@nuco/variable"
import { useEffect, useLayoutEffect } from "react";

export const ColorScheme = () => {
  useLayoutEffect(() => {
    defineColorScheme();
  }, [])

  return null
}