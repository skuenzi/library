export type Book = {
  id?: string;
  title: string;
  description: string;
  image: string;
  authors: Array<string>;
};

export type Collection = {
  id: string;
  title: string;
  volumeCount: number;
};

export type AccessToken = {
  access_token: string;
  authuser: string;
  expires_in: number;
  prompt: string;
  scope: string;
  token_type: string;
};
