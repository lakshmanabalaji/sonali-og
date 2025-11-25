import { getGlobalSettings } from './cms';

/**
 * Returns a getStaticProps function that injects globalSetting into props.
 * If `baseHandler` is provided, its returned props are preserved and augmented.
 */
export default function withGlobalSettings(baseHandler) {
  return async function getStaticProps(ctx) {
    let base = { props: {} };
    try {
      if (typeof baseHandler === 'function') {
        base = await baseHandler(ctx) || { props: {} };
      }
    } catch (err) {
      // preserve error behaviour from baseHandler
      console.error('withGlobalSettings: base handler error', err);
      base = { props: {} };
    }

    const baseProps = base.props || {};
    if (baseProps.globalSetting) {
      // already provided by the page
      return { ...base };
    }

    try {
      const globalSetting = await getGlobalSettings();
      return {
        ...base,
        props: { ...baseProps, globalSetting },
        revalidate: base.revalidate ?? 10,
      };
    } catch (err) {
      console.error('withGlobalSettings: failed to fetch globalSetting', err);
      return {
        ...base,
        props: { ...baseProps, globalSetting: null },
        revalidate: base.revalidate ?? 10,
      };
    }
  };
}
