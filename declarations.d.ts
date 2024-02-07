declare module "*.png" {
  const value: any;
  export default value;
}

declare module '@env' {
  export const GOOGLE_MAPS_API_KEY: string;
}