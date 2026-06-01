/** Тур хэлээр текст — М1-д Монгол primary, English secondary хэлбэрээр.
 *  Цаашид Astro's i18n routing-аар /en/* prefix хэрэглэх боломжтой. */

export type Lang = "mn" | "en";

export const LANGS: Lang[] = ["mn", "en"];

export const DEFAULT_LANG: Lang = "mn";

export function pickLang(input?: string | null): Lang {
  if (input === "en") return "en";
  return DEFAULT_LANG;
}
