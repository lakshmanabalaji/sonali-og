# Lighthouse findings — http://localhost:3000/

Fetch time: 2025-11-18T13:28:09.540Z

## Category scores

- Performance: **34**
- Accessibility: **89**
- Best Practices: **96**
- SEO: **92**

## Top failing audits (score < 0.9)

### Largest Contentful Paint — score: 0 (12.1 s)

Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more about the Largest Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)


### LCP breakdown — score: 0 ()

Each [subpart has specific improvement strategies](https://developer.chrome.com/docs/performance/insights/lcp-breakdown). Ideally, most of the LCP time should be spent on loading the resources, not within delays.

Sample failing items:
- {"type":"table","headings":[{"key":"label","valueType":"text","label":"Subpart"},{"key":"duration","valueType":"ms","label":"Duration"}],"items":[{"subpart":"timeToFirstByte","label":"Time to first by
- {"type":"node","lhId":"page-0-H3","path":"1,HTML,1,BODY,13,DIV,1,DIV,1,DIV,0,DIV,1,H3","selector":"div.content > div.aboutContainer1 > div.aboutLeft > h3","boundingRect":{"top":599,"bottom":800,"left"


### Network dependency tree — score: 0 ()

[Avoid chaining critical requests](https://developer.chrome.com/docs/performance/insights/network-dependency-tree) by reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load.

Sample failing items:
- {"type":"list-section","value":{"type":"network-tree","chains":{"BD4E5B7E433C35D2F177F04BF3132841":{"url":"http://localhost:3000/","navStartToEndTime":201,"transferSize":4988,"isLongest":true,"childre
- {"type":"list-section","title":"Preconnected origins","description":"[preconnect](https://developer.chrome.com/docs/lighthouse/performance/uses-rel-preconnect/) hints help the browser establish a conn
- {"type":"list-section","title":"Preconnect candidates","description":"Add [preconnect](https://developer.chrome.com/docs/lighthouse/performance/uses-rel-preconnect/) hints to your most important origi


### Max Potential First Input Delay — score: 0.01 (730 ms)

The maximum potential First Input Delay that your users could experience is the duration of the longest task. [Learn more about the Maximum Potential First Input Delay metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-max-potential-fid/).


### Time to Interactive — score: 0.03 (18.6 s)

Time to Interactive is the amount of time it takes for the page to become fully interactive. [Learn more about the Time to Interactive metric](https://developer.chrome.com/docs/lighthouse/performance/interactive/).


### Total Blocking Time — score: 0.13 (1,570 ms)

Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds. [Learn more about the Total Blocking Time metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-total-blocking-time/).


### Speed Index — score: 0.18 (8.5 s)

Speed Index shows how quickly the contents of a page are visibly populated. [Learn more about the Speed Index metric](https://developer.chrome.com/docs/lighthouse/performance/speed-index/).


### First Contentful Paint — score: 0.32 (3.6 s)

First Contentful Paint marks the time at which the first text or image is painted. [Learn more about the First Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/first-contentful-paint/).

---

## React Icons Usage (SEO & Bundle)

- `react-icons` was removed previously because it was not used in the codebase, but has now been re-added for demonstration and documentation purposes.
- Example usage is now present in `pages/careers.js`:

```jsx
import { FaRegSmile } from 'react-icons/fa';
...
<FaRegSmile aria-label="smile icon" style={{ marginRight: 8 }} />
```
- This ensures icons are visible in the UI and included in the bundle for SEO and performance analysis.

