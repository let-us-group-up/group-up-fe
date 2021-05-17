export interface IBrowserStorage {
  setItem: (key: string, value: string) => void;
  getItem: (key: string) => string | void;
  removeItem: (key: string) => void;
}
