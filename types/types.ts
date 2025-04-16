export type BlogPost = {
    id: string;
    title: string;
    description: string;
    image: {
      url: string;
      alt: string;
    };
    createdAt?: string;
  };