let page;
let delay = 7000;

beforeAll(async () => {
  page = await browser.newPage();
  });

afterAll(() => {
  page.close();
  });

describe("Github Team page tests", () => {
  beforeEach(async () => {
  await page.goto("https://github.com/team");
  });
  
  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');
  }, delay);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  },delay);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team")
  },delay);
  
});

const cases = [
  ["https://github.com/enterprise/startups", 'GitHub for Startups: Build your startup on GitHub · GitHub'], 
  ["https://github.com/enterprise", 'Enterprise · A smarter way to work together · GitHub'], 
  ["https://github.com/solutions/ci-cd/", 'A Complete CI/CD Solution | GitHub · GitHub']
];

test.each(cases)("Enterprise, Startups and CI/CD solution page tests - The h1 header content", async (path, expected) => {
  await page.goto(path);
  await page.waitForSelector('h1');
  const title2 = await page.title();
  expect(title2).toEqual(expected);
}, delay);