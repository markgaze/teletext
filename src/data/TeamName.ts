export const getTeamName = (name: string, maxLength: number = 17) => {
  if (name.length < maxLength) {
    return name;
  }

  let retval: string = "";
  let names: string[] = name.split(' ');
  retval += `${names[0]} `;
  names = names.slice(1);
  names.forEach(n => {
    retval += n.substring(0, 1);
  });

  return retval;
};
