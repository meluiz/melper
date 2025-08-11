/**
 * Matches HTML paragraph separators (closing </p> followed by opening <p>).
 */
export const HTML_NEWLINE_PARAGRAPHS_REGEX = /<\/p>(\r?\n)+<p>/gm

/**
 * Matches HTML tag names.
 */
export const HTML_TAG_NAME_REGEX = /<\/?([a-z0-9]+)([^>]*)>/gi

/**
 * Strips HTML tags.
 */
export const HTML_TAG_REGEX = /<\/?[^>]+(>|$)/gi

/**
 * Matches HTML line break tags (<br> or <br />).
 */
export const HTML_LINE_BREAK_REGEX = /<br( \/)?>/gi

/**
 * Removes HTML comments.
 */
export const HTML_COMMENT_REGEX = /<!--(.*?)-->/gs
