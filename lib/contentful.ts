import { createClient } from 'contentful';

const client = createClient({
  space: '2cq7ozg7bzng',
  accessToken: 'EaREqa5-8__Pi6HK8cw9A8A8cfh0F8np2f649pFkuSg',
});

export default client;

export interface BlogFields {
  title: string;
  description?: string;
  author?: string;
  content?: string;
  featuredImage?: {
    fields?: {
      file?: {
        url?: string;
      };
    };
  };
  category?: string;
  publishedDate?: string;
  readTime?: string;
}

export interface BlogPost {
  fields: BlogFields;
  sys: {
    id: string;
  };
}
