import { createClient } from 'contentful';

type FetchPageParams = {
  pageContentType: string;
  slug: string;
  locale: string;
};

export async function fetchPage(params: FetchPageParams) {
  const space = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

  if (!space) {
    throw new Error('CONTENTFUL_SPACE_ID is not defined');
  }
  if (!accessToken) {
    throw new Error('CONTENTFUL_ACCESS_TOKEN is not defined');
  }

  const client = createClient({ space, accessToken });

  const query = {
    limit: 1,
    include: 10,
    locale: params.locale,
    'fields.slug': params.slug,
    content_type: params.pageContentType
  };
  const {
    items: [page],
    errors
  } = await client.getEntries(query);

  if (errors) {
    throw new Error('Failed to fetch Contentful page entry');
  }

  return page || null;
}
