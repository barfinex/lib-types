#!/usr/bin/env node

const { execSync } = require("child_process");

function run(cmd) {
    console.log(`➡️ ${cmd}`);
    execSync(cmd, { stdio: "inherit" });
}

// 1. Бамп версии (patch/minor/major)
const bumpType = process.argv[2] || "patch"; // по умолчанию patch
run(`npm version ${bumpType} --no-git-tag-version`);

// 2. Сборка
run("npm run build");

// 3. Публикация
run("npm publish --access public");
console.log("✅ Публикация завершена!");

// npm run publish:lib           # поднимет patch (1.1.21 → 1.1.22)
// npm run publish:lib minor     # поднимет minor (1.1.21 → 1.2.0)
// npm run publish:lib major     # поднимет major (1.1.21 → 2.0.0)

// pnpm -w up @barfinex/types@latest
// npm install @barfinex/types@latest