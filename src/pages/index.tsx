import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { fetchPage } from '../api/fetch';

export default function Home({ content }) {
  console.log({ content });
  const { title, body } = content.fields;

  return (
    <main>
      <h1>{title}</h1>
      {body.map(({ fields: { title, text }, sys }) => {
        return (
          <div key={sys.id}>
            <h1>{title}</h1>
            {documentToReactComponents(text)}
          </div>
        );
      })}
    </main>
  );
}

export const getStaticProps = async () => {
  const content = await fetchPage({
    locale: 'en-US',
    slug: 'home',
    pageContentType: 'home'
  });
  return { props: { content } };
};
