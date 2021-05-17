/**
 * Sanitize a string for SQL
 *
 * @param str
 * @returns Sanitized string
 */
export function stringSanitizer(str: string): string {
  return string.gsub(
    str,
    "[';\\, ]",
    "",
  )[0];
}
