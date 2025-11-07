import * as esbuild from 'esbuild';
import fs from 'fs/promises';
import path from 'path';
// Fix: Import 'process' to resolve type error for 'process.exit'.
import process from 'process';

const outdir = 'dist';

async function build() {
  try {
    console.log(`Cleaning output directory '${outdir}'...`);
    await fs.rm(outdir, { recursive: true, force: true });
    await fs.mkdir(outdir, { recursive: true });

    console.log('Bundling JavaScript and CSS...');
    await esbuild.build({
      entryPoints: ['index.tsx'],
      bundle: true,
      outfile: path.join(outdir, 'index.js'),
      minify: true,
      sourcemap: true,
      target: 'es2020',
      loader: { '.tsx': 'tsx', '.ts': 'ts' },
      define: {
        'process.env.NODE_ENV': '"production"',
      },
    });

    console.log('Processing index.html...');
    let html = await fs.readFile('index.html', 'utf-8');
    
    // Remove importmap for production build
    html = html.replace(/<script type="importmap">[\s\S]*?<\/script>/s, '');
    
    // Update script tag to point to the bundled JS file
    html = html.replace(
      '<script type="module" src="/index.tsx"></script>',
      '<script src="/index.js" defer></script>'
    );
    
    await fs.writeFile(path.join(outdir, 'index.html'), html);

    console.log('Build successful! Your site is ready in the "dist" directory.');

  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

build();
