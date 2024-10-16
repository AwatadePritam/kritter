export function normalizeString(input) {
    let str = input.trim();
  
    str = str.replace(/[^a-zA-Z0-9\s]/g, "");
  
    str = str.replace(/\s+/g, " ");
  
    str = str
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  
    return str;
  }
  