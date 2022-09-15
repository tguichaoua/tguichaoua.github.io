async function init() {
  // Loads page data.
  const pageIndex = await fetch('pages/index.json').then((res) => res.json());
  const pageData = new Map(pageIndex.pages.map((page) => [page.file, page]));

  // Gets html elements.
  const nav = document.getElementById('pages-nav');
  const pageDiv = document.getElementById('pages-content');

  // Keep track of links and the active link.
  const links = new Map();
  let currentLink = null;

  function getPageName() {
    let page = location.hash;
    if (!page) return pageIndex.defaultPage;
    page = page.substring(1); // remove the leading '#'
    return pageData.has(page) ? page : pageIndex.defaultPage;
  }

  // Create links in the nav
  {
    const lang = getLanguage();
    for (page of pageData.values()) {
      const a = document.createElement('a');
      a.href = `#${page.file}`;
      a.innerHTML = page[lang];

      nav.appendChild(a);
      links.set(page.file, a);
    }
  }

  async function setPageContent() {
    const page = getPageName();
    const content = await fetch(`pages/${getLanguage()}/${page}.html`).then((res) => res.text());
    pageDiv.innerHTML = content;

    currentLink?.classList.remove('active');
    currentLink = links.get(page);
    currentLink.classList.add('active');

    window.dispatchEvent(new Event('page-rendered'));
  }

  async function languageChange() {
    const lang = getLanguage();
    for ([pageName, link] of links.entries()) {
      const page = pageData.get(pageName);
      link.innerHTML = page[lang];
    }

    await setPageContent();
  }

  // Update the page content it the location hash change.
  window.addEventListener('hashchange', setPageContent, false);

  // Update the page content it the language change.
  window.addEventListener('x-langchange', languageChange, false);

  // Set the page content the first time the page is loaded.
  window.setTimeout(setPageContent);
}

window.addEventListener('load', init);
