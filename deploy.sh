set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/carolxuan/WasaTeam-test.git master:gh-pages

cd -
