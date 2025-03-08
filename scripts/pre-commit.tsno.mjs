import {createRequire as __$$createRequireN} from 'module';var require=__$$createRequireN(import.meta.url);
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};

// node_modules/.pnpm/tsno@2.0.0/node_modules/tsno/dist/client.js
import { createRequire as __$$createRequire } from "module";
var require2;
var init_client = __esm({
  "node_modules/.pnpm/tsno@2.0.0/node_modules/tsno/dist/client.js"() {
    require2 = __$$createRequire("file://D:\\\u300A\u524D\u7AEFoffer\u6536\u5272\u673A\u517B\u6210\u6307\u5357\u300B\\Learning-Notes-master\\\u65E0\u4EE3\u7801\u5E73\u53F0\\no-code-platform\\node_modules\\.pnpm\\tsno@2.0.0\\node_modules\\tsno\\dist\\client.js");
  }
});

// scripts/utils-commit.ts
function printObject(object, method = "log") {
  for (const [key, value] of Object.entries(object)) {
    console[method](`${key}:
${value}
`);
  }
}
var init_utils_commit = __esm({
  "scripts/utils-commit.ts"() {
    init_client();
  }
});

// scripts/check-commit.ts
var check_commit_exports = {};
import { $ } from "zx";
var init_check_commit = __esm({
  async "scripts/check-commit.ts"() {
    init_client();
    init_utils_commit();
    await $`pnpm spellcheck`.catch((out) => {
      throw new Error(out.stdout);
    });
    await Promise.all([$`pnpm type-check`, $`pnpm lint:stage`]).catch((out) => {
      printObject(out);
      throw new Error(out.stdout);
    });
  }
});

// scripts/pre-commit.ts
init_client();
import { $ as $2 } from "zx";
console.log("\u{1F680} ~ \u5F00\u59CB\u6267\u884C\u4EE3\u7801\u8D28\u91CF\u8BC4\u4F30....\n");
await init_check_commit().then(() => check_commit_exports).catch((out) => {
  throw new Error("\u4EE3\u7801\u8D28\u91CF\u8BC4\u4F30\u5931\u8D25, \u8BF7\u68C0\u67E5\u4EE3\u7801");
});
console.log('printf "\u68C0\u6D4B\u901A\u8FC7, \u521B\u5EFA commit \u4E2D...\n');
await $2`git add .`;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL3Rzbm9AMi4wLjAvbm9kZV9tb2R1bGVzL3Rzbm8vZGlzdC9jbGllbnQuanMiLCAic2NyaXB0cy91dGlscy1jb21taXQudHMiLCAic2NyaXB0cy9jaGVjay1jb21taXQudHMiLCAic2NyaXB0cy9wcmUtY29tbWl0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2NyZWF0ZVJlcXVpcmUgYXMgX18kJGNyZWF0ZVJlcXVpcmV9IGZyb20gJ21vZHVsZSc7dmFyIHJlcXVpcmU9X18kJGNyZWF0ZVJlcXVpcmUoXCJmaWxlOi8vRDpcXFxcXHUzMDBBXHU1MjREXHU3QUVGb2ZmZXJcdTY1MzZcdTUyNzJcdTY3M0FcdTUxN0JcdTYyMTBcdTYzMDdcdTUzNTdcdTMwMEJcXFxcTGVhcm5pbmctTm90ZXMtbWFzdGVyXFxcXFx1NjVFMFx1NEVFM1x1NzgwMVx1NUU3M1x1NTNGMFxcXFxuby1jb2RlLXBsYXRmb3JtXFxcXG5vZGVfbW9kdWxlc1xcXFwucG5wbVxcXFx0c25vQDIuMC4wXFxcXG5vZGVfbW9kdWxlc1xcXFx0c25vXFxcXGRpc3RcXFxcY2xpZW50LmpzXCIpO1xuaW1wb3J0IHtcbiAgY29sb3JzXG59IGZyb20gXCIuL2NodW5rLUZIRFhYT0tZLmpzXCI7XG5cblxuLy8gc3JjL2NsaWVudC50c1xudmFyIGZldGNoID0gKHVybCwgaW5pdCkgPT4gaW1wb3J0KFwiLi9zcmMtNFE3UTY3QzMuanNcIikudGhlbigocmVzKSA9PiByZXMuZGVmYXVsdCh1cmwsIGluaXQpKTtcbnZhciBheGlvcyA9IChjb25maWcpID0+IGltcG9ydChcIi4vYXhpb3MtUElaNEM1VVouanNcIikudGhlbigocmVzKSA9PiByZXMuZGVmYXVsdChjb25maWcpKTtcbmV4cG9ydCB7XG4gIGF4aW9zLFxuICBjb2xvcnMsXG4gIGZldGNoXG59O1xuIiwgImltcG9ydCB7IFByb2Nlc3NPdXRwdXQgfSBmcm9tICd6eC9jb3JlJ1xuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRPYmplY3QoXG4gIG9iamVjdDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCBQcm9jZXNzT3V0cHV0LFxuICBtZXRob2Q6ICdsb2cnIHwgJ3dhcm4nIHwgJ2Vycm9yJyA9ICdsb2cnXG4pIHtcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob2JqZWN0KSkge1xuICAgIGNvbnNvbGVbbWV0aG9kXShgJHtrZXl9OlxcbiR7dmFsdWV9XFxuYClcbiAgfVxufVxuIiwgIiMhL3Vzci9iaW4vZW52IHp4XG5cbmltcG9ydCB0eXBlIHsgUHJvY2Vzc091dHB1dCB9IGZyb20gJ3p4J1xuaW1wb3J0IHsgJCB9IGZyb20gJ3p4J1xuaW1wb3J0IHsgcHJpbnRPYmplY3QgfSBmcm9tICcuL3V0aWxzLWNvbW1pdCdcblxuYXdhaXQgJGBwbnBtIHNwZWxsY2hlY2tgLmNhdGNoKChvdXQ6IFByb2Nlc3NPdXRwdXQpID0+IHtcbiAgLy9jb25zb2xlLmxvZyhvdXQpXG5cbiAgdGhyb3cgbmV3IEVycm9yKG91dC5zdGRvdXQpXG59KVxuXG4vLyBhd2FpdCBQcm9taXNlLmFsbChbJGBwbnBtIHR5cGUtY2hlY2tgLCAkYHBucG0gbGludGBdKS5jYXRjaCgob3V0OiBQcm9jZXNzT3V0cHV0KSA9PiB7XG4vLyAgIHByaW50T2JqZWN0KG91dClcbi8vICAgdGhyb3cgbmV3IEVycm9yKG91dC5zdGRvdXQpXG4vLyB9KVxuXG4vLyBjaGVjayB0eXBlIGFuZCBzdGFnZVxuYXdhaXQgUHJvbWlzZS5hbGwoWyRgcG5wbSB0eXBlLWNoZWNrYCwgJGBwbnBtIGxpbnQ6c3RhZ2VgXSkuY2F0Y2goKG91dDogUHJvY2Vzc091dHB1dCkgPT4ge1xuICBwcmludE9iamVjdChvdXQpXG4gIHRocm93IG5ldyBFcnJvcihvdXQuc3Rkb3V0KVxufSlcbiIsICJpbXBvcnQgeyAkIH0gZnJvbSAnengnXG5jb25zb2xlLmxvZygnXHVEODNEXHVERTgwIH4gXHU1RjAwXHU1OUNCXHU2MjY3XHU4ODRDXHU0RUUzXHU3ODAxXHU4RDI4XHU5MUNGXHU4QkM0XHU0RjMwLi4uLlxcbicpXG5cbmF3YWl0IGltcG9ydCgnLi9jaGVjay1jb21taXQnKS5jYXRjaCgob3V0KSA9PiB7XG4gIHRocm93IG5ldyBFcnJvcignXHU0RUUzXHU3ODAxXHU4RDI4XHU5MUNGXHU4QkM0XHU0RjMwXHU1OTMxXHU4RDI1LCBcdThCRjdcdTY4QzBcdTY3RTVcdTRFRTNcdTc4MDEnKVxufSlcblxuY29uc29sZS5sb2coJ3ByaW50ZiBcIlx1NjhDMFx1NkQ0Qlx1OTAxQVx1OEZDNywgXHU1MjFCXHU1RUZBIGNvbW1pdCBcdTRFMkQuLi5cXG4nKVxuXG5hd2FpdCAkYGdpdCBhZGQgLmBcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7QUFBQSxTQUFRLGlCQUFpQix5QkFBd0I7QUFBakQsSUFBOERBO0FBQTlEO0FBQUE7QUFBMEQsSUFBSUEsV0FBUSxrQkFBa0IsbU9BQW1KO0FBQUE7QUFBQTs7O0FDRXBPLFNBQVMsWUFDZCxRQUNBLFNBQW1DLE9BQ25DO0FBQ0EsYUFBVyxDQUFDLEtBQUssS0FBSyxLQUFLLE9BQU8sUUFBUSxNQUFNLEdBQUc7QUFDakQsWUFBUSxRQUFRLEdBQUc7QUFBQSxFQUFTO0FBQUEsQ0FBUztBQUFBLEVBQ3ZDO0FBQ0Y7QUFUQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQTtBQUdBLFNBQVMsU0FBUztBQUhsQjtBQUFBO0FBQUE7QUFJQTtBQUVBLFVBQU0sbUJBQW1CLE1BQU0sQ0FBQyxRQUF1QjtBQUdyRCxZQUFNLElBQUksTUFBTSxJQUFJLE1BQU07QUFBQSxJQUM1QixDQUFDO0FBUUQsVUFBTSxRQUFRLElBQUksQ0FBQyxvQkFBb0Isa0JBQWtCLENBQUMsRUFBRSxNQUFNLENBQUMsUUFBdUI7QUFDeEYsa0JBQVksR0FBRztBQUNmLFlBQU0sSUFBSSxNQUFNLElBQUksTUFBTTtBQUFBLElBQzVCLENBQUM7QUFBQTtBQUFBOzs7QUNyQkQ7QUFBQSxTQUFTLEtBQUFDLFVBQVM7QUFDbEIsUUFBUSxJQUFJLGdGQUF1QjtBQUVuQyxNQUFNLHFEQUF5QixNQUFNLENBQUMsUUFBUTtBQUM1QyxRQUFNLElBQUksTUFBTSxrRkFBaUI7QUFDbkMsQ0FBQztBQUVELFFBQVEsSUFBSSxtRUFBZ0M7QUFFNUMsTUFBTUE7IiwKICAibmFtZXMiOiBbInJlcXVpcmUiLCAiJCJdCn0K
