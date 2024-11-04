export interface Member {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export interface Item {
  id: string;
  name: string;
  quantity: number;
  addedBy: string;
  dateAdded: string;
}

export interface Chest {
  id: string;
  items: Item[];
}