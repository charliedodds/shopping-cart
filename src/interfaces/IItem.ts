interface IItem {
  gameInfo: {
    name: string;
    thumb: string;
    steamRatingText: string;
    steamRatingCount: string;
    steamRatingPercent: string;
    salePrice: string;
    retailPrice: string;
  };
  internalName: string;
}

export default IItem;
