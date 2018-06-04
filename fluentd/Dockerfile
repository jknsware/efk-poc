# fluentd/Dockerfile
FROM fluent/fluentd:v1.2.1-debian

COPY ./conf/fluent.conf /fluentd/etc/. 

RUN ["gem", "install", "fluent-plugin-elasticsearch", "--no-rdoc", "--no-ri", "--version", "2.10.1"]
