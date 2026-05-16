import { spawnSync } from "node:child_process";

const base = "/sparkling-sjamsde/";
const env = {
  ...process.env,
  GITHUB_PAGES_BASE: base,
  VITE_BASE_PATH: base.replace(/\/$/, ""),
};

const build = spawnSync("pnpm", ["run", "build"], {
  stdio: "inherit",
  env,
  shell: true,
});
if (build.status !== 0) process.exit(build.status ?? 1);

const prepare = spawnSync("node", ["scripts/prepare-github-pages.mjs"], {
  stdio: "inherit",
  env,
  shell: true,
});
process.exit(prepare.status ?? 1);
