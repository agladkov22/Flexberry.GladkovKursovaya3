docker build --no-cache -f SQL\Dockerfile.PostgreSql -t gladkov_kursovaya-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t gladkov_kursovaya-java/app ../../..
