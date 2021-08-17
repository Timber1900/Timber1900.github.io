declare module "*.png" {
  const value: StaticImageData;
  export = value;
}

declare module "*.mp4" {
  const value: any;
  export = value;
}
