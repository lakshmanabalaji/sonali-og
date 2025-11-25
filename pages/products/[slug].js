import React from 'react';
import Image from 'next/image';
import SEO from '../../components/SEO';
import { getProducts, getProductBySlug, getGlobalSettings } from '../../lib/cms';
import { STRAPI_URL } from '../../lib/strapi';

const ProductPage = ({ product, globalSetting }) => {
  if (!product || !product.data) return <p>Product not found</p>;
  const attrs = product.data[0].attributes;
  const images = attrs.gallery?.data || [];

  return (
    <>
      <SEO title={attrs.product_name} description={(attrs.description || '').slice(0, 150)} />
      <div className="container py-5">
        <h1>{attrs.product_name}</h1>
        <div className="row">
          <div className="col-md-6">
            {images[0] ? (
              <div style={{ position: 'relative', width: '100%', height: 400 }}>
                <Image src={`${STRAPI_URL}${images[0].attributes.url}`} alt={attrs.product_name} fill style={{objectFit: 'cover'}} />
              </div>
            ) : null}
          </div>
          <div className="col-md-6">
            <div dangerouslySetInnerHTML={{ __html: attrs.description || '' }} />
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  try {
    const products = await getProducts();
    const paths = (products.data || []).map((p) => ({ params: { slug: p.attributes.slug } }));
    return { paths, fallback: 'blocking' };
  } catch (err) {
    console.error('getStaticPaths products error:', err);
    return { paths: [], fallback: 'blocking' };
  }
}

export async function getStaticProps({ params }) {
  try {
    const product = await getProductBySlug(params.slug);
    const globalSetting = await getGlobalSettings();
    return { props: { product, globalSetting }, revalidate: 10 };
  } catch (err) {
    console.error('getStaticProps product error:', err);
    return { props: { product: null, globalSetting: null }, revalidate: 10 };
  }
}

export default ProductPage;
