import type { ThemeConfig } from "antd";
import StyleVariables from "@/shared/styles/_variables.module.scss";

// [Theme Tool Config](https://ant.design/theme-editor#component-style)
const theme: ThemeConfig = {
  components: {
    Button: {
      // size: 48,
      // controlHeight: 48,

      sizeLG: 40,
      sizeMD: 32,
      sizeSM: 24,

      borderRadius: 100,
      borderRadiusLG: 100,
      borderRadiusXS: 100,
      borderRadiusSM: 100,

      paddingContentHorizontal: 24,

      defaultBg: StyleVariables.neutral1,
      defaultBorderColor: StyleVariables.neutral5,
      defaultColor: StyleVariables.neutral11,
      defaultShadow: "0px 2px 0px 0px rgba(0, 0, 0, 0.02)",

      colorBgContainerDisabled: "rgba(115, 45, 255, 0.35)",
      colorTextDisabled: "rgba(31, 31, 31, 0.35)",

      linkHoverBg: "transparent",
      colorLink: StyleVariables.brandingPrimary,
      colorLinkActive: StyleVariables.brandingDark,
      colorLinkHover: StyleVariables.brandingLight,

      textHoverBg: "transparent",
      colorText: StyleVariables.neutral11,
      colorBgTextActive: "transparent",

      colorPrimary: StyleVariables.brandingPrimary,
      colorPrimaryBorder: StyleVariables.brandingPrimary,
      colorPrimaryActive: StyleVariables.brandingDark,
      colorPrimaryHover: StyleVariables.brandingLight,
      primaryShadow: "0px 2px 0px 0px rgba(0, 0, 0, 0.04)",

      dangerColor: StyleVariables.brandingDark,

      colorError: StyleVariables.brandingPrimary,
      colorErrorActive: StyleVariables.brandingDark,
      colorErrorBg: StyleVariables.brandingDark,
      colorErrorBorderHover: StyleVariables.brandingDark,
      colorErrorBorder: StyleVariables.brandingDark,
      colorErrorHover: StyleVariables.brandingLight,

      contentFontSize: 14,
      contentFontSizeLG: 16,
      contentFontSizeSM: 14,

      fontSize: 14,
      fontSizeSM: 14,
      fontSizeLG: 16,

      fontWeight: 500
    },
    Switch: {
      colorPrimary: StyleVariables.math99thPurple400,
      colorPrimaryHover: StyleVariables.math99thPurple500
    }
  },
  token: {
    fontSize: 16,
    fontFamily: `var(--font-inter)`
  }
};

export default theme;
