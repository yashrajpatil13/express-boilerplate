#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

if (process.argv.length < 3) {
  console.log('❌ You must provide a name for your app.');
  console.log('Example: npx create-express-boilerplate my-app');
  process.exit(1);
}

const projectName = process.argv[2];
const currentPath = process.cwd();
const projectPath = path.join(currentPath, projectName);
const git_repo = 'https://github.com/yashrajpatil13/express-boilerplate.git';

try {
  fs.mkdirSync(projectPath);
} catch (err) {
  console.error(`❌ Directory "${projectName}" already exists.`);
  process.exit(1);
}

async function main() {
  try {
    console.log('⬇️ Cloning repo...');
    execSync(`git clone --depth 1 ${git_repo} ${projectPath}`);

    process.chdir(projectPath);

    console.log('📦 Installing dependencies...');
    execSync('npm install');

    console.log('🧹 Cleaning up...');
    execSync('npx rimraf ./.git');
    fs.rmdirSync(path.join(projectPath, 'bin'), { recursive: true });

    console.log('✅ Done! Run your project:');
    console.log(`   cd ${projectName}`);
    console.log('   npm run dev');
  } catch (error) {
    console.error(error);
  }
}

main();
