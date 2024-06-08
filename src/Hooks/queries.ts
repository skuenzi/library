import { Collection } from "/Users/sarak/Documents/Programming/Personal Projects/library/src/types";

export const fetchAccessToken = () => {
  const tokenFromStorage = JSON.parse(
    sessionStorage.getItem("accessToken") || "{}"
  );

  return tokenFromStorage.access_token;
};

export const fetchApiCollections = async (accessToken: string) => {
  try {
    const res = await fetch(
      "https://www.googleapis.com/books/v1/mylibrary/bookshelves?fields=items(id,title,volumeCount)",
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    const data = await res.json();

    const shelvesToExclude = [
      "My Google eBooks",
      "Purchased",
      "Reviewed",
      "Recently viewed",
      "Browsing history",
    ];

    return data.items.filter(
      (shelf: Collection) => !shelvesToExclude.includes(shelf.title)
    );
  } catch (err) {
    console.error(err);
  }
};

export const fetchApiCollectionVolumes = async (
  shelfId: number,
  accessToken: string
) => {
  try {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/mylibrary/bookshelves/${shelfId}/volumes?fields=items(volumeInfo(authors,description,imageLinks/thumbnail,title))`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    const data = await res.json();

    return data.items.map((item: any) => ({
      ...item.volumeInfo,
      image: item.volumeInfo.imageLinks.thumbnail,
    }));
  } catch (err) {
    console.error(err, shelfId);
  }
};
