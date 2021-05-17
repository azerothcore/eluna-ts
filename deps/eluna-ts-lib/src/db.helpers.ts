/**
 * Sanitize a string for SQL
 * @inheritdoc
 * @param str
 * @returns
 */
export function stringSanitizer(str: string): string {
  return string.gsub(
    str,
    "[';\\, ]",
    "",
  )[0];
}
