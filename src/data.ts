export type Category = {
  id: string;
  nameKh: string;
};

export type Product = {
  id: string;
  nameKh: string;
  categoryId: string;
  price: number;
  image: string;
  tag?: string;
};

export const categories: Category[] = [
  { id: "all", nameKh: "ទាំងអស់" },
  { id: "tea", nameKh: "គេសជ្ជៈប្រភេទតែ" },
  { id: "coffee", nameKh: "គេសជ្ជៈកាហ្វេ" },
  { id: "ice", nameKh: "គេសជ្ជៈក្រឡុក" },
  { id: "juice", nameKh: "គេសជ្ជៈផ្លែឈើ" },
  { id: "snack", nameKh: "អាហារសម្រន់" },
];

// Products are managed entirely from the Admin page (stored in the database).
// This static list is intentionally empty.
export const products: Product[] = [];

export type Option = { id: string; label: string; price: number };

export const optionGroups: { title: string; multi: boolean; options: Option[] }[] = [
  {
    title: "បន្ថែម",
    multi: true,
    options: [
      { id: "extra-shot", label: "គុជ", price: 1000 },
      { id: "extra-large", label: "គ្រីម", price: 1000 },
    ],
  },
  {
    title: "ស្ករ",
    multi: false,
    options: [
      { id: "s0", label: "ស្ករ 0%", price: 0 },
      { id: "s25", label: "ស្ករ 25%", price: 0 },
      { id: "s50", label: "ស្ករ 50%", price: 0 },
      { id: "s75", label: "ស្ករ 75%", price: 0 },
      { id: "s100", label: "ស្ករ 100%", price: 0 },
    ],
  },
  {
    title: "ទឹកកក",
    multi: false,
    options: [
      { id: "ice-none", label: "ទឹកកកច្រើន", price: 0 },
      { id: "ice-lite", label: "ទឹកកកតិច", price: 0 },
      { id: "ice-normal", label: "ទឹកកកធម្មតា", price: 0 },
    ],
  },
];

export const formatPrice = (n: number) =>
  `៛ ${n.toLocaleString("en-US")}`;
