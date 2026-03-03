export async function fetcher<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) {
    const errorTxt = await res.text();
    throw new Error(errorTxt || 'Network response was not ok');
  }
  return res.json();
}
