let page;
  afterAll(() => {
    page.close();
  });

describe("Github Team page tests", () => {
  beforeAll(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/team");
  }, 7000);
  
  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');
  }, 0);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team")
  });
  
});

describe("Github Enterprise page tests", () => {
  beforeAll(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/enterprise");
  }, 7000);

  test("The h1 header content'", async () => {
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('Enterprise · A smarter way to work together · GitHub');
  }, 0);

});

describe("Github Startups page tests", () => {
  beforeAll(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/enterprise/startups");
  }, 7000);

  test("The h1 header content'", async () => {
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub for Startups: Build your startup on GitHub · GitHub');
  }, 0);

});

describe("Github CI/CD solution page tests", () => {
  beforeAll(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/solutions/ci-cd/");
  }, 7000);

  test("The h1 header content'", async () => {
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('A Complete CI/CD Solution | GitHub · GitHub');
  }, 0);

});
