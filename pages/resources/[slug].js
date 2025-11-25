import React from 'react';
import SEO from '../../components/SEO';
import { getResources, getResourceBySlug, getGlobalSettings } from '../../lib/cms';
import { STRAPI_URL } from '../../lib/strapi';

const ResourcePage = ({ resource, globalSetting }) => {
  if (!resource || !resource.data) return <p>Not found</p>;
  const attrs = resource.data[0].attributes;
  const imageData = attrs.cover_image?.data?.attributes;
  const imageUrl = imageData?.url;
  const fullImageUrl = imageUrl ? `${STRAPI_URL}${imageUrl}` : null;
  
  return (
    <>
      <SEO title={attrs.title} description={(attrs.body || '').slice(0, 150)} />
      <div className="container py-5">
        <h1>{attrs.title}</h1>
        {imageUrl ? (
          <img 
            src={fullImageUrl}
            alt={attrs.title}
            style={{ 
              width: '100%', 
              maxHeight: 480, 
              objectFit: 'cover', 
              borderRadius: 12 
            }}
            onError={(e) => {
              console.error('Image failed to load:', fullImageUrl);
              e.target.style.display = 'none';
            }}
            crossOrigin="anonymous"
          />
        ) : (
          <p style={{ color: '#999' }}>No cover image available</p>
        )}
        <div className="mt-4" dangerouslySetInnerHTML={{ __html: attrs.body || '' }} />
      </div>
    </>
  );
};

export async function getStaticPaths() {
  try {
    const resources = await getResources();
    const paths = (resources.data || []).map(r => ({ params: { slug: r.attributes.slug } }));
    return { paths, fallback: 'blocking' };
  } catch (err) {
    console.error('getStaticPaths resources error:', err);
    return { paths: [], fallback: 'blocking' };
  }
}

export async function getStaticProps({ params }) {
  try {
    const resource = await getResourceBySlug(params.slug);
    const globalSetting = await getGlobalSettings();
    return { props: { resource, globalSetting }, revalidate: 10 };
  } catch (err) {
    console.error('getStaticProps resource error:', err);
    return { props: { resource: null, globalSetting: null }, revalidate: 10 };
  }
}

export default ResourcePage;
