const cssNanoPreset = require( 'cssnano-preset-default' );
const cssnano = require( 'cssnano' );
const postcss = require('postcss');
const fs = require( 'fs' );

async function main() {
	const sourceCss = fs.readFileSync('./index.css');

	await postcss([
		cssnano( {
			preset: cssNanoPreset(),
		} )
	]).process(sourceCss, { from: 'index.css', to: 'out_preset-default.css' }).then(result => {
		fs.writeFileSync('out_preset-default.css', result.css);
	});

	await postcss([
		cssnano()
	]).process(sourceCss, { from: 'index.css', to: 'out.css' }).then(result => {
		fs.writeFileSync('out.css', result.css);
	});
}

main();
