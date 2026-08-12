// Utility functions for Persian digits and numbers formatting

export const toPersianDigits = (num) => {
  if (num === null || num === undefined) return '';
  const str = String(num);
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return str.replace(/[0-9]/g, (w) => persianDigits[parseInt(w, 10)]);
};

export const formatPersianNumber = (num) => {
  if (num === null || num === undefined) return '';
  const formatted = new Intl.NumberFormat('fa-IR').format(num);
  return formatted;
};
