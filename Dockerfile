FROM node:14 as builder

ENV NODE_ENV build
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true


WORKDIR /home/node

COPY . /home/node


RUN npm install --legacy-peer-deps \
    && npm run build \
    && npm prune --production

# ---

FROM node:14
ENV NODE_ENV production

WORKDIR /home/node

COPY --from=builder /home/node/package*.json /home/node/
COPY --from=builder /home/node/node_modules/ /home/node/node_modules/
COPY --from=builder /home/node/dist/ /home/node/dist/

CMD ["node", "dist/main"]
