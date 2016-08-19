// fis.match('::packager', {
//   spriter: fis.plugin('csssprites')
// });

// fis.match('*', {
//   useHash: false
// });

// fis.match('*.js', {
//   optimizer: fis.plugin('uglify-js')
// });

// fis.match('*.css', {
//   useSprite: true,
//   optimizer: fis.plugin('clean-css')
// });

// fis.match('*.png', {
//   optimizer: fis.plugin('png-compressor')
// });

// 配置配置文件，注意，清空所有上面的配置，只留下以下代码即可。
// fis.match('*.{png,js,css}', {
//   release: '/static/$0'
// });
fis.match('*.html', {
    useMap: true
});

fis.match('*.{js,css}', {
    // 开启 hash
    useHash: true
});