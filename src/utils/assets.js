/**
 * Utility function to get asset paths that work with GitHub Pages base path
 * @param {string} path - Asset path (e.g., "/assets/logo.png")
 * @returns {string} - Path with base URL prepended if needed
 */
export const getAssetPath = (path) => {
  if (!path) return path;
  // If path already starts with base URL, return as is
  if (path.startsWith(import.meta.env.BASE_URL)) return path;
  // If path starts with /, prepend base URL
  if (path.startsWith('/')) {
    return `${import.meta.env.BASE_URL}${path.slice(1)}`;
  }
  // Otherwise, return path as is (relative paths)
  return path;
};

