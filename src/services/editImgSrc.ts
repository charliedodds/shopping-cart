const editImgSrc = (imgURL: string): string => {
  // convert small img received from API to larger size
  const newImgSrc = imgURL.replace('capsule_sm_120', 'header');
  return newImgSrc;
};

export default editImgSrc;
