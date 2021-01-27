import getFolderTreeData from './helpers/getFolderTreeData.helper.js';


import { writeFileSync } from 'fs';
import path from 'path';

import { join } from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);


writeFileSync(
  join(__dirname, '../../', 'umi-block.json'),
  JSON.stringify({ list: getFolderTreeData(join(__dirname, '../../')) }, null, 2),
);