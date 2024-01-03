import { fetchPage } from '../api/fetch';
import markdown from '../lib/markdown';

export default function Home({ content }) {
  const { title, body } = content.fields;

  return (
    <main className="prose-h1:text-4xl prose-h2:text-3xl prose-p:text-xl space-y-8 m-6">
      <h1>{title}</h1>
      {body.map(({ fields: { title, text }, sys }) => {
        return (
          <div key={sys.id} className="space-y-4">
            <h2>{title}</h2>
            <div className="space-y-3">{markdown(text)}</div>
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
