docker build . -t handball-news:latest -f apps/handball-news/Dockerfile
docker tag handball-news:latest registry.heroku.com/handball-news/web
docker push registry.heroku.com/handball-news/web
heroku container:release web -a handball-news