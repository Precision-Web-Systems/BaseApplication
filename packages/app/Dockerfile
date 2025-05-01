FROM oven/bun:latest AS base

RUN echo 'export PS1="\[\e[1;33m\][Precision Web Systems]\[\e[0;36m\] \w\[\e[0m\] \u \[\e[35m\](${CONTAINER_NAME}: \h)\[\e[0m\]$ "' >> ~/.bashrc

ENV CONTAINER_NAME=app
WORKDIR /code


# DEVELOPMENT
# We don't need to install bun because they're installed in the volume
FROM base AS development

CMD ["bun", "run", "dev"]


# PRODUCTION
FROM base AS production

COPY packages/app/bun.lockb packages/app/package.json ./
RUN bun install

COPY packages/app/ .

CMD ["bun", "start"]