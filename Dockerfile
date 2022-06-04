FROM node:alpine AS node-builder

WORKDIR /backend

COPY . .


ADD RPCs RPCs
RUN npx tsc

FROM heroiclabs/nakama:3.10.0

COPY --from=node-builder /backend/build/*.js /nakama/data/modules/build/
COPY local.yml /nakama/data/
