declare module "slugify" {
  interface SlugifyOptions {
    replacement?: string;
    remove?: RegExp;
    lower?: boolean;
    strict?: boolean;
    locale?: string;
    trim?: boolean;
  }

  export default function slugify(
    string: string,
    options?: SlugifyOptions
  ): string;
}
