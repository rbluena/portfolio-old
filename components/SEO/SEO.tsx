import Head from 'next/head';
import meData from '@app/data/me';

interface MetaType {
  name?: string;
  property?: string;
  content: string;
}

interface Props {
  title?: string;
  description?: string;
  newMeta?: MetaType[];
}

const SEO = ({ title = meData.name, newMeta = [] }: Props) => {
  const meta: MetaType[] = [...newMeta];

  return (
    <Head>
      <title>{title}</title>

      {meta?.map((item) => {
        if (item.name) {
          return (
            <meta key={item.name} name={item.name} content={item.content} />
          );
        }

        return (
          <meta
            key={item.name}
            property={item.property}
            content={item.content}
          />
        );
      })}
    </Head>
  );
};

export default SEO;
