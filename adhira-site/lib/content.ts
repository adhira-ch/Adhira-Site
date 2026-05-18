import siteData from "../content/site.json";

export type SiteContent = typeof siteData;

/** Single source of truth — edit content/site.json only */
export const content: SiteContent = siteData;

export const {
  site,
  hero,
  pages,
  chat,
  about,
  companies,
  gridItems,
  social,
  skills,
  workExperience,
  projects,
  featuredArticles,
} = content;

/** @deprecated Use `content` or named exports from @/lib/content */
export const aboutContent = about;
export const socialMedia = social.map((s, i) => ({ id: i + 1, ...s }));
