#!/usr/bin/env node
// Build the site and publish dist/ to the gh-pages branch, which GitHub Pages serves at ethanrjames.com.
//   npm run deploy
import { execSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';

const run = (cmd, opts = {}) => execSync(cmd, { stdio: 'inherit', ...opts });
const out = (cmd) => execSync(cmd, { encoding: 'utf8' }).trim();

const remote = out('git remote get-url origin');
const sha = out('git rev-parse --short HEAD');
const dirty = out('git status --porcelain') !== '';

run('npm run build');
writeFileSync('dist/.nojekyll', ''); // serve _astro/ as-is

const git = (args) => run(`git ${args}`, { cwd: 'dist' });
git('init -q -b gh-pages');
git('add -A');
git(`-c user.name="Ethan R. James" -c user.email="ethanrjames3-afk@users.noreply.github.com" commit -q -m "Deploy ${sha}${dirty ? ' + local changes' : ''}"`);
git(`push -q -f ${remote} gh-pages`);
console.log(`\nDeployed ${sha}${dirty ? ' (with uncommitted changes)' : ''} to gh-pages. Live in a minute or two at https://ethanrjames.com`);
