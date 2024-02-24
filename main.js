import { build } from 'vite';
import node_path from 'node:path';


const watcher = await build({
  /** {@link https://vitejs.dev/config/build-options.html#build-options} */
  build: {
    /** {@link https://vitejs.dev/config/build-options.html#build-lib} */
    lib: {
      /** 
       * {@link https://rollupjs.org/configuration-options/#output-name} 
       * "... Other scripts on the same page can use this variable name to access the exports of your bundle."
      */
      name: 'counter-watcher',
      entry: node_path.join(process.cwd(), './counter.js')
    },
    watch: {
      /** {@link https://rollupjs.org/configuration-options/#watch|watch} */
      skipWrite: true, /* DEV_NOTE # if set to false or omitted, then by default it writes to "./dist/" */
    },
  },
})

/** {@link https://rollupjs.org/javascript-api/#rollup-watch|JavaScripAPI} */
watcher.on("change", ()=>{
  console.log(" === CHANGES DETECTED! === ")
});