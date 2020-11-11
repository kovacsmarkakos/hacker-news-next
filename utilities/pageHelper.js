export const getPageDetails = (pathname) => {
  const prefix = 'Hacker News Next |';
  switch (pathname) {
    case '/top':
      return `${prefix} Top`;
    case '/new':
      return `${prefix} New`;
    case '/show':
      return `${prefix} Show`;
  }
};
