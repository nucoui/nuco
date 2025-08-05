const LANG = {
  en: {
    code: "en",
    name: "English",
  },
  ja: {
    code: "ja",
    name: "日本語",
  },
  cn: {
    code: "cn",
    name: "中文",
  },
} as const satisfies Record<string, { code: string; name: string }>;

type LangCode = keyof typeof LANG;

export { LANG };
export type { LangCode };
