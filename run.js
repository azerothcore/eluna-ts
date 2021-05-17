require('dotenv').config()
const path = require("path");
const command = require("commander");
const { execSync } = require("child_process")

const ELUNATS_LUA_ROOT_DIR = process.env.ELUNATS_LUA_ROOT_DIR ? process.env.ELUNATS_LUA_ROOT_DIR : "./dist";
const ELUNATS_BUILD_FILE = process.env.ELUNATS_BUILD_FILE ? process.env.ELUNATS_BUILD_FILE : "eluna-ts.lua"

const program = (new command.Command()).name("node run");

program.command("build").option("-w,--watch", "Run the build process in watch mode", false)
  .action(({ watch }) => {
    const luaBundle = path.resolve(ELUNATS_LUA_ROOT_DIR, ELUNATS_BUILD_FILE);
    execSync(`npx tstl ${watch ? '--watch' : ''} --luaBundle ${luaBundle}`, {
      cwd: __dirname,
      stdio: "inherit",
    })
    console.log(`Bundle file created in ${luaBundle}`)
  })

program.command("build:lib").action(() => {
  let luaBundle = path.resolve(ELUNATS_LUA_ROOT_DIR, "@azerothcore/eluna-ts-lib.lua");

  execSync(`npx tstl -p ./deps/eluna-ts-lib/tsconfig.json --luaBundle ${luaBundle}`, {
    cwd: __dirname,
    stdio: "inherit",
  })
  console.log(`Bundle file created in ${luaBundle}`)
})


try {
  program.parse();
} catch (e) {
  console.error("Failed")
}
