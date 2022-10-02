export interface IImage {
  id: number;
  file: string;
  width: number;
  height: number;
  created_at: string;
  updated_at: string;
}

export interface IPage {
  id: number;
  page_index: number;
  image: IImage;
}

export interface IChapter {
  id: number;
  title: string;
  book: {
    id: number;
    title: string;
    chapter_ids: number[];
  };
  chapter_index: number;
  pages: IPage[];
}
