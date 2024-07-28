import gulp from 'gulp';
import run from 'gulp-run';

const GULP_PROCESS = {
    buildReactApp: 'Build React app',
    installNode: 'Install NodeJS dependencies'
};

gulp.task(GULP_PROCESS.buildReactApp, (done) => {
    run('npm run build').exec([], () => {
        done();
    });
});

gulp.task(GULP_PROCESS.installNode, (done) => {
    process.chdir('./src/api');
    run('npm install').exec([], () => {
        done();
    });
});

export default gulp.series(GULP_PROCESS.buildReactApp, GULP_PROCESS.installNode);
