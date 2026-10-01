FROM node:20-alpine
WORKDIR /app
COPY server.js .
ENV NODE_ENV=production PORT=5000
EXPOSE 5000
CMD ["node","server.js"]
