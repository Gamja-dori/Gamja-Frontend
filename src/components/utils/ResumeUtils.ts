export const formatDate = (targetDate: string) => {
  const slicedDate = targetDate.slice(0, 10).split('-');
  return slicedDate.join('.');
};

export const blurName = (name: string) => {
  const blurredName = name[0] + '*'.repeat(name.length - 1);
  return blurredName;
};

export const parseSkills = (skills: string) => {
  const convertedSkills = JSON.parse('{"skills": ' + skills + '}').skills;
  return convertedSkills;
};
