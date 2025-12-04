"use client";

import { ConfigProvider, theme } from "antd";
import type { ThemeConfig } from "antd";

const config: ThemeConfig = {
  token: {
    colorPrimary: "#000000",
    borderRadius: 10,
  },
  algorithm: theme.defaultAlgorithm,
};

export default function AntdProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ConfigProvider theme={config}>{children}</ConfigProvider>;
}
