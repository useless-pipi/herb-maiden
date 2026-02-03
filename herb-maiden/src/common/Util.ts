export const getPublicImagePath = (relativePath: string): string => {
  if (import.meta.env.DEV) {
    return `/herb-maiden/imgs/${relativePath}`;
  }
  
  const base = import.meta.env.BASE_URL || '/';
  return `${base.replace(/\/$/, '')}/imgs/${relativePath}`;
};