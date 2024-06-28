# Typescript-tut-learn
This repository is designed to help you get started with TypeScript from scratch. Whether you're new to programming or coming from JavaScript, you'll find everything you need to understand and use TypeScript effectively.

Features:

Basic TypeScript syntax and concepts
Hands-on examples and exercises
Step-by-step tutorials
Common pitfalls and best practices
Links to additional resources and documentation

===================================================

Using import (ES6 syntax)
This is the most common and modern way to import modules in TypeScript.

1. Named imports:

import { functionName, variableName } from 'module-name';

2. Default import:

import defaultExport from 'module-name';

3. Import everything as an object:

import * as moduleName from 'module-name';

4. Import a module for side effects only:

import 'module-name';

# Examples:
1. Named imports:
import { readFile, writeFile } from 'fs';

