# use node 16 alpine image
FROM node:16-alpine

# create work directory in app folder
WORKDIR /app

# install required packages for node image
RUN apk --no-cache add openssh g++ make python3 git

# copy over package.json files
COPY package.json /app/

# install all depencies
RUN npm i

# copy over all files to the work directory
ADD . /app

# build the project
RUN npm run build

# ENV NUXT_HOST=0.0.0.0
# ENV NUXT_PORT=3000

# expose the host and port 3000 to the server
ENV HOST 0.0.0.0
EXPOSE 3000

# run the build project with node
ENTRYPOINT ["node", ".output/server/index.mjs"]