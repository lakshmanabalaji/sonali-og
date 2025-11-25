import { strapiFetch } from './strapi';

export async function getHomeContent() {
  return strapiFetch('/api/home');
}

export async function getAboutContent() {
  return strapiFetch('/api/about');
}

export async function getProducts() {
  return strapiFetch('/api/products');
}

export async function getProductBySlug(slug) {
  return strapiFetch(`/api/products?filters[slug][$eq]=${encodeURIComponent(slug)}`);
}

export async function getCategories() {
  return strapiFetch('/api/product-categories');
}

export async function getCareers() {
  return strapiFetch('/api/careers');
}

export async function getResources() {
  return strapiFetch('/api/resources');
}

export async function getResourceBySlug(slug) {
  return strapiFetch(`/api/resources?filters[slug][$eq]=${encodeURIComponent(slug)}`);
}

export async function getGlobalSettings() {
  return strapiFetch('/api/global-setting');
}
