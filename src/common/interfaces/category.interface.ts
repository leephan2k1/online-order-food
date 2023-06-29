export interface Category {
  _id: string;
  description: string;
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  name: string;
}
