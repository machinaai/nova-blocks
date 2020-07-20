const fs = require('fs-extra');
const path = require('path');
const { parseJSX, parseStyle, parseTitle, parseDesc, parseCol, parseComponentType, parseIsDebug } = require('../src/parse');

describe('test parseJSX', () => {
  test('style tag', async () => {
    const jsxFilePath = path.join(__dirname, 'styleTagjsx.txt');
    const mdFilePath = path.join(__dirname, 'styleTag.md');
    const text = await fs.readFile(mdFilePath, 'utf8');
    const targetJsx = await fs.readFile(jsxFilePath, 'utf8');
    const jsx = parseJSX(text);
    expect(jsx).toBe(targetJsx);
  });

  test('css mark', async () => {
    const jsxFilePath = path.join(__dirname, 'cssMarkjsx.txt');
    const mdFilePath = path.join(__dirname, 'cssMark.md');
    const text = await fs.readFile(mdFilePath, 'utf8');
    const targetJsx = await fs.readFile(jsxFilePath, 'utf8');
    const jsx = parseJSX(text);
    expect(jsx).toBe(targetJsx);
  });
});

describe('test parseStyle', () => {
  test('style tag', async () => {
    const lessFilePath = path.join(__dirname, 'styleTagless.txt');
    const mdFilePath = path.join(__dirname, 'styleTag.md');
    const text = await fs.readFile(mdFilePath, 'utf8');
    const targetless = await fs.readFile(lessFilePath, 'utf8');
    const less = parseStyle(text);
    expect(less).toMatch(/contain|:global|ant-alert/g);
  });

  test('css mark', async () => {
    const lessFilePath = path.join(__dirname, 'cssMarkless.txt');
    const mdFilePath = path.join(__dirname, 'cssMark.md');
    const text = await fs.readFile(mdFilePath, 'utf8');
    const targetless = await fs.readFile(lessFilePath, 'utf8');
    const less = parseStyle(text);
    expect(less).toMatch(/contain|:global|margin-bottom/g);
  });

  test('style button', async () => {
    const lessFilePath = path.join(__dirname, 'styleTagless.txt');
    const mdFilePath = path.join(__dirname, 'styleTag.md');
    const text = await fs.readFile(mdFilePath, 'utf8');
    const targetless = await fs.readFile(lessFilePath, 'utf8');
    const less = parseStyle(text, 'button');
    expect(less).toMatch(/contain|:global|ant-alert/g);
  });

  test('should get alert component style', async () => {
    const mdFilePath = path.join(__dirname, 'alertComponent.md');
    const text = await fs.readFile(mdFilePath, 'utf8');
    const less = parseStyle(text, 'button');
    
    expect(less).toMatch(/contain/g);
    expect(less).toMatch(/:global/g);
    expect(less).toMatch(/.ant-alert/g);
    expect(less).toMatch(/margin-bottom:\s12px;/g)
  });

  test('should get cssStyle for button', () => {
    const style = parseStyle('', 'button');

    expect(style).toMatch(/contain/g);
    expect(style).toMatch(/:global/g);
    expect(style).toMatch(/.ant-btn/g);
    expect(style).toMatch(/margin-right:\s8px;/g)
    expect(style).toMatch(/margin-bottom:\s12px;/g)
    expect(style).toMatch(/ant-btn-group/g)

  })

  test('should get defauld value', () => {
    let style = parseStyle('');
    expect(style).toBeNull();

    style = parseStyle('lksjdflk');
    expect(style).toBeNull();
    try {
      style = parseStyle(null);
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });

  test('should return value null in parseJSX', () => {

    let jsx = parseJSX('test');
    expect(jsx).toEqual('');

    jsx = parseJSX('');
    expect(jsx).toEqual('');
    try {
      jsx = parseJSX(null);
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });

  test('should return value null in parseTitle', () => {
    let jsxTitle = parseTitle('test');
    expect(jsxTitle).toEqual('');
    try {
      jsxTitle = parseTitle(null);
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });

  test('should return value null in parseDesc', () => {
    let jsxDesc = parseDesc('test');
    expect(jsxDesc).toEqual('');
    try {
      jsxDesc = parseDesc(null);
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });

  test('should return value a defined for parseComponentType', () => {
    let jsxType = parseComponentType('test');
    expect(jsxType).toBeDefined();
  });

  test('should return value a defined for parseCol', () => {
    let jsxCol = parseCol('test');
    expect(jsxCol).toBeDefined();
  });

  test('should return value a defined for parseIsDebug', () => {
    let jsxDebug = parseIsDebug('test');
    expect(jsxDebug).toBeDefined();
  });
});

