export const getPublicImagePath = (relativePath: string): string => {
  if (import.meta.env.DEV) {
    return `/herb-maiden/imgs/${relativePath}`;
  }
  
  const base = import.meta.env.BASE_URL || '/';
  return `${base.replace(/\/$/, '')}/imgs/${relativePath}`;
};

export const getRandomIntegerInclusive = (min: number, max: number): number => {
  min = Math.ceil(min);   // Ensure min is treated as an integer
  max = Math.floor(max);  // Ensure max is treated as an integer
  return Math.floor(Math.random() * (max - min + 1)) + min;
};