export function normalizeString(input) {
    // Step 1: Remove leading/trailing spaces
    let str = input.trim();
  
    // Step 2: Remove special characters and punctuation
    str = str.replace(/[^a-zA-Z0-9\s]/g, "");
  
    // Step 3: Replace multiple spaces with a single space
    str = str.replace(/\s+/g, " ");
  
    // Step 4: Convert to camel case
    str = str
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  
    return str;
  }
  