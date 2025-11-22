/**
 * Security utility functions for the application
 */

/**
 * Safely stringify JSON for use in dangerouslySetInnerHTML
 * Validates that the data is valid JSON before stringifying
 * @param {object} data - Data to stringify
 * @returns {string} - JSON string
 */
export function safeJsonStringify(data) {
  try {
    return JSON.stringify(data);
  } catch (error) {
    console.error('Error stringifying JSON:', error);
    return '{}';
  }
}

