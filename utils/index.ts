export const colorPicker = (type: string) => {
  console.log(type);
  switch (type) {
    case 'fire':
      return 'text-orange-400';
    case 'fighting':
      return 'text-red-600';
    case 'water':
      return 'text-blue-400';
    case 'flying':
      return 'text-purple-200';
    case 'grass':
      return 'text-green-400';
    case 'poison':
      return 'text-purple-600';
    case 'electric':
      return 'text-yellow-400';
    case 'rock':
      return 'text-yellow-500';
    case 'ice':
      return 'text-blue-200';
    case 'steel':
      return 'text-gray-400';
    case 'ground':
      return 'text-yellow-600';
    case 'psychic':
      return 'text-red-400';
    case 'bug':
      return 'text-green-500';
    case 'ghost':
      return 'text-indigo-700';
    case 'dark':
      return 'text-yellow-800';
    case 'dragon':
      return 'text-purple-700';
    case 'fairy':
      return 'text-pink-400';
    default:
      return 'text-gray-200';
  }
};

export const padId = (num: string) => {
  const str = num.toString();
  const pad = '#000';
  return pad.substring(0, pad.length - str.length) + str;
};
