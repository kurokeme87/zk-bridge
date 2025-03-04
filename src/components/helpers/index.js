export const truncateText = (name, length) => {
  if (name?.length > length) {
    return name.slice(0, length) + "...";
  } else {
    return name;
  }
};
