# This file is generated by Nx.
#
# Build the docker image with `npx nx docker-build bicycles-api`.
# Tip: Modify "docker-build" options in project.json to change docker build args.
#
# Run the container with `docker run -p 3000:3000 -t bicycles-api`.
FROM docker.io/node:lts-alpine

ENV HOST=0.0.0.0
ENV PORT=3000

WORKDIR /app

RUN addgroup --system bicycles-api && \
          adduser --system -G bicycles-api bicycles-api

COPY dist/apps/bicycles-api bicycles-api/
RUN chown -R bicycles-api:bicycles-api .

# You can remove this install step if you build with `--bundle` option.
# The bundled output will include external dependencies.
RUN npm --prefix bicycles-api --omit=dev -f install

CMD [ "node", "bicycles-api" ]
