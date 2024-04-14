export const formatDate = (targetDate: string) => {
  const slicedDate = targetDate.slice(0, 10).split('-');
  return slicedDate.join('.');
};
