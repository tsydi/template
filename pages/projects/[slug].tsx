import { GetServerSideProps } from 'next';
import { sanityClient } from '../../lib/sanity';
import { Layout } from '../../components/Layout';

const query = `*[_type == "seo"]{
  _id,
  title,
  description,
  keywords,
}`;

export const Project = ( { meta } : any ) => {
  return (
    <>
      {meta?.length > 0 && meta.map((seo: any) => (
      <Layout title={seo.title} keywords={seo.keywords} description={seo.description} key={seo._id}>

      </Layout>
      ))}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const meta = await sanityClient.fetch(query);
  return { props: { meta } };
}