// utils/fetchOptions.js
export const fetchCategories = async () => {
  const res = await fetch('http://localhost:9000/category/get-all-categories'); // your actual API
  if (!res.ok) throw new Error('Failed to fetch options');
  return res.json();
};
