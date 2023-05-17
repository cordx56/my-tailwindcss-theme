const plugin = require("tailwindcss/plugin");

module.exports = [
  plugin(({ addBase }) => {
    addBase({
      body: {
        "@apply bg-zinc-200 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-200":
          {},
      },
      ".centered-container": { "@apply container mx-auto": {} },
      ".card": {
        "@apply p-2 bg-zinc-100/70 dark:bg-zinc-800/70 border border-zinc-500 rounded-lg":
          {},
      },
      ".h1": { "@apply m-2 text-4xl": {} },
      ".h2": { "@apply p-2 text-3xl border-b border-rose-500": {} },
      ".h3": { "@apply text-2xl": {} },
      ".ul": { "@apply pl-6 my-2 list-disc": {} },
      a: { "@apply text-rose-500 hover:text-rose-700": {} },
      p: { "@apply my-2": {} },
    });
  }),
];
